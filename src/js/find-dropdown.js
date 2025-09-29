// Find Store Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.find-dropdown');
  const input = document.querySelector('.find-input');
  const inputText = document.querySelector('.find-input-text');
  const dropdownItems = document.querySelectorAll('.find-dropdown-item');

  // Toggle dropdown on input click
  input.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Handle option selection
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      const selectedText = this.textContent;
      inputText.textContent = selectedText;
      inputText.style.color = '#000';
      dropdown.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});