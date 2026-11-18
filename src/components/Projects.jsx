import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Sparkles,
  FolderGit2,
  Briefcase,
  Star,
  GitFork,
  Calendar,
  RotateCw,
  AlertCircle,
  Flame
} from 'lucide-react';
import {
  fetchAllPublicRepos,
  filterEligibleRepos,
  classifyProject
} from '../services/githubService';
import {
  FEATURED_PROJECT_NAMES,
  INTERNSHIP_PROJECTS
} from '../data/portfolioData';

// Helper to format GitHub ISO dates
function formatUpdatedDate(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Clean language color mapping
const LANGUAGE_COLORS = {
  JavaScript: 'bg-amber-400',
  TypeScript: 'bg-blue-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-indigo-400',
  PHP: 'bg-purple-400',
  Java: 'bg-red-500',
  Python: 'bg-emerald-400',
  C: 'bg-zinc-400'
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('github'); // 'github' | 'internship'

  // Fetch repositories from GitHub
  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const rawRepos = await fetchAllPublicRepos();
      const eligible = filterEligibleRepos(rawRepos, {
        includeForks: false,
        includeArchived: false
      });

      // Enrich with authentic category classification
      const enriched = eligible.map((repo) => ({
        ...repo,
        category: classifyProject(repo)
      }));

      setRepos(enriched);
    } catch (err) {
      console.error('Failed to fetch GitHub repositories:', err);
      setError(
        err.message || 'Unable to connect to GitHub. Please check your network or try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Separate Featured Repositories according to curated priority list
  const { featuredRepos, regularRepos } = useMemo(() => {
    const featured = [];
    const regular = [];

    // Map by lowercased name for reliable lookup
    const repoMap = new Map();
    repos.forEach((r) => repoMap.set(r.name.toLowerCase(), r));

    // Pick in exact curated order
    FEATURED_PROJECT_NAMES.forEach((key) => {
      if (repoMap.has(key)) {
        featured.push(repoMap.get(key));
        repoMap.delete(key);
      }
    });

    // Remainder go to regular collection
    repos.forEach((r) => {
      if (repoMap.has(r.name.toLowerCase())) {
        regular.push(r);
      }
    });

    return { featuredRepos: featured, regularRepos: regular };
  }, [repos]);

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
            <span>Open Source &amp; Engineering Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Software &amp; <span className="text-gradient-purple">Web Projects</span>
          </motion.h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Live public repositories dynamically synchronized from GitHub, alongside enterprise company modules.
          </p>
        </div>

        {/* Primary View Switcher: GitHub Repositories vs Company Internship Work */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('github')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'github'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30'
                : 'bg-[#121218] text-zinc-400 hover:text-white border border-white/[0.06]'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Public GitHub Repositories {!loading && `(${repos.length})`}</span>
          </button>

          <button
            onClick={() => setActiveTab('internship')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'internship'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30'
                : 'bg-[#121218] text-zinc-400 hover:text-white border border-white/[0.06]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Company Experience ({INTERNSHIP_PROJECTS.length})</span>
          </button>
        </div>

        {/* Tab 1: Dynamic GitHub Repositories */}
        {activeTab === 'github' && (
          <div className="space-y-16">
            
            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="p-6 rounded-2xl bg-[#111117] border border-white/[0.06] animate-pulse space-y-4"
                  >
                    <div className="h-5 bg-white/10 rounded w-2/3" />
                    <div className="h-4 bg-white/5 rounded w-full" />
                    <div className="h-4 bg-white/5 rounded w-4/5" />
                    <div className="pt-6 border-t border-white/[0.04] flex justify-between">
                      <div className="h-4 bg-white/5 rounded w-16" />
                      <div className="h-4 bg-white/5 rounded w-20" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {!loading && error && (
              <div className="p-8 rounded-2xl bg-red-950/20 border border-red-500/30 text-center max-w-xl mx-auto space-y-4">
                <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">GitHub API Notice</h3>
                <p className="text-sm text-zinc-300">{error}</p>
                <button
                  onClick={fetchRepos}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors shadow-md shadow-purple-900/30"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Retry Fetching</span>
                </button>
              </div>
            )}

            {/* Content loaded successfully */}
            {!loading && !error && (
              <>
                {/* 1. Curated Featured Projects Subsection */}
                {featuredRepos.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <Flame className="w-5 h-5 text-purple-400" />
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Featured <span className="text-purple-400">Highlights</span>
                      </h3>
                      <span className="text-xs font-mono text-zinc-500 ml-2">
                        Top Architectural Solutions
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {featuredRepos.map((repo, idx) => (
                        <motion.div
                          key={repo.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#15151F] to-[#111117] border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 p-6 sm:p-8 hover:shadow-2xl hover:shadow-purple-900/20 group relative overflow-hidden"
                        >
                          {/* Corner ambient glow */}
                          <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                          <div>
                            {/* Card Top: Badges & Live Status */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                                <Sparkles className="w-3 h-3 text-purple-400" />
                                Featured Project
                              </span>

                              <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                                {repo.stargazers_count > 0 && (
                                  <span className="flex items-center gap-1 text-amber-400">
                                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                                    {repo.stargazers_count}
                                  </span>
                                )}
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                                  {formatUpdatedDate(repo.updated_at)}
                                </span>
                              </div>
                            </div>

                            {/* Repo Title */}
                            <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2.5">
                              {repo.name}
                            </h4>

                            {/* Authentic Description */}
                            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                              {repo.description || 'No description provided.'}
                            </p>
                          </div>

                          <div>
                            {/* Meta Badges */}
                            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06] mb-6">
                              {repo.language && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#171722] text-zinc-300 border border-white/[0.06]">
                                  <span
                                    className={`w-2 h-2 rounded-full ${
                                      LANGUAGE_COLORS[repo.language] || 'bg-purple-400'
                                    }`}
                                  />
                                  {repo.language}
                                </span>
                              )}

                              <span className="px-2.5 py-1 rounded-md text-xs font-mono text-purple-300 bg-purple-950/30 border border-purple-500/20">
                                {repo.category}
                              </span>

                              {(repo.topics || []).map((topic) => (
                                <span
                                  key={topic}
                                  className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-400 bg-[#171722] border border-white/[0.05]"
                                >
                                  #{topic}
                                </span>
                              ))}
                            </div>

                            {/* Action Buttons: GitHub & Optional Live Demo */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/[0.08] hover:border-purple-500/40 transition-all duration-200"
                              >
                                <Github className="w-4 h-4" />
                                <span>GitHub Repository</span>
                              </a>

                              {repo.homepage ? (
                                <a
                                  href={repo.homepage}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200 shadow-md shadow-purple-900/30"
                                >
                                  <span>Live Demo</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              ) : (
                                <div className="hidden sm:block" />
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Complete Repository List in Clean Responsive Grid */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      All Public <span className="text-purple-400">Repositories</span>
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      {regularRepos.length} Repositories
                    </p>
                  </div>

                  {regularRepos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {regularRepos.map((repo, idx) => (
                        <motion.div
                          key={repo.id}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="p-6 rounded-2xl bg-[#111117] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10"
                        >
                          <div>
                            {/* Card Top: Category & Stats */}
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-purple-300 bg-purple-950/40 border border-purple-500/20">
                                {repo.category}
                              </span>

                              <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
                                {repo.stargazers_count > 0 && (
                                  <span className="flex items-center gap-1 text-amber-400">
                                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                                    {repo.stargazers_count}
                                  </span>
                                )}
                                {repo.forks_count > 0 && (
                                  <span className="flex items-center gap-1 text-zinc-400">
                                    <GitFork className="w-3.5 h-3.5" />
                                    {repo.forks_count}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Repo Title */}
                            <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                              {repo.name}
                            </h4>

                            {/* Authentic Description */}
                            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                              {repo.description || 'No description provided.'}
                            </p>
                          </div>

                          <div>
                            {/* Meta row: Language & Update Date */}
                            <div className="pt-4 border-t border-white/[0.06] mb-4 flex items-center justify-between text-xs text-zinc-400 font-mono">
                              <div className="flex items-center gap-1.5">
                                {repo.language ? (
                                  <>
                                    <span
                                      className={`w-2 h-2 rounded-full ${
                                        LANGUAGE_COLORS[repo.language] || 'bg-purple-400'
                                      }`}
                                    />
                                    <span>{repo.language}</span>
                                  </>
                                ) : (
                                  <span className="text-zinc-500">Plain text</span>
                                )}
                              </div>

                              <span className="text-zinc-500">
                                {formatUpdatedDate(repo.updated_at)}
                              </span>
                            </div>

                            {/* Action CTA buttons */}
                            <div className="flex items-center gap-2">
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/[0.08] hover:border-purple-500/40 transition-all duration-200"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Repository</span>
                              </a>

                              {repo.homepage && (
                                <a
                                  href={repo.homepage}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200"
                                  title="Open live deployment"
                                >
                                  <span>Demo</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </>
            )}

          </div>
        )}

        {/* Tab 2: Company Internship Work (Proprietary enterprise projects) */}
        {activeTab === 'internship' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm flex items-center gap-2.5">
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>
                Enterprise proprietary systems engineered during professional company internship at <strong>Beas Consultancy and Services Pvt. Ltd.</strong> (Source code confidential).
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INTERNSHIP_PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col justify-between rounded-2xl bg-[#111117] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 p-6 sm:p-8 hover:shadow-2xl hover:shadow-purple-900/10 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Briefcase className="w-3 h-3" />
                        Company Experience ({project.company})
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                      {project.title}
                    </h4>

                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

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
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#171722] text-zinc-300 border border-white/[0.05]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
