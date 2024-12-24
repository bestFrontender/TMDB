import { FC } from 'react';
import { useUpcoming } from '../../modules/movies/hooks';

import { Card } from '../../components/Card';
import { Spinner } from '../../components/Spinner';

import classes from './Upcoming.module.scss';
import { Spacer } from '../../components/Spacer';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';

const Upcoming: FC = () => {
  const [searchParams] = useSearchParams();

  const { items, isFetched, meta } = useUpcoming({
    params: {
      page: searchParams.get('page')
    }
  });

  if (!isFetched) {
    return <Spinner />;
  }

  return (
    <>
      <div className={classes.wrapper}>
        {items.map(item => (
          <div className={classes.item} key={item.id}>
            <Card
              to={`/details/${item.id}`}
              image={item.posterPath}
              title={item.title}
              rating={Number(item.voteAverage.toFixed(1))}
            />
          </div>
        ))}
      </div>
      <Pagination pageCount={Number(meta.totalPages)} />
      <Spacer size={50} />
    </>
  );
};

export default Upcoming;
