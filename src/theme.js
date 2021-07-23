const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  bodyEl: document.querySelector('body'),
  input: document.querySelector('#theme-switch-toggle'),
};

refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('change', changeLocalStorage);
function onInputChange() {
  const check = refs.input.checked;
  if (check) {
    refs.bodyEl.classList.add(Theme.DARK);
    refs.bodyEl.classList.remove(Theme.LIGHT);
  } else {
    refs.bodyEl.classList.add(Theme.LIGHT);
    refs.bodyEl.classList.remove(Theme.DARK);
  }
}
function changeLocalStorage() {
  const check = refs.input.checked;
  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
const changeLocalTheme = localStorage.getItem('theme');
if (changeLocalTheme === Theme.DARK) {
  refs.bodyEl.classList.add(Theme.DARK);
  refs.input.checked = true;
}
