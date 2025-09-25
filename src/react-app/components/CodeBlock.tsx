import { useState, useEffect } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  animated?: boolean;
  delay?: number;
}

const CodeBlock = ({ code, animated = false, delay = 0 }: CodeBlockProps) => {
  const [displayedCode, setDisplayedCode] = useState(animated ? '' : code);

  useEffect(() => {
    if (!animated) return;

    const timeoutId = setTimeout(() => {
      const lines = code.split('\n');
      let currentLine = 0;

      const revealLines = () => {
        if (currentLine < lines.length) {
          setDisplayedCode(lines.slice(0, currentLine + 1).join('\n'));
          currentLine++;
          setTimeout(revealLines, 100);
        }
      };

      revealLines();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [code, animated, delay]);

  const highlightSyntax = (codeText: string) => {
    return codeText
      .replace(/\b(public|private|protected|static|final|abstract|class|interface|extends|implements|new|this|super|return|void|int|String|boolean|if|else|for|while|try|catch|throw|import|package)\b/g, 
        '<span class="token keyword">$1</span>')
      .replace(/"([^"]*)"/g, '<span class="token string">"$1"</span>')
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '<span class="token comment">$&</span>')
      .replace(/\b\d+\b/g, '<span class="token number">$&</span>')
      .replace(/[+\-*/%=<>!&|]+/g, '<span class="token operator">$&</span>')
      .replace(/[{}()\[\];.,]/g, '<span class="token punctuation">$&</span>')
      .replace(/\b[A-Z][a-zA-Z0-9]*\b/g, '<span class="token class-name">$&</span>');
  };

  return (
    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto border border-gray-700">
      <code 
        className="font-code text-sm"
        dangerouslySetInnerHTML={{ 
          __html: highlightSyntax(displayedCode) 
        }}
      />
    </pre>
  );
};

export default CodeBlock;
