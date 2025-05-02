import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  type BackendFilterType,
  type FrontendFilterType,
  type TechnologiesFilter,
} from '@utils/types';
import { getTechnologiesByType } from '@utils/technologies';
import useProjectsStore from '@stores/projectsStore';

const useFilter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const [searchTempFilter, setSearchTempFilter] = useState<string>('');
  const [frontendTempFilterSelected, setFrontendTempFilterSelected] = useState<
    TechnologiesFilter[]
  >([]);
  const [backendTempFilterSelected, setBackendTempFilterSelected] = useState<TechnologiesFilter[]>(
    []
  );

  const searchFilter = useProjectsStore(state => state.searchFilter);
  const frontendFilter = useProjectsStore(state => state.frontendFilter);
  const backendFilter = useProjectsStore(state => state.backendFilter);
  const setSearchFilter = useProjectsStore(state => state.setSearchFilter);
  const setFrontendFilter = useProjectsStore(state => state.setFrontendFilter);
  const setBackendFilter = useProjectsStore(state => state.setBackendFilter);
  const resetFilters = useProjectsStore(state => state.resetFilters);

  useEffect(() => {
    if (firstRender) {
      setSearchTempFilter(searchFilter);
      setFrontendTempFilterSelected(frontendFilter);
      setBackendTempFilterSelected(backendFilter);
      setFirstRender(false);
    }
  }, [searchFilter, frontendFilter, backendFilter]);

  const handleToggleFilters = useCallback(() => {
    setShowFilters(prevState => !prevState);
  }, [setShowFilters]);

  const frontendOptions = useMemo(() => {
    const frontendTechnologies = getTechnologiesByType('FRONTEND');
    const frontendOptions: TechnologiesFilter[] = [];
    frontendTechnologies.forEach(frontendTechnology => {
      const frontendSearched = frontendTempFilterSelected.some(
        ({ key }) => key === frontendTechnology.key
      );
      if (!frontendSearched) {
        frontendOptions.push(frontendTechnology);
      }
    });

    return frontendOptions;
  }, [frontendTempFilterSelected]);

  const backendOptions = useMemo(() => {
    const backendTechnologies = getTechnologiesByType('BACKEND');
    const backendOptions: TechnologiesFilter[] = [];
    backendTechnologies.forEach(backendTechnology => {
      const backendSearched = backendTempFilterSelected.some(
        ({ key }) => key === backendTechnology.key
      );
      if (!backendSearched) {
        backendOptions.push(backendTechnology);
      }
    });

    return backendOptions;
  }, [backendTempFilterSelected]);

  const handleSetSearchTempFilter = (searchValue: string) => {
    setSearchTempFilter(searchValue);
  };

  const handleSetTechnologyTempSelected = (
    newTechnology: TechnologiesFilter,
    type: FrontendFilterType | BackendFilterType
  ) => {
    if (type === 'FRONTEND') {
      setFrontendTempFilterSelected(prevState => [...prevState, newTechnology]);
    }

    if (type === 'BACKEND') {
      setBackendTempFilterSelected(prevState => [...prevState, newTechnology]);
    }
  };

  const handleRemoveTechnologyTempSelected = (
    technology: TechnologiesFilter,
    type: FrontendFilterType | BackendFilterType
  ) => {
    if (type === 'FRONTEND') {
      setFrontendTempFilterSelected(prevState =>
        prevState.filter(({ key }) => key !== technology.key)
      );
    }

    if (type === 'BACKEND') {
      setBackendTempFilterSelected(prevState =>
        prevState.filter(({ key }) => key !== technology.key)
      );
    }
  };

  const handleRemoveAllTechnologyTempSelected = (type: FrontendFilterType | BackendFilterType) => {
    if (type === 'FRONTEND') {
      setFrontendTempFilterSelected([]);
    }
    if (type === 'BACKEND') {
      setBackendTempFilterSelected([]);
    }
  };

  const handleSubmitFilters = () => {
    setSearchFilter(searchTempFilter);
    setFrontendFilter(frontendTempFilterSelected);
    setBackendFilter(backendTempFilterSelected);
    setShowFilters(false);
  };

  const handleClearAllFilters = () => {
    setFrontendTempFilterSelected([]);
    setBackendTempFilterSelected([]);
    setSearchTempFilter('');
    resetFilters();
  };

  return {
    showFilters,
    handleToggleFilters,
    searchTempFilter,
    frontendTempFilterSelected,
    backendTempFilterSelected,
    frontendOptions,
    backendOptions,
    handleSetSearchTempFilter,
    handleSetTechnologyTempSelected,
    handleRemoveTechnologyTempSelected,
    handleRemoveAllTechnologyTempSelected,
    handleClearAllFilters,
    handleSubmitFilters,
  };
};

export default useFilter;
