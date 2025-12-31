import './Hero.css';

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
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Aniket Shah</h1>
            <h2 className="hero-title">Junior Project Manager</h2>
            <p className="hero-description">
              Results-driven project manager with a passion for delivering successful projects 
              on time and within budget. Experienced in agile methodologies, stakeholder management, 
              and cross-functional team collaboration. Currently seeking new opportunities to drive 
              project excellence.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={downloadResume}>
                Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <div className="profile-initial">AS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
