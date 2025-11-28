import React, { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Hardware Engineer | EECS @ UC Berkeley";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-navy opacity-90 z-0"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-purple/40 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            Hassan <span className="text-electric">Naboulsi</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-12 md:h-16"
        >
          <p className="text-xl md:text-3xl text-slate-300 font-light typing-cursor">
            {text}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex justify-center items-center"
        >
          <a href="#" className="group px-8 py-3 bg-transparent border-2 border-slate-400 text-slate-200 hover:border-berkeley hover:text-berkeley font-semibold rounded-full transition-all duration-300 flex items-center gap-2">
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <div className="mt-8 flex gap-6 justify-center text-slate-400 text-sm md:text-base">
          <a href="mailto:naboulsi@berkeley.edu" className="hover:text-electric transition-colors">naboulsi@berkeley.edu</a>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;