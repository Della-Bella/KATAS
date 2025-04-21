// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed!");

    // --- 1. Check if Data is Available ---
    if (typeof portfolioData === 'undefined') {
        console.error("FATAL ERROR: portfolioData is not defined. Make sure data.js is loaded BEFORE script.js!");
        const body = document.querySelector('body');
        if (body) {
            body.innerHTML = '<h1 style="color: red; text-align: center; margin-top: 50px;">Error: Could not load portfolio data. Please check the console.</h1>';
        }
        return;
    }
    console.log("Portfolio Data available:", portfolioData.length, "items found.");

    // --- 2. Get References to DOM Elements ---
    const cardsContainer = document.getElementById('cards-container');
    const navItemsWithDropdown = document.querySelectorAll('.main-nav .has-dropdown');
    const placeholderText = document.querySelector('#cards-container .placeholder-text');

    if (!cardsContainer) {
        console.error("ERROR: Cannot find element with ID 'cards-container'. Cards cannot be displayed.");
        return;
    }
    if (!placeholderText) {
        console.warn("Could not find the initial placeholder text element.");
    }
    console.log("Cards Container:", cardsContainer);
    console.log("Nav Items w/ Dropdown:", navItemsWithDropdown);

    // --- 3. Core Functions ---

    /**
     * Populates dropdown menus based on categories in portfolioData.
     */
    function populateDropdowns() {
        console.log("Running populateDropdowns...");
        navItemsWithDropdown.forEach(navItem => { // Loop through each LI.has-dropdown

            // **** FIX STARTS HERE ****
            // Find the specific link and menu INSIDE this navItem
            const mainLink = navItem.querySelector('.nav-link.category-trigger');
            const dropdownMenu = navItem.querySelector('.dropdown-menu');

            // Check if we found the necessary elements for THIS navItem
            if (!mainLink || !dropdownMenu) {
                console.warn('Skipping nav item: Could not find main link or dropdown menu inside:', navItem);
                return; // Go to the next navItem in the loop
            }

            // Get the main category from THIS specific mainLink's data attribute
            const mainCategory = mainLink.dataset.category;
            if (!mainCategory) {
                console.warn('Skipping nav item: Could not find data-category attribute on main link:', mainLink);
                return; // Go to the next navItem
            }
            // **** FIX ENDS HERE ****

            // Now it's safe to use mainCategory and dropdownMenu for this specific item
            console.log(`Processing dropdown for category: ${mainCategory}`);
            dropdownMenu.innerHTML = ''; // Clear menu for this specific item

            const subCategoryIds = new Set(); // Store unique IDs (strings)
            portfolioData.forEach(item => {
                // Check if item belongs to the current main category's sub-categories
                if (item.category.startsWith(mainCategory + '-')) {
                    const parts = item.category.split('-');
                    if (parts.length > 1) {
                        const subId = parts.slice(1).join('-');
                        if (subId) {
                            subCategoryIds.add(subId); // Add the ID string ('if-else', 'loops' etc.)
                        }
                    }
                }
            });

            console.log(`Found unique subcategory IDs for ${mainCategory}:`, subCategoryIds);

            // Add "All [Category]" link
            const allLi = document.createElement('li');
            const allLink = document.createElement('a');
            allLink.href = '#';
            allLink.textContent = `All ${mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1)}`;
            allLink.classList.add('dropdown-item', 'category-trigger');
            allLink.dataset.category = mainCategory;
            allLi.appendChild(allLink);
            dropdownMenu.appendChild(allLi); // Append to the correct dropdownMenu


            // Add links for each unique sub-category ID string
            subCategoryIds.forEach(subId => { // Loop through strings like 'if-else', 'loops'
                const subLi = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = '#';

                // Format display text (e.g., "If else")
                const displayText = subId.charAt(0).toUpperCase() + subId.slice(1).replace('-', ' ');
                subLink.textContent = displayText;

                subLink.classList.add('dropdown-item', 'category-trigger');
                // Set data-category (e.g., "katas-if-else")
                subLink.dataset.category = `${mainCategory}-${subId}`;
                subLi.appendChild(subLink);
                dropdownMenu.appendChild(subLi); // Append to the correct dropdownMenu
            });

        }); // End of navItemsWithDropdown.forEach loop

        console.log("populateDropdowns finished.");
        addEventListenersToCategoryTriggers(); // Add listeners AFTER menus are built
    }

    // --- createCardElement function remains the same ---
    function createCardElement(itemData) {
        const card = document.createElement('div');
        card.className = 'card';
        const titleElement = document.createElement('h3');
        titleElement.className = 'card-title';
        titleElement.textContent = itemData.title || 'Untitled';
        card.appendChild(titleElement);
        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'card-description';
        descriptionElement.textContent = itemData.description || 'No description available.';
        card.appendChild(descriptionElement);
        if (itemData.codeSnippet) {
            const preElement = document.createElement('pre');
            const codeElement = document.createElement('code');
            codeElement.textContent = itemData.codeSnippet;
            preElement.appendChild(codeElement);
            card.appendChild(preElement);
        }
        if (itemData.link && itemData.link !== '#') {
            const linkElement = document.createElement('a');
            linkElement.className = 'card-link';
            linkElement.href = itemData.link;
            linkElement.textContent = 'Link';
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            card.appendChild(linkElement);
        }
        return card;
    }

    // --- displayCards function remains the same ---
    function displayCards(category) {
        console.log(`Attempting to display cards for category: ${category}`);
        cardsContainer.innerHTML = '';
        let filteredData;
        if (category === 'bio') {
            filteredData = portfolioData.filter(item => item.category === 'bio');
        } else {
            filteredData = portfolioData.filter(item =>
                item.category === category || item.category.startsWith(category + '-')
            );
        }
        console.log(`Filtered data for "${category}":`, filteredData.length, "items");
        if (filteredData.length === 0) {
            cardsContainer.innerHTML = `<p class="placeholder-text">No items found for '${category}'. Select another category.</p>`;
        } else {
            filteredData.forEach(item => {
                const cardElement = createCardElement(item);
                cardsContainer.appendChild(cardElement);
            });
        }
    }

    // --- 4. Event Handling (remains the same) ---
    function closeAllDropdowns(exceptMenu = null) {
        document.querySelectorAll('.dropdown-menu.show').forEach(openDropdown => {
            if (openDropdown !== exceptMenu) {
                openDropdown.classList.remove('show');
            }
        });
    }
    function handleCategoryTriggerClick(event) {
        event.preventDefault();
        const triggerElement = event.currentTarget;
        const category = triggerElement.dataset.category;
        if (category) {
            console.log(`Category trigger clicked: ${category}`);
            displayCards(category);
            closeAllDropdowns();
        } else {
            console.warn("Clicked trigger is missing data-category attribute:", triggerElement);
        }
    }
    function addEventListenersToCategoryTriggers() {
        console.log("Adding event listeners to category triggers...");
        const triggers = document.querySelectorAll('.category-trigger');
        triggers.forEach(trigger => {
            trigger.removeEventListener('click', handleCategoryTriggerClick);
            trigger.addEventListener('click', handleCategoryTriggerClick);
        });
        console.log(`Added listeners to ${triggers.length} triggers.`);
    }

    // --- 5. Initial Setup (remains the same) ---
    populateDropdowns(); // Call the corrected function

    navItemsWithDropdown.forEach(navItem => {
        const triggerLink = navItem.querySelector('.nav-link.category-trigger');
        const dropdownMenu = navItem.querySelector('.dropdown-menu');
        if (triggerLink && dropdownMenu) {
            triggerLink.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const isCurrentlyShown = dropdownMenu.classList.contains('show');
                closeAllDropdowns(dropdownMenu);
                if (!isCurrentlyShown) {
                    console.log(`Opening dropdown for ${triggerLink.dataset.category}`);
                    dropdownMenu.classList.add('show');
                } else {
                    console.log(`Closing dropdown for ${triggerLink.dataset.category} on second click`);
                    dropdownMenu.classList.remove('show');
                }
            });
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.has-dropdown')) {
            closeAllDropdowns();
        }
    });

    // displayCards('bio');
    console.log("Initialization complete.");
});