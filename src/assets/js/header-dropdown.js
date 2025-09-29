// Header Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown triggers
    const dropdownItems = document.querySelectorAll('.header__nav-item--dropdown');
    let activeDropdown = null;

    // Handle dropdown toggles
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const dropdown = this.querySelector('.header__dropdown-menu');

            // If clicking the same dropdown, toggle it
            if (activeDropdown === dropdown) {
                dropdown.classList.toggle('is-active');
                this.classList.toggle('is-active');
                activeDropdown = dropdown.classList.contains('is-active') ? dropdown : null;
            } else {
                // Close any open dropdown
                if (activeDropdown) {
                    activeDropdown.classList.remove('is-active');
                    activeDropdown.parentElement.classList.remove('is-active');
                }

                // Open the clicked dropdown
                dropdown.classList.add('is-active');
                this.classList.add('is-active');
                activeDropdown = dropdown;
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.header__nav-item--dropdown')) {
            if (activeDropdown) {
                activeDropdown.classList.remove('is-active');
                activeDropdown.parentElement.classList.remove('is-active');
                activeDropdown = null;
            }
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && activeDropdown) {
            activeDropdown.classList.remove('is-active');
            activeDropdown.parentElement.classList.remove('is-active');
            activeDropdown = null;
        }
    });
});