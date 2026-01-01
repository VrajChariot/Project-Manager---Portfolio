import type { Project } from "../../types";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description:
        "Led the complete redesign and migration of a legacy e-commerce platform, coordinating cross-functional teams of developers, designers, and stakeholders.",
      technologies: ["Agile", "Jira", "Confluence"],
      outcomes: [
        "Delivered 2 weeks ahead of schedule",
        "30% improvement in page load times",
        "Increased user satisfaction by 25%",
      ],
      duration: "6 months",
      role: "Junior Project Manager",
    },
    {
      id: 2,
      title: "Mobile App Launch",
      description:
        "Managed the end-to-end launch of a mobile application for iOS and Android, from concept through post-launch support.",
      technologies: ["Scrum", "Trello", "Slack"],
      outcomes: [
        "10,000+ downloads in first month",
        "4.5 star average rating",
        "On-time and within budget delivery",
      ],
      duration: "4 months",
      role: "Associate Project Manager",
    },
    {
      id: 3,
      title: "Internal Process Automation",
      description:
        "Spearheaded the implementation of automated workflows to streamline internal operations and reduce manual tasks.",
      technologies: ["Kanban", "Asana", "Process Mapping"],
      outcomes: [
        "40% reduction in processing time",
        "Eliminated 15 hours of manual work weekly",
        "Improved team productivity",
      ],
      duration: "3 months",
      role: "Project Coordinator",
    },
    {
      id: 4,
      title: "Customer Portal Development",
      description:
        "Coordinated the development of a self-service customer portal, managing requirements gathering and stakeholder communication.",
      technologies: ["Waterfall", "MS Project", "Excel"],
      outcomes: [
        "Reduced support tickets by 35%",
        "Enhanced customer satisfaction",
        "Successfully integrated with existing systems",
      ],
      duration: "5 months",
      role: "Junior Project Manager",
    },
  ];

  return (
    <section
      id="projects"
      className="section bg-linear-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-1/4 w-125 h-125 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 left-1/4 w-100 h-100 bg-slate-100/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Showcasing successful project deliveries and achievements
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-linear-to-br from-white to-blue-50/50 rounded-xl p-8 shadow-md border border-blue-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 flex flex-col gap-6 group"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl text-slate-800 m-0 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <span className="text-sm px-3.5 py-1.5 rounded-md font-medium bg-slate-100 text-slate-700">
                    {project.duration}
                  </span>
                  <span className="text-sm px-3.5 py-1.5 rounded-md font-medium bg-linear-to-r from-blue-100 to-blue-50 text-blue-600">
                    {project.role}
                  </span>
                </div>
              </div>

              <p className="text-base leading-relaxed text-secondary m-0">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-secondary px-3.5 py-1.5 rounded-md text-sm font-medium border border-gray-200 transition-all duration-200 hover:border-primary hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <h4 className="text-base text-slate-800 mb-3">Key Outcomes:</h4>
                <ul className="list-none flex flex-col gap-2">
                  {project.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="text-secondary text-sm flex items-start gap-2"
                    >
                      <span className="text-green-500 font-bold text-lg shrink-0">
                        ✓
                      </span>
                      <span>{outcome}</span>
                    </li>
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
