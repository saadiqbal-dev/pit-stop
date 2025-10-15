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
      const packageSlug = clickedHeader.dataset.slug;
      const packagePrice = clickedHeader.dataset.price;
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

      // Update CTA button links
      if (packageSlug) {
        const bookNowButton = document.querySelector('.package-cta .long-red-button');
        const findOutMoreButton = document.querySelector('.package-cta .long-outline-button');

        if (bookNowButton) {
          bookNowButton.href = `booking.html?package=${packageSlug}`;
        }

        if (findOutMoreButton) {
          findOutMoreButton.href = `${packageSlug}.html`;
        }
      }

      // Update price in package-cta
      if (packagePrice) {
        const ctaPriceElement = document.querySelector('.package-cta .package-header__text h4');
        if (ctaPriceElement) {
          ctaPriceElement.textContent = `$${packagePrice}`;
        }
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

    // Mobile Accordion Functionality
    const mobileAccordionItems = document.querySelectorAll('.mobile-accordion-item');

    mobileAccordionItems.forEach(item => {
      const header = item.querySelector('.mobile-package-header');
      const content = item.querySelector('.mobile-package-content');

      if (!header || !content) return;

      header.addEventListener('click', function() {
        const isOpen = content.style.display === 'flex';

        // Close all other accordion items
        mobileAccordionItems.forEach(otherItem => {
          const otherContent = otherItem.querySelector('.mobile-package-content');
          if (otherContent) {
            otherContent.style.display = 'none';
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        if (!isOpen) {
          content.style.display = 'flex';
          item.classList.add('active');

          // Populate content with data from data attributes
          const color = header.dataset.color;
          const summaryItems = JSON.parse(header.dataset.summary || '[]');
          const checksItems = JSON.parse(header.dataset.checks || '[]');
          const plusContent = header.dataset.plus || '';

          // Find elements within this specific accordion item
          const summaryList = content.querySelector('.package-features__summary > div:first-child ul');
          const summaryColorDiv = content.querySelector('.package-features__summary > div:first-child');
          const secondDiv = content.querySelector('.package-features__summary > div:nth-child(2)');
          const checksList = secondDiv ? secondDiv.querySelector('h4:not(.package-plus-section h4) ~ ul') : null;
          const plusSection = content.querySelector('.package-plus-section');
          const plusList = plusSection ? plusSection.querySelector('ul') : null;

          // Update background color of summary section
          if (color && summaryColorDiv) {
            summaryColorDiv.style.backgroundColor = color;
          }

          // Update service summary list
          if (summaryItems.length > 0 && summaryList) {
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
          if (checksItems.length > 0 && checksList) {
            checksList.innerHTML = checksItems
              .map(item => `<li>${item}</li>`)
              .join('');
          }
        }
      });
    });

    // Mobile Read More Toggle Functionality
    const readMoreToggles = document.querySelectorAll('.mobile-read-more-toggle');

    readMoreToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor navigation
        e.stopPropagation(); // Prevent accordion from closing

        const detailsSection = this.nextElementSibling;
        const accordionItem = this.closest('.mobile-accordion-item');
        const findMoreButton = accordionItem ? accordionItem.querySelector('.mobile-find-more') : null;

        if (detailsSection && detailsSection.classList.contains('mobile-service-details')) {
          const isHidden = detailsSection.style.display === 'none';

          if (isHidden) {
            detailsSection.style.display = 'flex';
            this.textContent = '- Read Less';
            // Show Find Out More button
            if (findMoreButton) {
              findMoreButton.style.display = 'block';
            }
          } else {
            detailsSection.style.display = 'none';
            this.textContent = '+ Read More';
            // Hide Find Out More button
            if (findMoreButton) {
              findMoreButton.style.display = 'none';
            }
          }
        }
      });
    });

    // Mobile Description Toggle Functionality
    const descriptionToggles = document.querySelectorAll('.mobile-description-toggle');

    descriptionToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor navigation
        e.stopPropagation(); // Prevent accordion from closing

        const shortText = this.previousElementSibling;
        const fullText = this.nextElementSibling;

        if (fullText && fullText.classList.contains('description-full')) {
          const isHidden = fullText.style.display === 'none';

          if (isHidden) {
            fullText.style.display = 'inline';
            this.textContent = 'Show Less';
          } else {
            fullText.style.display = 'none';
            this.textContent = 'Read Full Details';
          }
        }
      });
    });
  });
})();
