import { type FC } from 'react';
import Button from '@components/Button';
import TechnologySection from './ui/TechnologySection';
import DesktopIcon from '@icons/DesktopIcon';
import MobileIcon from '@icons/MobileIcon';
import type { Project } from '@utils/types';
import useCard from './hooks/useCard';
import './styles.css';

type Props = {
  project: Project;
};

const Card: FC<Props> = ({ project }) => {
  const {
    title,
    description,
    status,
    frontend,
    backend,
    url,
    externalLink,
    urlRepository,
    image,
    platform,
  } = project;
  const { isImageLoaded, handleImageLoad, platformLabel } = useCard(platform);

  return (
    <article className="container-card">
      <div className="card-media">
        {!isImageLoaded && (
          <div className="container-img-skeleton">
            <div className="img-skeleton" />
          </div>
        )}
        <img
          className="card-image"
          src={image}
          alt={`Vista previa del proyecto ${title}`}
          onLoad={handleImageLoad}
          decoding="async"
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
        {status && <span className="card-status">{status}</span>}
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p className="card-description">{description}</p>}
        {urlRepository && (
          <a
            className="card-title-repository"
            target="_blank"
            href={urlRepository}
            rel="noreferrer"
          >
            Link al repositorio
          </a>
        )}

        <div className="card-platform-section" role="img" aria-label={platformLabel}>
          {platform.map(item => {
            const icon =
              item === 'desktop' ? (
                <DesktopIcon key={item} color="primaryText" />
              ) : (
                <MobileIcon key={item} color="primaryText" />
              );
            return icon;
          })}
        </div>

        <TechnologySection title="Frontend" technologies={frontend} mb={16} mt={16} />
        <TechnologySection title="Backend" technologies={backend} mb={24} />
        <Button href={url} externalLink={externalLink} width="100%">
          Ir al Demo
        </Button>
      </div>
    </article>
  );
};

export default Card;
