const envs = {
  basePath: import.meta.env.PUBLIC_BASE_PATH || 'http://localhost:4321',
  api: import.meta.env.PUBLIC_API || 'http://localhost:4000',
};

export default envs;
