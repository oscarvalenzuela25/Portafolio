import { basePath } from '@utils/config';
import type { Project } from '@components/Home/Card/Card';
import axios from 'axios';
import { filterData } from '@utils/filterData';

type Args = {
  search?: string;
  frontend?: string[];
  backend?: string[];
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
    const data = filterData({ search, frontend, backend });
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
