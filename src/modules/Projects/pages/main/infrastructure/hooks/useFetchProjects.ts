import { QueryClient, useQuery } from '@tanstack/react-query';
import fetchProjects from '../services/fetchProjects';
import { type TechnologiesFilter } from '@utils/types';

type Args = {
  searchFilter: string;
  frontendFilter: TechnologiesFilter[];
  backendFilter: TechnologiesFilter[];
};

const client = new QueryClient();

const useFetchProjects = ({ searchFilter, frontendFilter, backendFilter }: Args) => {
  const {
    data = [],
    isFetching,
    isError,
  } = useQuery(
    {
      queryKey: ['projects', searchFilter, frontendFilter, backendFilter],
      queryFn: () => fetchProjects({ searchFilter, frontendFilter, backendFilter }),
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
