import { type FC, type PropsWithChildren, type ButtonHTMLAttributes, type ReactNode } from 'react';
import classNames from 'classnames';
import './styles.css';

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    disabled?: boolean;
    width?: string;
    variant?: 'contained' | 'outlined' | 'text';
    starticon?: ReactNode;
    endicon?: ReactNode;
    href?: string;
    externalLink?: boolean;
  };

const Button: FC<Props> = ({
  children,
  loading = false,
  disabled = false,
  width,
  variant = 'contained',
  starticon,
  endicon,
  href,
  externalLink,
  ...rest
}) => {
  const isUnavailable = loading || disabled;
  const buttonClassName = classNames('button-container', {
    'button-container--contained': variant === 'contained',
    'button-container--text': variant === 'text',
    'button-container--loading': isUnavailable,
  });
  const content = (
    <>
      {starticon}
      <span
        className={classNames('button-text', {
          'button-text--contained': variant === 'contained',
          'button-text--text': variant === 'text',
        })}
      >
        {loading ? 'Cargando...' : children}
      </span>
      {endicon}
    </>
  );

  if (href) {
    return (
      <a
        className={classNames('link-button', buttonClassName)}
        href={href}
        target={externalLink ? '_blank' : '_self'}
        rel={externalLink ? 'noopener noreferrer' : undefined}
        style={{ width }}
        aria-disabled={isUnavailable || undefined}
        tabIndex={isUnavailable ? -1 : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClassName}
      style={{ width }}
      disabled={isUnavailable}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
