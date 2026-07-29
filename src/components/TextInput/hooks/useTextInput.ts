import { useId } from 'react';

const useTextInput = (providedId?: string) => {
  const generatedId = useId();

  return {
    inputId: providedId ?? generatedId,
  };
};

export default useTextInput;
