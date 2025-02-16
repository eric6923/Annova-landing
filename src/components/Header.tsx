import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from "@vapi-ai/web";
import profile from './profile.jpg';
import Home from '../components/assets/home.png'
import Privacy from '../components/assets/privacy2.png'
import {Link} from 'react-router-dom'
import WhatsAppButton from '../components/assets/whatsapp.png';
import voice from '../components/assets/voice3.png'

const VAPI_KEY = "1a2c7e22-b0de-4341-865a-a436bfadb740";
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
        Always prioritize accuracy, efficiency, and user satisfaction.
        
        Services - Software Development, App Development, AI Solutions, Branding, Social Media Marketing, Ads Creation, `
      }
    ]
  }
};

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMainHeader, setShowMainHeader] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [connecting, setConnecting] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowMainHeader(currentScrollY <= 0 || currentScrollY < lastScrollY);
      setShowBottomNav(currentScrollY > 100);
      setLastScrollY(currentScrollY);

      const sections = ['services', 'portfolio', 'faq', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection || '');
    };

    const handleCallStart = () => {
      setConnecting(false);
      setConnected(true);
      setError("");
    };

    const handleCallEnd = () => {
      setConnecting(false);
      setConnected(false);
      setError("");
    };

    const handleError = (errorObj: any) => {
      setConnecting(false);
      setConnected(false);
      setError(errorObj.error?.message || "An error occurred");
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("error", handleError);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const startVoiceAgent = async () => {
    try {
      setConnecting(true);
      await vapi.start(assistantOptions);
    } catch (err) {
      setError("Failed to start voice agent");
      setConnecting(false);
      setConnected(false);
    }
  };

  const stopVoiceAgent = async () => {
    try {
      await vapi.stop();
      setConnecting(false);
      setConnected(false);
      setIsVoiceOpen(false);
      setError("");
    } catch (err) {
      setError("Failed to stop voice agent");
      setConnected(false);
      setConnecting(false);
    }
  };

  const toggleVoiceAgent = () => {
    setIsVoiceOpen(!isVoiceOpen);
  };

  return (
    <>
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

                <div className="hidden font-bold md:flex items-center space-x-8">
                  <NavLink onClick={() => scrollToSection('services')} isActive={activeSection === 'services'}>
                    Home
                  </NavLink>
                  <NavLink onClick={() => scrollToSection('portfolio')} isActive={activeSection === 'portfolio'}>
                    Services
                  </NavLink>
                  <NavLink onClick={() => scrollToSection('faq')} isActive={activeSection === 'faq'}>
                    Testimonials
                  </NavLink>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className={`bg-violet-600/90 hover:bg-violet-500 text-white px-6 py-2 
                      rounded-full text-sm font-medium transition-colors duration-300
                      shadow-lg hover:shadow-violet-500/25 
                      ${activeSection === 'contact' ? 'ring-2 ring-violet-400 ring-offset-2 ring-offset-gray-800' : ''}`}
                  >
                    Contact Us
                  </motion.button>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-1.5 rounded-lg text-gray-300 hover:text-violet-400 
                    hover:bg-gray-700/50 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.button>
              </div>

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
                      <MobileNavLink onClick={() => scrollToSection('services')} isActive={activeSection === 'services'}>
                        Services
                      </MobileNavLink>
                      <MobileNavLink onClick={() => scrollToSection('portfolio')} isActive={activeSection === 'portfolio'}>
                        Portfolio
                      </MobileNavLink>
                      <MobileNavLink onClick={() => scrollToSection('faq')} isActive={activeSection === 'faq'}>
                        FAQs
                      </MobileNavLink>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('contact')}
                        className={`w-full text-left px-3 py-2 text-sm font-medium text-white 
                          bg-violet-600/90 hover:bg-violet-500 rounded-lg transition-colors duration-300
                          ${activeSection === 'contact' ? 'ring-2 ring-violet-400' : ''}`}
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

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showBottomNav ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed w-full bottom-0 z-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="my-4 rounded-2xl backdrop-blur-xl bg-gray-800/60 shadow-lg">
            <div className="flex items-center justify-around px-4 py-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/';
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex flex-col items-center text-gray-200 hover:text-violet-400 transition-colors duration-300"
              >
                <img src={Home} alt="Home" className="w-10 h-10 object-cover" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/7992193730', '_blank')}
                className="flex flex-col items-center text-gray-200 hover:text-violet-400 transition-colors duration-300"
              >
                <img src={WhatsAppButton} alt="Chat" className="w-10 h-10 object-cover" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center text-gray-200 hover:text-violet-400 transition-colors duration-300"
              >
                <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
                  <img src={Privacy} alt="Privacy" className="w-10 h-10 object-cover" />
                </Link>
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
                  className={`w-10 h-10 object-cover `}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
      {isVoiceOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="absolute bottom-24 right-6 md:right-60 pointer-events-auto"
            style={{ width: '140px' }}
          >
            <div className="bg-white rounded-3xl shadow-lg pt-12 pb-4 px-5 relative flex flex-col items-center">
              {/* Info Icon with Tooltip */}
              <div className="absolute left-4 top-4">
  <div 
    className="relative"
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
  >
    <Info className="w-4 h-4 text-gray-700 hover:text-gray-800 cursor-help" />
    
    {/* Tooltip */}
    <AnimatePresence>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute left-0 bottom-full mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg z-50"
        >
          This is Anovas personal voice assistant. It helps you navigate and control the application using voice commands.
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>

              {/* Close Icon */}
              <button 
  className="absolute right-4 top-4"
  onClick={() => {
    if (connected) {
      stopVoiceAgent();
    }
    setIsVoiceOpen(false);
  }}
>
  <X className="w-4 h-4 text-gray-700 hover:text-gray-800" />
</button>

              <div className="flex space-x-2.5 justify-center mb-5 ">
                {connecting ? (
                  <>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0,
                      }}
                      className="w-3 h-3 bg-[#8AE68A] rounded-full" 
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                      className="w-3 h-3 bg-[#8AE68A] rounded-full" 
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                      className="w-3 h-3 bg-[#8AE68A] rounded-full"
                    />
                  </>
                ) : (
                  <div className="flex space-x-2.5">
                    <div className="w-3 h-3 bg-[#8AE68A] rounded-full" />
                    <div className="w-3 h-3 bg-[#8AE68A] rounded-full" />
                    <div className="w-3 h-3 bg-[#8AE68A] rounded-full" />
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={connected ? stopVoiceAgent : startVoiceAgent}
                className="w-28 py-2 px-4 bg-gray-800 text-white rounded-xl font-medium 
                  hover:bg-gray-700 transition-colors text-center text-sm shadow-sm"
              >
                {connected ? 'Stop' : 'Start'}
              </motion.button>

              {error && (
                <p className="text-red-500 text-xs text-center mt-2">{error}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
};

const NavLink: React.FC<NavLinkProps> = ({ children, onClick, isActive }) => (
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={onClick}
  className={`text-gray-200 hover:text-violet-400 text-sm font-medium transition-colors duration-300
    relative after:content-[''] after:absolute after:-bottom-1 after:left-0 
    after:h-0.5 after:bg-violet-400 after:transition-all after:duration-300 
    ${isActive ? 'text-violet-400 after:w-full' : 'after:w-0 hover:after:w-full'}`}
>
  {children}
</motion.button>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ children, onClick, isActive }) => (
<motion.button
  whileTap={{ scale: 0.95 }}
  onClick={onClick}
  className={`block w-full text-left px-3 py-2 text-sm font-medium 
    hover:text-violet-400 hover:bg-gray-700/50 rounded-lg transition-colors duration-300
    ${isActive ? 'text-violet-400 bg-gray-700/30' : 'text-gray-200'}`}
>
  {children}
</motion.button>
);

export default Header;