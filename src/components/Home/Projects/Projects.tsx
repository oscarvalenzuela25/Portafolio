import React from 'react';
import SearchBadge from '../SearchBadge';
import Card from '../Card';
import Filter from '../Filter';
import Spacer from '@components/commons/Spacer';
import useProjects from './hooks/useProjects';
import CardSectionSkeleton from '../CardSectionSkeleton';
import './projects.css';

const Projects = () => {
  const {
    searchFilter,
    handleSetSearchFilter,
    frontendFilter,
    handleSetFrontendFilter,
    backendFilter,
    handleSetBackendFilter,
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsData,
    fetchProjectsIsEmpty,
    technologiesSelected,
    handleFilterSubmit,
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
            frontendFilter={frontendFilter}
            handleSetFrontendFilter={handleSetFrontendFilter}
            backendFilter={backendFilter}
            handleSetBackendFilter={handleSetBackendFilter}
            handleFilterSubmit={handleFilterSubmit}
          />
        </div>
        <div className="container__result-container">
          <div className="search-badge-container">
            {technologiesSelected.map(technology => (
              <SearchBadge
                key={technology}
                text={technology}
                handler={() => console.log(technology)}
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
              {fetchProjectsData.map(project => (
                <div className="card-grid" key={project.id}>
                  <Card project={project} />
                </div>
              ))}
            </div>
          </CardSectionSkeleton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
