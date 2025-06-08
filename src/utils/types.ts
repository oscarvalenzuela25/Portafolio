export type TechnologiesFilter = {
  key: string;
  label: string;
  color: string;
  type: string[];
};

export type Project = {
  id: number;
  title: string;
  frontend: string[];
  backend: string[];
  url: string;
  platform: string[];
  externalLink: boolean;
  urlRepository: string;
  image: string;
};

export type SearchFilterType = 'SEARCH';
export type BackendFilterType = 'BACKEND';
export type FrontendFilterType = 'FRONTEND';

export type Technology = {
  key: string;
  label: string;
  color: string;
  type: string[];
};

export type FilterParams = {
  searchFilterParams: string;
  frontendFilterParams: Technology[];
  backendFilterParams: Technology[];
};

export type UpdateFiltersParams = {
  newSearchFilter?: string;
  newFrontendFilter?: Technology[];
  newBackendFilter?: Technology[];
};
