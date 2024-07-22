import React, { type FC } from 'react';
import ChevronDownIcon from '@icons/ChevronDownIcon';
import TextInput from '@components/commons/TextInput';
import useFilter from './hooks/useFilter';
import Button from '@components/commons/Button';
import classNames from 'classnames';
import './filter.css';
import MultiSelect from '@components/commons/MultiSelect';

type Props = {
  fetchProjectsIsLoading: boolean;
  searchFilter: string;
  handleSetSearchFilter: (searchValue: string) => void;
  frontendFilter: string[];
  handleSetFrontendFilter: (frontendValue: string[]) => void;
  backendFilter: string[];
  handleSetBackendFilter: (backendValue: string[]) => void;
  handleFilterSubmit: () => void;
};

const Filter: FC<Props> = ({
  fetchProjectsIsLoading,
  searchFilter,
  handleSetSearchFilter,
  frontendFilter,
  handleSetFrontendFilter,
  backendFilter,
  handleSetBackendFilter,
  handleFilterSubmit,
}) => {
  const { showFilters, handleToggleFilters } = useFilter();
  return (
    <div className="filter-container">
      <p className="filter-title-desktop">Filtros</p>

      {/* Version desktop */}
      <div className="filter-input-container-desktop">
        <TextInput
          inputTitle="Palabras claves"
          placeholder="Buscar por palabras claves..."
          value={searchFilter}
          onChange={e => handleSetSearchFilter(e.target.value)}
        />
        {/* Cambiar estos 2 inputs por los MultipleSelectInput */}
        <MultiSelect 
          inputTitle="Frontend" />
        {/* <TextInput inputTitle="Backend" /> */}
      </div>

      <div className="container-button-desktop">
        <Button
          width="100%"
          onClick={handleFilterSubmit}
          loading={fetchProjectsIsLoading}
        >
          Filtrar
        </Button>
      </div>

      {/* Version mobile */}
      <div
        className="container-filter-title-mobile"
        onClick={handleToggleFilters}
      >
        <p className="filter-title-mobile">Filtros</p>
        <div
          className={classNames('filter-icon-mobile', {
            'filter-icon-mobile--active': showFilters,
          })}
        >
          <ChevronDownIcon color="primaryText" />
        </div>
      </div>

      {showFilters && (
        <div className="filter-inputs-container-mobile">
          <TextInput
            inputTitle="Palabras claves"
            placeholder="Buscar por palabras claves..."
            value={searchFilter}
            onChange={e => handleSetSearchFilter(e.target.value)}
          />
          {/* Cambiar estos 2 inputs por los MultipleSelectInput */}
          {/* <MultiSelect 
            inputTitle="Frontend" 
            /> */}
          {/* <TextInput inputTitle="Backend" /> */}
        </div>
      )}

      {showFilters && (
        <div className="container-button-mobile">
          <Button
            width="100%"
            onClick={handleFilterSubmit}
            loading={fetchProjectsIsLoading}
          >
            Filtrar
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
