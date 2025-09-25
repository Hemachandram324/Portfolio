import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import {
  Github, Linkedin, Mail, Phone, MapPin, ChevronDown,
  Code, Database, Server, Smartphone
} from 'lucide-react';
import TypewriterEffect from '@/react-app/components/TypewriterEffect';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const stats = [
    { label: 'Projects Completed', value: 4, suffix: '+' },
    { label: 'Technologies Mastered', value: 10, suffix: '+' },
    { label: 'Years of Learning', value: 1, suffix: '+' },
    { label: 'Years of Experience', value: '6 months' },
  ];

  const techStack = [
    { name: 'Java', icon: Code, color: 'text-orange-500' },
    { name: 'Spring Boot', icon: Server, color: 'text-green-500' },
    { name: 'SQL', icon: Database, color: 'text-blue-500' },
    { name: 'Javascript', icon: Code, color: 'text-cyan-500' },
    { name: 'MySQL', icon: Smartphone, color: 'text-yellow-500' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* ===== Hero Section with Background Image ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="src/react-app/assets/images/stock-footage-code-creation-and-algorithm-design-coding-expertise-web-development-animation-rendering.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-orange-500 font-mono text-lg"
              >
                {/* System.out.println("Hello, World!"); */}
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Hema</span>
                <span className="block text-orange-500 font-mono">Chandram</span>
              </h1>

              <div className="text-xl lg:text-2xl text-gray-300 h-8">
                <TypewriterEffect
                  text="Passionate Java Developer"
                  speed={100}
                  delay={1000}
                />
              </div>

              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                Self-driven developer specializing in enterprise Java solutions,
                Spring Boot microservices, and full-stack development with 1+ years of practical experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="btn-primary flex items-center space-x-2 pulse-glow-animation"
              >
                <Code className="w-5 h-5" />
                <span>View My Work</span>
              </Link>

              <Link
                to="/Contact"
                className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
              >
                <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Let's Connect</span>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap gap-6 pt-6 border-t border-gray-800"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+91 9390890108</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Tech Stack (optional floating icons) */}
          {/* To re-enable the floating stack, uncomment and adjust */}
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      {showStats && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 glass rounded-xl hover:glow-orange transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-orange-500 font-mono">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.span>
                  </div>
                  <div className="text-gray-300 mt-2 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ===== Quick Links ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Let's <span className="text-orange-500">Connect</span>
          </h2>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Hemachandram324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemachandram-kona-1497a7316"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="mailto:hemachandram324@gmail.com"
              className="p-4 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
