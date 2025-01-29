import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import whatsapp from '../components/assets/whatsapp.png';

const WhatsAppButton = () => {
  const [showChat, setShowChat] = useState(true);
  const [isWaving, setIsWaving] = useState(false);
  
  useEffect(() => {
    // Create an interval to trigger the wave animation every 3 seconds
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000); // Reset after animation completes
    }, 3000);

    return () => clearInterval(waveInterval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/7992193730?text=Hey,%20is%20anyone%20available%20for%20a%20chat?%20I%20need%20to%20know%20about%20your%20services", "_blank");
  };

  return (
    <div className="fixed bottom-3 left-0 z-50">
      {showChat && (
        <div className="relative inline-flex items-center ml-4">
          <button
            onClick={() => setShowChat(false)}
            className="bg-black rounded-full p-1 text-white hover:bg-gray-200 transition-colors mr-4"
            aria-label="Close chat prompt"
          >
            <X size={16} />
          </button>
          <a
            className="bg-white text-black md:px-4 md:py-2 px-3 py-1 rounded-2xl border-black border-1 shadow-[3px_3px_0_#22c55e]"
            href="https://wa.me/918278416000?text=Hey,%20is%20anyone%20available%20for%20a%20chat?%20I%20need%20to%20know%20about%20your%20services."
          >
            Chat with us
          </a>
        </div>
      )}
      <div className='text-left ml-4 relative'>
        <button
          onClick={handleWhatsAppClick}
          className="transition-all duration-300 mt-3 hover:scale-110 relative"
          aria-label="Contact us on WhatsApp"
        >
          <img src={whatsapp} alt="WhatsApp Icon" className="w-12 h-12 relative z-10" />
          {/* Wave circles */}
          <div className={`absolute inset-0 z-0 ${isWaving ? 'animate-wave' : ''}`}>
            <div className="absolute inset-0 rounded-full border-4 border-green-500 opacity-0"></div>
            <div className="absolute inset-0 rounded-full border-4 border-green-500 opacity-0 animation-delay-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-green-500 opacity-0 animation-delay-400"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;