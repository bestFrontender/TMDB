import { FC, ReactNode } from 'react';

import classes from './ComplexCard.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  image: string;
  children?: ReactNode;
}

const List: FC<IProps> = ({ image, children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <img src={image} />
      </div>
      {children}
    </div>
  );
};

export default List;
