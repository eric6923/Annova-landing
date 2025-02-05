import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from "@vapi-ai/web";
import profile from './profile.jpg';
import Home from '../components/assets/home.png'
import Privacy from '../components/assets/privacy2.png'
import WhatsAppButton from '../components/assets/whatsapp.png';
import voice from '../components/assets/voice3.png'

// Vapi configuration
const VAPI_KEY = "02e3b5c0-816c-4628-a328-d73933a9bc60";
const vapi = new Vapi(VAPI_KEY);

const assistantOptions = {
  name: "FRIDAY",
  firstMessage: "Hello and welcome to Anovas, I'm your virtual assistant, So How can I assist you today?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "groq",
    model: "mixtral-8x7b-32768",
    messages: [
      {
        role: "system",
        content: `You are an advanced AI voice assistant integrated
         into the Anovas platform. Your role is to provide clear, concise, and 
         helpful responses to user queries. Maintain a professional yet friendly tone, 
         ensuring users feel guided and supported. Adapt your responses based on context and user needs,
          offering relevant solutions, technical assistance, or conversational engagement. 
        Always prioritize accuracy, efficiency, and user satisfaction.`
      }
    ]
  }
};

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMainHeader, setShowMainHeader] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Voice agent states
  const [connecting, setConnecting] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowMainHeader(currentScrollY <= 0 || currentScrollY < lastScrollY);
      setShowBottomNav(currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    // Vapi event listeners
    const handleCallStart = () => {
      console.log("Call started");  // Added for debugging
      setConnecting(false);
      setConnected(true);
      setError("");
    };

    const handleCallEnd = () => {
      console.log("Call ended");  // Added for debugging
      setConnecting(false);
      setConnected(false);
      setError("");
    };

    const handleError = (errorObj: any) => {
      console.error("Vapi Error:", errorObj);
      setConnecting(false);
      setConnected(false);  // Ensure connected state is reset on error
      setError(errorObj.error?.message || "An error occurred");
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add Vapi event listeners
    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("error", handleError);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Remove Vapi event listeners
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("error", handleError);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Voice agent start/stop functions
  const startVoiceAgent = async () => {
    try {
      console.log("Attempting to start voice agent");  // Added for debugging
      setConnecting(true);
      await vapi.start(assistantOptions);
    } catch (err) {
      console.error("Failed to start voice agent:", err);
      setError("Failed to start voice agent");
      setConnecting(false);
      setConnected(false);
    }
  };

  const stopVoiceAgent = async () => {
    try {
      console.log("Attempting to stop voice agent");  // Added for debugging
      await vapi.stop();
      // Explicitly reset states
      setConnecting(false);
      setConnected(false);
      setError("");
    } catch (err) {
      console.error("Failed to stop voice agent:", err);
      setError("Failed to stop voice agent");
      setConnected(false);
      setConnecting(false);
    }
  };

  // Voice agent toggle function
  const toggleVoiceAgent = () => {
    if (connected) {
      stopVoiceAgent();
    } else {
      startVoiceAgent();
    }
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showMainHeader ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed w-full top-0 z-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="my-4 rounded-2xl backdrop-blur-xl bg-gray-800/60 shadow-lg">
            <nav className="px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Logo and Company Name */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 flex items-center space-x-3"
                >
                  <img
                    src={profile}
                    alt="Logo"
                    className="h-9 w-auto rounded-full"
                  />
                  <span className="text-white font-bold text-xl tracking-tight bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent">
                    Anovas
                  </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden font-bold md:flex items-center space-x-8">
                  <NavLink onClick={() => scrollToSection('services')}>
                    Home
                  </NavLink>
                  <NavLink onClick={() => scrollToSection('portfolio')}>
                    Services
                  </NavLink>
                  <NavLink onClick={() => scrollToSection('faq')}>
                    Testimonials
                  </NavLink>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className="bg-violet-600/90 hover:bg-violet-500 text-white px-6 py-2 
                      rounded-full text-sm font-medium transition-colors duration-300
                      shadow-lg hover:shadow-violet-500/25"
                  >
                    Contact Us
                  </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-1.5 rounded-lg text-gray-300 hover:text-violet-400 
                    hover:bg-gray-700/50 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.button>
              </div>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden mt-3"
                  >
                    <div className="space-y-1 pt-2 pb-3 border-t border-gray-700/50">
                      <MobileNavLink onClick={() => scrollToSection('services')}>
                        Services
                      </MobileNavLink>
                      <MobileNavLink onClick={() => scrollToSection('portfolio')}>
                        Portfolio
                      </MobileNavLink>
                      <MobileNavLink onClick={() => scrollToSection('faq')}>
                        FAQs
                      </MobileNavLink>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('contact')}
                        className="w-full text-left px-3 py-2 text-sm font-medium text-white 
                          bg-violet-600/90 hover:bg-violet-500 rounded-lg transition-colors duration-300"
                      >
                        Contact Us
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </motion.div>
        </div>
      </motion.header>

      {/* Bottom Navigation Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showBottomNav ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed w-full bottom-0 z-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="my-4 rounded-2xl backdrop-blur-xl bg-gray-800/60 shadow-lg">
            <div className="flex items-center justify-around px-4 py-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('home')}
                className="flex flex-col items-center text-gray-200 hover:text-violet-400 transition-colors duration-300"
              >
                <img
                  src={Home}
                  alt="Home"
                  className="w-10 h-10 object-cover"
                />
                {/* <span className="text-xs mt-1">Home</span> */}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/7992193730', '_blank')}
                className="flex flex-col items-center text-gray-200 hover:text-violet-400 transition-colors duration-300"
              >
                <img
                  src={WhatsAppButton}
                  alt="Chat"
                  className="w-10 h-10 object-cover"
                />
                
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('privacy')}
                className="flex flex-col items-center text-gray-200 hover:text-violet-400 transition-colors duration-300"
              >
                <img
                  src={Privacy}
                  alt="Privacy"
                  className="w-10 h-10 object-cover"
                />
                {/* <span className="text-xs mt-1">Privacy</span> */}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleVoiceAgent}
                className={`flex flex-col items-center text-gray-200 
                  ${connected ? 'text-red-400' : 'hover:text-violet-400'} 
                  transition-colors duration-300`}
              >
                <img
                  src={voice}
                  alt="Voice"
                  className={`w-10 h-10 object-cover 
                    ${connecting ? 'animate-pulse' : ''}`}
                />
                {connected && (
                  <span className="text-xs text-red-400 mt-1">Active</span>
                )}
                {connecting && (
                  <span className="text-xs text-yellow-400 mt-1">Connecting</span>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

    </>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ children, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="text-gray-200 hover:text-violet-400 text-sm font-medium transition-colors duration-300
      relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 
      after:h-0.5 after:bg-violet-400 after:transition-all after:duration-300 
      hover:after:w-full"
  >
    {children}
  </motion.button>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ children, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-200 
      hover:text-violet-400 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
  >
    {children}
  </motion.button>
);

export default Header;