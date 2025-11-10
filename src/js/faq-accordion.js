/**
 * FAQ Accordion Functionality
 * Handles accordion interactions for FAQ items
 * Works with inline HTML structure (no external JSON required)
 */

$(document).ready(function() {
  // Initialize accordion with existing HTML structure
  initFaqAccordion();
});

/**
 * Initialize FAQ Accordion
 */
function initFaqAccordion() {
  const $faqItems = $('.faq-item');

  // Exit early if no FAQ items exist
  if (!$faqItems.length) {
    console.warn('No FAQ items found to initialize');
    return;
  }

  console.log('FAQ accordion initialized with ' + $faqItems.length + ' items');

  // Handle FAQ question click (using event delegation for dynamic content)
  $('.faq-container').on('click', '.faq-question', function() {
    const $question = $(this);
    const $faqItem = $question.parent();
    const isActive = $faqItem.hasClass('active');

    // Close all other FAQ items first
    $('.faq-item').not($faqItem).removeClass('active');

    // Toggle current FAQ item
    if (isActive) {
      $faqItem.removeClass('active');
    } else {
      $faqItem.addClass('active');
    }
  });
}
