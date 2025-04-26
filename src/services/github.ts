import { Repository, GithubProfile } from '../types';

// Replace with your GitHub username
const GITHUB_USERNAME = 'vitororigens';

export async function fetchRepositories(): Promise<Repository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const data: Repository[] = await response.json();
    return data.filter(repo => !repo.fork);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

export async function fetchProfile(): Promise<GithubProfile | null> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    
    const data: GithubProfile = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}