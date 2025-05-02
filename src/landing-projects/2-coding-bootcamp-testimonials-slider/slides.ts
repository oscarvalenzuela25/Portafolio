const left_button = document.getElementsByClassName(
  'container-right__button-left'
) as HTMLCollectionOf<HTMLElement>;
const right_button = document.getElementsByClassName(
  'container-right__button-right'
) as HTMLCollectionOf<HTMLElement>;

const texts = document?.getElementsByClassName('container-left__text-title') || [];
const names = document?.getElementsByClassName('container-left__container-name') || [];
const images = document?.getElementsByClassName('container-right__img--img-principal') || [];

const toggleFunction = () => {
  for (let count = 0; count < 4; count++) {
    texts[count].classList.toggle('hidden');
    names[count].classList.toggle('hidden');
    images[count].classList.toggle('hidden');
  }
};

for (const leftElement of left_button) {
  leftElement.addEventListener('click', () => toggleFunction());
}

for (const rightElement of right_button) {
  rightElement.addEventListener('click', () => toggleFunction());
}
