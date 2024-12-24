import React, { FC, ReactNode } from 'react';

import classes from './Layout.module.scss';

interface IProps {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

const Layout: FC<IProps> = ({ header, children, footer }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>{header}</div>
      <div className={classes.content}>{children}</div>
      <div className={classes.footer}>{footer}</div>
    </div>
  );
};

export default Layout;
