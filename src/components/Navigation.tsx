'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'formation', label: 'Formation' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projets Personnels' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState('home');
  
  return (
    <nav className="glass-panel fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="relative group">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-neon-blanc to-neon-blanc opacity-30 blur-lg group-hover:opacity-50 transition duration-300"
              animate={{
                scale: [1, 0.5, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div 
              className="relative flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
             
              <motion.h1 
                className="text-2xl font-military neon-text glitch"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                J.M_DEV
                <Shield className="w-4 h-4 text-neon-blanc absolute -top-2 -right-4" />
              </motion.h1>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`menu-item font-military ${activeItem === item.id ? 'text-neon-blanc' : ''}`}
                onClick={() => setActiveItem(item.id)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="scan-line" />
    </nav>
  );
};