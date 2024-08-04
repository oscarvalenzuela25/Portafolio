import type { Project } from '@components/Home/Card/Card';
import projects from '@db/projects.json';

type Args = {
  search?: string;
  frontend?: string[];
  backend?: string[];
};

export const filterData = ({ search, frontend, backend }: Args) => {
  let data: Project[] = projects;

  if (search) {
    const dataBySearch: Project[] = [];
    data.filter(project => {
      if (project.title.toLowerCase().includes(search.toLowerCase())) {
        dataBySearch.push(project);
      }
    });
    data = dataBySearch;
  }

  if (frontend?.length) {
    const dataByFrontend: Project[] = [];
    data.filter(project => {
      frontend.forEach(tech => {
        if (project.frontend.includes(tech)) {
          dataByFrontend.push(project);
        }
      });
    });
    data = dataByFrontend;
  }

  if (backend?.length) {
    const dataByBackend: Project[] = [];
    data.filter(project => {
      backend.forEach(tech => {
        if (project.backend.includes(tech)) {
          dataByBackend.push(project);
        }
      });
    });
    data = dataByBackend;
  }

  return data.reverse();
};
