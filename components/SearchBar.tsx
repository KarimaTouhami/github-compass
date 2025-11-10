import { SearchIcon } from './icons';

interface SearchBarProps {
  username: string;
  loading: boolean;
  onUsernameChange: (username: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * GitHub username search bar component
 */
export const SearchBar = ({ username, loading, onUsernameChange, onSubmit }: SearchBarProps) => (
  <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4">
    <input
      type="text"
      value={username}
      onChange={(e) => onUsernameChange(e.target.value)}
      placeholder="Enter GitHub username"
      className="flex-1 px-8 py-5 bg-white/5 backdrop-blur-xl text-white text-lg border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 placeholder-white/40 transition-all duration-300 hover:bg-white/10"
      aria-label="GitHub Username"
    />
    <button
      type="submit"
      disabled={loading}
      className="px-10 py-5 bg-white text-black rounded-full font-medium text-lg transition-all duration-300 hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed flex items-center justify-center gap-3 whitespace-nowrap"
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Searching
        </>
      ) : (
        <>
          <SearchIcon />
          Search
        </>
      )}
    </button>
  </form>
);
