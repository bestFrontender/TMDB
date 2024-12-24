import { FC, useCallback, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { isEmpty } from 'radash';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import cx from 'classnames';
import { BsArrowRight } from 'react-icons/bs';

import * as ComplexCard from '../../components/ComplexCard';

import { useCredits, useSimilar } from '../../modules/movies/hooks';
import { Spacer } from '../../components/Spacer';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import { Spinner } from '../../components/Spinner';

import classes from './Credits.module.scss';

const Credits: FC = () => {
  const { id } = useParams<{ id: number }>();
  const [state, setState] = useState<'crew' | 'cast'>('cast');

  const { item, isFetched } = useCredits({ id });
  const { items, isFetched: isSimilarFetched } = useSimilar({ id });

  const [sliderRef, SliderApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const similarScrollPrev = useCallback(() => {
    if (SliderApi) SliderApi.scrollPrev();
  }, [SliderApi]);

  const similarScrollNext = useCallback(() => {
    if (SliderApi) SliderApi.scrollNext();
  }, [SliderApi]);

  if (!isFetched || !isSimilarFetched) {
    return <Spinner />;
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography
          text="Актерский состав"
          size={25}
          onClick={() => setState('cast')}
          className={cx(classes.tab, state === 'cast' && classes[`tab-active`])}
          isCursorPointer
        />
        <Spacer size={20} />
        <Typography
          text="Творческий коллектив"
          size={25}
          onClick={() => setState('crew')}
          className={cx(classes.tab, state === 'crew' && classes[`tab-active`])}
          isCursorPointer
        />
      </div>
      <Spacer size={60} />
      {state === 'cast' && (
        <div className={classes.wrapper}>
          {item.cast.map(item => {
            if (item.profilePath) {
              return (
                <div className={classes.item} key={item.id}>
                  <ComplexCard.List image={item.profilePath} character={item.character} popularity={item.popularity}>
                    <ComplexCard.Item label="Имя: " value={item.name} />
                    <ComplexCard.Item label="Роль: " value={item.character} />
                    <ComplexCard.Item label="Популярность: " value={item.popularity.toString()} />
                  </ComplexCard.List>
                </div>
              );
            }
          })}
        </div>
      )}
      {state === 'crew' && (
        <div className={classes.wrapper}>
          {item.crew.map(item => {
            if (item.profilePath) {
              return (
                <div className={classes.item} key={item.id}>
                  <ComplexCard.List image={item.profilePath}>
                    <ComplexCard.Item label="Имя: " value={item.name} />
                    <ComplexCard.Item label="Работа: " value={item.job} />
                    <ComplexCard.Item label="Отделение: " value={item.department} />
                    <ComplexCard.Item label="Популярность: " value={item.popularity.toString()} />
                  </ComplexCard.List>
                </div>
              );
            }
          })}
        </div>
      )}

      {!isEmpty(items) && (
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
          <div className={classes.slider} ref={sliderRef}>
            <div className={classes.container}>
              {items.map(item => (
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
      <Spacer size={50} />
    </>
  );
};

export default Credits;
