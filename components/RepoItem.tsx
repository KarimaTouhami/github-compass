import { GitHubRepo } from '@/types/github';
import { CodeIcon, StarIcon } from './icons';

interface RepoItemProps {
  repo: GitHubRepo;
}

/**
 * Displays a single repository item
 */
export const RepoItem = ({ repo }: RepoItemProps) => (
  <li className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex justify-between items-start mb-3 gap-4">
        <h4 className="text-xl font-semibold text-white hover:text-white/80 transition-colors flex-1 min-w-0 wrap-break-word">{repo.name}</h4>
        <div className="flex items-center space-x-4 text-sm text-white/60 shrink-0">
          {repo.language && (
            <span className="flex items-center gap-2 whitespace-nowrap">
              <CodeIcon />
              <span>{repo.language}</span>
            </span>
          )}
          <span className="flex items-center gap-2 whitespace-nowrap">
            <StarIcon />
            <span>{repo.stargazers_count}</span>
          </span>
        </div>
      </div>
      <p className="text-base text-white/50 mb-3 line-clamp-2 leading-relaxed wrap-break-word">{repo.description || 'No description provided.'}</p>
      <p className="text-sm text-white/40">
        Last updated: {new Date(repo.updated_at).toLocaleDateString()}
      </p>
    </a>
  </li>
);
