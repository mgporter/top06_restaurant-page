import createElement from './createElement.js';

export default function createContent() {
    const header = createElement('div', null, null, 'header');
    const menuContainer = createElement('div', null, null, 'menu-container');
    const navHome = createElement('div', 'Home', 'menu-item', 'nav-home');
    const navMenu = createElement('div', 'Menu', 'menu-item', 'nav-menu');
    const navContact = createElement('div', 'Contact', 'menu-item', 'nav-contact');

    menuContainer.append(navHome, navMenu, navContact);
    header.appendChild(menuContainer);

    const columnContainer = createElement('div', null, null, 'column-container');
    const contentContainer = createElement('div', null, null, 'content-container');
    const footerMoon = createElement('div', null, null, 'footer-moon');

    columnContainer.append(contentContainer, footerMoon);

    document.body.append(header, columnContainer);
}