/**
 * Header Navigation Dropdown Functionality
 * Handles dropdown menu interactions for Services, Find a Store, and About
 */

class HeaderNavigation {
    constructor() {
        this.dropdownItems = document.querySelectorAll('.header__nav-item--dropdown');
        this.activeDropdown = null;
        this.isTouchDevice = 'ontouchstart' in window;

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.dropdownItems.forEach(item => {
            const link = item.querySelector('.header__nav-link');
            const dropdownMenu = item.querySelector('.header__dropdown-menu');

            // Click handling for entire nav item area
            item.addEventListener('click', (e) => {
                // Prevent clicks on dropdown menu itself from toggling
                if (!e.target.closest('.header__dropdown-menu')) {
                    e.preventDefault();
                    this.toggleDropdown(item);
                }
            });

            // Keyboard navigation for the link
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleDropdown(item);
                } else if (e.key === 'Escape') {
                    this.closeDropdown(item);
                    link.focus();
                }
            });

            // Navigate dropdown items with arrow keys
            if (dropdownMenu) {
                const dropdownLinks = dropdownMenu.querySelectorAll('.header__dropdown-link');
                dropdownLinks.forEach((dropdownLink, index) => {
                    dropdownLink.addEventListener('keydown', (e) => {
                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            const nextIndex = (index + 1) % dropdownLinks.length;
                            dropdownLinks[nextIndex].focus();
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            const prevIndex = index === 0 ? dropdownLinks.length - 1 : index - 1;
                            dropdownLinks[prevIndex].focus();
                        } else if (e.key === 'Escape') {
                            this.closeDropdown(item);
                            link.focus();
                        }
                    });
                });
            }
        });

        // Close all dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header__nav-item--dropdown')) {
                this.closeAllDropdowns();
            }
        });

        // Close dropdowns on window resize
        window.addEventListener('resize', () => {
            this.closeAllDropdowns();
        });

        // Close dropdowns on scroll
        window.addEventListener('scroll', () => {
            this.closeAllDropdowns();
        }, true);

        document.addEventListener('scroll', () => {
            this.closeAllDropdowns();
        }, true);
    }

    openDropdown(item) {
        if (this.activeDropdown && this.activeDropdown !== item) {
            this.closeDropdown(this.activeDropdown);
        }

        // Calculate the position of the nav band bottom
        const navBand = document.querySelector('.header__nav-band');
        const navBandRect = navBand.getBoundingClientRect();
        const dropdownMenu = item.querySelector('.header__dropdown-menu');

        // Set the dropdown top position to be right below the nav band
        dropdownMenu.style.top = `${navBandRect.bottom}px`;

        item.classList.add('is-active');
        this.activeDropdown = item;

        // Set focus to first dropdown link for keyboard users
        const firstDropdownLink = item.querySelector('.header__dropdown-link');
        if (firstDropdownLink && document.activeElement === item.querySelector('.header__nav-link')) {
            setTimeout(() => firstDropdownLink.focus(), 100);
        }
    }

    closeDropdown(item) {
        item.classList.remove('is-active');
        if (this.activeDropdown === item) {
            this.activeDropdown = null;
        }
    }

    toggleDropdown(item) {
        if (item.classList.contains('is-active')) {
            this.closeDropdown(item);
        } else {
            this.openDropdown(item);
        }
    }

    closeAllDropdowns() {
        this.dropdownItems.forEach(item => {
            this.closeDropdown(item);
        });
    }
}

// Initialize header navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeaderNavigation();
});