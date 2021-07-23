import items from './menu.json';
import menuItemTpl from './templates/menu-item.hbs';
const menuGallery = document.querySelector('.js-menu');
const toolbarRef = document.querySelector('.toolbar');

const themeSwitch = document.querySelector('.theme-switch');

const label = document.querySelector('.theme-switch__track');

function createMenuGallery(items) {
  return items.map(menuItemTpl).join('');
}
const menuEl = createMenuGallery(items);
menuGallery.insertAdjacentHTML('beforeend', menuEl);
