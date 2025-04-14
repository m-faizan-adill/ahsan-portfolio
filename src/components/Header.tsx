import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/toggle-theme-button";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certificate", label: "Certificate" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Header = ({ onNavigate = () => { } }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Handle scroll and update header height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Initial header height calculation
    updateHeaderHeight();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  // Update header height when scroll state changes
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isScrolled]);

  const handleNavigation = useCallback((section: string) => {
    setIsMenuOpen(false);
    onNavigate(section);
  }, [onNavigate]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const NavButton = ({
    id,
    label,
    isMobile = false
  }: {
    id: string;
    label: string;
    isMobile?: boolean
  }) => (
    <button
      onClick={() => handleNavigation(id)}
      className={`${isMobile
        ? "flex justify-between items-center py-2 w-full"
        : ""
        } text-gray-700 hover:text-primary transition-colors`}
    >
      <span>{label}</span>
      {isMobile && <ChevronRight className="h-4 w-4" />}
    </button>
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-2" : "py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary dark:text-green-500">Portfolio</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map(item => (
            <NavButton key={item.id} id={item.id} label={item.label} />
          ))}

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="dark:text-green-500"
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
        <div
          className="md:hidden bg-white shadow-lg fixed left-0 right-0 z-40 max-h-[70vh] overflow-y-auto"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NAV_ITEMS.map(item => (
              <NavButton
                key={item.id}
                id={item.id}
                label={item.label}
                isMobile
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;