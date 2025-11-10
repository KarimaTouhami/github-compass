# Components Documentation

This directory contains all reusable UI components for the GitHub Compass application.

## Component Categories

### 🔍 Search & Input
- **SearchBar** - Main search interface for entering GitHub usernames

### 📊 Data Display
- **UserProfileCard** - Displays GitHub user profile information
- **RepoAnalysis** - Main analysis component with repository insights
- **RepoList** - Container for displaying repository lists
- **RepoItem** - Individual repository card with details
- **LanguageChart** - Visual chart showing language distribution
- **AnalysisStat** - Metric card for displaying statistics
- **StatBox** - Compact statistic display

### 💬 Feedback
- **LoadingSpinner** - Loading state indicator
- **ErrorMessage** - Error state display

### 🎨 Icons
All icons are in the `icons/` subdirectory:
- **SearchIcon** - Magnifying glass icon
- **UserIcon** - User avatar icon  
- **StarIcon** - Star/favorite icon
- **CodeIcon** - Code brackets icon

## Usage Examples

### SearchBar
```tsx
<SearchBar
  username={username}
  loading={loading}
  onUsernameChange={setUsername}
  onSubmit={handleSubmit}
/>
```

### UserProfileCard
```tsx
<UserProfileCard profile={profileData} />
```

### RepoAnalysis
```tsx
<RepoAnalysis repos={reposData} />
```

### LoadingSpinner
```tsx
{loading && <LoadingSpinner />}
```

### ErrorMessage
```tsx
{error && <ErrorMessage message={error} />}
```

## Import Patterns

```typescript
// Named imports from barrel file
import { SearchBar, LoadingSpinner } from '@/components';

// Direct imports
import { UserProfileCard } from '@/components/UserProfileCard';

// Icon imports
import { StarIcon, UserIcon } from '@/components/icons';
```
