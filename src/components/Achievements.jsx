import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Trophy: Trophy,
  Star: Star
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0A0A0E]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <span>Honors & Recognitions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Key <span className="text-gradient-purple">Achievements</span>
          </motion.h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Academic distinction and recognized performance in engineering project competitions.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-[#111117] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-purple-900/10"
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none group-hover:bg-purple-500/10 transition-colors" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-purple-400 uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>{item.primaryLabel}</span>
                  <span className="text-purple-400 font-semibold">{item.secondaryLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
