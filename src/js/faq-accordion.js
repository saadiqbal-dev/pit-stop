// FAQ Accordion Functionality - Dynamic from JSON
$(document).ready(function() {
  // Load FAQ data from external JSON file
  $.getJSON('data/faq-data.json')
    .done(function(data) {
      buildFaqAccordion(data);
    })
    .fail(function(jqxhr, textStatus, error) {
      console.error('Error loading faq-data.json:', textStatus, error);
      console.error('Make sure the file exists at: data/faq-data.json');
    });
});

/**
 * Build FAQ accordion from data
 */
function buildFaqAccordion(data) {
  // Set heading
  if (data.heading) {
    $('.faq-heading').text(data.heading);
  }

  // Get container for FAQ items
  const $faqContainer = $('.faq-container > div');
  $faqContainer.empty();

  // Build each FAQ item
  if (data.items && data.items.length > 0) {
    data.items.forEach(function(item) {
      const $faqItem = $('<div class="faq-item"></div>');

      // Add divider
      $faqItem.append('<div class="faq-divider"></div>');

      // Add question
      const $question = $('<div class="faq-question"></div>');
      $question.append('<span>' + item.question + '</span>');
      $question.append('<img src="assets/img/faq-plus.svg" alt="Expand" class="faq-icon faq-icon-plus" />');
      $question.append('<img src="assets/img/faq-close.svg" alt="Collapse" class="faq-icon faq-icon-close" />');
      $faqItem.append($question);

      // Add answer
      const $answer = $('<div class="faq-answer"></div>');
      $answer.append('<p>' + item.answer + '</p>');
      $faqItem.append($answer);

      $faqContainer.append($faqItem);
    });

    // Add final divider
    $faqContainer.append('<div class="faq-divider"></div>');

    // Initialize accordion after content is loaded
    initFaqAccordion();
  }
}

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

  // Handle FAQ question click
  $('.faq-question').on('click', function() {
    const $faqItem = $(this).closest('.faq-item');
    const $faqAnswer = $faqItem.find('.faq-answer');
    const isActive = $faqItem.hasClass('active');

    // Close all other FAQ items
    $faqItems.each(function() {
      if (!$(this).is($faqItem)) {
        $(this).removeClass('active');
        $(this).find('.faq-answer').slideUp(500, 'swing');
      }
    });

    // Toggle current FAQ item
    if (isActive) {
      $faqItem.removeClass('active');
      $faqAnswer.slideUp(500, 'swing');
    } else {
      $faqItem.addClass('active');
      $faqAnswer.slideDown(500, 'swing');
    }
  });
}
