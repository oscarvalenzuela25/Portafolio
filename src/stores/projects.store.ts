import { type StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type TechnologiesFilter } from "@utils/types";
import { getRawTechnologies } from '@utils/technologies'

interface ProjectStore {
  searchFilter: string;
  frontendFilter: TechnologiesFilter[];
  backendFilter: TechnologiesFilter[];

  setSearchFilter: (searchValue: string) => void;
  setFrontendFilter: (frontendValue: TechnologiesFilter[]) => void;
  setBackendFilter: (backendValue: TechnologiesFilter[]) => void;

  removeTechnologiesSelected: (key: string) => void;
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

  removeTechnologiesSelected: (key: string) => {
    const { frontendFilter, backendFilter } = get();
    const newFrontendFilter = frontendFilter.filter(({ key }) => key !== key);
    const newBackendFilter = backendFilter.filter(({ key }) => key !== key);
    set((prevState) => {
      prevState.frontendFilter = newFrontendFilter;
      prevState.backendFilter = newBackendFilter;
    })
  },

  getTechnologiesSelected: () => {
    const { frontendFilter, backendFilter } = get();
    const frontendFilterValue = getRawTechnologies(frontendFilter) || [];
    const backendFilterValue = getRawTechnologies(backendFilter) || [];

    return [...frontendFilterValue, ...backendFilterValue];
  },
});

const useProjectsStore = create<ProjectStore>()(
  devtools(persist(immer(projectStore), { name: 'projects-store' }))
);

export default useProjectsStore;
