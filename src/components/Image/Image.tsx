import { FC } from 'react';

import cx from 'classnames';

import classes from './Image.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  image: string;
  rating: number;
}

const Image: FC<IProps> = ({ image, rating }) => {
  const handleRating = (rating: number): string => {
    if (rating < 5) {
      return 'red';
    }
    if (rating >= 5 && rating < 7) {
      return 'gray';
    }
    if (rating > 7 && rating < 8) {
      return 'green';
    }
    return 'gold';
  };

  return (
    <div className={classes.image}>
      <div className={cx(classes.rating, classes[`rating--variant-${handleRating(rating)}`])}>{rating}</div>
      <img src={image} alt="" />
    </div>
  );
};

export default Image;
