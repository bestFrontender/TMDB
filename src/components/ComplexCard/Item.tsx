import React, { FC } from 'react';
import classes from './ComplexCard.module.scss';

interface IProps {
  label: string;
  value: string;
}

const Item: FC<IProps> = ({ label, value }) => {
  return (
    <div className={classes.info}>
      <div className={classes.key}>{label}</div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};

export default Item;
