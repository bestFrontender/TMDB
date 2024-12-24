import { FC } from 'react';

import cx from 'classnames';

import classes from './Typography.module.scss';

interface IProps {
  text: string;
  size?: number;
  className?: string;
  isCursorPointer?: boolean;
  onClick?: () => void;
}

const Typography: FC<IProps> = ({ text, size = 18, className, isCursorPointer = false, onClick }) => {
  return (
    <div
      className={cx(classes.wrapper, isCursorPointer && classes[`wrapper-cursor-pinter`], className)}
      style={{ fontSize: size }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Typography;
