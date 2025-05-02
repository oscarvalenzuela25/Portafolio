import { useState } from 'react';
import useFetchProjects from '../infrastructure/hooks/useFetchProjects';
import useProjectsStore from '@stores/projectsStore';

const useProjects = () => {
  const searchFilter = useProjectsStore(state => state.searchFilter);
  const frontendFilter = useProjectsStore(state => state.frontendFilter);
  const backendFilter = useProjectsStore(state => state.backendFilter);
  const getTechnologiesSelected = useProjectsStore(state => state.getTechnologiesSelected);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const {
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsData = [],
  } = useFetchProjects({
    searchFilter,
    frontendFilter,
    backendFilter,
  });

  const fetchProjectsIsEmpty = !fetchProjectsData.length;

  const technologiesSelected = getTechnologiesSelected();

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

  // useEffect(() => {
  //   handleSetFrontendFilterSelected(frontendFilterStore);
  //   handleSetBackendFilterSelected(backendFilterStore);
  // }, []);

  return {
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsData,
    fetchProjectsIsEmpty,
    technologiesSelected,

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
