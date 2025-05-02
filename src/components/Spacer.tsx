import React, { type FC } from 'react';

type Props = {
  width?: number;
  height?: number;
};

const Spacer: FC<Props> = ({ width = 0, height = 0 }) => {
  return <div style={{ width, height }} />;
};

export default Spacer;
