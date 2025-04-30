const share = () => {
  let share = document.getElementsByClassName('container-body__share')[0].classList;
  let colita = document.getElementsByClassName('container-body__colita')[0].classList;
  let icon = document.getElementsByClassName('container-body__footer-icon')[0].classList;

  document.getElementById('icon')?.addEventListener('click', function () {
    share.toggle('hidden');
    icon.toggle('change_color_mobile_icon');
    if (window.innerWidth > 375) {
      colita.toggle('hidden');
      icon.toggle('change_color_icon');
    }
  });
};

share();
