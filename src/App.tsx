import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';
import ChatbotAvatar from './components/ChatbotAvatar';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize page animations
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-in'),
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="circuit-pattern min-h-screen">
      <Header />
      <main>
        <Hero />
        <Courses />
        <WhyChooseUs />
        <SuccessStories />
      </main>
      <Footer />
      <ChatbotAvatar />
    </div>
  );
}

export default App;