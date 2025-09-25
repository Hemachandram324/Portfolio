import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title = 'Terminal', children, className = '' }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="ml-3 text-sm text-gray-400 font-mono">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
