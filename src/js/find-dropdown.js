// Find Store Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.find-dropdown');
  const input = document.querySelector('.find-input');
  const inputText = document.querySelector('.find-input-text');
  const parentItems = document.querySelectorAll('.find-dropdown-item--parent');
  const loading = document.querySelector('.find-loading');
  const title = document.querySelector('.find-container h2');

  // Toggle dropdown on input click
  input.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Handle parent region toggle
  parentItems.forEach(parentItem => {
    const toggle = parentItem.querySelector('.find-dropdown-item-toggle');
    const sublist = parentItem.querySelector('.find-dropdown-sublist');
    const subitems = parentItem.querySelectorAll('.find-dropdown-subitem:not(.find-dropdown-subitem--empty)');

    // Toggle sublist on parent click
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();

      // Close other sublists
      parentItems.forEach(item => {
        if (item !== parentItem) {
          item.classList.remove('active');
          const itemToggle = item.querySelector('.find-dropdown-item-toggle');
          itemToggle.textContent = itemToggle.textContent.replace('-', '+');
        }
      });

      // Toggle current sublist
      parentItem.classList.toggle('active');

      // Change + to - when expanded
      if (parentItem.classList.contains('active')) {
        toggle.textContent = toggle.textContent.replace('+', '-');
      } else {
        toggle.textContent = toggle.textContent.replace('-', '+');
      }
    });

    // Handle subitem selection
    subitems.forEach(subitem => {
      subitem.addEventListener('click', function(e) {
        e.stopPropagation();
        const selectedLocation = this.getAttribute('data-value');
        const selectedRegion = parentItem.getAttribute('data-value');

        // Hide dropdown and title
        dropdown.style.display = 'none';
        title.style.display = 'none';

        // Show loading state
        loading.classList.add('active');

        // Redirect after 2 seconds
        setTimeout(function() {
          window.location.href = 'booking.html?location=' + selectedLocation + '&region=' + selectedRegion;
        }, 2000);
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      // Reset all toggles
      parentItems.forEach(item => {
        const toggle = item.querySelector('.find-dropdown-item-toggle');
        item.classList.remove('active');
        toggle.textContent = toggle.textContent.replace('-', '+');
      });
    }
  });
});