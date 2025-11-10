import { GitHubRepo } from '@/types/github';
import { RepoItem } from './RepoItem';

interface RepoListProps {
  title: string;
  repos: GitHubRepo[];
  icon: React.ReactNode;
}

/**
 * Displays a list of repositories
 */
export const RepoList = ({ title, repos, icon }: RepoListProps) => (
  <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
    <h3 className="text-3xl font-semibold text-white mb-8 flex items-center">
      <span className="text-white/70 mr-4">{icon}</span>
      {title}
    </h3>
    {repos.length === 0 ? (
      <p className="text-white/60 text-lg">No repositories to show.</p>
    ) : (
      <ul className="space-y-4">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    )}
  </div>
);
