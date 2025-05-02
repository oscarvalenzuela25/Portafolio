import React, { type FC } from 'react';
import Spacer from '@components/Spacer';
import { getTechnologyInfo } from '@utils/technologies';
import '../card.css';

type Props = {
  title: string;
  technologies: string[];
  mb?: number;
  mt?: number;
};

const TechnologySection: FC<Props> = ({ title, technologies = [], mb = 0, mt = 0 }) => {
  if (technologies.length === 0) return null;

  return (
    <>
      <Spacer height={mt} />
      <p className="card-title-technology">{title}</p>
      <Spacer height={8} />
      <div className="card-container-technologies">
        {technologies.map(technology => {
          const { key, label, color } = getTechnologyInfo(technology);
          return (
            <p className="technology-badge" key={key} style={{ color }}>
              {label}
            </p>
          );
        })}
      </div>
      <Spacer height={mb} />
    </>
  );
};

export default TechnologySection;
