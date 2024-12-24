import { FC } from 'react';

import classes from './Spinner.module.scss';

const Spinner: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Spinner;
