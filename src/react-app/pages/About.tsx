import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code2, Target, Users } from 'lucide-react';
// import TerminalWindow from '@/react-app/components/TerminalWindow';
// import CodeBlock from '@/react-app/components/CodeBlock';

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const personalCode = `/**
 * @author Hema Chandramn
 * @version 1.0
 * @since 2025
 */
public class AboutSital {
    private final PersonalInfo info = new PersonalInfo();
    
    public AboutSital() {
        info.setName("Hema Chandram");
        info.setLocation("Hyderabad, Telangana, India");
        info.setPassion("Problem Solving & Innovation");
        info.setGoal("Building scalable enterprise solutions");
    }
    
    @Override
    public String getPhilosophy() {
        return "Clean code is not written by following rules. " +
               "It is written by someone who cares about " +
               "creating solutions that matter.";
    }
    
    public List<String> getCoreValues() {
        return Arrays.asList(
            "Continuous Learning",
            "Code Quality",
            "Team Collaboration",
            "User-Centric Design"
        );
    }
}`;

  const achievements = [
    {
      icon: GraduationCap,
      title: 'B.Tech - Electronics and Communication',
      organization: 'Sasi Institute of Technology and Engineering',
      year: '2024',
      grade: '7.78/10.0',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'NSS -  National Service Scheme',
      organization: 'Sasi Institute of Technology and Engineering',
      year: '2023',
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: '3rd Rank - ECE Branch Topper',
      organization: 'Sasi Institute of Technology and Engineering',
      year: '2024',
      grade: 'Secured 3rd Rank in B.Tech Final Examinations',
      color: 'text-orange-500'
    }
  ];

  const journey = [
    {
      year: '2021',
      title: 'Started Programming Journey',
      description: 'Began with Java fundamentals and object-oriented programming concepts',
      icon: Code2
    },
    {
      year: '2024',
      title: 'Advanced Learning Phase',
      description: 'Mastered data structures, algorithms, and database management systems',
      icon: Target
    },
    {
      year: '2025',
      title: 'Professional Developer',
      description: 'Joined Ramigani Tech Solutions as a Java Developer Intern',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-orange-500 font-mono">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for clean code and innovative solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-100 items-start mb-20">
          {/* Left Side - Code */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalWindow title="AboutSital.java">
              <CodeBlock code={personalCode} animated delay={300} />
            </TerminalWindow>
          </motion.div> */}

          {/* Right Side - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                {/* <Heart className="w-8 h-8 text-red-500" /> */}
                <span>About</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My passion for technology began during my Bachelor of Technology (B.Tech), 
                  where I developed a strong interest in backend development. Through dedication and 
                  consistent effort, I was proud to Secured 3rd Rank in B.Tech Final Examinations
                  a milestone that reinforced my commitment to the field.
                </p>

                <p>
                  Currently, I am working as a Java Developer Intern at Ramigani Tech Solutions, where I contribute to live projects using Java8, Hibernate
                  Spring Boot, REST APIs, and MySQL. I'm actively involved in writing clean, efficient code and collaborating with 
                  experienced developers to build scalable backend systems. This internship has been instrumental in strengthening my technical abilities 
                  and preparing me for a full-time software development role.
                </p>
                
                <p>
                 With a strong educational background and practical exposure, I’m now focused on growing 
                 as a backend developer and contributing to impactful software solutions in a professional setting.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Continuous Learning', 'Code Quality', 'Team Collaboration', 'User-Centric Design'].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-2 p-2 rounded-lg bg-orange-500/10"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Achievements */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Education & <span className="text-orange-500">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="glass p-6 rounded-xl text-center hover:glow-orange transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 ${achievement.color} bg-current/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{achievement.organization}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{achievement.year}</span>
                    <span className="text-orange-500 font-mono">{achievement.grade}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            My <span className="text-orange-500">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300"></div>
            
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.3 }}
                  className="relative flex items-start space-x-8 mb-12"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-orange-500 font-mono font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
