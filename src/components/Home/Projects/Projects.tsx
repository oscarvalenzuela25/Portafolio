import React from 'react';
import SearchBadge from '../SearchBadge';
import Card from '../Card';
import Filter from '../Filter';
import Spacer from '@components/commons/Spacer';
import useProjects from './hooks/useProjects';
import CardSectionSkeleton from '../CardSectionSkeleton';
import Pagination from '../Pagination';
import './projects.css';

const Projects = () => {
  const {
    searchFilter,
    handleSetSearchFilter,
    frontendFilterSelected,
    handleSetFrontendFilterSelected,
    backendFilterSelected,
    handleSetBackendFilterSelected,
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsIsEmpty,
    technologiesSelected,
    handleFilterSubmit,
    handleRemoveTechnologiesSelected,

    // Pagination
    totalItems,
    currentPage,
    currentItems,
    itemsPerPage,
    handleChangePage,
    handleChangeItemsPerPage,
  } = useProjects();

  return (
    <div className="column">
      <h1 className="title">Proyectos</h1>
      <div className="container">
        <div className="container__filter-container">
          <Filter
            fetchProjectsIsLoading={fetchProjectsIsLoading}
            searchFilter={searchFilter}
            handleSetSearchFilter={handleSetSearchFilter}
            frontendFilterSelected={frontendFilterSelected}
            handleSetFrontendFilterSelected={handleSetFrontendFilterSelected}
            backendFilterSelected={backendFilterSelected}
            handleSetBackendFilterSelected={handleSetBackendFilterSelected}
            handleFilterSubmit={handleFilterSubmit}
          />
        </div>
        <div className="container__result-container">
          <div className="search-badge-container">
            {technologiesSelected.map(technologyKey => (
              <SearchBadge
                key={technologyKey}
                text={technologyKey}
                handler={() => handleRemoveTechnologiesSelected(technologyKey)}
              />
            ))}
          </div>

          <Spacer height={technologiesSelected.length !== 0 ? 24 : 0} />

          <CardSectionSkeleton
            isLoading={fetchProjectsIsLoading}
            isError={fetchProjectsIsError}
            isEmpty={fetchProjectsIsEmpty}
          >
            <div className="card-container">
              {currentItems.map(project => (
                <div className="card-grid" key={project.id}>
                  <Card project={project} />
                </div>
              ))}
            </div>

            <div className="paginator-container">
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                handleChangePage={handleChangePage}
                handleChangeItemsPerPage={handleChangeItemsPerPage}
              />
            </div>
          </CardSectionSkeleton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
