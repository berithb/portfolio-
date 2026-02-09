import React, { useState, useEffect } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
}

const Work: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/berithb/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const languages = ['all', ...new Set(repos.map(r => r.language).filter(Boolean))];
  
  const filteredRepos = filter === 'all' 
    ? repos 
    : repos.filter(r => r.language === filter);

  if (loading) {
    return <div className="text-center text-xl">Loading repositories...</div>;
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-5">
        <h2 className="text-3xl md:text-4xl font-medium">My Repositories</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {languages.slice(0, 6).map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-5 py-2 rounded-lg capitalize text-sm transition-all whitespace-nowrap ${
                filter === lang ? 'bg-primary text-dark' : 'bg-tag hover:bg-primary hover:text-dark hover:-translate-y-0.5'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-xl transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-700 hover:border-primary"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-primary">{repo.name}</h3>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
              </svg>
            </div>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {repo.description || 'No description available'}
            </p>
            <div className="flex flex-wrap gap-2">
              {repo.language && (
                <span className="bg-tag px-3 py-1 rounded text-xs">{repo.language}</span>
              )}
              {repo.topics?.slice(0, 3).map((topic) => (
                <span key={topic} className="bg-gray-700 px-3 py-1 rounded text-xs">{topic}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
