import { type StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type TechnologiesFilter } from '@utils/types';

interface ProjectStore {
  searchFilter: string;
  frontendFilter: TechnologiesFilter[];
  backendFilter: TechnologiesFilter[];

  setSearchFilter: (searchValue: string) => void;
  setFrontendFilter: (frontendValue: TechnologiesFilter[]) => void;
  setBackendFilter: (backendValue: TechnologiesFilter[]) => void;
  resetFilters: () => void;

  getTechnologiesSelected: () => TechnologiesFilter[];
}

const projectStore: StateCreator<ProjectStore, [['zustand/immer', never]]> = (set, get) => ({
  searchFilter: '',
  frontendFilter: [],
  backendFilter: [],

  setSearchFilter: (searchValue: string) => {
    set((prevState: ProjectStore) => {
      prevState.searchFilter = searchValue;
    });
  },
  setFrontendFilter: (frontendValue: TechnologiesFilter[]) => {
    set((prevState: ProjectStore) => {
      prevState.frontendFilter = frontendValue;
    });
  },
  setBackendFilter: (backendValue: TechnologiesFilter[]) => {
    set((prevState: ProjectStore) => {
      prevState.backendFilter = backendValue;
    });
  },
  resetFilters: () => {
    set((prevState: ProjectStore) => {
      prevState.searchFilter = '';
      prevState.frontendFilter = [];
      prevState.backendFilter = [];
    });
  },

  getTechnologiesSelected: () => {
    const { frontendFilter, backendFilter } = get();
    return [...frontendFilter, ...backendFilter];
  },
});

const useProjectsStore = create<ProjectStore>()(
  persist(immer(projectStore), { name: 'projects-store' })
);

export default useProjectsStore;
