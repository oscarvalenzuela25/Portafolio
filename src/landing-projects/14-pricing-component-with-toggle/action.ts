const changeHidden = (array: HTMLCollectionOf<Element>) => {
  for (let card of Array.from(array)) {
    card.classList.toggle('hidden');
  }
};

const checker = document.getElementById('checker') as HTMLElement | null;

if (checker) {
  checker.addEventListener('click', function () {
    const checkerBall = document.getElementById('checker-ball') as HTMLElement | null;
    const cardAnual = document.getElementsByClassName('anual') as HTMLCollectionOf<HTMLElement>;
    const cardMensual = document.getElementsByClassName('mensual') as HTMLCollectionOf<HTMLElement>;
    const anual = document.getElementById('anual') as HTMLElement | null;
    const mensual = document.getElementById('mensual') as HTMLElement | null;

    checkerBall?.classList.toggle('ball-active');
    checker.classList.toggle('change-background-checker');
    anual?.classList.toggle('p-active');
    mensual?.classList.toggle('p-active');
    changeHidden(cardAnual);
    changeHidden(cardMensual);
  });
}
