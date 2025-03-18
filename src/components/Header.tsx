import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Header = ({ onNavigate = () => {} }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">Portfolio</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => handleNavigation("home")}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("projects")}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation("skills")}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => handleNavigation("home")}
              className="flex justify-between items-center text-gray-700 hover:text-primary py-2 transition-colors"
            >
              <span>Home</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="flex justify-between items-center text-gray-700 hover:text-primary py-2 transition-colors"
            >
              <span>About</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="flex justify-between items-center text-gray-700 hover:text-primary py-2 transition-colors"
            >
              <span>Projects</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNavigation("skills")}
              className="flex justify-between items-center text-gray-700 hover:text-primary py-2 transition-colors"
            >
              <span>Skills</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="flex justify-between items-center text-gray-700 hover:text-primary py-2 transition-colors"
            >
              <span>Contact</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
