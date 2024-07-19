const hamburgerMenu: any = document.getElementById('hamburger');
hamburgerMenu.addEventListener('click', () => {
  let navToggle: any = document.getElementById('navToggle');
  const infoHeight = navToggle.offsetHeight;
  if (infoHeight == 0) {
    navToggle.style.height = '200px';
  } else {
    navToggle.style.height = '0px';
  }
});
