import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

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

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: FAQItem & { 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className="mb-4 last:mb-0 bg-zinc-900/40 rounded-lg backdrop-blur-sm">
      <button
        className="w-full py-5 px-6 flex items-center justify-between text-left transition-colors hover:bg-zinc-800/30 rounded-lg"
        onClick={onClick}
      >
        <span className="text-white text-lg font-medium tracking-wide">{question}</span>
        {isOpen ? (
          <X className="w-5 h-5 text-white/80 transition-transform duration-300 rotate-0" />
        ) : (
          <Plus className="w-5 h-5 text-white/80 transition-transform duration-300 rotate-90" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 scale-y-100 transform-origin-top' 
            : 'max-h-0 opacity-0 scale-y-95 transform-origin-top'
        }`}
      >
        <p className="px-6 pb-5 text-white/70 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="relative z-10 mx-auto max-w-7xl [--duration:800ms] pb-20">
          <div className="flex justify-center mt-2 sm:mt-6">
            <div className="inline-block rounded-lg bg-black/80 px-4 py-2 backdrop-blur-sm border border-violet-800">
              <h2 className="text-violet-400 font-medium text-lg tracking-wide drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
                FAQ
              </h2>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;