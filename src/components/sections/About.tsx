const About = () => {
  return (
    <section id="about" className="section bg-slate-50">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about delivering exceptional project outcomes
        </p>
        
        <div className="grid gap-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 leading-relaxed">
              As a dedicated Junior Project Manager, I bring a unique blend of technical 
              understanding and strong leadership skills to every project. My approach 
              focuses on clear communication, proactive risk management, and fostering 
              collaborative team environments.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              With experience in both agile and traditional project management methodologies, 
              I excel at adapting to different team dynamics and project requirements. I'm 
              committed to continuous learning and staying updated with the latest industry 
              best practices.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Currently actively seeking opportunities to contribute to innovative projects 
              and grow within a dynamic organization that values excellence and teamwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl mb-3 text-slate-800">Goal-Oriented</h3>
              <p className="text-sm text-secondary m-0">Focused on delivering measurable results and exceeding project objectives</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl mb-3 text-slate-800">Collaborative</h3>
              <p className="text-sm text-secondary m-0">Strong believer in teamwork and effective stakeholder engagement</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl mb-3 text-slate-800">Data-Driven</h3>
              <p className="text-sm text-secondary m-0">Using metrics and analytics to inform decisions and track progress</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl mb-3 text-slate-800">Agile Mindset</h3>
              <p className="text-sm text-secondary m-0">Adaptable and responsive to changing project requirements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

