import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './styles.css';

// loadMenu();

document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');

    homeTab.addEventListener('click', () => {
        loadHome();
    });

    menuTab.addEventListener('click', () => {
        loadMenu();
    });

    contactTab.addEventListener('click', () => {
        loadContact();
    });
});