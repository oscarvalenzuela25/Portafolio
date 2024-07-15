import React, { type FC } from 'react';
import Button from '@components/commons/Button';
import TechnologySection from './ui/TechnologySection';
import './card.css';

export type Project = {
  id: number;
  title: string;
  frontend: string[];
  backend: string[];
  url: string;
  externalLink: boolean;
  urlRepository: string;
  image: string;
};

type Props = {
  project: Project;
};

const Card: FC<Props> = ({ project }) => {
  const { title, frontend, backend, url, externalLink, urlRepository, image } =
    project;
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
          >
            Link al repositorio
          </a>
        )}

        <TechnologySection
          title="Frontend"
          technologies={frontend}
          mb={16}
          mt={16}
        />
        <TechnologySection title="Backend" technologies={backend} mb={24} />
        <Button href={url} externalLink={externalLink} width="100%">
          Ir al Demo
        </Button>
      </div>
    </div>
  );
};

export default Card;
