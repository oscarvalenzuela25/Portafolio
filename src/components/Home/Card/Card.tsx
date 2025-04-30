import React, { type FC } from 'react';
import Button from '@components/commons/Button';
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
  return (
    <div className="container-card">
      <img
        src={image}
        alt={image}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
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
                <DesktopIcon color="primaryText" />
              ) : (
                <MobileIcon color="primaryText" />
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
