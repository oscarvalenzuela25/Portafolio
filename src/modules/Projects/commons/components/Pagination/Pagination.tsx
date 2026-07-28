import React, { type FC } from 'react';
import usePagination from './hooks/usePagination';
import classNames from 'classnames';
import './pagination.css';
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
    <div className="pagination-container-root">
      <div className="pagination-container">
        <div
          className={classNames('pagination-item', {
            'pagination-item--disabled': disabledFirstItem,
          })}
          onClick={() => handleChangePageFirstItem(handleChangePage)}
        >
          <ChevronLeftIcon color={disabledFirstItem ? 'secondaryText' : 'primaryText'} />
        </div>
        {arrayPage.map(page => (
          <div
            className={classNames('pagination-item', {
              'pagination-item--active': Number(currentPage) === Number(page),
            })}
            key={page}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </div>
        ))}
        <div
          className={classNames('pagination-item', {
            'pagination-item--disabled': disabledLastItem,
          })}
          onClick={() => handleChangePageLastItem(handleChangePage)}
        >
          <ChevronRightIcon color={disabledLastItem ? 'secondaryText' : 'primaryText'} />
        </div>
      </div>

      <form>
        <select
          name="itemsPerPage"
          className="pagination-item-per-page"
          value={itemsPerPage}
          onChange={e => handleChangeItemsPerPage(Number(e.target.value))}
        >
          {arrayItemsPerPage.map(itemPerPage => (
            <option key={itemPerPage} value={itemPerPage}>
              {itemPerPage}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Paginate;
