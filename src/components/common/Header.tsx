import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
      isScrolled ? 'shadow-md border-gray-200' : 'border-transparent'
    }`}>
      <div className="container flex justify-between items-center py-5 px-6">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aniket Shah
          </span>
        </div>
        
        <nav className={`md:flex md:gap-8 md:items-center ${
          isMobileMenuOpen 
            ? 'fixed top-[73px] left-0 right-0 flex flex-col bg-white p-8 gap-6 shadow-lg translate-y-0 opacity-100' 
            : 'fixed top-[73px] left-0 right-0 flex-col bg-white p-8 gap-6 shadow-lg -translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto md:static md:flex-row md:p-0 md:shadow-none'
        } transition-all duration-300`}>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} 
             className="text-secondary font-medium cursor-pointer relative py-2 transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full md:text-base text-xl">
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} 
             className="text-secondary font-medium cursor-pointer relative py-2 transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full md:text-base text-xl">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} 
             className="text-secondary font-medium cursor-pointer relative py-2 transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full md:text-base text-xl">
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} 
             className="text-secondary font-medium cursor-pointer relative py-2 transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full md:text-base text-xl">
            Contact
          </a>
        </nav>

        <button 
          className="md:hidden flex flex-col gap-1 bg-transparent border-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-slate-800 rounded-sm transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-sm transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-sm transition-all duration-300"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

