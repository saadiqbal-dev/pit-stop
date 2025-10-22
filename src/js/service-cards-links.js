// Service Cards Click Handler
// Makes service cards clickable while preserving Book Now button functionality

document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.services-card');

  serviceCards.forEach((card) => {
    // Make the entire card clickable except for the button
    card.style.cursor = 'pointer';

    card.addEventListener('click', function(e) {
      // Don't navigate if clicking the Book Now button
      if (e.target.closest('.services-button')) {
        return;
      }

      // Get the service name from the h2
      const serviceName = this.querySelector('h2')?.textContent.trim();

      // Map service names to their URLs
      const serviceUrls = {
        'WOF': '#',
        'Service Packages': 'service-packages.html',
        'Brakes': '#',
        'EV & Hybrid Service Packages': '#',
        'Suspension': '#',
        'Tyres': '#',
        'Diagnostics': '#',
        'Exhausts': '#',
        'Batteries': '#',
        'Tow Bars': '#',
        'ADAS': '#',
        'Fleet Servicing': '#'
      };

      const url = serviceUrls[serviceName];
      if (url) {
        window.location.href = url;
      }
    });
  });
});
