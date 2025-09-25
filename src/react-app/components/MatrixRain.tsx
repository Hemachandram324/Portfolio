import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Java keywords and symbols for the matrix effect
    const javaChars = ['class', 'public', 'private', 'static', 'void', 'int', 'String', 'boolean', 'if', 'else', 'for', 'while', 'try', 'catch', 'new', 'this', 'super', '{', '}', '(', ')', ';', '@', '#', '$', '%', '&', '*', '+', '-', '=', '<', '>', '?', '|', '~', '^'];

    const createColumn = () => {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      
      // Generate random text for the column
      let text = '';
      for (let i = 0; i < Math.floor(Math.random() * 20) + 10; i++) {
        text += javaChars[Math.floor(Math.random() * javaChars.length)] + '\n';
      }
      column.textContent = text;
      
      // Random position and animation duration
      column.style.left = Math.random() * window.innerWidth + 'px';
      column.style.animationDuration = (Math.random() * 3 + 2) + 's';
      column.style.animationDelay = Math.random() * 2 + 's';
      column.style.opacity = (Math.random() * 0.5 + 0.1).toString();
      
      container.appendChild(column);
      
      // Remove column after animation completes
      setTimeout(() => {
        if (column.parentNode) {
          column.parentNode.removeChild(column);
        }
      }, 5000);
    };

    // Create initial columns
    for (let i = 0; i < 10; i++) {
      setTimeout(createColumn, i * 200);
    }

    // Continue creating columns
    const interval = setInterval(createColumn, 500);

    return () => {
      clearInterval(interval);
      // Clean up existing columns
      const columns = container.querySelectorAll('.matrix-column');
      columns.forEach(column => column.remove());
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixRain;
