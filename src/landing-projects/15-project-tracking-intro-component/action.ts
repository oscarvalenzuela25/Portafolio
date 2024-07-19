const openx: HTMLElement | null = document.getElementById('open');
const closex: HTMLElement | null = document.getElementById('close');
const nav: HTMLElement | null = document.getElementById('nav-mobile');
const buttonOpen: HTMLElement | null = document.getElementById('open');
const buttonClose: HTMLElement | null = document.getElementById('close');

if (buttonOpen) {
  buttonOpen.addEventListener('click', () => {
    if (openx) openx.classList.toggle('hidden');
    if (closex) closex.classList.toggle('hidden');
    if (nav) nav.style.height = '230px';
  });
}

if (buttonClose) {
  buttonClose.addEventListener('click', () => {
    if (openx) openx.classList.toggle('hidden');
    if (closex) closex.classList.toggle('hidden');
    if (nav) nav.style.height = '0px';
  });
}
