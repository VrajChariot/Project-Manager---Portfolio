const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This will trigger download of the resume file
    const link = document.createElement('a');
    link.href = '/Aniket_Shah_Resume.pdf';
    link.download = 'Aniket_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative bg-gradient-to-br from-white to-slate-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center py-8">
          <div className="animate-fade-in-up">
            <p className="text-primary text-xl font-medium mb-2">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-primary bg-clip-text text-transparent">
              Aniket Shah
            </h1>
            <h2 className="text-3xl md:text-4xl text-secondary mb-6 font-semibold">
              Junior Project Manager
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl">
              Results-driven project manager with a passion for delivering successful projects 
              on time and within budget. Experienced in agile methodologies, stakeholder management, 
              and cross-functional team collaboration. Currently seeking new opportunities to drive 
              project excellence.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-lg text-base font-semibold bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
              >
                Get In Touch
              </button>
              <button 
                onClick={downloadResume}
                className="px-8 py-3.5 rounded-lg text-base font-semibold bg-transparent text-primary border-2 border-primary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5"
              >
                Download Resume
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 -m-2.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 animate-pulse-slow"></div>
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30 relative">
                <div className="text-9xl md:text-10xl font-bold text-white select-none">AS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-30">
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="var(--bg-secondary)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

