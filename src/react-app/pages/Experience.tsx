import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Code, Award, Briefcase, GitBranch, GitCommit } from 'lucide-react';
// import TerminalWindow from '@/react-app/components/TerminalWindow';
// import CodeBlock from '@/react-app/components/CodeBlock';

const ExperiencePage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experienceCode = `/**
 * Professional Experience Timeline
 * git log --oneline --graph --all
 */
public class ProfessionalJourney {
    
    @CurrentRole
    public Experience javaDeveloperIntern() {
        return new Experience.Builder()
            .company("Ramigani Tech Solutions")
            .position("Java Developer Intern")
            .duration("MAR 2025 - Present")
            .responsibilities(Arrays.asList(
                "Designed and developed Java applications independently.",
                "Spring Boot microservices architecture", 
                "GIT version control & Log4j implementation"
            ))
            .technologies("Java, Spring Boot, MySQL, GIT")
            .build();
    }
}`;

  const experiences = [
    {
      id: 1,
      title: 'Java Developer Intern',
      company: 'Ramigani Tech Solutions',
      duration: 'MAR 2025 - Present',
      location: 'Hyderabad, India',
      type: 'Full-time',
      status: 'current',
      responsibilities: [
        'Independently responsible for the design and development of Java-based applications',
        'Developed backend logic using Spring Boot following a layered architecture approach.',
        'Integrated Spring Security for user authentication and role-based authorization.',
        'Utilized GIT for version control and Log4j for comprehensive logging'
      ],
      technologies: ['Java', 'Hibernate', 'Spring Boot', 'Spring Security', 'SQL', 'MySQL', 'GIT', 'Log4j', 'Maven'],
      achievements: [
        'Defined and enforced coding standards and best practices to enhance code quality and team efficiency',
        'Implemented microservices architecture to improve scalability and modularity of the application'
      ]
    }
  ];

  const skills = [
    {
      category: 'Backend Development',
      items: ['Java','Jdbc', 'Hibernate', 'Servelts', 'Spring Boot', 'REST APIs', 'Spring Security']
    },
    {
      category: 'Frontend Development', 
      items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design']
    },
    {
      category: 'Database & Tools',
      items: ['SQL', 'MySQL', 'GIT', 'Maven', 'Log4j']
    },
    {
      category: 'Specialized',
      items: ['System Architecture', 'Technical Mentoring', 'Analytical Problem Solving', 'Team Collaboration']
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Professional <span className="text-orange-500 font-mono">Experience</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building enterprise solutions and mentoring the next generation of developers
          </p>
        </motion.div>

        {/* Code & Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Code */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalWindow title="ProfessionalJourney.java">
              <CodeBlock code={experienceCode} animated delay={300} />
            </TerminalWindow>
          </motion.div> */}

          {/* Right Side - Git-style Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <GitBranch className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-white font-mono">git log --career</h2>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className={`relative pl-8 pb-8 ${index !== experiences.length - 1 ? 'border-l-2 border-orange-500/30' : ''}`}
              >
                {/* Git Commit Node */}
                <div className="absolute -left-2 w-4 h-4 bg-orange-500 rounded-full"></div>
                
                {/* Content Card */}
                <div className="glass p-6 rounded-xl hover:glow-orange transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-orange-500 font-semibold">{exp.company}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-mono ${
                      exp.status === 'current' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {exp.status === 'current' ? 'ACTIVE' : 'COMPLETED'}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-300 text-sm">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <GitCommit className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Detailed Experience Cards */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Detailed <span className="text-orange-500">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 }}
                className="glass p-8 rounded-xl"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-orange-500 text-lg font-semibold">{exp.company}</p>
                      <p className="text-gray-400">{exp.duration}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle - Responsibilities */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                      <Code className="w-5 h-5 text-orange-500" />
                      <span>Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right - Achievements */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-3 h-3 text-green-400" />
                          </div>
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Skills Matrix */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="glass p-6 rounded-xl hover:glow-orange transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-4 text-center">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.2 + idx * 0.1 }}
                      className="flex items-center space-x-2 p-2 rounded bg-gray-800/50"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ExperiencePage;
