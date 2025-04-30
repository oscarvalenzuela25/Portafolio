import { useCallback, useState } from 'react';
import { type TechnologiesFilter } from '@utils/types';
import { getTechnologiesByType } from '@utils/technologies';

type Props = {
  frontendFilterSelected: TechnologiesFilter[];
  handleSetFrontendFilterSelected: (frontendValue: TechnologiesFilter[]) => void;
  backendFilterSelected: TechnologiesFilter[];
  handleSetBackendFilterSelected: (backendValue: TechnologiesFilter[]) => void;
};

const useFilter = ({
  frontendFilterSelected,
  handleSetFrontendFilterSelected,
  backendFilterSelected,
  handleSetBackendFilterSelected,
}: Props) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = useCallback(() => {
    setShowFilters(prevState => !prevState);
  }, [setShowFilters]);

  const getFrontendOptions = () => {
    const frontendTechnologies = getTechnologiesByType('FRONTEND');
    let restFrontendOptions: TechnologiesFilter[] = [];
    frontendTechnologies.forEach(frontendTechnology => {
      const frontendSearched = frontendFilterSelected.some(
        ({ key }) => key === frontendTechnology.key
      );
      if (!frontendSearched) {
        restFrontendOptions.push(frontendTechnology);
      }
    });

    return restFrontendOptions;
  };

  const frontendOptions = getFrontendOptions();

  const getBackendOptions = () => {
    const backendTechnologies = getTechnologiesByType('BACKEND');
    let restBackendOptions: TechnologiesFilter[] = [];
    backendTechnologies.forEach(backendTechnologies => {
      const backendSearched = backendFilterSelected.some(
        ({ key }) => key === backendTechnologies.key
      );
      if (!backendSearched) {
        restBackendOptions.push(backendTechnologies);
      }
    });

    return restBackendOptions;
  };

  const backendOptions = getBackendOptions();

  const handleSetTechnologySelected = (
    newTechnology: TechnologiesFilter,
    type: 'FRONTEND' | 'BACKEND'
  ) => {
    if (type === 'FRONTEND') {
      handleSetFrontendFilterSelected([...frontendFilterSelected, newTechnology]);
    }

    if (type === 'BACKEND') {
      handleSetBackendFilterSelected([...backendFilterSelected, newTechnology]);
    }
  };

  const handleRemoveTechnologySelected = (
    technology: TechnologiesFilter,
    type: 'FRONTEND' | 'BACKEND'
  ) => {
    if (type === 'FRONTEND') {
      const frontendTechnologiesFiltered = frontendFilterSelected.filter(
        ({ key }) => key !== technology.key
      );
      handleSetFrontendFilterSelected([...frontendTechnologiesFiltered]);
    }

    if (type === 'BACKEND') {
      const backendTechnologiesFiltered = backendFilterSelected.filter(
        ({ key }) => key !== technology.key
      );
      handleSetBackendFilterSelected([...backendTechnologiesFiltered]);
    }
  };

  const handleRemoveAllTechnologySelected = (type: 'FRONTEND' | 'BACKEND') => {
    if (type === 'FRONTEND') {
      handleSetFrontendFilterSelected([]);
    }
    if (type === 'BACKEND') {
      handleSetBackendFilterSelected([]);
    }
  };

  return {
    showFilters,
    handleToggleFilters,
    frontendOptions,
    backendOptions,
    handleSetTechnologySelected,
    handleRemoveTechnologySelected,
    handleRemoveAllTechnologySelected,
  };
};

export default useFilter;
