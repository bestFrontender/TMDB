import { FC } from 'react';

import { useSimilar } from '../../modules/movies/hooks';
import { useParams, useSearchParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { Card } from '../../components/Card';

import classes from './Similar.module.scss';
import { Spacer } from '../../components/Spacer';
import { Pagination } from '../../components/Pagination';
import { Typography } from '../../components/Typography';

interface IProps {}

const Similar: FC<IProps> = () => {
  const { id } = useParams<{ id: number }>();
  const [searchParams] = useSearchParams();
  const { items, isFetched, meta } = useSimilar({
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
      <Typography text="Похожий" size={30} />
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

export default Similar;
