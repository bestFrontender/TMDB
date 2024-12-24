import { FC, useCallback } from 'react';
import { useRecommendation, useSingle, useCredits, useSimilar } from '../../modules/movies/hooks';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { BsArrowRight } from 'react-icons/bs';

import { currency } from '../../helpers';

import * as Info from '../../components/Info';

import { isEmpty } from 'radash';
import { Image } from '../../components/Image';
import { Typography } from '../../components/Typography';
import { Spinner } from '../../components/Spinner';
import { Card } from '../../components/Card';
import { Spacer } from '../../components/Spacer';

import classes from './Details.module.scss';

const Details: FC = () => {
  const { id } = useParams<{ id: number }>();

  const [recommendationRef, recommendationApi] = useEmblaCarousel({ loop: false, slidesToScroll: 2 }, [Autoplay()]);
  const [similarRef, similarApi] = useEmblaCarousel({ loop: false, slidesToScroll: 4 }, [Autoplay()]);

  const { item, isFetched } = useSingle({ id });
  const { items: similar, isFetched: isSimilarFetched } = useSimilar({ id });
  const { items: recommendations, isFetched: isRecommendationFetched } = useRecommendation({ id });

  const recommendationScrollPrev = useCallback(() => {
    if (recommendationApi) recommendationApi.scrollPrev();
  }, [recommendationApi]);

  const recommendationScrollNext = useCallback(() => {
    if (recommendationApi) recommendationApi.scrollNext();
  }, [recommendationApi]);

  const similarScrollPrev = useCallback(() => {
    if (similarApi) similarApi.scrollPrev();
  }, [similarApi]);

  const similarScrollNext = useCallback(() => {
    if (similarApi) similarApi.scrollNext();
  }, [similarApi]);

  if (!isFetched || !isRecommendationFetched || !isSimilarFetched) {
    return <Spinner />;
  }

  return (
    <div className={classes.wrapper}>
      {item.title && (
        <>
          <div className={classes.more}>
            <Typography text={item.title} size={40} />
            <Link to={`/credits/${id}`} className={classes.moreRight}>
              <Typography text="Узнать больше" />
              <Spacer size={15} />
              <BsArrowRight size={18} />
            </Link>
          </div>
          <Spacer size={30} />
        </>
      )}

      {item.posterPath && <Image image={item.posterPath} rating={Number(item.voteAverage.toFixed(1))} />}

      {item.overview && (
        <>
          <Typography text={item.overview} size={18} />
          <Spacer size={30} />
        </>
      )}

      {!isEmpty(item.genres) && (
        <Info.List label="ЖАНРЫ">
          {item.genres.map(item => (
            <Info.Item key={item.id} name={item.name} />
          ))}
        </Info.List>
      )}

      {!isEmpty(item.productionCompanies) && (
        <Info.List label="Производственные компании">
          {item.productionCompanies.map(item => (
            <Info.Item key={item.id} name={item.name} />
          ))}
        </Info.List>
      )}

      {item.releaseDate && (
        <Info.List label="Дата выпуска">
          <Info.Item name={item.releaseDate} />
        </Info.List>
      )}

      {!isEmpty(item.productionCountries) && (
        <Info.List label="Страны производства">
          {item.productionCountries.map(item => (
            <Info.Item key={item.iso_3166_1} name={item.name} />
          ))}
        </Info.List>
      )}

      {item.budget !== 0 && item.budget && (
        <Info.List label="БЮДЖЕТ">
          <Info.Item name={`${currency.format(item.budget)} $`} />
        </Info.List>
      )}

      {!isEmpty(similar) && (
        <>
          <Spacer size={60} />
          <div className={classes.more}>
            <Typography text="Похожий" size={30} />
            <Link to={`/similar/${id}`} className={classes.moreRight}>
              <Typography text="Все" />
              <Spacer size={15} />
              <BsArrowRight size={18} />
            </Link>
          </div>
          <Spacer size={30} />
          <div className={classes.slider} ref={similarRef}>
            <div className={classes.container}>
              {similar.map(item => (
                <div className={classes.slide} key={item.id}>
                  <Card
                    image={item.backdropPath}
                    title={item.title}
                    rating={Number(item.voteAverage.toFixed(1))}
                    to={`/details/${item.id}`}
                  />
                </div>
              ))}
            </div>
            <button className={classes.prev} onClick={similarScrollPrev} />
            <button className={classes.next} onClick={similarScrollNext} />
          </div>
        </>
      )}

      {!isEmpty(recommendations) && (
        <>
          <Spacer size={60} />
          <Link to={`/recommendation/${id}`} className={classes.more}>
            <Typography text="Рекомендация" size={30} />
            <div className={classes.moreRight}>
              <Typography text="Все" />
              <Spacer size={15} />
              <BsArrowRight size={18} />
            </div>
          </Link>
          <Spacer size={30} />
          <div className={classes.slider} ref={recommendationRef}>
            <div className={classes.container}>
              {recommendations.map(item => (
                <div className={classes.slide} key={item.id}>
                  <Card
                    image={item.backdropPath}
                    title={item.title}
                    rating={Number(item.voteAverage.toFixed(1))}
                    to={`/details/${item.id}`}
                  />
                </div>
              ))}
            </div>
            <button className={classes.prev} onClick={recommendationScrollPrev} />
            <button className={classes.next} onClick={recommendationScrollNext} />
          </div>
        </>
      )}
      <Spacer size={50} />
    </div>
  );
};

export default Details;
