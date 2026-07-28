import { getTechnologyInfo } from '@utils/technologies';

const useSearchBadge = (technologyKey: string) => {
  return {
    technology: getTechnologyInfo(technologyKey),
  };
};

export default useSearchBadge;
