const hamburgerMenu = document.getElementById('hamburger') as HTMLElement | null;

if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', () => {
    const navToggle = document.getElementById('navToggle') as HTMLElement | null;
    if (!navToggle) return;

    const infoHeight = navToggle.offsetHeight;
    if (infoHeight === 0) {
      navToggle.style.height = '200px';
    } else {
      navToggle.style.height = '0px';
    }
  });
}
