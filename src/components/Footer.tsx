import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Courses',
      links: [
        { name: 'Cybersecurity', url: '#cybersecurity' },
        { name: 'AI & Machine Learning', url: '#ai-machine-learning' },
        { name: 'Data Science', url: '#data-science' },
        { name: 'Cloud Computing', url: '#cloud-computing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#about' },
        { name: 'Careers', url: '#careers' },
        { name: 'Blog', url: '#blog' },
        { name: 'Press', url: '#press' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', url: '#docs' },
        { name: 'Help Center', url: '#help' },
        { name: 'Community', url: '#community' },
        { name: 'Partners', url: '#partners' }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={18} />, url: '#', name: 'Facebook' },
    { icon: <Twitter size={18} />, url: '#', name: 'Twitter' },
    { icon: <Instagram size={18} />, url: '#', name: 'Instagram' },
    { icon: <Linkedin size={18} />, url: '#', name: 'LinkedIn' },
    { icon: <Github size={18} />, url: '#', name: 'GitHub' }
  ];
  
  const contactInfo = [
    { icon: <Mail size={16} />, text: 'hello@hackxcel.tech' },
    { icon: <Phone size={16} />, text: '+1 (555) 123-4567' },
    { icon: <MapPin size={16} />, text: 'Tech Hub, San Francisco, CA' }
  ];
  
  return (
    <footer className="bg-primary-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-white/70 max-w-xs">
              Empowering the next generation of tech leaders with cutting-edge education in Cybersecurity, AI, Data Science, and Cloud Computing.
            </p>
            
            <div className="mt-6 space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white/70">
                  <span className="text-accent">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-white/70 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-primary border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:border-accent"
              />
              <motion.button 
                type="submit"
                className="w-full py-2 bg-accent text-primary font-medium rounded hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        {/* Social Media and Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.name}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white/70 hover:text-accent hover:bg-primary-light transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <p className="text-white/50 text-sm text-center md:text-right">
            © {new Date().getFullYear()} HACKXCEL. All rights reserved. 
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-accent transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;