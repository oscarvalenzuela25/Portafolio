import React, { type FC } from 'react';
import { getColor } from '@utils/iconColors';
import type { IconProps } from './types';

const ChevronRightIcon: FC<IconProps> = ({ isLoading, disabled, styles, color }) => {
  const colorSelected = getColor({
    isLoading: isLoading,
    disabled: disabled,
    styles: styles,
    color: color,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{
        ...styles,
        color: colorSelected,
        width: styles?.width || 20,
        height: styles?.height || 20,
      }}
    >
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
};

export default ChevronRightIcon;
