import { useState } from 'react';
import type { Project } from '@utils/types';

const useCard = (platform: Project['platform']) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const platformLabel = `Disponible en ${platform
    .map(item => (item === 'desktop' ? 'escritorio' : 'móvil'))
    .join(' y ')}`;

  return {
    isImageLoaded,
    handleImageLoad,
    platformLabel,
  };
};

export default useCard;
