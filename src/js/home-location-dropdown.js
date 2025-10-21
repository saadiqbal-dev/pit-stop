// Home Page Location Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.search-dropdown');
  const dropdownInput = document.querySelector('.search-dropdown-input');
  const dropdownText = document.querySelector('.search-dropdown-text');
  const parentItems = document.querySelectorAll('.search-dropdown-item--parent');
  const submitButton = document.querySelector('.search-button');

  let selectedLocation = null;
  let selectedRegion = null;

  // Toggle dropdown on input click
  dropdownInput.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Handle parent region toggle
  parentItems.forEach(parentItem => {
    const toggle = parentItem.querySelector('.search-dropdown-item-toggle');
    const sublist = parentItem.querySelector('.search-dropdown-sublist');
    const subitems = parentItem.querySelectorAll('.search-dropdown-subitem:not(.search-dropdown-subitem--empty)');

    // Toggle sublist on parent click
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();

      // Close other sublists
      parentItems.forEach(item => {
        if (item !== parentItem) {
          item.classList.remove('active');
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

        // Remove selection from all subitems
        document.querySelectorAll('.search-dropdown-subitem').forEach(item => {
          item.classList.remove('selected');
        });

        // Add selection to clicked subitem
        this.classList.add('selected');
        selectedLocation = this.getAttribute('data-value');
        selectedRegion = parentItem.getAttribute('data-value');
        dropdownText.textContent = this.textContent;
        dropdownText.classList.remove('placeholder');
        dropdown.classList.remove('active');

        // Reset all parent items
        parentItems.forEach(item => {
          const itemToggle = item.querySelector('.search-dropdown-item-toggle');
          item.classList.remove('active');
          itemToggle.textContent = itemToggle.textContent.replace('-', '+');
        });
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      // Reset all toggles
      parentItems.forEach(item => {
        const toggle = item.querySelector('.search-dropdown-item-toggle');
        item.classList.remove('active');
        toggle.textContent = toggle.textContent.replace('-', '+');
      });
    }
  });

  // Handle submit button click
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (selectedLocation) {
      window.location.href = 'booking.html?location=' + selectedLocation + '&region=' + selectedRegion;
    } else {
      alert('Please select a location first');
    }
  });
});