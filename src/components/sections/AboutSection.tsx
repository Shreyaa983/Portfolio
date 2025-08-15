import TypewriterText from '../TypewriterText';
import TerminalWindow from '../TerminalWindow';

const AboutSection = () => {
  return (
    <section id="about"  className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="about.sh">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="terminal-prompt">$ whoami</span>
            </div>
            
            <div className="ml-6 space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold">
                <TypewriterText text="Shreya Shukla" className="text-primary" />
              </h1>
              
              <div className="text-xl md:text-2xl text-secondary">
                Backend Engineer & API Architect
              </div>
              
              <div className="space-y-2 text-muted-foreground">
                <p className="fade-in-up stagger-1">
                  <span className="terminal-highlight">Location:</span> Mumbai, India (Remote-ready)
                </p>
                <p className="fade-in-up stagger-2">
                  <span className="terminal-highlight">Core Focus:</span> Golang • REST APIs • SQL Optimization
                </p>
                <p className="fade-in-up stagger-3">
                  <span className="terminal-highlight">Also Exploring:</span> Frontend basics (React) & UI styling
                </p>
                <p className="fade-in-up stagger-4">
                  <span className="terminal-highlight">Passion:</span> Building secure, efficient, and scalable backend systems
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 border border-border rounded-sm fade-in-up stagger-5">
                <p className="text-sm leading-relaxed">
                  I'm a backend developer with experience creating 35+ secure REST APIs, 
                  implementing JWT authentication, role-based access, and optimizing database queries. 
                  While my strength lies in backend development, I'm gradually exploring frontend technologies 
                  like React to better understand full-stack workflows and deliver more integrated solutions. 
                  I enjoy solving complex problems, refining backend architectures, and continuously learning 
                  new tools to improve my craft.
                </p>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default AboutSection;
