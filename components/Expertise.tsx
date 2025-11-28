import React from 'react';
import { SKILL_CATEGORIES } from '../data';
import { motion } from 'framer-motion';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-slate-50 dark:bg-[#0A1128] transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-berkeley mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-electric dark:hover:border-electric transition-all group"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors text-electric">
                <category.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-berkeley rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;