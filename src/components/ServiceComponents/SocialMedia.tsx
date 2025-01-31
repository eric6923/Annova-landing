import React, { useEffect } from 'react';
import { Share2, TrendingUp, Users, MessageSquare, ArrowRight } from 'lucide-react';

const SocialMediaManagement = () => {
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
      icon: <Share2 className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Content Strategy",
      description: "Developing engaging content strategies that connect with your audience and drive social media growth."
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Social Growth",
      description: "Building and growing your social media presence through targeted engagement strategies."
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Community Management",
      description: "Managing and nurturing your social media community to build strong relationships."
    },
    {
      icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Social Engagement",
      description: "Creating meaningful interactions that boost engagement and strengthen brand loyalty."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy Development",
      description: "Creating a tailored social media strategy aligned with your business goals."
    },
    {
      number: "02",
      title: "Content Creation",
      description: "Producing engaging content that resonates with your target audience."
    },
    {
      number: "03",
      title: "Community Building",
      description: "Growing and engaging your social media community effectively."
    },
    {
      number: "04",
      title: "Analytics & Growth",
      description: "Monitoring performance and optimizing for continued growth."
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
              Social Media
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent"> Excellence</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              We help brands thrive in the social media landscape with strategic management and engaging content.
            </p>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2 group">
              Boost Your Social Presence
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
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
            alt="Social Media Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            Building Engaging
            <span className="text-violet-400"> Social Presence</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            Our expertise in social media management helps brands connect with their audience and achieve measurable growth.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative bg-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Social Media Solutions
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive social media management services that drive engagement and growth.
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
              Our Social Media Process
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              A strategic approach to building and managing your social media presence.
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

export default SocialMediaManagement;