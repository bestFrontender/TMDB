import { FC } from 'react';
import { useTopRated } from '../../modules/movies/hooks';

import { Card } from '../../components/Card';
import { Spinner } from '../../components/Spinner';

import classes from './TopRated.module.scss';
import { Spacer } from '../../components/Spacer';
import { Pagination } from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';

const TopRated: FC = () => {
  const [searchParams] = useSearchParams();

  const { items, isFetched, meta } = useTopRated({
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

export default TopRated;
