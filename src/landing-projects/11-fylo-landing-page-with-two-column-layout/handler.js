const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formBase = document?.getElementById('formBase');
const inputMessageError = document?.getElementsByClassName('input-message-error');

const setClass = (elements, newClass, action) => {
  for (const element of elements) {
    if (action === 'remove') {
      element.classList.remove(newClass);
    } else {
      element.classList.add(newClass);
    }
  }
};

formBase?.addEventListener('submit', e => {
  const email = document?.getElementById('formTextInput');
  if (!emailRegex.test(email.value.trim())) {
    setClass(inputMessageError, 'hidden', 'remove');
    e.preventDefault();
  } else {
    setClass(inputMessageError, 'hidden', 'add');
  }
});
