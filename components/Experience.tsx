import React from 'react';
import { EXPERIENCES } from '../data';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-[#0e1526] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
            Experience
          </h2>
          <div className="h-1 w-12 bg-electric rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-[#131d33] rounded-lg p-6 md:p-8 border border-slate-200 dark:border-slate-800 hover:border-electric/30 dark:hover:border-electric/30 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-electric transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 text-sm text-slate-500 dark:text-slate-400 md:text-right shrink-0">
                  <span className="flex items-center gap-2 md:justify-end">
                    <Calendar size={14} className="text-electric" /> 
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-2 md:justify-end">
                    <MapPin size={14} className="text-electric" /> 
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <ArrowRight size={16} className="text-electric shrink-0 mt-1" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-xs font-medium text-slate-600 dark:text-slate-400 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;