import SearchBadge from '../../components/SearchBadge';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import Spacer from '@components/Spacer';
import useProjects from './hooks/useProjects';
import CardSectionSkeleton from '../../components/CardSectionSkeleton';
import Pagination from '../../components/Pagination';
import './projects.css';

const Projects = () => {
  const {
    fetchProjectsIsLoading,
    fetchProjectsIsError,
    fetchProjectsIsEmpty,
    technologiesSelected,

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
          <Filter fetchProjectsIsLoading={fetchProjectsIsLoading} />
        </div>
        <div className="container__result-container">
          <div className="search-badge-container">
            {technologiesSelected.map(({ key, label }) => (
              <SearchBadge key={key} text={label} />
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
