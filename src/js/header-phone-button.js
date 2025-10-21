/**
 * Header Phone Button Click-to-Reveal Functionality
 * Handles click-to-reveal for the phone number button
 */

class HeaderPhoneButton {
  constructor() {
    this.phoneButton = document.querySelector('.ps-header__phone-button');
    this.phoneNumber = '0800 748 786';
    this.telLink = 'tel:0800748786';
    this.state = 0; // 0: initial, 1: number revealed, 2: clickable tel link

    this.init();
  }

  init() {
    if (!this.phoneButton) return;
    this.bindEvents();
  }

  bindEvents() {
    this.phoneButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleClick();
    });
  }

  handleClick() {
    if (this.state === 0) {
      // First click: reveal number
      this.phoneButton.textContent = this.phoneNumber;
      this.state = 1;
    } else if (this.state === 1) {
      // Second click: convert to tel link and trigger it
      this.phoneButton.href = this.telLink;
      window.location.href = this.telLink;
      this.state = 2;
    }
  }
}

// Initialize phone button when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HeaderPhoneButton();
});
