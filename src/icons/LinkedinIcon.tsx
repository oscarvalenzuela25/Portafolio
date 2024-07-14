import theme from '@theme/index';
import React, { type FC } from 'react';

type Props = {
  isLoading?: boolean;
  disabled?: boolean;
  styles?: React.CSSProperties;
  color?: 'primary' | 'primaryText';
};

const LinkedinIcon: FC<Props> = ({ isLoading, disabled, styles, color }) => {
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 11l0 5" />
      <path d="M8 8l0 .01" />
      <path d="M12 16l0 -5" />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  );
};

export default LinkedinIcon;