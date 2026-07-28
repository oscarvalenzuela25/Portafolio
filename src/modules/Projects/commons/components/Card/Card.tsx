import React, { useState, type FC } from 'react';
import Button from '@components/Button';
import TechnologySection from './ui/TechnologySection';
import DesktopIcon from '@icons/DesktopIcon';
import MobileIcon from '@icons/MobileIcon';
import './card.css';
import type { Project } from '@utils/types';

type Props = {
  project: Project;
};

const Card: FC<Props> = ({ project }) => {
  const { title, frontend, backend, url, externalLink, urlRepository, image, platform } = project;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="container-card">
      {!isLoaded && (
        <div className="container-img-skeleton">
          <div className="img-skeleton" />
        </div>
      )}
      <img
        src={image}
        alt={image}
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: 'auto',
          display: isLoaded ? 'block' : 'none',
        }}
      />
      <div className="card-body">
        <p className="card-title">{title}</p>
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

        <div className="card-platform-section">
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
    </div>
  );
};

export default Card;
