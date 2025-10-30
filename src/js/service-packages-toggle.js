/**
 * Service Packages Toggle Functionality (CMS-Compatible Version)
 * Uses Bootstrap tabs for desktop and simple accordion for mobile
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // ============================================
    // DESKTOP: Custom Tab Switching (No Bootstrap Required)
    // ============================================

    const packageHeaders = document.querySelectorAll(".package-header");
    const tabPanes = document.querySelectorAll(".tab-pane");
    const ctaPrice = document.getElementById("cta-price");
    const ctaBookNow = document.getElementById("cta-book-now");
    const ctaFindMore = document.getElementById("cta-find-more");

    packageHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const targetId = this.getAttribute("data-bs-target");
        const price = this.dataset.price;
        const slug = this.dataset.slug;

        // Update active states
        packageHeaders.forEach((h) => h.classList.remove("active"));
        this.classList.add("active");

        // Hide all tab panes
        tabPanes.forEach((pane) => {
          pane.classList.remove("show", "active");
        });

        // Show target tab pane
        if (targetId) {
          const targetPane = document.querySelector(targetId);
          if (targetPane) {
            targetPane.classList.add("show", "active");
          }
        }

        // Update CTA price and links
        if (ctaPrice && price) {
          ctaPrice.textContent = `$${price}`;
        }

        if (ctaBookNow && slug) {
          ctaBookNow.href = `booking.html?package=${slug}`;
        }

        if (ctaFindMore && slug) {
          ctaFindMore.href = `${slug}.html`;
        }
      });
    });

    // Trigger initial state for default active tab (Extensive - 2nd package)
    if (packageHeaders[1]) {
      packageHeaders[1].click();
    }

    // ============================================
    // MOBILE: Accordion Toggle
    // ============================================

    const mobileAccordionItems = document.querySelectorAll(".mobile-accordion-item");

    mobileAccordionItems.forEach((item) => {
      const header = item.querySelector(".mobile-package-header");
      const content = item.querySelector(".mobile-package-content");

      if (!header || !content) return;

      header.addEventListener("click", function () {
        const isOpen = content.style.display === "flex";

        // Close all other accordion items
        mobileAccordionItems.forEach((otherItem) => {
          const otherContent = otherItem.querySelector(".mobile-package-content");
          if (otherContent && otherContent !== content) {
            otherContent.style.display = "none";
            otherItem.classList.remove("active");
          }
        });

        // Toggle current item
        if (!isOpen) {
          content.style.display = "flex";
          item.classList.add("active");

          // Populate content dynamically (keeping old logic for mobile for now)
          const color = header.dataset.color;
          const summaryItems = JSON.parse(header.dataset.summary || "[]");
          const checksItems = JSON.parse(header.dataset.checks || "[]");
          const plusContent = header.dataset.plus || "";

          const summaryList = content.querySelector(".package-features__summary > div:first-child ul");
          const summaryColorDiv = content.querySelector(".package-features__summary > div:first-child");
          const secondDiv = content.querySelector(".package-features__summary > div:nth-child(2)");
          const checksList = secondDiv ? secondDiv.querySelector("h4:not(.package-plus-section h4) ~ ul") : null;
          const plusSection = content.querySelector(".package-plus-section");
          const plusList = plusSection ? plusSection.querySelector("ul") : null;

          if (color && summaryColorDiv) {
            summaryColorDiv.style.backgroundColor = color;
          }

          if (summaryItems.length > 0 && summaryList) {
            summaryList.innerHTML = summaryItems.map((item) => `<li>${item}</li>`).join("");
          }

          if (plusSection && plusList) {
            if (plusContent) {
              const plusItems = JSON.parse(plusContent);
              plusList.innerHTML = plusItems.map((item) => `<li>${item}</li>`).join("");
              plusSection.style.display = "block";
            } else {
              plusSection.style.display = "none";
            }
          }

          if (checksItems.length > 0 && checksList) {
            checksList.innerHTML = checksItems.map((item) => `<li>${item}</li>`).join("");
          }

          // Smooth scroll to header after opening
          const getStickyHeaderOffset = () => {
            let offset = 0;
            const selectors = [
              ".mobile-header",
              ".ps-header__nav-band",
              ".ps-header__top-band",
              "#top-banner",
            ];
            selectors.forEach((sel) => {
              const el = document.querySelector(sel);
              if (!el || el.offsetHeight === 0) return;
              const style = window.getComputedStyle(el);
              const pos = style.position;
              const rect = el.getBoundingClientRect();
              if ((pos === "fixed" || pos === "sticky") && rect.top <= 0 && rect.bottom > 0) {
                offset = Math.max(offset, rect.height);
              }
            });
            return offset;
          };

          setTimeout(() => {
            const headerOffset = getStickyHeaderOffset() + 110;
            header.style.scrollMarginTop = `${headerOffset}px`;
            header.scrollIntoView({ block: "start", behavior: "smooth" });
          }, 100);
        } else {
          content.style.display = "none";
          item.classList.remove("active");
        }
      });
    });

    // ============================================
    // MOBILE: Read More Toggle
    // ============================================

    const readMoreToggles = document.querySelectorAll(".mobile-read-more-toggle");

    readMoreToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const detailsSection = this.nextElementSibling;
        const accordionItem = this.closest(".mobile-accordion-item");
        const findMoreButton = accordionItem ? accordionItem.querySelector(".mobile-find-more") : null;

        if (detailsSection && detailsSection.classList.contains("mobile-service-details")) {
          const isHidden = detailsSection.style.display === "none" || !detailsSection.style.display;

          if (isHidden) {
            detailsSection.style.display = "flex";
            this.textContent = "- Read Less";
            if (findMoreButton) {
              findMoreButton.style.display = "block";
            }
          } else {
            detailsSection.style.display = "none";
            this.textContent = "+ Read More";
            if (findMoreButton) {
              findMoreButton.style.display = "none";
            }
          }
        }
      });
    });

    // ============================================
    // MOBILE: Description Toggle (Read Full Details)
    // ============================================

    const descriptionToggles = document.querySelectorAll(".mobile-description-toggle");

    descriptionToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const shortText = this.previousElementSibling;
        const fullText = this.nextElementSibling;

        if (fullText && fullText.classList.contains("description-full")) {
          const isHidden = fullText.style.display === "none" || !fullText.style.display;

          if (isHidden) {
            fullText.style.display = "inline";
            this.textContent = "Show Less";
          } else {
            fullText.style.display = "none";
            this.textContent = "Read Full Details";
          }
        }
      });
    });
  });
})();
