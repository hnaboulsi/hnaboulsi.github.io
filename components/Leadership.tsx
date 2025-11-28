import React from 'react';
import { LEADERSHIP } from '../data';
import { Users, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Leadership: React.FC = () => {
  const icons = [Users, Award, Rocket];

  return (
    <section id="leadership" className="py-20 bg-white dark:bg-navy transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Leadership & Outreach
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 dark:bg-deep-purple/20 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-white dark:bg-navy rounded-full shadow-md flex items-center justify-center mb-6 text-electric">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                <p className="text-electric font-medium mb-4">{item.org}</p>
                
                <div className="text-3xl font-display font-bold text-slate-900 dark:text-berkeley mb-4">
                  {item.stats}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;