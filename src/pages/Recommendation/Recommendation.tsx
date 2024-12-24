import { FC } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';
import { useRecommendation } from '../../modules/movies/hooks';

import { Card } from '../../components/Card';
import { Spacer } from '../../components/Spacer';
import { Pagination } from '../../components/Pagination';

import classes from './Recommendation.module.scss';
import { Spinner } from '../../components/Spinner';
import { Typography } from '../../components/Typography';

const Recommendation: FC = () => {
  const { id } = useParams<{ id: number }>();
  const [searchParams] = useSearchParams();

  const { items, isFetched, meta } = useRecommendation({
    id,
    params: {
      page: searchParams.get('page')
    }
  });

  if (!isFetched) {
    return <Spinner />;
  }

  return (
    <>
      <Typography text="Рекомендация" size={30} />
      <Spacer size={30} />
      <div className={classes.wrapper}>
        {items.map(item => {
          if (item.posterPath) {
            return (
              <div className={classes.item} key={item.id}>
                <Card
                  to={`/details/${item.id}`}
                  image={item.posterPath}
                  title={item.title}
                  rating={Number(item.voteAverage.toFixed(1))}
                />
              </div>
            );
          }
        })}
      </div>
      <Pagination pageCount={Number(meta.totalPages)} />
      <Spacer size={50} />
    </>
  );
};

export default Recommendation;
