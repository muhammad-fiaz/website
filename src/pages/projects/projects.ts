
export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

// Fetch all public repositories from GitHub for the user
export async function fetchGithubProjects(username: string): Promise<Project[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`);
  if (!res.ok) return [];
  const repos = await res.json();
  return repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    demoLink: repo.homepage || repo.html_url,
    tags: repo.topics || [],
    githubUrl: repo.html_url,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    language: repo.language,
    updated_at: repo.updated_at,
  }));
}

export const projects: Project[] = await fetchGithubProjects('muhammad-fiaz');
