import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profile from './profile.jpg'

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
      const offset = 80; // Height of the fixed header
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/annova-logo.png" alt="Annova" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-violet-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-violet-400 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-violet-400 transition-colors">FAQs</button>
            <button onClick={() => scrollToSection('contact')} className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-violet-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-violet-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('faq')} className="text-white hover:text-violet-400 transition-colors">FAQs</button>
              <button onClick={() => scrollToSection('contact')} className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full text-center transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;