const Skills = () => {
  const methodologies = [
    { name: "Agile", icon: "⚡" },
    { name: "Scrum", icon: "🔄" },
    { name: "Kanban", icon: "📋" },
    { name: "Waterfall", icon: "💧" },
    { name: "Lean", icon: "📊" },
    { name: "Six Sigma", icon: "🎯" },
  ];

  const tools = [
    { name: "Jira", icon: "🔵" },
    { name: "Asana", icon: "🟣" },
    { name: "Trello", icon: "🔷" },
    { name: "MS Project", icon: "📈" },
    { name: "Slack", icon: "💬" },
    { name: "Notion", icon: "📝" },
    { name: "Figma", icon: "🎨" },
  ];

  const softSkills = [
    "Leadership",
    "Stakeholder Management",
    "Risk Management",
    "Communication",
    "Team Collaboration",
    "Strategic Thinking",
    "Budget Planning",
    "Time Management",
  ];

  return (
    <section
      id="skills"
      className="section bg-gradient-to-br from-white via-slate-50 to-blue-50/40 py-24 relative overflow-hidden"
    >
      {/* Decorative animated orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-slate-200/30 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 text-center">
            Technical Proficiency
          </h2>
          <p className="text-center text-gray-600 mb-20 text-lg">
            A comprehensive toolkit for successful project execution and
            delivery.
          </p>

          {/* Methodologies */}
          <div className="mb-20">
            <h3 className="text-sm font-bold mb-8 text-slate-900 text-center uppercase tracking-widest opacity-70">
              Methodologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {methodologies.map((item, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 text-slate-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-20">
            <h3 className="text-sm font-bold mb-8 text-slate-900 text-center uppercase tracking-widest opacity-70">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((item, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200/50 border border-slate-300/60 text-slate-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-sm font-bold mb-8 text-slate-900 text-center uppercase tracking-widest opacity-70">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-br from-blue-100/80 to-blue-50 border border-blue-200/50 text-slate-800 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
