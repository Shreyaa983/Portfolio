
import TerminalWindow from '../TerminalWindow';

const ExperienceSection = () => {
const experience = [
  {
    company: "Fundsmama",
    role: "Backend Developer Intern",
    duration: "Sep 2024 – Mar 2025",
    technologies: ["golang", "gin", "mysql", "jwt", "swagger"],
    description:
      "Built 35+ secure REST APIs for dashboard, authentication, and financial workflows supporting 5L+ mobile users. Implemented JWT-based authentication, role-based access control, and PDF generation endpoints for loan documentation. Optimized database queries for customer risk scoring workflows."
  },
  {
    company: "Mobond Consultancy Services (M-Indicator)",
    role: "Android Developer Intern",
    duration: "Jun 2023 – Aug 2023",
    technologies: ["kotlin", "jetpack compose", "android studio"],
    description:
      "Developed an Android application using Jetpack Compose, leading the transition from learning to production implementation. Collaborated directly with the CEO to deliver a user-centric app based on consumer needs."
  },
  {
    company: "CodeStorm, College Tech Club",
    role: "Senior Member - Tech Committee",
    duration: "2024 – 2025",
    technologies: ["event organization", "mentoring", "technical guidance"],
    description:
      "Organized coding events, mentored junior members, and contributed to fostering a tech-driven community on campus."
  }
];

  return (
    <section
      id="experience"
      className="py-24 p-4 md:flex md:items-center md:justify-center"
    >
      <div className="max-w-4xl w-full">
        <TerminalWindow title="experience.json">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="terminal-prompt">$ cat experience.json</span>
            </div>
            
            <div className="ml-6">
              <div className="syntax-bracket text-lg">{`{`}</div>
              <div className="ml-4 space-y-6">
                <div className="syntax-key">"experience"</div>
                <span className="syntax-bracket">: [</span>
                
                {experience.map((job, index) => (
                  <div key={index} className="ml-4 fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="syntax-bracket">{`{`}</div>
                    <div className="ml-6 space-y-2">
                      <div>
                        <span className="syntax-key">"company"</span>
                        <span className="syntax-bracket">: </span>
                        <span className="syntax-string" style={{ color: '#60a5fa' }}>
                          "{job.company}"
                        </span>,
                      </div>
                      <div>
                        <span className="syntax-key">"role"</span>
                        <span className="syntax-bracket">: </span>
                        <span className="syntax-string" style={{ color: '#60a5fa' }}>
                          "{job.role}"
                        </span>,
                      </div>
                      <div>
                        <span className="syntax-key">"duration"</span>
                        <span className="syntax-bracket">: </span>
                        <span className="syntax-string" style={{ color: '#60a5fa' }}>
                          "{job.duration}"
                        </span>,
                      </div>
                      <div>
                        <span className="syntax-key">"technologies"</span>
                        <span className="syntax-bracket">: [</span>
                        <div className="ml-4">
                          {job.technologies.map((tech, techIndex) => (
                            <span key={techIndex}>
                              <span className="syntax-string" style={{ color: '#60a5fa' }}>
                                "{tech}"
                              </span>
                              {techIndex < job.technologies.length - 1 && <span className="syntax-bracket">, </span>}
                            </span>
                          ))}
                        </div>
                        <span className="syntax-bracket">],</span>
                      </div>
                      <div>
                        <span className="syntax-key">"description"</span>
                        <span className="syntax-bracket">: </span>
                        <span className="syntax-string" style={{ color: '#60a5fa' }}>
                          "{job.description}"
                        </span>
                      </div>
                    </div>
                    <div className="syntax-bracket">
                      {`}`}{index < experience.length - 1 && <span style={{ color: '#60a5fa' }}>,</span>}
                    </div>
                  </div>
                ))}

                <span className="syntax-bracket">]</span>
              </div>
              <div className="syntax-bracket text-lg">{`}`}</div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ExperienceSection;
