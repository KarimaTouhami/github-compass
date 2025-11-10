import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com';

/**
 * Handles GET requests to /api/github
 * Fetches data from the GitHub API on the server.
 * @param {Request} request
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    // We use the GitHub token from environment variables for a higher rate limit
    // Make sure to create a .env.local file with GITHUB_TOKEN=your_personal_access_token
    const githubToken = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };
    if (githubToken) {
      headers['Authorization'] = `token ${githubToken}`;
    }

    // Use Promise.all to fetch profile, repos, gists, and PRs in parallel
    const [profileResponse, reposResponse, gistsResponse, prsResponse] = await Promise.all([
      fetch(`${GITHUB_API_URL}/users/${username}`, { headers }),
      fetch(`${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=100`, { headers }),
      fetch(`${GITHUB_API_URL}/users/${username}/gists`, { headers }), // NEW: Fetch gists
      fetch(`${GITHUB_API_URL}/search/issues?q=author:${username}+is:pr+is:public`, { headers }) // NEW: Fetch public PRs
    ]);

    if (!profileResponse.ok) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const profileData = await profileResponse.json();
    const reposData = reposResponse.ok ? await reposResponse.json() : [];
    const gistsData = gistsResponse.ok ? await gistsResponse.json() : []; // NEW: Get gist data
    const prsData = prsResponse.ok ? await prsResponse.json() : { total_count: 0 }; // NEW: Get PR search results

    // Extract the counts
    const publicGistsCount = gistsData.length;
    const publicPRsCount = prsData.total_count || 0; // The search API provides a total_count

    // Send the combined data back to the client
    return NextResponse.json({ 
      profileData, 
      reposData,
      publicGistsCount, // NEW
      publicPRsCount    // NEW
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
