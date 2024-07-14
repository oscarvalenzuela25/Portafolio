import { QueryClient, useQuery } from '@tanstack/react-query';
import fetchProjects from '../services/fetchProjects';

type Args = {
  search?: string;
  frontend?: string[];
  backend?: string[];
};

const client = new QueryClient();

const useFetchProjects = ({ search, frontend, backend }: Args) => {
  const {
    data = [],
    isFetching,
    isError,
  } = useQuery(
    {
      queryKey: ['projects', search, frontend, backend],
      queryFn: () => fetchProjects({ search, frontend, backend }),
      retry: 0,
      staleTime: 60000,
    },
    client
  );

  return {
    fetchProjectsIsLoading: isFetching,
    fetchProjectsIsError: isError,
    fetchProjectsData: data,
  };
};

export default useFetchProjects;
