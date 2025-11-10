import { GitHubProfile } from '@/types/github';
import { StatBox } from './StatBox';

interface UserProfileCardProps {
  profile: GitHubProfile;
  publicGistsCount?: number;
  publicPRsCount?: number;
}

/**
 * Displays the main user profile card
 */
export const UserProfileCard = ({ profile, publicGistsCount = 0, publicPRsCount = 0 }: UserProfileCardProps) => (
  <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl sticky top-8 hover:bg-white/10 transition-all duration-300">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={profile.avatar_url}
      alt={`${profile.name || profile.login}'s avatar`}
      className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl"
    />
    <h2 className="text-4xl font-bold text-center text-white mb-3">{profile.name}</h2>
    <p className="text-lg text-center text-white/70 mb-6">
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
        @{profile.login}
      </a>
    </p>
    <p className="text-white/60 text-center mb-10 text-base leading-relaxed">{profile.bio || 'No bio provided.'}</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10">
      <StatBox label="Followers" value={profile.followers} />
      <StatBox label="Following" value={profile.following} />
      <StatBox label="Repos" value={profile.public_repos} />
      <StatBox label="Gists" value={publicGistsCount} />
      <div className="sm:col-span-2">
        <StatBox label="Public PRs" value={publicPRsCount} />
      </div>
    </div>

    <a
      href={profile.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-white text-black font-medium py-4 rounded-full transition-all duration-300 hover:bg-white/90"
    >
      View on GitHub
    </a>
  </div>
);
