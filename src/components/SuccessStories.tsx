import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  achievement: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Security Engineer',
    company: 'CloudSecure',
    image: 'https://i.pravatar.cc/300?img=11',
    quote: 'HACKXCEL\'s cybersecurity course was instrumental in my career transition. The hands-on labs and real-world scenarios prepared me for challenges I now face daily.',
    achievement: 'Secured a 40% salary increase within 6 months'
  },
  {
    id: 2,
    name: 'Maya Patel',
    role: 'AI Specialist',
    company: 'TechVision',
    image: 'https://i.pravatar.cc/300?img=5',
    quote: 'The AI & Machine Learning program exceeded my expectations. The instructors\' expertise and the cutting-edge curriculum gave me confidence to pursue my dream role.',
    achievement: 'Developed an AI solution now used by 5,000+ users'
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Data Scientist',
    company: 'Analytics Pro',
    image: 'https://i.pravatar.cc/300?img=15',
    quote: 'From a complete beginner to a professional data scientist in 6 months. HACKXCEL\'s project-based approach made complex concepts accessible and practical.',
    achievement: 'Published research paper using skills learned at HACKXCEL'
  },
  {
    id: 4,
    name: 'Sophia Rodriguez',
    role: 'Cloud Architect',
    company: 'InfraScale',
    image: 'https://i.pravatar.cc/300?img=9',
    quote: 'The cloud computing course provided deep insights into multi-cloud strategies. I can now architect robust solutions across AWS, Azure, and GCP with confidence.',
    achievement: 'Led migration of legacy systems saving company $2M annually'
  }
];

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isActive: boolean;
}> = ({ testimonial, isActive }) => {
  return (
    <motion.div 
      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out overflow-hidden rounded-xl ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary-light border border-white/10 p-6 md:p-8 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold">{testimonial.name}</h4>
            <p className="text-white/70">{testimonial.role} at {testimonial.company}</p>
          </div>
        </div>
        
        <div className="mb-6 flex-grow">
          <div className="text-4xl text-accent mb-2">"</div>
          <p className="text-white/80 italic">{testimonial.quote}</p>
          <div className="text-4xl text-accent text-right">"</div>
        </div>
        
        <div className="flex items-center gap-2 mt-auto">
          <MessageSquare className="w-5 h-5 text-accent" />
          <p className="font-medium text-accent">{testimonial.achievement}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Counter: React.FC<{
  end: number;
  duration?: number;
  label: string;
  isInView: boolean;
}> = ({ end, duration = 2, label, isInView }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (isInView && nodeRef.current) {
      let start = 0;
      const increment = end / (duration * 60);
      
      const counter = setInterval(() => {
        start += increment;
        if (start > end) {
          start = end;
          clearInterval(counter);
        }
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.floor(start).toString();
        }
      }, 16);
      
      return () => clearInterval(counter);
    }
  }, [end, duration, isInView]);
  
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center">
        <span ref={nodeRef}>0</span>
        <span className="text-accent">+</span>
      </div>
      <p className="text-white/70">{label}</p>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const stats = [
    { value: 50000, label: 'Students Trained' },
    { value: 200, label: 'Expert Courses' },
    { value: 96, label: 'Placement Rate %' },
    { value: 75, label: 'Industry Experts' }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="success-stories" 
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-accent text-lg mb-3 animate-in"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 animate-in"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From Students to Tech Leaders
          </motion.h3>
          
          <motion.p 
            className="max-w-2xl mx-auto text-white/70 animate-in"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how our students transformed their careers and achieved remarkable 
            success in the tech industry after completing our specialized courses.
          </motion.p>
        </div>
        
        {/* Testimonial Carousel */}
        <motion.div 
          className="max-w-3xl mx-auto mb-20 relative h-80 md:h-64"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              isActive={activeIndex === index}
            />
          ))}
          
          {/* Navigation Controls */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center gap-4">
            <motion.button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-primary-light border border-white/10 flex items-center justify-center text-white hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-accent' : 'bg-white/30'}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <motion.button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-primary-light border border-white/10 flex items-center justify-center text-white hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <Counter 
              key={index}
              end={stat.value}
              label={stat.label}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default SuccessStories;