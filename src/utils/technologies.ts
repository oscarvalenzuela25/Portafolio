import { type TechnologiesFilter } from "@utils/types";

export const technologies: TechnologiesFilter[] = [
  { key: 'HTML', label: 'HTML', color: '#F06529', type: ['FRONTEND'] },
  { key: 'CSS', label: 'CSS', color: '#264de4', type: ['FRONTEND'] },
  { key: 'JAVASCRIPT', label: 'JavaScript', color: '#f0db4f', type: ['FRONTEND'] },
  { key: 'REACTJS', label: 'React', color: '#16A5E1', type: ['FRONTEND'] },
  { key: 'NEXTJS', label: 'NextJS', color: '#fff', type: ['FRONTEND'] },
  { key: 'TAILWINDCSS', label: 'Tailwind', color: '#0EA5E9', type: ['FRONTEND'] },
  { key: 'MATERIALUI', label: 'Material-UI', color: '#006CD7', type: ['FRONTEND'] },
  { key: 'ZUSTAND', label: 'Zustand', color: '#443E38', type: ['FRONTEND'] },
  { key: 'STYLED-COMPONENTS', label: 'Styled Components', color: '#C775BA', type: ['FRONTEND'] },
  { key: 'GRAPHQL', label: 'GraphQL', color: '#DE33A6', type: ['FRONTEND'] },
  { key: 'NODEJS', label: 'Node.js', color: '#6BA260', type: ['BACKEND'] },
  { key: 'EXPRESSJS', label: 'Express.js', color: '#a1cf40', type: ['BACKEND'] },
  { key: 'DOCKER', label: 'Docker', color: '#0db7ed', type: ['BACKEND'] },
  { key: 'AWS', label: 'Aws', color: '#ff9900', type: ['FRONTEND', 'BACKEND'] },
  { key: 'TYPESCRIPT', label: 'TypeScript', color: '#007acc', type: ['FRONTEND', 'BACKEND'] },
  { key: 'S3', label: 'AWS S3', color: '#ff9900', type: ['BACKEND'] },
  { key: 'MONGODB', label: 'Mongo DB', color: '#00ED64', type: ['BD'] },
  { key: 'MYSQL', label: 'MySQL', color: '#3E6E93', type: ['BD'] },
  { key: 'MARIADB', label: 'Maria DB', color: '#C0765A', type: ['BD'] },
];

export const getTechnologyInfo = (key: string) => {
  const defaultTechnology = {
    key,
    label: key,
    color: '#fff',
  };

  return (
    technologies.find(technology => technology.key === key) || defaultTechnology
  );
};

export const getTechnologiesByType = (type: string): TechnologiesFilter[] => technologies.filter(tech => tech.type.includes(type?.toUpperCase()))

export const getRawTechnologies = (value: TechnologiesFilter[]) => value.map(({ key }) => key) 