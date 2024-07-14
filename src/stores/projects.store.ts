import { type StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ProjectStore {
  searchFilter: string;
  frontendFilter: string[];
  backendFilter: string[];

  setSearchFilter: (searchValue: string) => void;
  setFrontendFilter: (frontendValue: string[]) => void;
  setBackendFilter: (backendValue: string[]) => void;

  getTechnologiesSelected: () => string[];
}

const projectStore: StateCreator<
  ProjectStore,
  [['zustand/devtools', never], ['zustand/immer', never]]
> = (set, get) => ({
  searchFilter: '',
  frontendFilter: [],
  backendFilter: [],

  setSearchFilter: (searchValue: string) => {
    set((prevState: ProjectStore) => {
      prevState.searchFilter = searchValue;
    });
  },
  setFrontendFilter: (frontendValue: string[]) => {
    set((prevState: ProjectStore) => {
      prevState.frontendFilter = frontendValue;
    });
  },
  setBackendFilter: (backendValue: string[]) => {
    set((prevState: ProjectStore) => {
      prevState.backendFilter = backendValue;
    });
  },

  getTechnologiesSelected: () => {
    const { frontendFilter, backendFilter } = get();
    const frontendFilterValue = frontendFilter || [];
    const backendFilterValue = backendFilter || [];

    return [...frontendFilterValue, ...backendFilterValue];
  },
});

const useProjectsStore = create<ProjectStore>()(
  devtools(persist(immer(projectStore), { name: 'projects-store' }))
);

export default useProjectsStore;
