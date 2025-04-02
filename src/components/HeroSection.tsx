import { Button } from "./ui/button";
import { ArrowDown, Code, Database, Server } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  profileImage?: string;
}

const HeroSection = ({
  name = "Ahsan Adil",
  title = "Full Stack Developer",
  introduction = "I build modern, responsive web applications with a focus on user experience and performance. Passionate about creating clean, maintainable code that solves real-world problems.",
  ctaText = "View My Work",
  onCtaClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  },
  profileImage = "/api/placeholder/400/400",
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-slate-900 py-16 overflow-x-hidden">
      {/* Background elements - abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated code-like background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500 blur-3xl animate-pulse"></div>
      </div>

      {/* Floating tech icons - visible on larger screens */}
      <div className="hidden lg:block absolute left-[34rem] top-[28.5%] text-purple-500 opacity-70 animate-float">
        <Code size={48} />
      </div>
      {/* <div className="hidden lg:block absolute right-24 top-1/4 text-purple-400 opacity-70 animate-float-delayed">
        <Database size={48} />
      </div> */}
      <div className="hidden lg:block absolute right-48 bottom-1/3 text-blue-500 opacity-70 animate-float">
        <Server size={48} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="w-full lg:w-7/12  text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 mb-6">
              {title}
            </h2>

            <p className="text-md sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {introduction}
            </p>

            <Button
              onClick={onCtaClick}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto lg:mx-0"
            >
              {ctaText}
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Button>
          </div>

          {/* Profile image with cool effects - responsive across screen sizes */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/20">
                <img
                  src={profileImage}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 border-dashed animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;