const actionSubmit: any = (e: SubmitEvent) => {
  let inputText: any = document.getElementById('inputText');
  let getSpanError = document.getElementsByClassName('container-body__paragraph--error-message')[0];
  let getIconError = document.getElementsByClassName('icon-error')[0];
  let getForm = document.getElementsByTagName('form')[0];

  let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (regexEmail.exec(inputText?.value)) {
    getSpanError.classList.add('hidden');
    getIconError.classList.add('hidden');
    getForm.classList.remove('border-error');
    return true;
  } else {
    getSpanError.classList.remove('hidden');
    getIconError.classList.remove('hidden');
    getForm.classList.add('border-error');
    e.preventDefault();
  }
};

const formInput = document.getElementById('form');
formInput?.addEventListener('submit', e => {
  actionSubmit(e);
});
