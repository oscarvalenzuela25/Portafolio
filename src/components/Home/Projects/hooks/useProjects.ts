import { useEffect, useState } from 'react';
import useFetchProjects from '../infrastructure/hooks/useFetchProjects';
import useProjectsStore from '@stores/projects.store';
import { type TechnologiesFilter } from '@utils/types'

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
  const removeTechnologiesSelected = useProjectsStore(
    state => state.removeTechnologiesSelected
  );

  const [searchFilter, setSearchFilter] = useState<string>('');
  const [frontendFilterSelected, setFrontendFilterSelected] = useState<TechnologiesFilter[]>([]);
  const [backendFilterSelected, setBackendFilterSelected] = useState<TechnologiesFilter[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const handleSetSearchFilter = (searchValue: string) =>
    setSearchFilter(searchValue);
  const handleSetFrontendFilterSelected = (frontendValue: TechnologiesFilter[]) =>
    setFrontendFilterSelected(frontendValue);
  const handleSetBackendFilterSelected = (backendValue: TechnologiesFilter[]) =>
    setBackendFilterSelected(backendValue);

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
    setFrontendFilterStore(frontendFilterSelected);
    setBackendFilterStore(backendFilterSelected);
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

  useEffect(() => {
    handleSetFrontendFilterSelected(frontendFilterStore);
    handleSetBackendFilterSelected(backendFilterStore);
  }, [])


  return {
    searchFilter,
    handleSetSearchFilter,
    frontendFilterSelected,
    handleSetFrontendFilterSelected,
    backendFilterSelected,
    handleSetBackendFilterSelected,
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsData,
    fetchProjectsIsEmpty,
    technologiesSelected,
    handleFilterSubmit,
    removeTechnologiesSelected,

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
