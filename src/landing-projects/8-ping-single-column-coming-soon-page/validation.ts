const validationForm = () => {
  let inputText: any = document.getElementById('input-email');
  let msgError: any = document.getElementsByClassName('msgError');
  let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (regex.exec(inputText.value)) {
    inputText.classList.remove('border-error');
    for (let mensaje of msgError) {
      mensaje.classList.add('hidden');
    }
    return true;
  } else {
    inputText.classList.add('border-error');
    for (let mensaje of msgError) {
      mensaje.classList.remove('hidden');
    }
    return false;
  }
};

const getForm = document.getElementById('formInput');
getForm?.addEventListener('submit', e => {
  const isValidForm = validationForm();
  if (!isValidForm) {
    e.preventDefault();
  }
});
