import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import WorkedWith from './components/WorkedWith';
import Portfolio from './components/Portfolio';
import OurProcess from './components/OurProcess';
import {OrbitingCirclesDemo} from './components/TechStack'
import Testimonials from './components/Testimonials';
import Team from './components/Team'
// import OurProcess from './components/OurProcess';
// import Testimonials from './components/Testimonials';
// import TeamSection from './components/TeamSection';
// import Technologies from './components/Technologies';
// import CTASection from './components/CTA';
import FAQSection from './components/FAQ';
import Footer from './components/Footer';
// import CrossMarquee from './components/CrossMarquee';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black min-h-screen text-white"
        >
          <Header />
          <main className="space-y-16 md:space-y-24">
            <HeroSection />
            {/* <CrossMarquee/> */}
            <ServicesSection />
            <WhyChooseUs />
            <WorkedWith />
            <Portfolio />
            <OurProcess />
            <Testimonials />
            <Team />
            <OrbitingCirclesDemo/>        
            <FAQSection />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </Router>
  );
}

export default App;