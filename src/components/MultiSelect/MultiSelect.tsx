import React, { useEffect, useRef, useState, type FC } from 'react';
import './multiSelect.css';
import CloseIcon from '@icons/CloseIcon';
import XmarkIcon from '@icons/XmarkIcon';
import IconButton from '../IconButton/IconButton';
import { type TechnologiesFilter } from '@utils/types';

type TechnologyType = 'FRONTEND' | 'BACKEND';

type Props = {
  inputTitle: string;
  type: TechnologyType;
  options: TechnologiesFilter[];
  optionsSelected: TechnologiesFilter[];
  handleSetTechnologySelected: (newTechnology: TechnologiesFilter, type: TechnologyType) => void;
  handleRemoveTechnologySelected: (technology: TechnologiesFilter, type: TechnologyType) => void;
  handleRemoveAllTechnologySelected: (type: TechnologyType) => void;
};

const MultiSelect: FC<Props> = ({
  inputTitle,
  type,
  options,
  optionsSelected,
  handleSetTechnologySelected,
  handleRemoveTechnologySelected,
  handleRemoveAllTechnologySelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const optionSelectedLength = optionsSelected?.length || 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

  return (
    <div className="container-multi-select">
      <p className="label-multi-select">{inputTitle}</p>

      <div
        className="div-container-select"
        tabIndex={0}
        ref={inputRef}
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        {optionSelectedLength == 0 && (
          <p className="placeholder-value">Buscar por tecnologias a usar...</p>
        )}
        {optionSelectedLength > 0 && (
          <div className="div-container-selected-option">
            {optionsSelected.map(technology => (
              <div key={technology.key} className="div-container-selected-option-content">
                {technology.label}
                <IconButton
                  onClick={e => {
                    e.stopPropagation();
                    handleRemoveTechnologySelected(technology, type);
                  }}
                >
                  <XmarkIcon styles={{ width: 14, color: '#ffff' }} />
                </IconButton>
              </div>
            ))}
          </div>
        )}

        {optionSelectedLength > 0 && (
          <IconButton
            onClick={e => {
              e.stopPropagation();
              handleRemoveAllTechnologySelected(type);
            }}
          >
            <CloseIcon styles={{ width: 20, color: '#000' }} />
          </IconButton>
        )}

        <div
          className="panel"
          ref={panelRef}
          style={{
            maxHeight: isOpen ? '300px' : '0',
            transition: 'all 0.3s ease',
            zIndex: 999,
          }}
        >
          {options.length > 0 ? (
            options.map(option => {
              return (
                <div
                  key={option.label}
                  onClick={e => {
                    e.stopPropagation();
                    handleSetTechnologySelected(option, type);
                    setIsOpen(false);
                  }}
                  className="option-label"
                >
                  {option.label}
                </div>
              );
            })
          ) : (
            <div className="no-option">No hay opciones disponibles</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
