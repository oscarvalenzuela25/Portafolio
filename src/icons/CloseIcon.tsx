import React, { type FC } from 'react';
import { getColor } from '@utils/iconColors';
import type { IconProps } from './types';

const CloseIcon: FC<IconProps> = ({ isLoading, disabled, styles, color }) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export default CloseIcon;
