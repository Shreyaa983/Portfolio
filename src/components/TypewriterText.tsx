
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 50, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="cursor-blink">_</span>
    </span>
  );
};

export default TypewriterText;
