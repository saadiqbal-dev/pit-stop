class SearchOverlay {
  constructor() {
    this.overlay = document.getElementById('search-overlay');
    this.searchToggle = document.getElementById('search-toggle');
    this.mobileSearchToggle = document.getElementById('mobile-search-toggle');
    this.searchInput = this.overlay.querySelector('.search-input');

    // Store original SVG content
    this.searchIconHTML = this.searchToggle ? this.searchToggle.innerHTML : '';
    this.mobileSearchIconHTML = this.mobileSearchToggle ? this.mobileSearchToggle.innerHTML : '';

    // Close icon SVG
    this.closeIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
      <g clip-path="url(#clip0_2036_1092)">
        <path d="M30.8196 32.6262C31.1414 32.948 31.6145 33.0748 32.0536 32.9565C32.4927 32.8391 32.839 32.4928 32.9573 32.0528C33.0756 31.6137 32.9488 31.1405 32.6271 30.8188L2.18015 0.373788C1.85841 0.0520496 1.38526 -0.0747534 0.946182 0.043533C0.507103 0.160873 0.160763 0.507215 0.0424767 0.947241C-0.0758095 1.38632 0.0509911 1.85946 0.37273 2.1812L30.8196 32.6262Z" fill="black"/>
        <path d="M0.373768 30.8198C0.0520287 31.1415 -0.0747757 31.6147 0.0435104 32.0537C0.160851 32.4928 0.507195 32.8391 0.94722 32.9574C1.3863 33.0757 1.85944 32.9489 2.18118 32.6272L32.6262 2.18027C32.9479 1.85853 33.0747 1.38633 32.9565 0.94631C32.8391 0.507231 32.4928 0.160888 32.0537 0.0435482C31.6146 -0.0747381 31.1415 0.0520649 30.8197 0.373804L0.374714 30.8188L0.373768 30.8198Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_2036_1092">
          <rect width="33" height="33" fill="white" transform="matrix(-1 0 0 1 33 0)"/>
        </clipPath>
      </defs>
    </svg>`;

    this.init();
  }

  init() {
    if (this.searchToggle) {
      this.searchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleOverlay();
      });
    }

    if (this.mobileSearchToggle) {
      this.mobileSearchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleOverlay();
      });
    }

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.closeOverlay();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.closeOverlay();
      }
    });
  }

  toggleOverlay() {
    if (this.overlay.classList.contains('active')) {
      this.closeOverlay();
    } else {
      this.openOverlay();
    }
  }

  openOverlay() {
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Change search icon to close icon
    if (this.searchToggle) {
      this.searchToggle.innerHTML = this.closeIconHTML;
    }
    if (this.mobileSearchToggle) {
      this.mobileSearchToggle.innerHTML = this.closeIconHTML;
    }

    setTimeout(() => {
      this.searchInput.focus();
    }, 100);
  }

  closeOverlay() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
    this.searchInput.value = '';

    // Change close icon back to search icon
    if (this.searchToggle) {
      this.searchToggle.innerHTML = this.searchIconHTML;
    }
    if (this.mobileSearchToggle) {
      this.mobileSearchToggle.innerHTML = this.mobileSearchIconHTML;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SearchOverlay();
});
