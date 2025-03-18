import React, { useRef } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  // Create refs for each section for smooth scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to handle navigation
  const handleNavigation = (section: string) => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigation} />

      <div ref={homeRef} id="home">
        <HeroSection
          name="John Doe"
          title="Full Stack Developer"
          introduction="I build modern, responsive web applications with a focus on user experience and performance. Passionate about creating clean, maintainable code that solves real-world problems."
          ctaText="View My Work"
          onCtaClick={() => handleNavigation("projects")}
        />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={skillsRef}>
        <SkillsSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer
        name="John Doe"
        email="contact@johndoe.com"
        socialLinks={{
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
        }}
      />
    </div>
  );
};

export default Home;
