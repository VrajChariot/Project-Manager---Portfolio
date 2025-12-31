import type { Skill } from '../../types';

const Skills = () => {
  const skills: Skill[] = [
    {
      category: 'Project Management',
      items: [
        'Agile/Scrum',
        'Waterfall',
        'Kanban',
        'Risk Management',
        'Budget Management',
        'Stakeholder Management'
      ]
    },
    {
      category: 'Tools & Software',
      items: [
        'Jira',
        'Asana',
        'Trello',
        'MS Project',
        'Slack',
        'Confluence'
      ]
    },
    {
      category: 'Technical Skills',
      items: [
        'Data Analysis',
        'Excel/Google Sheets',
        'SQL Basics',
        'Documentation',
        'Process Mapping',
        'Reporting'
      ]
    },
    {
      category: 'Soft Skills',
      items: [
        'Leadership',
        'Communication',
        'Problem Solving',
        'Time Management',
        'Team Building',
        'Conflict Resolution'
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for successful project delivery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border-2 border-gray-200 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl mb-6 text-primary flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-sm"></span>
                {skillCategory.category}
              </h3>
              <div className="flex flex-col gap-3.5">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 text-base text-secondary transition-all duration-200 hover:text-slate-800 hover:translate-x-1">
                    <span className="text-primary font-bold text-xl">▸</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

