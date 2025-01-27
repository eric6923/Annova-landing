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
        <div className="text-center mb-10">
          <button className="bg-violet-900/50 text-white px-4 py-1 rounded-full text-sm mb-4">
            Case Studies
          </button>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Our Finest Works
          </h1>
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