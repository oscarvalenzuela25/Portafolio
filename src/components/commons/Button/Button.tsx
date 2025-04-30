import React, {
  type FC,
  type PropsWithChildren,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import classNames from 'classnames';
import './button.css';

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    disabled?: boolean;
    width?: string;
    variant?: 'contained' | 'outlined';
    starticon?: ReactNode;
    endicon?: any;
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
  if (href)
    return (
      <a
        className="link-button"
        href={href}
        target={externalLink ? '_blank' : '_self'}
        rel="noreferrer"
      >
        <button
          className={classNames('button-container', {
            'button-container--contained': variant === 'contained',
            'button-container--loading': loading || disabled,
          })}
          style={{ width }}
          {...rest}
        >
          {starticon && starticon}
          <p
            className={classNames('button-text', {
              'button-text--contained': variant === 'contained',
            })}
          >
            {loading ? 'Cargando...' : children}
          </p>
          {endicon && endicon}
        </button>
      </a>
    );
  return (
    <button
      className={classNames('button-container', {
        'button-container--contained': variant === 'contained',
        'button-container--loading': loading || disabled,
      })}
      style={{ width }}
      {...rest}
    >
      {starticon && starticon}
      <p
        className={classNames('button-text', {
          'button-text--contained': variant === 'contained',
        })}
      >
        {loading ? 'Cargando...' : children}
      </p>
      {endicon && endicon}
    </button>
  );
};

export default Button;
