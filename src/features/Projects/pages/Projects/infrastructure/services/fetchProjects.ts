import { filterData } from '@utils/filterData';
import { type Project, type TechnologiesFilter } from '@utils/types';

type Args = {
  searchFilter: string;
  frontendFilter: TechnologiesFilter[];
  backendFilter: TechnologiesFilter[];
};

const fetchProjects = async ({ searchFilter, frontendFilter, backendFilter }: Args) => {
  try {
    // const { data } = await axios.get<Project[]>(`${basePath}/api/projects`, {
    //   params: {
    //     search,
    //     frontend,
    //     backend,
    //   },
    // });

    // return data;
    const data = filterData({ searchFilter, frontendFilter, backendFilter });
    return new Promise<Project[]>(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default fetchProjects;
