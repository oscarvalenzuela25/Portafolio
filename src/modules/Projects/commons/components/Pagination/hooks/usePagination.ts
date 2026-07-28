type Props = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
};

const usePagination = ({ currentPage, totalItems, itemsPerPage }: Props) => {
  const arrayItemsPerPage = ['6', '12', '24', '48', '96'];
  const numberOfPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const disabledFirstItem = currentPage === 1;
  const disabledLastItem = currentPage === numberOfPages;

  const arrayPage = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const handleChangePageFirstItem = (handleChange: (value: number) => void) => {
    if (disabledFirstItem) return;
    handleChange(currentPage - 1);
  };

  const handleChangePageLastItem = (handleChange: (value: number) => void) => {
    if (disabledLastItem) return;
    handleChange(currentPage + 1);
  };

  return {
    arrayItemsPerPage,
    numberOfPages,
    disabledFirstItem,
    disabledLastItem,
    arrayPage,
    handleChangePageFirstItem,
    handleChangePageLastItem,
  };
};

export default usePagination;
