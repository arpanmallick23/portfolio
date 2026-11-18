import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, FolderGit2, Briefcase, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'personal') return !proj.isInternship;
    if (filter === 'internship') return proj.isInternship;
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#09090B]">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Software & <span className="text-gradient-purple">Web Projects</span>
          </motion.h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            A blend of personal full-stack platforms and production modules engineered during company internship.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30'
                : 'bg-[#121218] text-zinc-400 hover:text-white border border-white/[0.06]'
            }`}
          >
            All Work ({PROJECTS.length})
          </button>
          <button
            onClick={() => setFilter('personal')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'personal'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30'
                : 'bg-[#121218] text-zinc-400 hover:text-white border border-white/[0.06]'
            }`}
          >
            Personal Projects (2)
          </button>
          <button
            onClick={() => setFilter('internship')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'internship'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30'
                : 'bg-[#121218] text-zinc-400 hover:text-white border border-white/[0.06]'
            }`}
          >
            Company Work (2)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-[#111117] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 p-6 sm:p-8 hover:shadow-2xl hover:shadow-purple-900/10 group"
            >
              <div>
                {/* Card Top: Badges & Links */}
                <div className="flex items-center justify-between mb-4">
                  {project.isInternship ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Briefcase className="w-3 h-3" />
                      Company Experience ({project.company})
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <FolderGit2 className="w-3 h-3" />
                      Personal Project
                    </span>
                  )}

                  {/* External links */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Main Overview */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Detailed Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Tags */}
                <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] ${project.githubUrl ? 'mb-5' : ''}`}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#171722] text-zinc-300 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA for personal projects only */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-purple-600/20 text-zinc-200 hover:text-purple-200 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
