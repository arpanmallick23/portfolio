import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, Code, CheckCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0E]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Mission</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-gradient-purple">Me</span>
          </motion.h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Narrative & Passion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 rounded-2xl bg-[#111117] border border-white/[0.08] shadow-xl hover:border-purple-500/20 transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <Compass className="w-4 h-4" />
                <span>My Philosophy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Building practical software with engineering precision.
              </h3>

              <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                {PERSONAL_INFO.aboutText}
              </p>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                With real-world internship experience developing enterprise restaurant ERP modules and high-concurrency management platforms, I bridge the gap between frontend user experience and resilient backend architectures.
              </p>
            </div>

            {/* Core Values / Strengths list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-6 border-t border-white/[0.06]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Full-Stack Capability</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">From reactive UIs to optimized SQL queries and Prisma ORM.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Systematic Problem Solver</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Strong foundation in Data Structures, Algorithms, and DBMS.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Education & Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Degree Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#14141E] to-[#111117] border border-white/[0.08] relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 text-purple-500/10 group-hover:text-purple-500/20 transition-colors pointer-events-none">
                <GraduationCap className="w-32 h-32 -mr-8 -mt-8" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">Education</span>
                  <h4 className="text-lg font-bold text-white">B.Tech in CSE</h4>
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                <p className="text-zinc-200 font-medium text-base">
                  {PERSONAL_INFO.education.institution}
                </p>
                <div className="inline-block px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-300 font-mono text-sm">
                  CGPA: <strong className="text-white font-bold">{PERSONAL_INFO.education.cgpa}</strong> ({PERSONAL_INFO.education.period})
                </div>
              </div>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#111117] border border-white/[0.08] hover:border-purple-500/20 transition-all text-center">
                <div className="text-3xl font-extrabold text-gradient-purple mb-1 font-mono">
                  8.40
                </div>
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  B.Tech CGPA
                </div>
                <div className="text-[11px] text-zinc-500 mt-1">Up to 6th Semester</div>
              </div>

              <div className="p-6 rounded-2xl bg-[#111117] border border-white/[0.08] hover:border-purple-500/20 transition-all text-center">
                <div className="text-3xl font-extrabold text-white mb-1 font-mono">
                  Top 10
                </div>
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Academic Rank
                </div>
                <div className="text-[11px] text-purple-400 mt-1">2nd Year YGPA Merit</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
