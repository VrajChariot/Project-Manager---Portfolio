import { Skill } from '../../types';
import './Skills.css';

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
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for successful project delivery
        </p>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{skillCategory.category}</h3>
              <div className="skill-items">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-bullet">▸</span>
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
