import { GitHubRepo } from '@/types/github';
import { StarIcon, UserIcon } from './icons';
import { AnalysisStat } from './AnalysisStat';
import { LanguageChart } from './LanguageChart';
import { RepoList } from './RepoList';

interface RepoAnalysisProps {
  repos: GitHubRepo[];
}

/**
 * Analyzes and displays repository information
 */
export const RepoAnalysis = ({ repos }: RepoAnalysisProps) => {
  // --- Data Processing ---
  // This is where you show your logic.
  // We're analyzing the repos, not just listing them.
  
  // 1. Filter out forks
  const originalRepos = repos.filter((repo) => !repo.fork);
  
  // 2. Get top 5 most-starred original repos
  const sortedByStars = [...originalRepos].sort((a, b) => b.stargazers_count - a.stargazers_count);
  const top5Starred = sortedByStars.slice(0, 5);

  // 3. Get top 5 most recently updated original repos
  const sortedByUpdated = [...originalRepos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  const top5Recent = sortedByUpdated.slice(0, 5);

  // 4. Calculate language statistics
  const languageStats = originalRepos.reduce((stats: Record<string, number>, repo) => {
    if (repo.language) {
      stats[repo.language] = (stats[repo.language] || 0) + 1;
    }
    return stats;
  }, {});

  const topLanguages = Object.entries(languageStats)
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .slice(0, 5);
  
  const totalOriginalRepos = originalRepos.length;

  return (
    <div className="space-y-8">
      {/* --- At a Glance Analysis --- */}
      <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
        <h3 className="text-3xl font-semibold text-white mb-8">
          At a Glance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnalysisStat
            label="Total Original Repos"
            value={totalOriginalRepos}
            helpText="Projects they built themselves (not forks)."
          />
          <AnalysisStat
            label="Total Forks"
            value={repos.length - totalOriginalRepos}
            helpText="Projects they copied, possibly to contribute."
          />
          <AnalysisStat
            label="Most Used Languages"
            value={topLanguages.length > 0 ? topLanguages.map(lang => lang[0]).join(', ') : 'N/A'}
            helpText="The top 5 languages used in their original projects."
          />
        </div>
      </div>
      
      {/* --- Language Chart --- */}
      <LanguageChart languages={topLanguages} total={totalOriginalRepos} />
      
      {/* --- Top Starred Repos --- */}
      <RepoList title="Top Starred Projects" repos={top5Starred} icon={<StarIcon />} />
      
      {/* --- Recently Updated Repos --- */}
      <RepoList title="Recently Active Projects" repos={top5Recent} icon={<UserIcon />} />
    </div>
  );
};
