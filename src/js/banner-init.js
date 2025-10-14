/**
 * Banner Initialization - Must be loaded in <head> before banner HTML
 * Checks localStorage and hides banner to prevent flicker
 */
(function() {
  if (localStorage.getItem('topBannerClosed') === 'true') {
    document.documentElement.classList.add('banner-closed');
  }
})();
