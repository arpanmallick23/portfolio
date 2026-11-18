import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Github, Terminal, GitBranch, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom SVG matching LeetCode's iconic brand shape
function LeetCodeIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.551 5.978 5.978 0 0 0 3.328-.494 6.01 6.01 0 0 0 2.217-1.841l3.976-4.987a1.365 1.365 0 1 0-2.133-1.704l-3.98 4.993a3.25 3.25 0 0 1-1.204.994 3.272 3.272 0 0 1-1.808.269 3.23 3.23 0 0 1-2.62-1.932 3.043 3.043 0 0 1-.19-.556 3.007 3.007 0 0 1-.033-1.286 2.87 2.87 0 0 1 .66-1.146l3.86-4.132 5.4-5.78a1.372 1.372 0 0 0-1.002-2.316z"/>
      <path d="M9.86 15.42a1.366 1.366 0 0 0 0 2.732h9.76a1.366 1.366 0 0 0 0-2.732H9.86z" fill="#FFA116"/>
    </svg>
  );
}

export default function CodingProfiles() {
  const profiles = [
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Open Source | Projects | Development',
      handle: 'arpanmallick23',
      url: PERSONAL_INFO.github,
      badge: 'Version Control',
      badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      iconNode: <Github className="w-8 h-8 text-white" />,
      glowCorner: 'from-purple-500/15 via-indigo-500/5',
      meta: 'Repositories &bull; Full-Stack &bull; Open Source'
    },
    {
      id: 'leetcode',
      title: 'LeetCode',
      subtitle: 'Problem Solving | Data Structures & Algorithms',
      handle: 'lVQGpQBMRE',
      url: PERSONAL_INFO.leetcode,
      badge: 'Algorithms',
      badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      iconNode: <LeetCodeIcon className="w-8 h-8" />,
      glowCorner: 'from-amber-500/15 via-purple-500/5',
      meta: 'DSA &bull; Java &bull; Problem Solving'
    }
  ];

  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden bg-[#0A0A0E]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Platforms</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Coding <span className="text-gradient-purple">Profiles</span>
          </motion.h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Continuous algorithmic problem solving, software craft, and open source development.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, idx) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-9 rounded-2xl bg-[#111117] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-900/15 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Ambient card glow corner */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${profile.glowCorner} to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500`} />

              <div>
                {/* Header row with Icon, Badge & Title */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#181822] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-500/30 transition-all duration-300 shadow-md">
                    {profile.iconNode}
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${profile.badgeClass}`}>
                    {profile.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {profile.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1 mb-5">
                  {profile.subtitle}
                </p>
              </div>

              {/* Bottom bar with Handle & Visit Profile action */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-zinc-400">
                  <span className="text-zinc-500">Handle: </span>
                  <strong className="text-zinc-200 font-semibold">{profile.handle}</strong>
                </div>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
                >
                  <span>Visit Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
