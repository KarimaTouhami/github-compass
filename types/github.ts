/**
 * GitHub API Type Definitions
 */

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export interface GitHubAPIResponse {
  profileData: GitHubProfile;
  reposData: GitHubRepo[];
  publicGistsCount: number;
  publicPRsCount: number;
}
