import { useEffect, useId, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import type { TechnologiesFilter } from '@utils/types';

export type TechnologyType = 'FRONTEND' | 'BACKEND';

type Params = {
  type: TechnologyType;
  optionsSelected: TechnologiesFilter[];
  handleSetTechnologySelected: (newTechnology: TechnologiesFilter, type: TechnologyType) => void;
  handleRemoveTechnologySelected: (technology: TechnologiesFilter, type: TechnologyType) => void;
  handleRemoveAllTechnologySelected: (type: TechnologyType) => void;
};

const useMultiSelect = ({
  type,
  optionsSelected,
  handleSetTechnologySelected,
  handleRemoveTechnologySelected,
  handleRemoveAllTechnologySelected,
}: Params) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const generatedId = useId();
  const labelId = `${generatedId}-label`;
  const panelId = `${generatedId}-panel`;

  const handleToggleOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggleOpen();
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
    }

    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelectOption = (event: MouseEvent<HTMLButtonElement>, option: TechnologiesFilter) => {
    event.stopPropagation();
    handleSetTechnologySelected(option, type);
    setIsOpen(false);
  };

  const handleRemoveOption = (
    event: MouseEvent<HTMLButtonElement>,
    technology: TechnologiesFilter
  ) => {
    event.stopPropagation();
    handleRemoveTechnologySelected(technology, type);
  };

  const handleRemoveAll = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleRemoveAllTechnologySelected(type);
  };

  const isOptionSelected = (optionKey: string) => {
    return optionsSelected.some(selected => selected.key === optionKey);
  };

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        inputRef.current &&
        panelRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    inputRef,
    panelRef,
    labelId,
    panelId,
    optionSelectedLength: optionsSelected.length,
    handleToggleOpen,
    handleKeyDown,
    handleSelectOption,
    handleRemoveOption,
    handleRemoveAll,
    isOptionSelected,
  };
};

export default useMultiSelect;
