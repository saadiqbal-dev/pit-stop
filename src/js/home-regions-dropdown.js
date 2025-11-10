// Home Page Regions Dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
  const regionsWrapper = document.querySelector(".regions-dropdown-wrapper");
  const regionsButton = document.querySelector(
    ".regions-toggle-button, .regions-selector-button"
  );
  const dropdown = regionsWrapper
    ? regionsWrapper.querySelector(".search-dropdown")
    : null;
  const parentItems = document.querySelectorAll(
    ".search-dropdown-item--parent"
  );

  if (!regionsWrapper || !regionsButton || !dropdown) {
    console.error("Regions dropdown elements not found");
    return;
  }

  let selectedLocation = null;
  let selectedRegion = null;

  // Toggle dropdown on button click
  regionsButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    regionsWrapper.classList.toggle("active");
  });

  // Handle parent region toggle
  parentItems.forEach((parentItem) => {
    const toggle = parentItem.querySelector(".search-dropdown-item-toggle");
    const sublist = parentItem.querySelector(".search-dropdown-sublist");
    const subitems = parentItem.querySelectorAll(
      ".search-dropdown-subitem:not(.search-dropdown-subitem--empty)"
    );

    if (!toggle) return;

    // Toggle sublist on parent click
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();

      // Close other sublists
      parentItems.forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("active");
          const itemToggle = item.querySelector(".search-dropdown-item-toggle");
          if (itemToggle && itemToggle.textContent.startsWith("-")) {
            itemToggle.textContent = itemToggle.textContent.replace("-", "+");
          }
        }
      });

      // Toggle current sublist
      parentItem.classList.toggle("active");

      // Change + to - when expanded
      if (parentItem.classList.contains("active")) {
        toggle.textContent = toggle.textContent.replace("+", "-");
      } else {
        toggle.textContent = toggle.textContent.replace("-", "+");
      }
    });

    // Handle subitem selection
    subitems.forEach((subitem) => {
      subitem.addEventListener("click", function (e) {
        e.stopPropagation();

        // Check if we're on the free-wof page
        const isFreeWofPage = window.location.pathname.includes('free-wof.html');

        // If clicking on a link inside subitem, prevent default only on free-wof page
        const clickedLink = e.target.closest('a');
        if (clickedLink && isFreeWofPage) {
          e.preventDefault();
        }

        // Remove selection from all subitems
        document
          .querySelectorAll(".search-dropdown-subitem")
          .forEach((item) => {
            item.classList.remove("selected");
          });

        // Add selection to clicked subitem
        this.classList.add("selected");
        selectedLocation = this.getAttribute("data-value");
        selectedRegion = parentItem.getAttribute("data-value");

        // Update button text to show selected location
        const locationText = clickedLink ? clickedLink.textContent.trim() : this.textContent.trim();
        const buttonTextNode = Array.from(regionsButton.childNodes).find(
          (node) => node.nodeType === Node.TEXT_NODE
        );
        if (buttonTextNode) {
          buttonTextNode.textContent = locationText + " ";
        }

        // Close dropdown
        regionsWrapper.classList.remove("active");

        // Reset all parent items
        parentItems.forEach((item) => {
          const itemToggle = item.querySelector(".search-dropdown-item-toggle");
          item.classList.remove("active");
          if (itemToggle && itemToggle.textContent.startsWith("-")) {
            itemToggle.textContent = itemToggle.textContent.replace("-", "+");
          }
        });

        // Only redirect if NOT on free-wof page
        if (!isFreeWofPage) {
          window.location.href =
            "booking.html?location=" +
            selectedLocation +
            "&region=" +
            selectedRegion;
        }
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!regionsWrapper.contains(e.target)) {
      regionsWrapper.classList.remove("active");
      // Reset all toggles
      parentItems.forEach((item) => {
        const toggle = item.querySelector(".search-dropdown-item-toggle");
        item.classList.remove("active");
        if (toggle && toggle.textContent.startsWith("-")) {
          toggle.textContent = toggle.textContent.replace("-", "+");
        }
      });
    }
  });
});
