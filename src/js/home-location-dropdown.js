// Home Page Location Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.search-dropdown');
  const dropdownInput = document.querySelector('.search-dropdown-input');
  const dropdownText = document.querySelector('.search-dropdown-text');
  const dropdownItems = document.querySelectorAll('.search-dropdown-item');
  const submitButton = document.querySelector('.search-button');

  let selectedRegion = null;

  // Toggle dropdown on input click
  dropdownInput.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Handle option selection
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownItems.forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
      selectedRegion = this.getAttribute('data-value');
      dropdownText.textContent = this.textContent;
      dropdownText.classList.remove('placeholder');
      dropdown.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Handle submit button click
  submitButton.addEventListener('click', function() {
    if (selectedRegion) {
      window.location.href = 'booking.html?region=' + selectedRegion;
    } else {
      alert('Please select a location first');
    }
  });
});