import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { MdOutlineChat } from "react-icons/md";
import { websiteData } from "./WebsiteData";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! How can I help you today?",
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

  const formatContactInfo = (type: string) => {
    if (type === "phone") {
      return `Call us: ${websiteData.company.contact.phones[0]}`;
    } else if (type === "email") {
      return `Email us: ${websiteData.company.contact.emails[0]}`;
    } else {
      return `Contact us:\nCall: ${websiteData.company.contact.phones[0]}\nEmail: ${websiteData.company.contact.emails[0]}`;
    }
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
      const prompt = `
You are the chatbot for ${websiteData.company.name}'s website.

RESPONSE RULES:
1. If user says "hi" or similar greeting, respond ONLY with "How can I help you today?"
2. For contact information:
   - If they ask for phone: Only provide the primary phone
   - If they ask for email: Only provide the primary email
   - If they ask for all contact: Provide primary phone and email in separate lines
3. Keep all responses under 2 sentences
4. Use line breaks to make information more readable

Company Info:
${JSON.stringify({
  description: websiteData.company.description,
  services: websiteData.services.map((s) => s.name),
  contact: websiteData.company.contact,
})}

User input: ${userInput}`;

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
        }),
      });

      const data = await response.json();
      let responseContent = data.candidates[0].content.parts[0].text;

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
        content: "Please contact us:\nCall: +91 93508 51909\nEmail: totemmangement@gmail.com",
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
            className="group w-16 h-16 bg-gradient-to-r from-violet-600 to-violet-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <MdOutlineChat className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
          </button>
          {showOnlineStatus && (
            <div className="absolute bottom-full right-0 mb-3 bg-white text-black py-2.5 px-4 rounded-2xl shadow-lg min-w-[180px] transform-gpu animate-fadeIn mr-2">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse mr-1" />
                <p className="text-sm font-medium text-gray-800">We're here to help!</p>
              </div>
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div className="w-full sm:w-[420px] fixed sm:relative bottom-0 right-0 sm:bottom-auto sm:right-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform-gpu animate-slideUp">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-600 to-violet-800 text-white">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <h2 className="font-semibold text-sm tracking-wide">Anovas Assistant</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-[65vh] sm:h-[450px] overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-violet-600" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-violet-600 to-violet-800 text-white"
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
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-violet-600" />
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-300"></div>
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
                className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 bg-gray-50 placeholder-gray-400 text-gray-800"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-3 bg-gradient-to-r from-violet-600 to-violet-800 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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

export default Chatbot;