import React, { type FC } from 'react';
import IconButton from '@components/commons/IconButton';
import CloseIcon from '@icons/CloseIcon';
import { getTechnologyInfo } from '@utils/technologies';
import './searchBadge.css';

type Props = {
  text: string;
  handler: () => void;
};

const SearchBadge: FC<Props> = ({ text, handler }) => {
  const technology = getTechnologyInfo(text);
  return (
    <div className="search-badge">
      <p className="search-badge-text">{technology.label}</p>
      <IconButton onClick={handler}>
        <CloseIcon color="primaryText" />
      </IconButton>
    </div>
  );
};

export default SearchBadge;
