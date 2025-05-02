import React, { type FC } from 'react';
import { getTechnologyInfo } from '@utils/technologies';
import './searchBadge.css';

type Props = {
  text: string;
};

const SearchBadge: FC<Props> = ({ text }) => {
  const technology = getTechnologyInfo(text);
  return (
    <div className="search-badge">
      <p className="search-badge-text">{technology.label}</p>
    </div>
  );
};

export default SearchBadge;
