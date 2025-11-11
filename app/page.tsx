"use client"

import { useState } from 'react';
import { GitHubProfile, GitHubRepo } from '@/types/github';
import { fetchGitHubData } from '@/lib/github-api';
import { SearchBar } from '@/components/SearchBar';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { UserProfileCard } from '@/components/UserProfileCard';
import { RepoAnalysis } from '@/components/RepoAnalysis';
import { SpeedInsights } from "@vercel/speed-insights/next"

/**
 * Main Application Component - GitHub Compass
 */
export default function App() {
  const [username, setUsername] = useState<string>('');
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [publicGistsCount, setPublicGistsCount] = useState<number>(0);
  const [publicPRsCount, setPublicPRsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles fetching GitHub data
   */
  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    setProfile(null);
    setRepos(null);

    try {
      const data = await fetchGitHubData(username);
      setProfile(data.profile);
      setRepos(data.repos);
      setPublicGistsCount(data.publicGistsCount);
      setPublicPRsCount(data.publicPRsCount);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles the form submission
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFetchData();
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <header className="text-center pt-20 pb-16">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-6 tracking-tight leading-none">
            GitHub<br />Compass
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Get a simple, recruiter-friendly report from any GitHub profile.
          </p>
        </header>

        {/* --- SEARCH BAR --- */}
        <div className="max-w-3xl mx-auto mb-20">
          <SearchBar
            username={username}
            loading={loading}
            onUsernameChange={setUsername}
            onSubmit={handleSubmit}
          />
        </div>

        {/* --- RESULTS AREA --- */}
        <div className="min-h-[400px] pb-20">
          {/* Loading State */}
          {loading && <LoadingSpinner />}

          {/* Error State */}
          {error && <ErrorMessage message={error} />}

          {/* Success State - Display Dashboard */}
          {profile && repos && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <UserProfileCard 
                  profile={profile} 
                  publicGistsCount={publicGistsCount}
                  publicPRsCount={publicPRsCount}
                />
              </div>
              <div className="lg:col-span-2">
                <RepoAnalysis repos={repos} />
              </div>
            </div>
          )}
        </div>
        
        {/* --- FOOTER --- */}
        <footer className="text-center pb-12 text-white/60 text-sm">
          <p>Built to show what&apos;s under the hood, not just on the surface.</p>
        </footer>
        <SpeedInsights />
      </div>
    </div>
  );
}