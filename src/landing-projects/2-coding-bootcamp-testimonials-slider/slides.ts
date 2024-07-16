let next_button: any = document.getElementsByClassName(
  'container__image__button__right'
);
let back_button: any = document.getElementsByClassName(
  'container__image__button__left'
);

let slides = document.getElementsByClassName('container');

let slideCount = slides.length;

let actualSlide = 0;

for (let slide of next_button) {
  slide.addEventListener('click', function () {
    slides[actualSlide].classList.add('hidden');
    if (actualSlide + 1 > slideCount - 1) {
      actualSlide = 0;
    } else {
      actualSlide += 1;
    }
    slides[actualSlide].classList.remove('hidden');
  });
}

for (let slide of back_button) {
  slide.addEventListener('click', function () {
    slides[actualSlide].classList.add('hidden');
    if (actualSlide - 1 < 0) {
      actualSlide = slideCount - 1;
    } else {
      actualSlide -= 1;
    }
    slides[actualSlide].classList.remove('hidden');
  });
}
