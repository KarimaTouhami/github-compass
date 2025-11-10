import { GitHubProfile, GitHubRepo } from '@/types/github';

/**
 * Fetches user profile and repository data from the GitHub API via our server-side API route.
 */
export async function fetchGitHubData(username: string): Promise<{
  profile: GitHubProfile;
  repos: GitHubRepo[];
  publicGistsCount: number;
  publicPRsCount: number;
}> {
  if (!username) {
    throw new Error('Please enter a GitHub username.');
  }

  // Call our server-side API route instead of directly calling GitHub
  const response = await fetch(`/api/github?username=${encodeURIComponent(username)}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch GitHub data.');
  }

  const data = await response.json();

  return {
    profile: data.profileData,
    repos: data.reposData,
    publicGistsCount: data.publicGistsCount,
    publicPRsCount: data.publicPRsCount
  };
}
