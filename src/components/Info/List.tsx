import React, { FC, ReactNode } from 'react';

import classes from './Info.module.scss';

interface IProps {
  label: string;
  children: ReactNode;
}

const List: FC<IProps> = ({ label, children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>{label}: </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default List;
