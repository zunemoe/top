import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

// Import CSS files
import './styles/base.css';
import './styles/layout.css';
import './styles/variables.css';
import './styles/pages/home.css';
import './styles/pages/menu.css';
import './styles/pages/contact.css';
import './styles/components/buttons.css';
import './styles/responsive.css';

// loadMenu();

function switchTab(tabName, loadFunction, tabElement, allTabs) {
    loadFunction();
    allTabs.forEach(tab => tab.classList.remove('active'));
    tabElement.classList.add('active');
    localStorage.setItem('activeTab', tabName);
}

document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');
    const allTabs = [homeTab, menuTab, contactTab];

    homeTab.addEventListener('click', () => switchTab('home', loadHome, homeTab, allTabs));
    menuTab.addEventListener('click', () => switchTab('menu', loadMenu, menuTab, allTabs));
    contactTab.addEventListener('click', () => switchTab('contact', loadContact, contactTab, allTabs));

    const activeTab = localStorage.getItem('activeTab') || 'home';
    if (activeTab) {
        switchTab(activeTab, 
            activeTab === 'home' ? loadHome : 
            activeTab === 'menu' ? loadMenu : 
            loadContact, 
            document.getElementById(`${activeTab}-tab`), allTabs);
    }

    const footer = document.querySelector('footer');
    footer.innerHTML = `
        &copy; ${new Date().getFullYear()} Zune Moe | Made with ❤️ in Auckland
        `;
});