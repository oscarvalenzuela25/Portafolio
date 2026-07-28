import React, { type FC } from 'react';
import ChevronDownIcon from '@icons/ChevronDownIcon';
import TextInput from '@components/TextInput';
import useFilter from './hooks/useFilter';
import Button from '@components/Button';
import classNames from 'classnames';
import './filter.css';
import MultiSelect from '@components/MultiSelect';

type Props = {
  fetchProjectsIsLoading: boolean;
};

const Filter: FC<Props> = ({ fetchProjectsIsLoading }) => {
  const {
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
  } = useFilter();

  return (
    <div className="filter-container">
      <p className="filter-title-desktop">Filtros</p>

      <div className="filter-input-container-desktop">
        <TextInput
          inputTitle="Palabras claves"
          placeholder="Buscar por palabras claves..."
          value={searchTempFilter}
          onChange={e => handleSetSearchTempFilter(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmitFilters();
            }
          }}
        />
        <MultiSelect
          inputTitle="Frontend"
          type={'FRONTEND'}
          options={frontendOptions}
          optionsSelected={frontendTempFilterSelected}
          handleSetTechnologySelected={handleSetTechnologyTempSelected}
          handleRemoveTechnologySelected={handleRemoveTechnologyTempSelected}
          handleRemoveAllTechnologySelected={handleRemoveAllTechnologyTempSelected}
        />

        <MultiSelect
          inputTitle="Backend"
          type={'BACKEND'}
          options={backendOptions}
          optionsSelected={backendTempFilterSelected}
          handleSetTechnologySelected={handleSetTechnologyTempSelected}
          handleRemoveTechnologySelected={handleRemoveTechnologyTempSelected}
          handleRemoveAllTechnologySelected={handleRemoveAllTechnologyTempSelected}
        />
      </div>

      <div className="container-button-desktop">
        <Button
          width="100%"
          variant="text"
          onClick={handleClearAllFilters}
          loading={fetchProjectsIsLoading}
        >
          Limpiar Filtros
        </Button>
        <Button
          width="100%"
          variant="contained"
          onClick={handleSubmitFilters}
          loading={fetchProjectsIsLoading}
        >
          Filtrar
        </Button>
      </div>

      {/* Version mobile */}
      <div className="container-filter-title-mobile" onClick={handleToggleFilters}>
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
            value={searchTempFilter}
            onChange={e => handleSetSearchTempFilter(e.target.value)}
          />
          <MultiSelect
            inputTitle="Frontend"
            type={'FRONTEND'}
            options={frontendOptions}
            optionsSelected={frontendTempFilterSelected}
            handleSetTechnologySelected={handleSetTechnologyTempSelected}
            handleRemoveTechnologySelected={handleRemoveTechnologyTempSelected}
            handleRemoveAllTechnologySelected={handleRemoveAllTechnologyTempSelected}
          />

          <MultiSelect
            inputTitle="Backend"
            type={'BACKEND'}
            options={backendOptions}
            optionsSelected={backendTempFilterSelected}
            handleSetTechnologySelected={handleSetTechnologyTempSelected}
            handleRemoveTechnologySelected={handleRemoveTechnologyTempSelected}
            handleRemoveAllTechnologySelected={handleRemoveAllTechnologyTempSelected}
          />
        </div>
      )}

      {showFilters && (
        <div className="container-button-mobile">
          <Button
            width="100%"
            variant="text"
            onClick={handleClearAllFilters}
            loading={fetchProjectsIsLoading}
          >
            Limpiar Filtros
          </Button>
          <Button
            width="100%"
            variant="contained"
            onClick={handleSubmitFilters}
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
