
import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const bootLines = [
    "Initializing portfolio.sh...",
    "Loading profile data...",
    "Connecting to GitHub API...",
    "Parsing experience.json...",
    "Mounting skill tree...",
    "Setting up contact protocols...",
    "System ready. Welcome!"
  ];

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
  const completeTimer = setTimeout(() => {
    setIsComplete(true);
    window.scrollTo({ top: 0, behavior: "auto" }); // ensures About is first
    onComplete();
  }, 1000);
  return () => clearTimeout(completeTimer);
}
  }, [currentLine, bootLines.length, isComplete, onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="terminal-card max-w-md w-full mx-4">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <span className="ml-4 text-muted-foreground text-sm">portfolio.sh</span>
        </div>
        
        <div className="space-y-2">
          {bootLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="flex items-center">
              <span className="terminal-prompt mr-2">$</span>
              <span className="text-sm">{line}</span>
              {index === currentLine - 1 && (
                <span className="ml-1 cursor-blink">_</span>
              )}
            </div>
          ))}
        </div>
        
        {isComplete && (
          <div className="mt-4 text-center">
            <div className="boot-flicker text-primary">Press any key to continue...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BootSequence;
