/**
 * Service Packages Toggle Functionality
 * Handles dynamic content switching for service package selection
 */

(function () {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function () {
    const packageHeaders = document.querySelectorAll('.package-header');
    const summaryList = document.querySelector('.package-features__summary > div:first-child ul');
    const secondDiv = document.querySelector('.package-features__summary > div:nth-child(2)');
    const checksList = secondDiv ? secondDiv.querySelector('h4:not(.package-plus-section h4) ~ ul') : null;
    const summaryColorDiv = document.querySelector('.package-features__summary > div:first-child');
    const plusSection = document.querySelector('.package-plus-section');
    const plusList = plusSection ? plusSection.querySelector('ul') : null;

    if (!packageHeaders.length || !summaryList || !checksList || !summaryColorDiv) {
      console.warn('Service package elements not found');
      return;
    }

    // Handle package header click
    function handlePackageClick(event) {
      const clickedHeader = event.currentTarget;

      // Get data from clicked package
      const color = clickedHeader.dataset.color;
      const summaryItems = JSON.parse(clickedHeader.dataset.summary || '[]');
      const checksItems = JSON.parse(clickedHeader.dataset.checks || '[]');
      const plusContent = clickedHeader.dataset.plus || '';

      // Update active state
      packageHeaders.forEach(header => header.classList.remove('active'));
      clickedHeader.classList.add('active');

      // Update background color of summary section
      if (color) {
        summaryColorDiv.style.backgroundColor = color;
      }

      // Update service summary list
      if (summaryItems.length > 0) {
        summaryList.innerHTML = summaryItems
          .map(item => `<li>${item}</li>`)
          .join('');
      }

      // Update Plus section (show/hide based on content)
      if (plusSection && plusList) {
        if (plusContent) {
          const plusItems = JSON.parse(plusContent);
          plusList.innerHTML = plusItems
            .map(item => `<li>${item}</li>`)
            .join('');
          plusSection.style.display = 'block';
        } else {
          plusSection.style.display = 'none';
        }
      }

      // Update checks list
      if (checksItems.length > 0) {
        checksList.innerHTML = checksItems
          .map(item => `<li>${item}</li>`)
          .join('');
      }
    }

    // Add click listeners to all package headers
    packageHeaders.forEach(header => {
      header.addEventListener('click', handlePackageClick);
    });

    // Set first package as active by default and trigger content load
    if (packageHeaders[0]) {
      packageHeaders[0].click();
    }
  });
})();
