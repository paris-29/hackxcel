import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ChevronDown } from 'lucide-react';

const LiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to HACKXCEL Terminal!',
    'Type "help" to see available commands.'
  ]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process input
    let response = '';
    
    switch (input.toLowerCase().trim()) {
      case 'help':
        response = 'Available commands: help, courses, stats, about, clear';
        break;
      case 'courses':
        response = 'Available courses: cybersecurity, ai, datascience, cloud';
        break;
      case 'stats':
        response = 'Students: 50,000+ | Courses: 200+ | Instructors: 75+';
        break;
      case 'about':
        response = 'HACKXCEL is the leading platform for tech education since 2023.';
        break;
      case 'clear':
        setOutput([]);
        setInput('');
        return;
      default:
        response = `Command not recognized: "${input}"`;
    }
    
    setOutput([...output, `$ ${input}`, response]);
    setInput('');
  };
  
  return (
    <div className="terminal h-64 overflow-auto">
      {output.map((line, index) => (
        <div key={index} className={line.startsWith('$') ? 'font-bold' : 'opacity-80'}>
          {line}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-2 flex">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent border-none outline-none text-accent"
          autoFocus
        />
      </form>
    </div>
  );
};

const AccordionItem: React.FC<{
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ title, children, isActive, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full justify-between items-center py-4 text-left font-medium focus:outline-none"
        onClick={onClick}
      >
        <span>{title}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform ${isActive ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isActive ? '500px' : '0', 
          opacity: isActive ? 1 : 0
        }}
      >
        <div className="pb-4 text-white/70">
          {children}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeAccordion, setActiveAccordion] = useState(0);
  
  const benefits = [
    {
      title: 'Expert Instructors',
      content: 'Learn from tech industry veterans with experience at companies like Google, Microsoft, and Amazon. Our instructors bring real-world expertise to every lesson.'
    },
    {
      title: 'Hands-On Learning',
      content: 'Build real projects and solve actual challenges in our state-of-the-art virtual labs. We believe in learning by doing, not just watching.'
    },
    {
      title: 'Career Support',
      content: 'Get personalized career coaching, resume reviews, and interview preparation. Our dedicated career services team works with you until you land your dream job.'
    },
    {
      title: 'Community Access',
      content: 'Join our thriving community of tech professionals and fellow learners. Network, collaborate on projects, and get support when you need it most.'
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="why-choose-us" 
      className="py-24 bg-gradient-to-b from-primary to-primary-light relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-accent text-lg mb-3 animate-in"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Why HACKXCEL
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 animate-in"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Elite Choice for Tech Education
          </motion.h3>
          
          <motion.p 
            className="max-w-2xl mx-auto text-white/70 animate-in"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            HACKXCEL goes beyond traditional learning with immersive, hands-on 
            experiences designed to transform beginners into industry-ready professionals.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Demo */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary-dark rounded-xl overflow-hidden border border-accent/30">
              <div className="bg-primary-light px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <div className="flex-grow text-center text-xs font-mono text-white/60">
                  hackxcel_terminal
                </div>
              </div>
              <div className="p-4">
                <LiveTerminal />
              </div>
            </div>
          </motion.div>
          
          {/* Benefits Accordion */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-2xl font-bold mb-6">Why Our Students Excel</h4>
              
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <AccordionItem 
                    key={index}
                    title={benefit.title}
                    isActive={activeAccordion === index}
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  >
                    {benefit.content}
                  </AccordionItem>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                {['96% job placement rate', '50,000+ graduates', '200+ hiring partners'].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default WhyChooseUs;