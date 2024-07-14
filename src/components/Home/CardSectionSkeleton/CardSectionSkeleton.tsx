import React, { type FC, type PropsWithChildren } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import theme from '@theme/index';
import './cardSectionSkeleton.css';

type Props = PropsWithChildren & {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
};

const CardSectionSkeleton: FC<Props> = ({
  isLoading,
  isError,
  isEmpty,
  children,
}) => {
  if (isLoading)
    return (
      <div className="card-section-skeleton-container">
        <Player
          src="https://lottie.host/c981133d-8200-4903-bfce-f918749e3dd7/kWe4y3iIPo.json"
          loop
          autoplay
          background={theme.palette.dark.backgroundPrimary}
          style={{
            width: 250,
            height: 250,
          }}
        />
      </div>
    );
  if (isError)
    return (
      <div className="card-section-skeleton-container">
        <Player
          src="https://lottie.host/4916ee84-110e-4010-9553-5be96e530992/7UiR7ZOSAO.json"
          loop
          autoplay
          background={theme.palette.dark.backgroundPrimary}
          style={{
            width: 250,
            height: 250,
          }}
        />
        <p className="card-section-skeleton-text">
          ¡Lo sentimos! Se ha producido un error al cargar la información.
        </p>
      </div>
    );
  if (isEmpty)
    return (
      <div className="card-section-skeleton-container">
        <Player
          src="https://lottie.host/4b76e37f-4bec-47bb-a3f9-0b52a5c67b68/wRuEmyCU8w.json"
          loop
          autoplay
          background={theme.palette.dark.backgroundPrimary}
          style={{
            width: 250,
            height: 250,
          }}
        />
        <p className="card-section-skeleton-text">
          ¡Vaya! No hay nada que mostrar en este momento.
        </p>
      </div>
    );

  return <>{children}</>;
};

export default CardSectionSkeleton;
