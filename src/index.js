import './meyer_reset.css';
import './style.css';
import createStarBackground from './background.js';
import createContainer from './htmlContainer.js';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

// Create moving star background
// The first argument is stars per div; second is div's per page
createStarBackground(20, 10);

// Create the page container structure
createContainer()

// Get menu elements
const menuHome = document.getElementById('nav-home')
const menuMenu = document.getElementById('nav-menu')
const menuContact = document.getElementById('nav-contact')

// Load the home page by default
switchPage(createHome);
menuHome.classList.add('selected');

// Add event listeners to nav-menu items
menuHome.addEventListener('click', () => {
    removeSelectedClass();
    switchPage(createHome);
    menuHome.classList.add('selected');
})

menuMenu.addEventListener('click', () => {
    removeSelectedClass();
    switchPage(createMenu);
    menuMenu.classList.add('selected');
})

menuContact.addEventListener('click', () => {
    removeSelectedClass();
    switchPage(createContact);
    menuContact.classList.add('selected');
})

// Activated on menu click
function removeSelectedClass() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        if (item.className.includes('selected')) {
            item.classList.remove('selected')
        }
    })
}

// Creates the page that corresponds to the menu item that was clicked
function switchPage(createPage) {
    const contentContainer = document.getElementById('content-container');
    contentContainer.textContent = '';

    createPage();
}