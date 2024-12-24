import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';

import classes from './Pagination.module.scss';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface IProps {
  pageCount: number;
}

const Pagination: FC<IProps> = ({ pageCount }) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const currentPage = Number(searchParams.get('page') || '1') - 1;

  return (
    <ReactPaginate
      className={classes.wrapper}
      pageCount={pageCount}
      onPageChange={({ selected }) => setSearchParam({ page: `${selected + 1}` })}
      forcePage={currentPage}
      nextLabel={<MdOutlineKeyboardArrowRight />}
      previousLabel={<MdOutlineKeyboardArrowLeft />}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
    />
  );
};

export default Pagination;
