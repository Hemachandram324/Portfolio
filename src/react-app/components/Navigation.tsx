import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Code2, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Code2 },
    { path: '/about', label: 'About', icon: User },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-mono font-bold text-lg text-white">
                HemaChandra<span className="text-orange-500">.java</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                      isActive 
                        ? 'bg-orange-500/20 text-orange-400' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="p-6 space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-orange-500/20 text-orange-400' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
