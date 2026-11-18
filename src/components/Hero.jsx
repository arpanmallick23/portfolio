import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Terminal, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2310_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2310_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for SDE Internships & Full-Stack Roles</span>
            </div>

            {/* Introduction & Name */}
            <div className="space-y-2">
              <p className="text-zinc-400 font-medium text-base sm:text-lg tracking-wide uppercase font-mono">
                {PERSONAL_INFO.shortIntro}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Arpan <span className="text-gradient-purple">Mallick</span>
              </h1>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-300">
              Full-Stack Developer <span className="text-purple-400">|</span> Aspiring Software Engineer
            </h2>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm sm:text-base hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Arpan-Mallick-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-purple-500/50 text-zinc-200 hover:text-white font-semibold text-sm sm:text-base hover:bg-zinc-800/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-5 h-5 text-amber-400/90" />
                <span className="text-sm font-medium">LeetCode</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Visual / Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full max-w-lg mx-auto"
          >
            <div className="relative group">
              {/* Card Ambient Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-purple-600/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Terminal Window */}
              <div className="relative rounded-2xl bg-[#0F0F14] border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#16161D] border-b border-white/[0.08]">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>arpan@dev-station:~/portfolio</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* Terminal Content */}
                <div className="p-5 space-y-4 text-zinc-300 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">developer</span> = &#123;
                  </div>
                  
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-zinc-400">name:</span>{' '}
                      <span className="text-emerald-300">'Arpan Mallick'</span>,
                    </div>
                    <div>
                      <span className="text-zinc-400">role:</span>{' '}
                      <span className="text-emerald-300">'Full-Stack Engineer'</span>,
                    </div>
                    <div>
                      <span className="text-zinc-400">education:</span>{' '}
                      <span className="text-emerald-300">'B.Tech CSE @ FIEM'</span>,
                    </div>
                    <div>
                      <span className="text-zinc-400">cgpa:</span>{' '}
                      <span className="text-amber-400">8.40</span>,
                    </div>
                    <div>
                      <span className="text-zinc-400">stack:</span> [
                      <span className="text-purple-300">'React'</span>,{' '}
                      <span className="text-purple-300">'NestJS'</span>,{' '}
                      <span className="text-purple-300">'Node'</span>,{' '}
                      <span className="text-purple-300">'Prisma'</span>],
                    </div>
                    <div>
                      <span className="text-zinc-400">currentInternship:</span>{' '}
                      <span className="text-emerald-300">'Beas Consultancy'</span>,
                    </div>
                    <div>
                      <span className="text-zinc-400">openForRoles:</span>{' '}
                      <span className="text-purple-400">true</span>
                    </div>
                  </div>

                  <div>&#125;;</div>

                  <div className="pt-2 text-zinc-500 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready for deployment
                    </span>
                    <span className="text-zinc-500">Node v22 &bull; ESM</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
