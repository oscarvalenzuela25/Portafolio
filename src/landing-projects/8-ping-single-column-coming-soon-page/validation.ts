const validationForm = (): boolean => {
  const inputText = document.getElementById('input-email') as HTMLInputElement | null;
  const msgError = document.getElementsByClassName('msgError') as HTMLCollectionOf<HTMLElement>;
  const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

  if (!inputText) return false;

  if (regex.test(inputText.value)) {
    inputText.classList.remove('border-error');
    for (const mensaje of Array.from(msgError)) {
      mensaje.classList.add('hidden');
    }
    return true;
  } else {
    inputText.classList.add('border-error');
    for (const mensaje of Array.from(msgError)) {
      mensaje.classList.remove('hidden');
    }
    return false;
  }
};

const getForm = document.getElementById('formInput') as HTMLFormElement | null;
getForm?.addEventListener('submit', e => {
  const isValidForm = validationForm();
  if (!isValidForm) {
    e.preventDefault();
  }
});
