
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { command: '$ whoami', section: 'about' },
    { command: '$ cat experience.json', section: 'experience' },
    { command: '$ ls skills/', section: 'skills' },
    { command: '$ ls projects/', section: 'projects' },
    { command: '$ ./contact.sh', section: 'contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="terminal-card">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => onSectionChange(item.section)}
                className={`command-button ${
                  activeSection === item.section 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:text-primary'
                }`}
              >
                {item.command}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 right-4 z-40">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="terminal-card p-3"
        >
          <span className="terminal-prompt">{'>'}</span>
          <span className="ml-2">_</span>
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 terminal-card min-w-[200px]">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    onSectionChange(item.section);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left command-button ${
                    activeSection === item.section 
                      ? 'bg-primary/20 text-primary' 
                      : 'hover:text-primary'
                  }`}
                >
                  {item.command}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
