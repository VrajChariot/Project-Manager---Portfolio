import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [cursorOpacity, setCursorOpacity] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Calculate cursor opacity based on scroll position
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const fadeStart = window.innerHeight; // Hero section still visible
        const fadeEnd = 0; // Completely fade at hero boundary (About section start)

        if (heroBottom > fadeStart) {
          setCursorOpacity(1);
        } else if (heroBottom > fadeEnd) {
          const opacity = Math.max(0, heroBottom / fadeStart);
          setCursorOpacity(opacity);
        } else {
          setCursorOpacity(0);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // This will trigger download of the resume file
    const link = document.createElement("a");
    link.href = "/Aniket_Shah_Resume.pdf";
    link.download = "Aniket_Shah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-20 bg-linear-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Animated background gradient orbs with parallax */}
      <div
        className="absolute top-20 right-0 w-125 h-125 bg-blue-200/40 rounded-full blur-3xl animate-pulse-slow transition-transform duration-700"
        style={{
          transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px)`,
        }}
      ></div>
      <div
        className="absolute bottom-20 left-0 w-125 h-125 bg-slate-200/40 rounded-full blur-3xl animate-pulse-slow transition-transform duration-700"
        style={{
          transform: `translate(${-scrollY * 0.2}px, ${-scrollY * 0.3}px)`,
        }}
      ></div>

      {/* Cursor follow effect - subtle moving gradient */}
      <div
        className="fixed w-200 h-200 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-500 ease-out z-0"
        style={{
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
          opacity: cursorOpacity,
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-float"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center py-8">
          <div
            className="animate-fade-in-up"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide flex items-center gap-2">
              <span className="w-8 h-px bg-linear-to-r from-blue-500 to-transparent"></span>
              EXPLORE PROJECT MANAGER
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              Turning Complex Chaos into{" "}
              <span className="bg-linear-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                Streamlined Success
              </span>
              .
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl">
              Execution-driven PM with soft skills. I help community and
              business goals through structured coordination and efficient
              processes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-xl">
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-bold text-slate-900">5+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-bold text-slate-900">95%</div>
                <div className="text-xs text-gray-600">On-Time</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-bold text-slate-900">3+</div>
                <div className="text-xs text-gray-600">Years Exp</div>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap items-center">
              <button
                onClick={scrollToContact}
                className="group px-7 py-3 rounded-md text-base font-medium bg-slate-900 text-white transition-all duration-300 hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 flex items-center gap-2"
              >
                View My Work
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={scrollToContact}
                className="text-slate-900 text-base font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3 group"
              >
                Contact Me
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
          <div
            className="flex justify-center items-center animate-fade-in-right"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          >
            <div className="relative group">
              {/* Decorative gradient ring with animation */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-slate-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300 animate-spin-slow"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-linear-to-br from-slate-100 to-slate-200">
                <img
                  src="/profile-photo.png"
                  alt="Aniket Shah - Professional Headshot"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-sm font-semibold text-slate-900">
                    Available for Opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-wider">SCROLL</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
