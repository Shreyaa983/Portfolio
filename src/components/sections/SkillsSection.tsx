import TerminalWindow from '../TerminalWindow';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["golang@1.21.3", "python@3.11", "kotlin@1.9", "c++@17", "javascript@es2023", "java@17", "sql@standard"]
    },
    {
      category: "Backend Frameworks & Tools", 
      skills: ["gin@1.9.1", "swagger@2.0", "postman@10.0", "git@2.42"]
    },
    {
      category: "Databases",
      skills: ["mysql@8.0"]
    },
    {
      category: "Mobile Development",
      skills: ["jetpack-compose@1.5", "android-studio@2023.1"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="skills.sh">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="terminal-prompt">$ ls skills/ --version</span>
            </div>
            
            <div className="ml-6 space-y-6">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={category.category} 
                  className="fade-in-up" 
                  style={{animationDelay: `${categoryIndex * 0.2}s`}}
                >
                  <div className="flex items-center mb-3">
                    <span className="terminal-highlight text-lg">📁 {category.category}/</span>
                  </div>
                  
                  <div className="ml-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill} 
                        className="command-button justify-between fade-in-up"
                        style={{animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`}}
                      >
                        <span className="text-primary">{skill.split('@')[0]}</span>
                        <span className="text-accent text-xs">v{skill.split('@')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-4 bg-muted/50 border border-border rounded-sm fade-in-up stagger-5">
                <div className="terminal-prompt mb-2">$ package-info --stats</div>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p>📦 Total packages: {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}</p>
                  <p>🔄 Auto-updates enabled: true</p>
                  <p>⚡ Performance optimized: true</p>
                  <p>🛡️ Security patches: up-to-date</p>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default SkillsSection;
