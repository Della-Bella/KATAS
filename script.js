// script.js cleaned

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed!");

    if (typeof portfolioData === 'undefined') {
        console.error("ERROR: portfolioData is not defined. Make sure data.js is loaded BEFORE script.js!");
        return;
    }
    console.log("Portfolio Data available:", portfolioData);

    const cardsContainer = document.getElementById('cards-container');
    const navItemsWithDropdown = document.querySelectorAll('.main-nav .has-dropdown');

    if (!cardsContainer) {
        console.error("ERROR: Cannot find element with ID 'cards-container'.");
        return;
    }
    console.log("Cards Container:", cardsContainer);
    console.log("Nav Items w/ Dropdown:", navItemsWithDropdown);

    function populateDropdowns() {
        console.log("Running populateDropdowns...");
        navItemsWithDropdown.forEach(navItem => {
            const mainLink = navItem.querySelector('.nav-link.category-trigger');
            const dropdownMenu = navItem.querySelector('.dropdown-menu');

            if (!mainLink || !dropdownMenu) {
                console.warn('Could not find required elements for nav item:', navItem);
                return;
            }

            const mainCategory = mainLink.dataset.category;
            if (!mainCategory) {
                console.warn('Could not find data-category attribute on main link:', mainLink);
                return;
            }
            console.log(`Processing category: ${mainCategory}`);

            dropdownMenu.innerHTML = '';

            const subCategories = new Set();
            portfolioData.forEach(item => {
                if (item.category.startsWith(mainCategory + '-')) {
                    const sub = item.category.split('-')[1];
                    if (sub) {
                        subCategories.add(sub);
                    }
                }
            });
            console.log(`Found subcategories for ${mainCategory}:`, subCategories);

            const allLi = document.createElement('li');
            const allLink = document.createElement('a');
            allLink.href = '#';
            allLink.textContent = `All ${mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1)}`;
            allLink.classList.add('dropdown-item', 'category-trigger');
            allLink.dataset.category = mainCategory;
            allLi.appendChild(allLink);
            dropdownMenu.appendChild(allLi);

            subCategories.forEach(sub => {
                const subLi = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = '#';
                subLink.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
                subLink.classList.add('dropdown-item', 'category-trigger');
                subLink.dataset.category = `${mainCategory}-${sub}`;
                subLi.appendChild(subLink);
                dropdownMenu.appendChild(subLi);
            });
        });
        console.log("populateDropdowns finished.");
        addEventListenersToCategoryTriggers();
    }

    function displayCards(category) {
        console.log("Displaying cards for category:", category);
        cardsContainer.innerHTML = '';
        const placeholder = document.querySelector('.placeholder-text');
        if (placeholder) placeholder.style.display = 'none';

        const filteredData = portfolioData.filter(item =>
            item.category === category ||
            (category.indexOf('-') === -1 && item.category.startsWith(category + '-'))
        );

        if (filteredData.length === 0) {
            cardsContainer.innerHTML = '<p class="placeholder-text">No items found for this category yet.</p>';
            return;
        }

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            const linkTarget = item.link === '#' ? '' : 'target="_blank" rel="noopener noreferrer"';
            card.innerHTML = `
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <a href="${item.link}" class="card-link" ${linkTarget}>
                    ${item.link === '#' ? 'Details Soon' : 'View Details'}
                </a>
            `;
            cardsContainer.appendChild(card);
        });
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-menu.show').forEach(openDropdown => {
            openDropdown.classList.remove('show');
        });
    }

    navItemsWithDropdown.forEach(navItem => {
        const triggerLink = navItem.querySelector('.nav-link.category-trigger');
        if (triggerLink) {
            triggerLink.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                const dropdown = navItem.querySelector('.dropdown-menu');
                if (dropdown) {
                    const isCurrentlyShown = dropdown.classList.contains('show');
                    closeAllDropdowns();
                    if (!isCurrentlyShown) {
                        dropdown.classList.add('show');
                    }
                }
            });
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.has-dropdown')) {
            closeAllDropdowns();
        }
    });

    function addEventListenersToCategoryTriggers() {
        document.querySelectorAll('.category-trigger').forEach(trigger => {
            trigger.removeEventListener('click', handleCategoryTriggerClick);
            trigger.addEventListener('click', handleCategoryTriggerClick);
        });
    }

    function handleCategoryTriggerClick(event) {
        event.preventDefault();
        const category = event.target.dataset.category;
        if (category) {
            displayCards(category);
            closeAllDropdowns();
        } else {
            console.warn("Clicked trigger has no data-category:", event.target);
        }
    }

    populateDropdowns();
    // displayCards('katas');

});