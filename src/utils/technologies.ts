import { type TechnologiesFilter } from '@utils/types';

export const technologies: TechnologiesFilter[] = [
  { key: 'HTML', label: 'HTML5', color: '#F06529', type: ['FRONTEND'], icon: 'html' },
  { key: 'CSS', label: 'CSS3', color: '#264de4', type: ['FRONTEND'], icon: 'css' },
  {
    key: 'JAVASCRIPT',
    label: 'JavaScript',
    color: '#f0db4f',
    type: ['FRONTEND'],
    icon: 'js',
  },
  { key: 'REACTJS', label: 'React', color: '#16A5E1', type: ['FRONTEND'], icon: 'react' },
  { key: 'NEXTJS', label: 'NextJS', color: '#fff', type: ['FRONTEND'], icon: 'nextjs' },
  {
    key: 'TAILWINDCSS',
    label: 'Tailwind',
    color: '#0EA5E9',
    type: ['FRONTEND'],
    icon: 'tailwind',
  },
  {
    key: 'MATERIALUI',
    label: 'Material-UI',
    color: '#006CD7',
    type: ['FRONTEND'],
    icon: 'materialui',
  },
  { key: 'ZUSTAND', label: 'Zustand', color: '#443E38', type: ['FRONTEND'] },
  {
    key: 'STYLED-COMPONENTS',
    label: 'Styled Components',
    color: '#C775BA',
    type: ['FRONTEND'],
    icon: 'styledcomponents',
  },
  {
    key: 'GRAPHQL',
    label: 'GraphQL',
    color: '#DE33A6',
    type: ['FRONTEND'],
    icon: 'graphql',
  },
  { key: 'NODEJS', label: 'Node.js', color: '#6BA260', type: ['BACKEND'], icon: 'nodejs' },
  {
    key: 'EXPRESSJS',
    label: 'Express.js',
    color: '#a1cf40',
    type: ['BACKEND'],
    icon: 'express',
  },
  { key: 'DOCKER', label: 'Docker', color: '#0db7ed', type: ['BACKEND'], icon: 'docker' },
  {
    key: 'AWS',
    label: 'AWS',
    color: '#ff9900',
    type: ['FRONTEND', 'BACKEND'],
    icon: 'aws',
  },
  {
    key: 'TYPESCRIPT',
    label: 'TypeScript',
    color: '#007acc',
    type: ['FRONTEND', 'BACKEND'],
    icon: 'ts',
  },
  { key: 'S3', label: 'AWS S3', color: '#ff9900', type: ['BACKEND'], icon: 'aws' },
  { key: 'MONGODB', label: 'MongoDB', color: '#00ED64', type: ['BD'], icon: 'mongodb' },
  { key: 'MYSQL', label: 'MySQL', color: '#3E6E93', type: ['BD'], icon: 'mysql' },
  { key: 'MARIADB', label: 'Maria DB', color: '#C0765A', type: ['BD'] },
  { key: 'INDEXEDDB', label: 'IndexedDB', color: '#C0765A', type: ['BD', 'BACKEND'] },
];

export const getTechnologyInfo = (key: string) => {
  const defaultTechnology = {
    key,
    label: key,
    color: '#fff',
    icon: undefined,
  };

  return technologies.find(technology => technology.key === key) || defaultTechnology;
};

export const getTechnologiesByType = (type: string): TechnologiesFilter[] =>
  technologies.filter(tech => tech.type.includes(type?.toUpperCase()));
