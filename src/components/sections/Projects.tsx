import { Project } from '../../types';
import './Projects.css';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      description: 'Led the complete redesign and migration of a legacy e-commerce platform, coordinating cross-functional teams of developers, designers, and stakeholders.',
      technologies: ['Agile', 'Jira', 'Confluence'],
      outcomes: [
        'Delivered 2 weeks ahead of schedule',
        '30% improvement in page load times',
        'Increased user satisfaction by 25%'
      ],
      duration: '6 months',
      role: 'Junior Project Manager'
    },
    {
      id: 2,
      title: 'Mobile App Launch',
      description: 'Managed the end-to-end launch of a mobile application for iOS and Android, from concept through post-launch support.',
      technologies: ['Scrum', 'Trello', 'Slack'],
      outcomes: [
        '10,000+ downloads in first month',
        '4.5 star average rating',
        'On-time and within budget delivery'
      ],
      duration: '4 months',
      role: 'Associate Project Manager'
    },
    {
      id: 3,
      title: 'Internal Process Automation',
      description: 'Spearheaded the implementation of automated workflows to streamline internal operations and reduce manual tasks.',
      technologies: ['Kanban', 'Asana', 'Process Mapping'],
      outcomes: [
        '40% reduction in processing time',
        'Eliminated 15 hours of manual work weekly',
        'Improved team productivity'
      ],
      duration: '3 months',
      role: 'Project Coordinator'
    },
    {
      id: 4,
      title: 'Customer Portal Development',
      description: 'Coordinated the development of a self-service customer portal, managing requirements gathering and stakeholder communication.',
      technologies: ['Waterfall', 'MS Project', 'Excel'],
      outcomes: [
        'Reduced support tickets by 35%',
        'Enhanced customer satisfaction',
        'Successfully integrated with existing systems'
      ],
      duration: '5 months',
      role: 'Junior Project Manager'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing successful project deliveries and achievements
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-duration">{project.duration}</span>
                  <span className="project-role">{project.role}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-outcomes">
                <h4>Key Outcomes:</h4>
                <ul>
                  {project.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
