const changeClass = (array: any, removeClass: any, addClass: any) => {
  while (array.length) {
    for (let children of array) {
      children.classList.replace(removeClass, addClass);
    }
  }
};

let checkbox: any = document.getElementById('dark_mode');
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    let bgLight = document.getElementsByClassName('bg-light');
    let bgAbsoluteLight = document.getElementsByClassName('bg-absolute-light');
    let bgBoxLight = document.getElementsByClassName('bg-box-light');
    let colorGrayLight = document.getElementsByClassName('color-gray-light');
    let colorBlackLight = document.getElementsByClassName('color-black-light');

    changeClass(bgLight, 'bg-light', 'bg-dark');
    changeClass(bgAbsoluteLight, 'bg-absolute-light', 'bg-absolute-dark');
    changeClass(bgBoxLight, 'bg-box-light', 'bg-box-dark');
    changeClass(colorGrayLight, 'color-gray-light', 'color-gray-dark');
    changeClass(colorBlackLight, 'color-black-light', 'color-white-dark');
  } else {
    let bgDark = document.getElementsByClassName('bg-dark');
    let bgAbsoluteDark = document.getElementsByClassName('bg-absolute-dark');
    let bgBoxDark = document.getElementsByClassName('bg-box-dark');
    let colorGrayDark = document.getElementsByClassName('color-gray-dark');
    let colorBlackDark = document.getElementsByClassName('color-white-dark');

    changeClass(bgDark, 'bg-dark', 'bg-light');
    changeClass(bgAbsoluteDark, 'bg-absolute-dark', 'bg-absolute-light');
    changeClass(bgBoxDark, 'bg-box-dark', 'bg-box-light');
    changeClass(colorGrayDark, 'color-gray-dark', 'color-gray-light');
    changeClass(colorBlackDark, 'color-white-dark', 'color-black-light');
  }
});
