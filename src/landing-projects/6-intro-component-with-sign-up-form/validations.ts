const validations = (): boolean => {
  const form = document.getElementsByTagName('form')[0] as HTMLFormElement;
  let countErrors = 0;

  // Usamos HTMLFormControlsCollection para recorrer inputs
  const elements = Array.from(form.elements) as HTMLInputElement[];

  for (const input of elements) {
    if (input.name.trim() !== '') {
      const imgError = document.getElementById(`${input.name}ImgError`) as HTMLElement | null;
      const msgError = document.getElementById(`${input.name}MsgError`) as HTMLElement | null;

      if (input.value.trim() === '') {
        imgError?.classList.remove('hidden');
        msgError?.classList.remove('hidden');
        input.classList.add('border-error');
        countErrors++;
      } else {
        imgError?.classList.add('hidden');
        msgError?.classList.add('hidden');
        input.classList.remove('border-error');

        // Validación de email
        if (input.name === 'email') {
          const regexEmail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
          if (!regexEmail.test(input.value)) {
            imgError?.classList.remove('hidden');
            msgError?.classList.remove('hidden');
            input.classList.add('border-error');
            countErrors++;
          }
        }
      }
    }
  }

  return countErrors === 0;
};

const form = document.getElementById('formInput');

form?.addEventListener('submit', e => {
  e.preventDefault();
  if (validations()) {
    alert('Formulario enviado');
  }
});
