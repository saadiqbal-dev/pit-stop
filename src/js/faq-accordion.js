// FAQ Accordion Functionality
$(document).ready(function() {
  const $faqItems = $('.faq-item');

  // Exit early if no FAQ items exist
  if (!$faqItems.length) {
    return;
  }

  // Handle FAQ question click
  $('.faq-question').on('click', function() {
    const $faqItem = $(this).closest('.faq-item');
    const $faqAnswer = $faqItem.find('.faq-answer');
    const isActive = $faqItem.hasClass('active');

    // Close all other FAQ items
    $faqItems.each(function() {
      if (!$(this).is($faqItem)) {
        $(this).removeClass('active');
        $(this).find('.faq-answer').slideUp(400);
      }
    });

    // Toggle current FAQ item
    if (isActive) {
      $faqItem.removeClass('active');
      $faqAnswer.slideUp(400);
    } else {
      $faqItem.addClass('active');
      $faqAnswer.slideDown(400);
    }
  });
});
