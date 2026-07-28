import { type FC } from 'react';
import useSearchBadge from './hooks/useSearchBadge';
import './styles.css';

type Props = {
  text: string;
};

const SearchBadge: FC<Props> = ({ text }) => {
  const { technology } = useSearchBadge(text);

  return (
    <div className="search-badge">
      <p className="search-badge-text">{technology.label}</p>
    </div>
  );
};

export default SearchBadge;
