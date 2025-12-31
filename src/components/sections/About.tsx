import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about delivering exceptional project outcomes
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              As a dedicated Junior Project Manager, I bring a unique blend of technical 
              understanding and strong leadership skills to every project. My approach 
              focuses on clear communication, proactive risk management, and fostering 
              collaborative team environments.
            </p>
            <p>
              With experience in both agile and traditional project management methodologies, 
              I excel at adapting to different team dynamics and project requirements. I'm 
              committed to continuous learning and staying updated with the latest industry 
              best practices.
            </p>
            <p>
              Currently actively seeking opportunities to contribute to innovative projects 
              and grow within a dynamic organization that values excellence and teamwork.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Goal-Oriented</h3>
              <p>Focused on delivering measurable results and exceeding project objectives</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>Collaborative</h3>
              <p>Strong believer in teamwork and effective stakeholder engagement</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <h3>Data-Driven</h3>
              <p>Using metrics and analytics to inform decisions and track progress</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Agile Mindset</h3>
              <p>Adaptable and responsive to changing project requirements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
