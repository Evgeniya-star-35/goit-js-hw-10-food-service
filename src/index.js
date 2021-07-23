import './sass/main.scss';
import items from './menu.json';
import menuItemTpl from './templates/menu-item.hbs';
console.log(menuItemTpl(items[1]));
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuGallery = document.querySelector('.js-menu');
const toolbarRef = document.querySelector('.toolbar');
const themeSwitch = document.querySelector('.theme-switch');
const input = document.querySelector('#theme-switch-toggle');
const label = document.querySelector('.theme-switch__track');
function createMenuGallery(items) {
  return items.map(menuItemTpl).join('');
}
const menuEl = createMenuGallery(items);
menuGallery.insertAdjacentHTML('beforeend', menuEl);
input.addEventListener('change', onInputChange);
function onInputChange() {
  if (input.checked === Theme.LIGHT) {
    localStorage.setItem('my-data', Theme.LIGHT);
  } else {
    localStorage.setItem('my-data', Theme.DARK);
  }
}
