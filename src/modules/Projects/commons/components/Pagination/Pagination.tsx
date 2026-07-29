import { type FC } from 'react';
import usePagination from './hooks/usePagination';
import classNames from 'classnames';
import './styles.css';
import ChevronLeftIcon from '@icons/ChevronLeftIcon';
import ChevronRightIcon from '@icons/ChevronRightIcon';

type Props = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  handleChangePage: (newCurrentPage: number) => void;
  handleChangeItemsPerPage: (newItemsPerPage: number) => void;
};

const Paginate: FC<Props> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  handleChangePage,
  handleChangeItemsPerPage,
}) => {
  const {
    arrayItemsPerPage,
    disabledFirstItem,
    disabledLastItem,
    arrayPage,
    handleChangePageFirstItem,
    handleChangePageLastItem,
  } = usePagination({
    currentPage,
    totalItems,
    itemsPerPage,
  });

  return (
    <nav className="pagination-container-root" aria-label="Paginación de proyectos">
      <div className="pagination-container">
        <button
          type="button"
          className={classNames('pagination-item', {
            'pagination-item--disabled': disabledFirstItem,
          })}
          aria-label="Página anterior"
          disabled={disabledFirstItem}
          onClick={() => handleChangePageFirstItem(handleChangePage)}
        >
          <ChevronLeftIcon color={disabledFirstItem ? 'secondaryText' : 'primaryText'} />
        </button>
        {arrayPage.map(page => (
          <button
            type="button"
            className={classNames('pagination-item', {
              'pagination-item--active': Number(currentPage) === Number(page),
            })}
            key={page}
            aria-label={`Ir a la página ${page}`}
            aria-current={Number(currentPage) === Number(page) ? 'page' : undefined}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          className={classNames('pagination-item', {
            'pagination-item--disabled': disabledLastItem,
          })}
          aria-label="Página siguiente"
          disabled={disabledLastItem}
          onClick={() => handleChangePageLastItem(handleChangePage)}
        >
          <ChevronRightIcon color={disabledLastItem ? 'secondaryText' : 'primaryText'} />
        </button>
      </div>

      <div className="items-per-page-control">
        <label className="items-per-page-label" htmlFor="items-per-page">
          Por página
        </label>
        <select
          id="items-per-page"
          name="itemsPerPage"
          className="pagination-item-per-page"
          aria-label="Cantidad de proyectos por página"
          value={itemsPerPage}
          onChange={e => handleChangeItemsPerPage(Number(e.target.value))}
        >
          {arrayItemsPerPage.map(itemPerPage => (
            <option key={itemPerPage} value={itemPerPage}>
              {itemPerPage}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Paginate;
