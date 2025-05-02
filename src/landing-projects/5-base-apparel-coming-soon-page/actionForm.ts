const actionSubmit = (e: SubmitEvent) => {
  const inputText: HTMLInputElement | null = document.getElementById(
    'inputText'
  ) as HTMLInputElement;
  let getSpanError = document.getElementsByClassName('container-body__paragraph--error-message')[0];
  let getIconError = document.getElementsByClassName('icon-error')[0];
  let getForm = document.getElementsByTagName('form')[0];

  let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (regexEmail.exec(inputText?.value)) {
    getSpanError.classList.add('hidden');
    getIconError.classList.add('hidden');
    getForm.classList.remove('border-error');
    return true;
  }
  getSpanError.classList.remove('hidden');
  getIconError.classList.remove('hidden');
  getForm.classList.add('border-error');
  e.preventDefault();
  return false;
};

const formInput = document.getElementById('form');
formInput?.addEventListener('submit', e => {
  actionSubmit(e);
});
