import theme from '@theme/index';
import React, { type FC } from 'react';

type Props = {
  isLoading?: boolean;
  disabled?: boolean;
  styles?: React.CSSProperties;
  color?: 'primary' | 'primaryText';
};

const CloseIcon: FC<Props> = ({ isLoading, disabled, styles, color }) => {
  const getColor = () => {
    if (isLoading || disabled) {
      return theme.palette.dark.textSecondary;
    }
    if (styles?.color) {
      return styles.color;
    }
    if (color) {
      const colors = {
        primary: theme.palette.dark.primary,
        primaryText: theme.palette.dark.textPrimary,
      };
      return colors[color];
    }
    return theme.palette.dark.primary;
  };

  const colorSelected = getColor();

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
