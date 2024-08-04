import { basePath } from '@utils/config';
import type { Project } from '@components/Home/Card/Card';
import axios from 'axios';
import { filterData } from '@utils/filterData';
import { getRawTechnologies } from '@utils/technologies';
import { type TechnologiesFilter } from '@utils/types';

type Args = {
  search?: string;
  frontend?: TechnologiesFilter[];
  backend?: TechnologiesFilter[];
};

const fetchProjects = async ({ search, frontend, backend }: Args) => {
  try {
    // const { data } = await axios.get<Project[]>(`${basePath}/api/projects`, {
    //   params: {
    //     search,
    //     frontend,
    //     backend,
    //   },
    // });

    // return data;
    const rawFrontend = getRawTechnologies(frontend || []);
    const rawBackend = getRawTechnologies(backend || []);
    const data = filterData({ search, frontend: rawFrontend, backend: rawBackend });
    return new Promise<Project[]>(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
};

export default fetchProjects;
