import React, { type FC } from 'react';
import { getColor } from '@utils/iconColors';
import type { IconProps } from './types';

const ChevronUpIcon: FC<IconProps> = ({
  isLoading,
  disabled,
  styles,
  color,
}) => {
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
      <path d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  );
};

export default ChevronUpIcon;
