/**
 * githubService.js
 * Service for querying GitHub's public REST API for user repositories with full pagination support.
 */

const GITHUB_USERNAME = 'arpanmallick23';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

/**
 * Categorize a repository based purely on authentic metadata:
 * primary language, topics, and description keywords.
 * If uncertain, defaults to 'Other'.
 */
export function classifyProject(repo) {
  const lang = (repo.language || '').toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const name = (repo.name || '').toLowerCase();
  const topics = (repo.topics || []).map((t) => t.toLowerCase());

  // AI / Machine Learning
  if (
    topics.some((t) => ['ai', 'gemini', 'machine-learning', 'llm', 'nlp', 'chatbot'].includes(t)) ||
    desc.includes('gemini') ||
    desc.includes('ai chatbot') ||
    desc.includes('machine learning') ||
    desc.includes('artificial intelligence') ||
    name.includes('gpt')
  ) {
    return 'AI / Machine Learning';
  }

  // Full Stack
  if (
    topics.some((t) => ['full-stack', 'fullstack', 'mern', 'mean', 'full stack'].includes(t)) ||
    desc.includes('full-stack') ||
    desc.includes('full stack') ||
    desc.includes('mern') ||
    (desc.includes('react') && (desc.includes('node') || desc.includes('express') || desc.includes('mongodb') || desc.includes('api'))) ||
    (desc.includes('php') && desc.includes('mysql'))
  ) {
    return 'Full Stack';
  }

  // Backend
  if (
    topics.some((t) => ['backend', 'api', 'nodejs', 'express', 'nestjs', 'database', 'rest-api'].includes(t)) ||
    desc.includes('backend') ||
    desc.includes('rest api') ||
    desc.includes('microservice') ||
    ['java', 'c', 'c++', 'go', 'python', 'rust', 'php'].includes(lang)
  ) {
    return 'Backend';
  }

  // Frontend
  if (
    topics.some((t) => ['frontend', 'react', 'html', 'css', 'ui', 'tailwind', 'javascript'].includes(t)) ||
    desc.includes('frontend') ||
    desc.includes('interface') ||
    desc.includes('clone') ||
    desc.includes('game') ||
    desc.includes('weather app') ||
    ['html', 'css', 'typescript', 'javascript'].includes(lang)
  ) {
    return 'Frontend';
  }

  return 'Other';
}

/**
 * Fetch all public repositories for the user across all pages.
 */
export async function fetchAllPublicRepos() {
  let allRepos = [];
  let page = 1;
  const perPage = 100;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `${GITHUB_API_URL}?per_page=${perPage}&page=${page}&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error(
          'GitHub API rate limit exceeded. Please wait a few moments or try again later.'
        );
      }
      throw new Error(`GitHub API request failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected GitHub API response structure.');
    }

    allRepos = allRepos.concat(data);

    // If fewer than 100 repositories returned, this was the last page
    if (data.length < perPage) {
      hasMore = false;
    } else {
      page += 1;
    }
  }

  return allRepos;
}

/**
 * Filter out excluded repositories:
 * - Excludes the portfolio repository itself (e.g. name: 'portfolio')
 * - Excludes archived repos (unless specifically requested)
 * - Excludes forks (unless includeForks is true)
 * - Excludes private repos
 */
export function filterEligibleRepos(repos, { includeForks = false, includeArchived = false } = {}) {
  return repos.filter((repo) => {
    // Exclude portfolio repo itself
    if (repo.name.toLowerCase() === 'portfolio') return false;

    // Exclude private repos
    if (repo.private) return false;

    // Check forks
    if (!includeForks && repo.fork) return false;

    // Check archived
    if (!includeArchived && repo.archived) return false;

    return true;
  });
}
