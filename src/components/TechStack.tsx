import { OrbitingCircles } from "./ui/orbiting-circles";
import YourCustomIcon from "@/components/assets/profile.ico";
import { ArrowRight, Clock } from 'lucide-react';
import react from '@/components/assets/react.svg'
import node from '@/components/assets/node.svg' 
import typescript from '@/components/assets/typescript.svg' 
import aws from '@/components/assets/aws.svg' 
import spring from '@/components/assets/spring.svg' 
import laravel from '@/components/assets/laravel2.svg'

export function OrbitingCirclesDemo() {
  return (
    <>
      {/* Tech Stack Section */}
      <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden bg-background md:h-[800px]">
        {/* Title Section from Services Component */}
        <div className="relative z-10 mx-auto max-w-7xl [--duration:800ms] pb-96 ">
          <div className="flex justify-center mt-2 sm:mt-6">
            <div className="
              relative rounded-full border-2 border-violet-500 px-8 py-2 text-base font-medium
              bg-black/20 backdrop-blur-sm
              before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-violet-500/20 before:blur-xl
              animate-glow-slow
            ">
              Tech Stack
            </div>
          </div>
        </div>

        {/* Existing Orbiting Circles Content */}
        <OrbitingCircles
          iconSize={30}
          radius={120}
          className="md:scale-125"
          centerIcon={
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={YourCustomIcon}
                alt="Profile Icon"
                className="w-full h-full object-cover"
              />
            </div>
          }
        >
          <Icons.react />
          <Icons.nextjs />
          <Icons.nodejs />
          <Icons.express />
          <Icons.typescript />
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={25}
          radius={80}
          reverse
          speed={2}
          className="md:scale-125"
          centerIcon={
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={YourCustomIcon}
                alt="Profile Icon"
                className="w-full h-full object-cover"
              />
            </div>
          }
        >
          <Icons.aws />
          <Icons.vercel />
          <Icons.spring />
          <Icons.laravel />
        </OrbitingCircles>
      </div>

      {/* CTA Section */}
      <div className=" bg-gradient-to-br p-4 md:p-8 flex items-center justify-center">
        <div className="relative w-[380px] md:w-[1080px] mx-auto">
          {/* Card container with modern glass effect */}
          <div className="bg-gradient-to-br from-violet-700 via-violet-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden backdrop-blur-sm shadow-[0_8px_32px_rgba(79,70,229,0.15)] border border-white/10">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),transparent_50%)] animate-pulse" />

            {/* Top notification with enhanced design */}
            <div className="relative flex items-center gap-3 text-sm md:text-base mb-10 md:mb-14">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 shadow-inner">
                <Clock className="w-4 h-4 text-violet-200 animate-pulse" />
                <span className="font-medium tracking-wide text-violet-50">2 MORE SPOTS AVAILABLE THIS MONTH</span>
              </div>
            </div>

            {/* Main content with improved typography */}
            <div className="relative space-y-10 md:space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-50 to-violet-100">
                Ready to drive up<br className="hidden md:block" /> your business?
              </h2>
              
              <button className="group relative flex items-center gap-3 bg-white text-violet-900 rounded-full pl-7 pr-6 py-4 font-semibold transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95">
                <span className="text-lg">Start a Project</span>
                <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-200/0 via-violet-200/10 to-violet-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Enhanced gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-indigo-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(120,0,255,0.15),transparent_50%)]" />
          </div>
        </div>
      </div>
    </>
  );
}

export const Icons = {
  react: () => (
    <img
      src={react}
      alt="Custom Icon"
      width="30"
      height="30"
    />
  ),
  nextjs: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" fill="currentColor"/>
    </svg>
  ),
  nodejs: () => (
    <img
      src={node}
      alt="Custom Icon"
      width="30"
      height="70"
    />
  ),
  express: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill="currentColor"/>
    </svg>
  ),
  typescript: () => (
    <img
      src={typescript}
      alt="Custom Icon"
      width="30"
      height="70"
    />
  ),
  aws: () => (
    <img
      src={aws}
      alt="Custom Icon"
      width="30"
      height="70"
    />
  ),
  vercel: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L24 22H0L12 1Z" fill="currentColor"/>
    </svg>
  ),
  spring: () => (
    <img
      src={spring}
      alt="Custom Icon"
      width="30"
      height="70"
    />
  ),
  laravel: () => (
    <img
      src={laravel}
      alt="Custom Icon"
      width="30"
      height="70"
    />
  ),
};