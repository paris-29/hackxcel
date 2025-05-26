import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatbotAvatar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi there! I'm XCEL, your AI course assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: input, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      let response = '';
      
      if (input.toLowerCase().includes('course') || input.toLowerCase().includes('courses')) {
        response = "We offer cutting-edge courses in Cybersecurity, AI & Machine Learning, Data Science, and Cloud Computing. Which area are you interested in?";
      } else if (input.toLowerCase().includes('price') || input.toLowerCase().includes('cost') || input.toLowerCase().includes('pricing')) {
        response = "Our courses start at $499 for self-paced learning, with premium options including mentorship at $999. We also offer enterprise solutions for teams.";
      } else if (input.toLowerCase().includes('job') || input.toLowerCase().includes('career') || input.toLowerCase().includes('work')) {
        response = "HACKXCEL has a 96% job placement rate! Our career services team works with you on resume building, interview prep, and connecting with our 200+ hiring partners.";
      } else {
        response = "Thanks for reaching out! I'd be happy to help with that. Could you provide a bit more information about what you're looking for?";
      }
      
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
    
    // Clear input
    setInput('');
  };
  
  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-primary-dark border border-accent/30 rounded-lg shadow-xl overflow-hidden z-50"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-secondary to-accent p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl font-bold">X</span>
                </div>
                <div>
                  <h3 className="font-bold">XCEL AI Assistant</h3>
                  <p className="text-xs opacity-80">Online | Responds instantly</p>
                </div>
              </div>
            </div>
            
            {/* Messages Container */}
            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`max-w-3/4 ${message.isBot ? 'self-start' : 'self-end'}`}
                >
                  <div 
                    className={`p-3 rounded-lg ${
                      message.isBot 
                        ? 'bg-primary-light text-white'
                        : 'bg-accent/90 text-primary'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                placeholder="Ask about our courses..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-primary-light border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:border-accent"
              />
              <motion.button
                type="submit"
                className="bg-accent text-primary p-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!input.trim()}
              >
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotAvatar;