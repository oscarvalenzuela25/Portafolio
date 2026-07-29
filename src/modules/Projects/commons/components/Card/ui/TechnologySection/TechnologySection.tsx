import { type FC } from 'react';
import Spacer from '@components/Spacer';
import useTechnologySection from './hooks/useTechnologySection';
import './styles.css';

type Props = {
  title: string;
  technologies: string[];
  mb?: number;
  mt?: number;
};

const TechnologySection: FC<Props> = ({ title, technologies = [], mb = 0, mt = 0 }) => {
  const { technologyItems, hasTechnologies } = useTechnologySection(technologies);

  if (!hasTechnologies) return null;

  return (
    <>
      <Spacer height={mt} />
      <p className="card-title-technology">{title}</p>
      <Spacer height={8} />
      <div className="card-container-technologies">
        {technologyItems.map(({ key, label, icon }) => {
          return (
            <span className="technology-badge" key={key} title={label}>
              {icon && (
                <img
                  className="technology-badge__icon"
                  src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                  alt=""
                  aria-hidden="true"
                  width="22"
                  height="22"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              )}
              <span>{label}</span>
            </span>
          );
        })}
      </div>
      <Spacer height={mb} />
    </>
  );
};

export default TechnologySection;
