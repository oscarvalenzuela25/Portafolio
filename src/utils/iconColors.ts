import theme from './../theme';

export const getColor = ({
  isLoading,
  disabled,
  styles,
  color,
}: {
  isLoading?: boolean;
  disabled?: boolean;
  styles?: React.CSSProperties;
  color?: 'primary' | 'primaryText' | 'secondaryText';
}) => {
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
      secondaryText: theme.palette.dark.textSecondary,
    };
    return colors[color];
  }
  return theme.palette.dark.primary;
};
