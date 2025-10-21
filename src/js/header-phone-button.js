/**
 * Phone Button Click-to-Reveal Functionality
 * Handles click-to-reveal for phone number buttons (header and footer)
 */

class PhoneButton {
  constructor(buttonElement) {
    this.phoneButton = buttonElement;
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

// Initialize all phone buttons when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Header phone button
  const headerButton = document.querySelector('.ps-header__phone-button');
  if (headerButton) {
    new PhoneButton(headerButton);
  }

  // Footer phone buttons (both desktop and mobile)
  const footerButtons = document.querySelectorAll('.footer-phone-button');
  footerButtons.forEach((button) => {
    new PhoneButton(button);
  });
});
