import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Sparkles, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const connectChannels = [
    {
      title: 'Email Direct',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      description: 'Send an email directly via your default mail client.',
      icon: Mail,
      actionText: 'Compose Email',
      highlight: true
    },
    {
      title: 'LinkedIn Network',
      value: 'linkedin.com/in/arpan-mallick',
      href: PERSONAL_INFO.linkedin,
      description: 'Connect professionally, review credentials & endorsements.',
      icon: Linkedin,
      actionText: 'View Profile',
      external: true
    },
    {
      title: 'GitHub Repositories',
      value: 'github.com/arpanmallick23',
      href: PERSONAL_INFO.github,
      description: 'Explore open source codebases, contributions & commits.',
      icon: Github,
      actionText: 'Explore Code',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#09090B]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's <span className="text-gradient-purple">Connect</span>
          </motion.h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            I am actively seeking <strong className="text-zinc-200">Software Development Engineer (SDE) internships</strong> and full-stack software development roles. Whether you have an exciting opportunity, a technical question, or want to collaborate, feel free to reach out through any of the channels below.
          </motion.p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {connectChannels.map((channel, idx) => {
            const Icon = channel.icon;

            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl bg-[#111117] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 ${
                  channel.highlight
                    ? 'border-purple-500/30 hover:border-purple-500/60 shadow-lg shadow-purple-900/10'
                    : 'border-white/[0.08] hover:border-purple-500/30'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {channel.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Primary
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5">
                    {channel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {channel.description}
                  </p>

                  <div className="text-xs font-mono text-zinc-300 truncate bg-[#171722] p-2.5 rounded-lg border border-white/[0.06] mb-6">
                    {channel.value}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-purple-600 text-zinc-200 hover:text-white border border-white/[0.08] hover:border-purple-500 transition-all duration-200"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {channel.title === 'Email Direct' && (
                    <button
                      onClick={handleCopyEmail}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Open Availability Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/25 via-[#12121A] to-purple-950/25 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">
                Open for Engineering Opportunities
              </p>
              <p className="text-xs text-zinc-400">
                Available for internships, full-stack software development roles, and technical collaborations.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Development%20Role%20Inquiry`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-purple-900/30 shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Say Hello Directly</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
