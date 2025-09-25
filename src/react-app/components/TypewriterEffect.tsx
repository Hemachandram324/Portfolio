import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterEffect = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '',
  onComplete 
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;

      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          onComplete?.();
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {isTyping && <span className="cursor">|</span>}
    </span>
  );
};

export default TypewriterEffect;
