import TerminalWindow from '../TerminalWindow';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "finloans-backend",
      description:
        "Backend system simulating loan application workflows with secure auth, role-based access, and financial logic.",
      tech: ["Golang", "Gin", "MySQL", "JWT", "Swagger"],
      github: "https://github.com/Shreyaa983/finloans-backend",
      demo: null,
      status: "completed"
    },
     {
      name: "city-clubs",
      description:
        "A web-based platform that helps people discover and join clubs, communities, and interest groups in their city without the hassle of manual searching.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/Shreyaa983/City-Clubs",
      demo: null,
      status: "active"
    },
    {
      name: "eco-bin",
      description:
        "Smart e-waste management solution built during CodeVerse 2025 Hackathon, enabling users to locate and manage e-waste disposal points efficiently.",
      tech: ["Golang", "REST APIs", "MySQL"],
      github: null, // Assuming private or no repo link
      demo: null,
      status: "prototype"
    },
     {
      name: "sakhi-saathi",
      description:
        "AI-powered, multilingual pregnancy care platform designed to bridge healthcare gaps in rural communities with intelligent assistance and local language support.",
      tech: [
        "React",
        "Node.js",
        "Python",
        "MongoDB",
        "Ollama LLaMA3.2",
        "TailwindCSS",
        "JWT",
        "Twilio OTP"
      ],
      github: "https://github.com/SHUBHAM2775/NFC4_DeepThink",
      demo: null,
      status: "hackathon"
    },
    {
      name: "college-admin-app",
      description:
        "College administration application built from scratch, winning Vivek Technotronix Project Competition.",
      tech: ["Kotlin", "Jetpack Compose", "SQLite"],
      github: null,
      demo: null,
      status: "completed"
    }
  ];

  return (
    <section id="projects" className="min-h-screen p-4 md:flex md:items-center md:justify-center">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="projects/">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="terminal-prompt">$ ls projects/ -la</span>
            </div>

            <div className="ml-6 space-y-6">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="terminal-card">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-primary flex items-center">
                          📁 {project.name}
                          <span
                            className={`ml-2 text-xs px-2 py-1 rounded ${
                              project.status === "active"
                                ? "bg-primary/20 text-primary"
                                : project.status === "prototype"
                                ? "bg-yellow-500/20 text-yellow-500"
                                : "bg-accent/20 text-accent"
                            }`}
                          >
                            {project.status}
                          </span>
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted px-2 py-1 rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          className="command-button hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="command-button hover:text-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-muted/50 border border-border rounded-sm fade-in-up stagger-4">
                <div className="terminal-prompt mb-2">$ git log --oneline | head -3</div>
                <div className="text-sm space-y-1 font-mono">
                  <div className="text-accent">a4b8c9d</div>{" "}
                  <span className="text-muted-foreground">
                    feat: add role-based access control to finloans APIs
                  </span>
                  <div className="text-accent">x7y2z1a</div>{" "}
                  <span className="text-muted-foreground">
                    fix: optimize DB queries for risk scoring workflow
                  </span>
                  <div className="text-accent">m3n9p4q</div>{" "}
                  <span className="text-muted-foreground">
                    docs: update Swagger documentation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ProjectsSection;
