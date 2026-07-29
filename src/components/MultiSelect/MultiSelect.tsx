import { type FC } from 'react';
import CloseIcon from '@icons/CloseIcon';
import XmarkIcon from '@icons/XmarkIcon';
import IconButton from '../IconButton/IconButton';
import { type TechnologiesFilter } from '@utils/types';
import useMultiSelect, { type TechnologyType } from './hooks/useMultiSelect';
import './styles.css';

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
  const {
    isOpen,
    inputRef,
    panelRef,
    labelId,
    panelId,
    optionSelectedLength,
    handleToggleOpen,
    handleKeyDown,
    handleSelectOption,
    handleRemoveOption,
    handleRemoveAll,
    isOptionSelected,
  } = useMultiSelect({
    type,
    optionsSelected,
    handleSetTechnologySelected,
    handleRemoveTechnologySelected,
    handleRemoveAllTechnologySelected,
  });

  return (
    <div className={`container-multi-select${isOpen ? ' container-multi-select--open' : ''}`}>
      <span className="label-multi-select" id={labelId}>
        {inputTitle}
      </span>

      <div
        className="div-container-select"
        ref={inputRef}
        role="combobox"
        tabIndex={0}
        aria-labelledby={labelId}
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={handleToggleOpen}
        onKeyDown={handleKeyDown}
      >
        {optionSelectedLength === 0 && (
          <span className="placeholder-value">Buscar por tecnologías a usar...</span>
        )}
        {optionSelectedLength > 0 && (
          <div className="div-container-selected-option">
            {optionsSelected.map(technology => (
              <div key={technology.key} className="div-container-selected-option-content">
                {technology.label}
                <IconButton
                  aria-label={`Quitar ${technology.label}`}
                  onClick={event => handleRemoveOption(event, technology)}
                >
                  <XmarkIcon styles={{ width: 14, color: 'var(--secondary-foreground)' }} />
                </IconButton>
              </div>
            ))}
          </div>
        )}

        {optionSelectedLength > 0 && (
          <IconButton
            aria-label={`Quitar todas las tecnologías de ${inputTitle}`}
            onClick={handleRemoveAll}
          >
            <CloseIcon styles={{ width: 20, color: 'var(--muted-foreground)' }} />
          </IconButton>
        )}

        <div
          className={`panel${isOpen ? ' panel--open' : ''}`}
          id={panelId}
          ref={panelRef}
          role="listbox"
          aria-labelledby={labelId}
        >
          {options.length > 0 ? (
            options.map(option => {
              return (
                <button
                  type="button"
                  key={option.label}
                  role="option"
                  aria-selected={isOptionSelected(option.key)}
                  onClick={event => handleSelectOption(event, option)}
                  className="option-label"
                >
                  {option.label}
                </button>
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
