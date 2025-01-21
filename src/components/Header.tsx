import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from './profile.jpg'
interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className={`my-4 rounded-2xl backdrop-blur-xl ${
            isScrolled 
              ? 'bg-gray-800/60 shadow-lg' 
              : 'bg-gray-800/40'
          } transition-all duration-300`}
        >
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
                  Annova
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden font-bold md:flex items-center space-x-8">
                <NavLink onClick={() => scrollToSection('services')}>
                  Services
                </NavLink>
                <NavLink onClick={() => scrollToSection('portfolio')}>
                  Portfolio
                </NavLink>
                <NavLink onClick={() => scrollToSection('faq')}>
                  FAQs
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