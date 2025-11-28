import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

const categories = ['All', 'Power Systems', 'IoT Hardware', 'PCB Design', 'Battery Research'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-navy transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of hardware implementations, research prototypes, and embedded systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-electric text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-50 dark:bg-[#0d1630] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-electric dark:hover:border-electric transition-colors"
              >
                {/* Placeholder Image Gradient */}
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <Layers className="text-slate-400/50 dark:text-slate-600/50 w-20 h-20" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-slate-300 text-sm mb-4 line-clamp-4">{project.description}</p>
                    <button className="text-electric font-semibold flex items-center gap-2 hover:underline">
                      View Details <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-bold text-electric uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-electric transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-3 mt-4">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-berkeley"></div>
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-500 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;