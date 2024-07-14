import React, {
  type ButtonHTMLAttributes,
  type FC,
  type PropsWithChildren,
} from 'react';
import './iconButton.css';

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    externalLink?: boolean;
  };

const IconButton: FC<Props> = ({ children, href, externalLink, ...rest }) => {
  if (href) {
    return (
      <a
        className="link-button"
        href={href}
        target={externalLink ? '_blank' : '_self'}
      >
        <button className="icon-button" {...rest}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className="icon-button" {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
