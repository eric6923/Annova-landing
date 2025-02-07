import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import WorkedWith from './components/WorkedWith';
import Portfolio from './components/Portfolio';
import OurProcess from './components/OurProcess';
import {OrbitingCirclesDemo} from './components/TechStack';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQSection from './components/FAQ';
import Footer from './components/Footer';
import CrossMarquee from './components/CrossMarquee';
import ProjectMarquee from './components/ProjectMarquee';
import Privacy from './components/Privacy';
import PopupForm from './components/Popup';
import Loader from './components/Loader';
import Login from './components/Admin/Login';
import DataShowcase from './components/Admin/DataShowcase';

const Home = () => {
  return (
    <>
      <main className="space-y-16 md:space-y-24">
        <HeroSection />
        <ProjectMarquee/>
        <ServicesSection />
        <WhyChooseUs />
        <WorkedWith />
        <Portfolio />
        <OurProcess />
        <Testimonials />
        <ProjectMarquee/>
        <Team />
        <OrbitingCirclesDemo/> 
        <CrossMarquee/>       
        <FAQSection />
      </main>
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" />
          ) : (
            <>
              <Routes>
                <Route
                  path="/*"
                  element={
                    <>
                      <Header />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/privacy" element={<Privacy />} />
                          
                        </Routes>
                      </motion.div>
                      <PopupForm />
                      <Footer />
                    </>
                  }
                />
                <Route path="/admin" element={<Login />} />
                <Route path="/data" element={<DataShowcase />} />
              </Routes>
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
