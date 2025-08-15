
import { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title, children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`terminal-card ${className}`}>
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <span className="text-muted-foreground text-sm ml-2">{title}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TerminalWindow;
