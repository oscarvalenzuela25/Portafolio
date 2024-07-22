import { useEffect, useState } from 'react';
import useFetchProjects from '../infrastructure/hooks/useFetchProjects';
import useProjectsStore from '@stores/projects.store';

const useProjects = () => {
  const searchFilterStore = useProjectsStore(state => state.searchFilter);
  const frontendFilterStore = useProjectsStore(state => state.frontendFilter);
  const backendFilterStore = useProjectsStore(state => state.backendFilter);
  const setSearchFilterStore = useProjectsStore(state => state.setSearchFilter);
  const setFrontendFilterStore = useProjectsStore(
    state => state.setFrontendFilter
  );
  const setBackendFilterStore = useProjectsStore(
    state => state.setBackendFilter
  );
  const getTechnologiesSelectedStore = useProjectsStore(
    state => state.getTechnologiesSelected
  );

  const [searchFilter, setSearchFilter] = useState<string>('');
  const [frontendFilter, setFrontendFilter] = useState<string[]>([]);
  const [backendFilter, setBackendFilter] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const handleSetSearchFilter = (searchValue: string) =>
    setSearchFilter(searchValue);
  const handleSetFrontendFilter = (frontendValue: string[]) =>
    setFrontendFilter(frontendValue);
  const handleSetBackendFilter = (backendValue: string[]) =>
    setBackendFilter(backendValue);

  const {
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsData = [],
  } = useFetchProjects({
    search: searchFilterStore,
    frontend: frontendFilterStore,
    backend: backendFilterStore,
  });

  const fetchProjectsIsEmpty = !fetchProjectsData.length;

  const technologiesSelected = getTechnologiesSelectedStore();

  const handleFilterSubmit = () => {
    setSearchFilterStore(searchFilter);
    setFrontendFilterStore(frontendFilter);
    setBackendFilterStore(backendFilter);
  };

  useEffect(() => {
    if (!searchFilter) {
      handleSetSearchFilter(searchFilterStore);
    }
  }, [searchFilterStore]);

  const totalItems = fetchProjectsData.length;
  const itemOffset = (currentPage - 1) * itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = fetchProjectsData?.slice(itemOffset, endOffset);

  const handleTopScreen = () => {
    window.scroll(0, 130);
  };

  const handleChangePage = (pageSelected: number) => {
    setCurrentPage(pageSelected);
    handleTopScreen();
  };

  const handleChangeItemsPerPage = (itemsPerPageSelected: number) => {
    setCurrentPage(1);
    setItemsPerPage(itemsPerPageSelected);
    handleTopScreen();
  };

  return {
    searchFilter,
    handleSetSearchFilter,
    frontendFilter,
    handleSetFrontendFilter,
    backendFilter,
    handleSetBackendFilter,
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsData,
    fetchProjectsIsEmpty,
    technologiesSelected,
    handleFilterSubmit,

    // Pagination
    totalItems,
    currentPage,
    currentItems,
    itemsPerPage,
    handleChangePage,
    handleChangeItemsPerPage,
  };
};

export default useProjects;
