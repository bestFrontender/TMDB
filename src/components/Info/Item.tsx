import React, { FC } from 'react';
import classes from './Info.module.scss';

interface IProps {
  name: string;
}

const Item: FC<IProps> = ({ name }) => {
  return <div className={classes.item}>{name}</div>;
};

export default Item;
