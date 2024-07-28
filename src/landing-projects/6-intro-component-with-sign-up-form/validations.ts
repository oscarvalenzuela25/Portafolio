const validations = () => {
  let form: any = document.getElementsByTagName('form')[0];
  let countErrors = 0;

  for (let input of form) {
    if (input.name.trim() != '') {
      let imgError: any = document.getElementById(input.name + 'ImgError');
      let msgError: any = document.getElementById(input.name + 'MsgError');
      if (input.value.trim() === '') {
        imgError.classList.remove('hidden');
        msgError.classList.remove('hidden');
        input.classList.add('border-error');
        countErrors++;
      } else {
        imgError.classList.add('hidden');
        msgError.classList.add('hidden');
        input.classList.remove('border-error');

        //Confirmacion del email
        if (input.name === 'email') {
          const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
          if (!regexEmail.exec(input.value)) {
            imgError.classList.remove('hidden');
            msgError.classList.remove('hidden');
            input.classList.add('border-error');
            countErrors++;
          }
        }
      }
    }
  }

  return +countErrors === 0;
};

const form = document.getElementById('formInput');

form?.addEventListener('submit', e => {
  e.preventDefault();
  if (validations()) {
    alert('Formulario enviado');
  }
});
