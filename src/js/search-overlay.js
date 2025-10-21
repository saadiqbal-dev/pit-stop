class SearchOverlay {
  constructor() {
    this.overlay = document.getElementById('search-overlay');
    this.searchToggle = document.getElementById('search-toggle');
    this.mobileSearchToggle = document.getElementById('mobile-search-toggle');
    this.searchInput = this.overlay.querySelector('.search-input');

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
    setTimeout(() => {
      this.searchInput.focus();
    }, 100);
  }

  closeOverlay() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
    this.searchInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SearchOverlay();
});
