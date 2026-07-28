type Params = {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
};

type CardSectionStatus = 'loading' | 'error' | 'empty' | 'success';

const useCardSectionSkeleton = ({ isLoading, isError, isEmpty }: Params): CardSectionStatus => {
  if (isLoading) return 'loading';
  if (isError) return 'error';
  if (isEmpty) return 'empty';

  return 'success';
};

export default useCardSectionSkeleton;
