import projects from '@db/projects.json';
import type { Project, TechnologiesFilter } from './types';

type Args = {
  searchFilter: string;
  frontendFilter: TechnologiesFilter[];
  backendFilter: TechnologiesFilter[];
};

export function filterData({ searchFilter, frontendFilter, backendFilter }: Args): Project[] {
  const data: Project[] = [...projects];
  const normalizedSearch = searchFilter.trim().toLowerCase();
  const frontendKeys = frontendFilter.map(f => f.key);
  const backendKeys = backendFilter.map(f => f.key);

  return data
    .filter(project => {
      const titleMatch = project.title.toLowerCase().includes(normalizedSearch);

      const frontendMatch = frontendKeys.every(key => project.frontend.includes(key));

      const backendMatch = backendKeys.every(key => project.backend.includes(key));

      return titleMatch && frontendMatch && backendMatch;
    })
    .reverse();
}
