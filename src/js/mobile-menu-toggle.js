// Mobile Menu Toggle Functionality

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menuClose = document.getElementById('mobile-menu-close');
  const menuOverlay = document.getElementById('mobile-menu-overlay');

  // Open mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuOverlay.classList.add('active');
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    });
  }

  // Close mobile menu
  if (menuClose) {
    menuClose.addEventListener('click', function() {
      menuOverlay.classList.remove('active');
      // Re-enable body scroll when menu is closed
      document.body.style.overflow = '';
    });
  }
});
