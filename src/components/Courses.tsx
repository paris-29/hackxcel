import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lock, Brain, Database, Cloud, ArrowRight } from 'lucide-react';

const CourseCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}> = ({ title, description, icon, color, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="flip-card w-full h-72 sm:h-80"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front of card */}
        <div 
          className="flip-card-front absolute w-full h-full bg-primary-light rounded-xl p-6 flex flex-col"
          style={{ 
            boxShadow: `0 10px 30px -15px ${color}40`,
            border: `1px solid ${color}30`
          }}
        >
          <div 
            className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            {icon}
          </div>
          
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/70 mb-4 flex-grow">{description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-accent font-medium">Learn More</span>
            <ArrowRight className="w-5 h-5 text-accent" />
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="flip-card-back absolute w-full h-full bg-gradient-to-br from-primary to-primary-light rounded-xl p-6 flex flex-col"
          style={{ 
            boxShadow: `0 10px 30px -15px ${color}40`,
            border: `1px solid ${color}30`
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Course Highlights</h3>
          <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
            <li>Hands-on practical exercises</li>
            <li>Industry expert instructors</li>
            <li>Real-world projects & case studies</li>
            <li>Community support access</li>
            <li>Completion certificate</li>
          </ul>
          
          <motion.button 
            className="mt-auto w-full py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Courses: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const courses = [
    {
      title: 'Cybersecurity',
      description: 'Master ethical hacking, penetration testing, and network security to protect critical systems.',
      icon: <Lock size={28} />,
      color: '#00F5FF'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems, neural networks, and advanced ML models for real-world applications.',
      icon: <Brain size={28} />,
      color: '#FF3D71'
    },
    {
      title: 'Data Science',
      description: 'Transform raw data into valuable insights using statistical analysis and visualization techniques.',
      icon: <Database size={28} />,
      color: '#00D68F'
    },
    {
      title: 'Cloud Computing',
      description: 'Design, deploy and manage scalable cloud infrastructure using AWS, Azure, and Google Cloud.',
      icon: <Cloud size={28} />,
      color: '#FF9F00'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="courses" 
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent text-lg mb-3 animate-in">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-in">Cutting-Edge Tech Courses</h3>
          <p className="max-w-2xl mx-auto text-white/70 animate-in">
            Choose from our specialized tech courses designed to give you the skills 
            needed for today's most in-demand tech careers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              color={course.color}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button 
            className="px-8 py-3 border border-accent text-accent font-medium hover:bg-accent/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Courses;