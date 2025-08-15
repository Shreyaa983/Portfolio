import { useState, useRef, useEffect } from 'react';
import TerminalWindow from '../TerminalWindow';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    'Contact terminal initialized...',
    'Type "help" for available commands'
  ]);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    const newMessages = [...messages, `$ ${command}`];
    setMessages(newMessages);
    setHighlightIndex(newMessages.length - 1); // highlight latest command

    setTimeout(() => setHighlightIndex(null), 1000); // remove highlight after 1s

    switch (trimmedCommand) {
      case 'help':
        setMessages(prev => [
          ...prev,
          'Available commands:',
          '  about    - Show About section',
          '  skills   - Show Skills section',
          '  projects - Show Projects section',
          '  experience - Show Experience section',
          '  email    - Show email address',
          '  github   - Open GitHub profile',
          '  linkedin - Open LinkedIn profile',
          '  message  - Send a message',
          '  clear    - Clear terminal',
          '  help     - Show this help'
        ]);
        break;
      case 'about':
        setMessages(prev => [...prev, 'Navigating to About section...']);
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'skills':
        setMessages(prev => [...prev, 'Navigating to Skills section...']);
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'projects':
        setMessages(prev => [...prev, 'Navigating to Projects section...']);
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'experience':
        setMessages(prev => [...prev, 'Navigating to Experience section...']);
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'email':
        setMessages(prev => [...prev, 'shreyashukla20042005@gmail.com']);
        break;
      case 'github':
        setMessages(prev => [...prev, 'Opening GitHub profile...']);
        window.open('https://github.com/Shreyaa983', '_blank');
        break;
      case 'linkedin':
        setMessages(prev => [...prev, 'Opening LinkedIn profile...']);
        window.open('https://www.linkedin.com/in/shreya--9833--/', '_blank');
        break;
      case 'message':
        setMessages(prev => [...prev, 'Message functionality coming soon! Use email for now.']);
        break;
      case 'clear':
        setMessages(['Contact terminal initialized...', 'Type "help" for available commands']);
        break;
      default:
        setMessages(prev => [
          ...prev,
          `Command not found: ${command}. Type "help" for available commands.`
        ]);
    }
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
    }
  };

  return (

    <section id="contact" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="contact.sh">
          <div className="space-y-4">
            {/* Terminal messages */}
            <div className="max-h-[28rem] min-h-[20rem] overflow-y-auto bg-muted/30 p-4 rounded border border-border font-mono text-sm">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-1 ${message.startsWith('$')
                      ? `text-primary ${highlightIndex === index ? 'bg-primary/20 animate-pulse' : ''}`
                      : 'text-muted-foreground'
                    }`}
                >
                  {message}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Command input */}
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <span className="terminal-prompt">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
                placeholder="Enter command..."
                autoFocus
              />
              <button type="submit" className="command-button">
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Quick action buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <a
                href="mailto:shreyashukla20042005@gmail.com"
                className="command-button justify-center hover:text-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
              <a
                href="https://github.com/Shreyaa983"
                target="_blank"
                rel="noopener noreferrer"
                className="command-button justify-center hover:text-primary"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shreya--9833--/"
                target="_blank"
                rel="noopener noreferrer"
                className="command-button justify-center hover:text-secondary"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ContactSection;
