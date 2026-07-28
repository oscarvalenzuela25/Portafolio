import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  type BackendFilterType,
  type FilterParams,
  type FrontendFilterType,
  type TechnologiesFilter,
  type UpdateFiltersParams,
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

  const setSearchFilter = useProjectsStore(state => state.setSearchFilter);
  const setFrontendFilter = useProjectsStore(state => state.setFrontendFilter);
  const setBackendFilter = useProjectsStore(state => state.setBackendFilter);
  const resetFilters = useProjectsStore(state => state.resetFilters);

  const getFilterParamsFromURL = (): FilterParams => {
    const params = new URLSearchParams(window.location.search);

    const searchFilterParams = params.get('search') || '';
    const rawFrontend = params.get('frontendSearch') || '';
    const rawBackend = params.get('backendSearch') || '';

    const frontendKeys = rawFrontend.split(',').filter(Boolean);
    const backendKeys = rawBackend.split(',').filter(Boolean);

    const validFrontend = getTechnologiesByType('FRONTEND');
    const validBackend = getTechnologiesByType('BACKEND');

    const frontendFilterParams = validFrontend.filter(tech => frontendKeys.includes(tech?.key));
    const backendFilterParams = validBackend.filter(tech => backendKeys.includes(tech?.key));

    return {
      searchFilterParams,
      frontendFilterParams,
      backendFilterParams,
    };
  };

  useEffect(() => {
    if (firstRender) {
      const { searchFilterParams, frontendFilterParams, backendFilterParams } =
        getFilterParamsFromURL();
      setSearchTempFilter(searchFilterParams);
      setFrontendTempFilterSelected(frontendFilterParams);
      setBackendTempFilterSelected(backendFilterParams);
      setSearchFilter(searchFilterParams);
      setFrontendFilter(frontendFilterParams);
      setBackendFilter(backendFilterParams);
      setFirstRender(false);
    }
  }, []);

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

  const updateURLWithFilters = ({
    newSearchFilter = '',
    newFrontendFilter = [],
    newBackendFilter = [],
  }: UpdateFiltersParams) => {
    const url = new URL(window.location.href);

    url.searchParams.delete('search');
    url.searchParams.delete('frontendSearch');
    url.searchParams.delete('backendSearch');

    if (newSearchFilter.trim() !== '') {
      url.searchParams.set('search', newSearchFilter.trim());
    }

    if (Array.isArray(newFrontendFilter) && newFrontendFilter.length > 0) {
      const frontendKeys = newFrontendFilter.map(item => item.key).join(',');
      url.searchParams.set('frontendSearch', frontendKeys);
    }

    if (Array.isArray(newBackendFilter) && newBackendFilter.length > 0) {
      const backendKeys = newBackendFilter.map(item => item.key).join(',');
      url.searchParams.set('backendSearch', backendKeys);
    }

    window.history.pushState({}, '', url);
  };

  const handleSubmitFilters = () => {
    setSearchFilter(searchTempFilter);
    setFrontendFilter(frontendTempFilterSelected);
    setBackendFilter(backendTempFilterSelected);
    updateURLWithFilters({
      newSearchFilter: searchTempFilter,
      newFrontendFilter: frontendTempFilterSelected,
      newBackendFilter: backendTempFilterSelected,
    });
    setShowFilters(false);
  };

  const handleClearAllFilters = () => {
    setFrontendTempFilterSelected([]);
    setBackendTempFilterSelected([]);
    setSearchTempFilter('');
    updateURLWithFilters({
      newSearchFilter: '',
      newFrontendFilter: [],
      newBackendFilter: [],
    });
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
