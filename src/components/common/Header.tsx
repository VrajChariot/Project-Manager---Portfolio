import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Aniket_Shah_Resume.pdf";
    link.download = "Aniket_Shah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-lg border-b border-gray-100"
          : "bg-white/60 border-b border-transparent"
      }`}
    >
      <div className="w-full mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        {/* Logo */}
        <div
          className="cursor-pointer group flex items-center gap-2"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-10 h-10 bg-linear-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3">
            <span className="text-white font-bold text-sm">AS</span>
          </div>
          <span className="text-xl font-bold text-slate-900 hidden sm:block">
            ANIKET PM
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-slate-900 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-slate-900 hover:bg-gray-100"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-slate-900 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-slate-900 hover:bg-gray-100"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={downloadResume}
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-slate-900 transition-colors border-b border-gray-100"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-slate-900 transition-colors border-b border-gray-100"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-slate-900 transition-colors border-b border-gray-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-slate-900 transition-colors border-b border-gray-100"
          >
            Contact
          </a>
          <button
            onClick={downloadResume}
            className="mx-6 my-4 px-5 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
