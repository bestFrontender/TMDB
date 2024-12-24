import { FC } from 'react';

interface IProps {
  size: number;
}

const Spacer: FC<IProps> = ({ size = 0 }) => {
  return <div style={{ width: size, height: size }} />;
};

export default Spacer;
