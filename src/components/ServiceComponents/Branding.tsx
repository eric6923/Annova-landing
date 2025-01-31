import React, { useEffect } from 'react';
import { Palette, Brush, Target, Sparkles, ArrowRight } from 'lucide-react';

const Branding = () => {
    useEffect(() => {
            // Scroll to top on component mount
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }, []); 
  const services = [
    {
      icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Brand Identity Design",
      description: "Creating distinctive visual identities that capture your brand's essence and leave a lasting impression."
    },
    {
      icon: <Brush className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Visual Design",
      description: "Crafting cohesive visual elements that communicate your brand's story across all touchpoints."
    },
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Brand Strategy",
      description: "Developing comprehensive brand strategies that position your business for success in the market."
    },
    {
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Brand Experience",
      description: "Creating memorable brand experiences that resonate with your audience and build lasting connections."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your vision, values, and goals to create an authentic brand identity."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Developing a comprehensive brand strategy that sets you apart from competitors."
    },
    {
      number: "03",
      title: "Design",
      description: "Creating visual elements that bring your brand to life with purpose and impact."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Rolling out your brand identity across all platforms and touchpoints."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-black z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Brand
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent"> Excellence</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              We create powerful brand identities that captivate audiences and drive business growth.
            </p>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2 group">
              Start Your Brand Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ArrowRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative min-h-screen flex items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
            alt="Brand Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            Crafting Memorable
            <span className="text-violet-400"> Brand Experiences</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            Our expertise in branding helps businesses stand out and create lasting connections with their audience.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative bg-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Branding Solutions
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Creating powerful brand identities that resonate with your audience and drive growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-[var(--delay)]"
                style={{ '--delay': `${index * 200}ms` } as React.CSSProperties}
              >
                <div className="group relative bg-gradient-to-br from-violet-950/50 to-black p-8 rounded-2xl hover:from-violet-900/20 hover:to-black/90 transition-all duration-500 border border-violet-900/20 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative z-10">
                    <div className="text-violet-400 mb-6 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative bg-black/95 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Branding Process
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              A strategic approach to building powerful brand identities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-[var(--delay)]"
                style={{ '--delay': `${index * 200}ms` } as React.CSSProperties}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-violet-900 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-black px-6 py-8 rounded-lg">
                    <div className="text-5xl font-bold text-violet-600 mb-4 opacity-50">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;