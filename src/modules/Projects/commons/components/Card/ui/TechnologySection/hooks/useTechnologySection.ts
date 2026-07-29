import { getTechnologyInfo } from '@utils/technologies';

const useTechnologySection = (technologies: string[]) => {
  return {
    hasTechnologies: technologies.length > 0,
    technologyItems: technologies.map(getTechnologyInfo),
  };
};

export default useTechnologySection;
