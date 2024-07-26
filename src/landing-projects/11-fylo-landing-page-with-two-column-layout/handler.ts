const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formx = document?.getElementById('form') as HTMLFormElement;
const inputMessageError = document.getElementById(
  'input-message-error'
) as HTMLFormElement;

formx?.addEventListener('submit', e => {
  const email = document?.getElementById('form-text-input') as HTMLFormElement;
  if (!emailRegex.test(email.value.trim())) {
    inputMessageError.classList.remove('hidden');
    e.preventDefault();
  } else {
    inputMessageError.classList.add('hidden');
  }
});

const formEarlyAccess = document?.getElementById(
  'form-early-access'
) as HTMLFormElement;
const inputMessageErrorEarlyAccess = document.getElementById(
  'input-message-error-early-access'
) as HTMLFormElement;

formEarlyAccess?.addEventListener('submit', e => {
  const email = document?.getElementById(
    'form-text-input-early-access'
  ) as HTMLFormElement;
  if (!emailRegex.test(email.value.trim())) {
    inputMessageErrorEarlyAccess.classList.remove('hidden');
    e.preventDefault();
  } else {
    inputMessageErrorEarlyAccess.classList.add('hidden');
  }
});
