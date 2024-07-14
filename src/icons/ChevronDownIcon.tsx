import theme from '@theme/index';
import React, { type FC } from 'react';

type Props = {
  isLoading?: boolean;
  disabled?: boolean;
  styles?: React.CSSProperties;
  color?: 'primary' | 'primaryText';
};

const ChevronDownIcon: FC<Props> = ({ isLoading, disabled, styles, color }) => {
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
      <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

export default ChevronDownIcon;
