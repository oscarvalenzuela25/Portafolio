export const technologies = [
  { key: 'HTML', label: 'HTML', color: '#F06529' },
  { key: 'CSS', label: 'CSS', color: '#264de4' },
  { key: 'JAVASCRIPT', label: 'JavaScript', color: '#f0db4f' },
  { key: 'REACTJS', label: 'React', color: '#16A5E1' },
  { key: 'NEXTJS', label: 'NextJS', color: '#fff' },
  { key: 'TAILWINDCSS', label: 'Tailwind', color: '#0EA5E9' },
  { key: 'MATERIALUI', label: 'Material-UI', color: '#006CD7' },
  { key: 'ZUSTAND', label: 'Zustand', color: '#443E38' },
  { key: 'STYLED-COMPONENTS', label: 'Styled Components', color: '#C775BA' },
  { key: 'GRAPHQL', label: 'GraphQL', color: '#DE33A6' },
  { key: 'NODEJS', label: 'Node.js', color: '#6BA260' },
  { key: 'EXPRESSJS', label: 'Express.js', color: '#a1cf40' },
  { key: 'DOCKER', label: 'Docker', color: '#0db7ed' },
  { key: 'AWS', label: 'Aws', color: '#ff9900' },
  { key: 'TYPESCRIPT', label: 'TypeScript', color: '#007acc' },
  { key: 'S3', label: 'AWS S3', color: '#ff9900' },
  { key: 'MONGODB', label: 'Mongo DB', color: '#00ED64' },
  { key: 'MYSQL', label: 'MySQL', color: '#3E6E93' },
  { key: 'MARIADB', label: 'Maria DB', color: '#C0765A' },
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
