import React from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  introduction = "I build modern, responsive web applications with a focus on user experience and performance. Passionate about creating clean, maintainable code that solves real-world problems.",
  ctaText = "View My Work",
  onCtaClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  },
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80",
}: HeroSectionProps) => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-slate-900 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 mb-6">
            {title}
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {introduction}
          </p>

          <Button
            onClick={onCtaClick}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            {ctaText}
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
