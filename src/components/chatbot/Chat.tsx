import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Bot } from "lucide-react";
import { websiteData } from "./WebsiteData";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ServiceInfo {
  name: string;
  description: string;
  subServices: string[];
}

export const Chatbot = () => {
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I'm the Anovas AI Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowOnlineStatus(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const GEMINI_API_KEY = "AIzaSyCRd4RjJB7AuwMKGtj5eaaqIyoAWpU-q8c";
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

  const findRelevantService = (query: string): ServiceInfo | null => {
    const queryLower = query.toLowerCase();
    return websiteData.services.find(service => 
      queryLower.includes(service.name.toLowerCase()) ||
      service.subServices.some(sub => queryLower.includes(sub.toLowerCase()))
    ) || null;
  };

  const formatContactInfo = (type: string) => {
    if (type === "phone") {
      return `Call us: ${websiteData.company.contact.phones[0]}`;
    } else if (type === "email") {
      return `Email us: ${websiteData.company.contact.emails[0]}`;
    } else {
      return `Contact us:\nCall: ${websiteData.company.contact.phones[0]}\nEmail: ${websiteData.company.contact.emails[0]}`;
    }
  };

  const createContextualPrompt = (userInput: string) => {
    const relevantService = findRelevantService(userInput);
    const inputLower = userInput.toLowerCase();
    
    let contextualInfo = {
      companyInfo: websiteData.company.description,
      relevantService: relevantService ? JSON.stringify(relevantService) : null,
      values: inputLower.includes('value') ? JSON.stringify(websiteData.values) : null,
      features: inputLower.includes('feature') ? JSON.stringify(websiteData.unique_features) : null,
      team: inputLower.includes('team') || inputLower.includes('founder') || inputLower.includes('ceo') ? 
        JSON.stringify(websiteData.team) : null
    };

    return `
You are the AI assistant for ${websiteData.company.name}, a software solutions agency established in ${websiteData.company.established}.

RESPONSE RULES:
1. Greetings: For "hi", "hello", etc., respond ONLY with "Hi! How can I help you today?"
2. Contact Information:
   - Phone request: Return ONLY the phone number with "Call us: " prefix
   - Email request: Return ONLY the email with "Email us: " prefix
   - Full contact request: Return both phone and email on separate lines
3. Response Format:
   - Maximum 2-3 sentences
   - Use line breaks for readability
   - Be professional but friendly
4. Service Inquiries:
   - Provide specific service details when asked
   - Include relevant sub-services
5. Team Information:
   - For team inquiries, mention the team member's name and role
   - For founder/CEO inquiries, mention "${websiteData.team[0].name}, ${websiteData.team[0].role}"
6. Pricing/Quotes:
   - Direct to contact team for custom quotes
   - Never provide specific pricing

Context:
${JSON.stringify(contextualInfo)}

Current conversation context:
${messages.slice(-3).map(m => `${m.role}: ${m.content}`).join('\n')}

User input: ${userInput}`;
  };

  const sendMessage = async (userInput: string) => {
    if (!userInput.trim()) return;

    const newUserMessage: ChatMessage = {
      role: "user",
      content: userInput,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const prompt = createContextualPrompt(userInput);

      const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 200,
          },
        }),
      });

      const data = await response.json();
      let responseContent = data.candidates[0].content.parts[0].text;

      // Handle contact information formatting
      if (responseContent.includes("contact") && responseContent.includes("phone")) {
        responseContent = formatContactInfo("all");
      } else if (responseContent.includes("phone")) {
        responseContent = formatContactInfo("phone");
      } else if (responseContent.includes("email")) {
        responseContent = formatContactInfo("email");
      }

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: responseContent,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: ChatMessage = {
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting right now. Please contact us directly:\nCall: +91 79921 93730\nEmail: weanovas@gmail.com",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      {!isOpen && (
        <div className="relative">
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 rounded-full shadow-lg hover:shadow-violet-500/30 transform hover:scale-105 transition-all duration-300 ease-out"
            aria-label="Open chat"
          >
            <Bot className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="w-full sm:w-[400px] fixed sm:relative bottom-0 right-0 sm:bottom-auto sm:right-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform-gpu animate-slideUp">
          <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">Anovas Assistant</h2>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-white/10 transition-colors duration-200"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-violet-500/10"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100"
                  }`}
                >
                  {message.content.split("\n").map((line, i) => (
                    <div key={i} className="text-sm leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 placeholder-gray-400 text-gray-800"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-3 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 disabled:hover:shadow-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};