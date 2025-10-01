// Find Store Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.find-dropdown');
  const input = document.querySelector('.find-input');
  const inputText = document.querySelector('.find-input-text');
  const dropdownItems = document.querySelectorAll('.find-dropdown-item');
  const loading = document.querySelector('.find-loading');
  const title = document.querySelector('.find-container h2');

  // Toggle dropdown on input click
  input.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Handle option selection
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      const selectedValue = this.getAttribute('data-value');

      // Hide dropdown and title
      dropdown.style.display = 'none';
      title.style.display = 'none';

      // Show loading state
      loading.classList.add('active');

      // Redirect after 2 seconds (adjust timing as needed)
      setTimeout(function() {
        window.location.href = 'booking.html?region=' + selectedValue;
      }, 2000);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});