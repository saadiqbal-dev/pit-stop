/**
 * Header Navigation Dropdown Functionality
 * Handles dropdown menu interactions for Services, Find a Store, and About
 */

class HeaderNavigation {
  constructor() {
    this.dropdownItems = document.querySelectorAll(
      ".ps-header__nav-item--dropdown"
    );
    this.activeDropdown = null;
    this.isTouchDevice = "ontouchstart" in window;
    this.overlay = document.querySelector(".ps-header__dropdown-overlay");
    this.closeTimeouts = new Map();

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.dropdownItems.forEach((item) => {
      const link = item.querySelector(".ps-header__nav-link");
      const dropdownMenu = item.querySelector(".ps-header__dropdown-menu");

      // Hover handling for desktop
      item.addEventListener("mouseenter", () => {
        if (!this.isTouchDevice) {
          this.openDropdown(item);
        }
      });

      item.addEventListener("mouseleave", (e) => {
        if (!this.isTouchDevice) {
          // Delay closing to allow mouse to move to dropdown
          const timeout = setTimeout(() => {
            this.closeDropdown(item);
          }, 150);
          this.closeTimeouts.set(item, timeout);
        }
      });

      // Keep dropdown open when hovering over the dropdown menu itself
      if (dropdownMenu) {
        dropdownMenu.addEventListener("mouseenter", () => {
          if (!this.isTouchDevice) {
            // Cancel any pending close for this item
            const timeout = this.closeTimeouts.get(item);
            if (timeout) {
              clearTimeout(timeout);
              this.closeTimeouts.delete(item);
            }
            this.openDropdown(item);
          }
        });

        dropdownMenu.addEventListener("mouseleave", () => {
          if (!this.isTouchDevice) {
            const timeout = setTimeout(() => {
              this.closeDropdown(item);
            }, 150);
            this.closeTimeouts.set(item, timeout);
          }
        });
      }

      // Click handling for entire nav item area
      item.addEventListener("click", (e) => {
        // Prevent clicks on dropdown menu itself from toggling
        if (!e.target.closest(".ps-header__dropdown-menu")) {
          e.preventDefault();
          this.toggleDropdown(item);
        }
      });

      // Keyboard navigation for the link
      link.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleDropdown(item);
        } else if (e.key === "Escape") {
          this.closeDropdown(item);
          link.focus();
        }
      });

      // Navigate dropdown items with arrow keys
      if (dropdownMenu) {
        const dropdownLinks = dropdownMenu.querySelectorAll(
          ".ps-header__dropdown-link"
        );
        dropdownLinks.forEach((dropdownLink, index) => {
          dropdownLink.addEventListener("keydown", (e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              const nextIndex = (index + 1) % dropdownLinks.length;
              dropdownLinks[nextIndex].focus();
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              const prevIndex =
                index === 0 ? dropdownLinks.length - 1 : index - 1;
              dropdownLinks[prevIndex].focus();
            } else if (e.key === "Escape") {
              this.closeDropdown(item);
              link.focus();
            }
          });
        });
      }
    });

    // Close all dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".ps-header__nav-item--dropdown") &&
          !e.target.closest(".ps-header__dropdown-menu")) {
        this.closeAllDropdowns();
      }
    });

    // Close dropdowns on window resize
    window.addEventListener("resize", () => {
      this.closeAllDropdowns();
    });

    // Close dropdowns when clicking overlay
    if (this.overlay) {
      this.overlay.addEventListener("click", () => {
        this.closeAllDropdowns();
      });
    }
  }

  openDropdown(item) {
    if (this.activeDropdown && this.activeDropdown !== item) {
      this.closeDropdown(this.activeDropdown);
    }

    // Calculate the position of the nav band bottom
    const navBand = document.querySelector(".ps-header__nav-band");
    const navBandRect = navBand.getBoundingClientRect();
    const dropdownMenu = item.querySelector(".ps-header__dropdown-menu");

    // Set the dropdown top position to be right below the nav band
    dropdownMenu.style.top = `${navBandRect.bottom}px`;

    // For About dropdown, align the content below the menu item
    if (dropdownMenu.classList.contains("ps-header__dropdown-menu--about")) {
      const itemRect = item.getBoundingClientRect();
      const inner = dropdownMenu.querySelector(".ps-header__dropdown-inner");
      if (inner) {
        // Calculate the offset from center (where inner starts with margin auto)
        const viewportWidth = window.innerWidth;
        const innerMaxWidth = 1920;
        const innerWidth = Math.min(viewportWidth, innerMaxWidth);
        const innerStart = (viewportWidth - innerWidth) / 2;

        // Calculate padding to align content below menu item
        const paddingLeft = itemRect.left - innerStart;
        inner.style.paddingLeft = `${Math.max(paddingLeft, 0)}px`;
      }
    }

    item.classList.add("is-active");
    this.activeDropdown = item;

    // Show overlay
    if (this.overlay) {
      this.overlay.classList.add("is-active");
    }

    // Set focus to first dropdown link for keyboard users
    const firstDropdownLink = item.querySelector(".ps-header__dropdown-link");
    if (
      firstDropdownLink &&
      document.activeElement === item.querySelector(".ps-header__nav-link")
    ) {
      setTimeout(() => firstDropdownLink.focus(), 100);
    }
  }

  closeDropdown(item) {
    // Clear any pending timeout for this item
    const timeout = this.closeTimeouts.get(item);
    if (timeout) {
      clearTimeout(timeout);
      this.closeTimeouts.delete(item);
    }

    item.classList.remove("is-active");
    if (this.activeDropdown === item) {
      this.activeDropdown = null;
    }

    // Hide overlay if no dropdowns are active
    if (this.overlay && !this.activeDropdown) {
      this.overlay.classList.remove("is-active");
    }
  }

  toggleDropdown(item) {
    if (item.classList.contains("is-active")) {
      this.closeDropdown(item);
    } else {
      this.openDropdown(item);
    }
  }

  closeAllDropdowns() {
    this.dropdownItems.forEach((item) => {
      this.closeDropdown(item);
    });
  }
}

// Initialize header navigation when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new HeaderNavigation();
});
