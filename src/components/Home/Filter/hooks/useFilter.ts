import { useCallback, useState } from 'react';

const useFilter = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = useCallback(() => {
    setShowFilters(prevState => !prevState);
  }, [setShowFilters]);

  return { showFilters, handleToggleFilters };
};

export default useFilter;
