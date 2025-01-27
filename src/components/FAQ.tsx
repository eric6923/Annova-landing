import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
    {
      question: "What services do you provide?",
      answer: "We offer a comprehensive suite of digital solutions including web development, mobile app development, UI/UX design, and cloud consulting services tailored to meet your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A typical website project takes 4-8 weeks, while more complex applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance services to ensure your digital solution continues to perform optimally. Our support packages can be customized based on your requirements."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and timeline of your requirements. We provide detailed quotes after understanding your specific needs during the consultation phase."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We have extensive experience in taking over and improving existing projects. Our team can analyze your current solution and propose improvements or necessary modifications."
    }
  ];
function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="mb-4 last:mb-0 bg-zinc-900/50">
        
      <button
        className="w-full py-6 px-4 sm:px-6 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-lg pr-8">{question}</span>
        {isOpen ? (
          <Minus className="w-6 h-6 text-white flex-shrink-0" />
        ) : (
          <Plus className="w-6 h-6 text-white flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-4 sm:px-6 pb-6 text-zinc-400 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
      <div className="relative z-10 mx-auto max-w-7xl [--duration:800ms] pb-16 ">
          <div className="flex justify-center mt-2 sm:mt-6">
            <div className="
              relative rounded-full border-2 border-violet-500 px-8 py-2 text-base font-medium
              bg-black/20 backdrop-blur-sm
              before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl
              animate-glow-slow
            ">
              FAQ
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;