import React, { useRef } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CertificateSection from "./CertificateSection";

const Home: React.FC = () => {
  // Create refs for each section for smooth scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);

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
      case "certificate":
        certificateRef.current?.scrollIntoView({ behavior: "smooth" });
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
          name="Ahsan Adil"
          title="Full Stack Developer"
          introduction="I am a passionate developer with over 4 years of experience building modern web applications and APIs with a focus on performance, specializing in backend development. I write industrial-grade code that balances complexity management with optimal performance, adhering to high standards."
          ctaText="View My Work"
          onCtaClick={() => handleNavigation("projects")}
          profileImage="/pictures/pic.JPG"
        />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={certificateRef}>
        <CertificateSection />
      </div>
      
      <div ref={skillsRef}>
        <SkillsSection />
      </div>


      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer
        name="Ahsan Adil"
        email="muhammadmahsanadil@gmail.com"
        socialLinks={{
          github: "https://github.com/ahsanadil9",
          linkedin: "https://www.linkedin.com/in/muhammad-ahsan-adil-a97a1a246/",
          twitter: "https://twitter.com/mahsanadil76401",
        }}
      />
    </div>
  );
};

export default Home;
