import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Totem Consultancy",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=450",
    tags: ["Website Design", "Web Development"],
  },
  {
    id: 2,
    title: "Bihar Innovations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450",
    tags: ["UI/UX Design", "Development"],
  },
  {
    id: 3,
    title: "Stancord",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=450",
    tags: ["Web Design", "E-Commerce"],
  },
  {
    id: 4,
    title: "Inno Seva",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=450",
    tags: ["Web Design", "E-Commerce"],
  },
  {
    id: 5,
    title: "VamiTech Solution",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=450",
    tags: ["Web Design", "E-Commerce"],
  },
  {
    id: 6,
    title: "Mobile App Banao",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=450",
    tags: ["Web Design", "E-Commerce"],
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className=" bg-black text-white md:py-12 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Section */}
        {/* Header Section */}
<div className="text-center mb-10">
  <div className="flex justify-center">
    <div className="
      relative rounded-full border-2 border-violet-500 px-8 py-2 text-base font-medium
      bg-black/20 backdrop-blur-sm
      before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl
      animate-glow-slow
    ">
      Case Studies
    </div>
  </div>
  
  <h2 className="
    mt-6 text-center font-display text-4xl md:text-5xl font-bold
    bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent
    leading-[1.15] md:leading-[1.3]
  ">
    Our Finest Works
  </h2>
  
  <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
    Explore our portfolio of successful projects and innovative solutions.
  </p>
</div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Image Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="aspect-[16/9] relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Info and Progress Indicators */}
          <div className="mt-4 space-y-6">
            {/* Project Title and Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-white text-white hover:bg-white/10 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <div
                className="flex items-center justify-center text-xl md:text-3xl font-bold text-center"
                style={{ height: '3rem', width: '100%' }}
              >
                {projects[currentSlide].title}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-white text-white hover:bg-white/10 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {projects[currentSlide].tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-transparent border border-white/20 px-4 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-violet-500" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;