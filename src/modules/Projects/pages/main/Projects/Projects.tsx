import SearchBadge from '../../../commons/components/SearchBadge';
import Card from '../../../commons/components/Card';
import Filter from '../../../commons/components/Filter';
import Spacer from '@components/Spacer';
import useProjects from './hooks/useProjects';
import CardSectionSkeleton from '../../../commons/components/CardSectionSkeleton';
import Pagination from '../../../commons/components/Pagination';
import './styles.css';

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
            <ul className="card-container" aria-label="Listado de proyectos">
              {currentItems.map(project => (
                <li className="card-grid" key={project.id}>
                  <Card project={project} />
                </li>
              ))}
            </ul>

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
