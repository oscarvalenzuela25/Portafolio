const changeHidden = (array: any) => {
  for (let card of array) {
    card.classList.toggle('hidden');
  }
};

let checker: any = document.getElementById('checker');
checker.addEventListener('click', function () {
  let checkerBall: any = document.getElementById('checker-ball');
  let cardAnual: any = document.getElementsByClassName('anual');
  let cardMensual: any = document.getElementsByClassName('mensual');
  let anual: any = document.getElementById('anual');
  let mensual: any = document.getElementById('mensual');

  checkerBall.classList.toggle('ball-active');
  checker.classList.toggle('change-background-checker');
  anual.classList.toggle('p-active');
  mensual.classList.toggle('p-active');
  changeHidden(cardAnual);
  changeHidden(cardMensual);
});
