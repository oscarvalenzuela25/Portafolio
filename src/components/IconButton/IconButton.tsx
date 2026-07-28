import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import './styles.css';

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    externalLink?: boolean;
  };

const IconButton: FC<Props> = ({ children, href, externalLink, ...rest }) => {
  if (href) {
    return (
      <a
        className="icon-button link-button"
        href={href}
        target={externalLink ? '_blank' : '_self'}
        rel={externalLink ? 'noopener noreferrer' : undefined}
        aria-label={rest['aria-label']}
        title={rest.title}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className="icon-button" {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
