import { FC } from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';

import noImage from '../../assets/icons/no-image.png';

import classes from './Card.module.scss';

interface IProps {
  image: string;
  title: string;
  rating?: number;
  to: string;
  className?: string;
}

const Card: FC<IProps> = ({ image, title, rating, to, className }) => {
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
    <Link to={to} className={classes.wrapper}>
      {rating !== 0 && rating && (
        <div className={cx(classes.rating, rating && classes[`rating--variant-${handleRating(rating)}`])}>{rating}</div>
      )}
      <img src={image ? image : noImage} alt="" className={cx(classes.img, !image && classes[`img-no-image`])} />
      <div className={classes.title}>{title}</div>
    </Link>
  );
};

export default Card;
