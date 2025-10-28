// Smooth scroll for Book Now button on Free WOF page
$(document).ready(function() {
  // Hero section Book Now button
  $('.free-wof-hero-button').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');

    if (target && target !== '#') {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 100
      }, 800, 'swing');
    }
  });

  // Promotion banner Book Now button (if it needs scroll functionality too)
  $('.promotion-banner-free-wof .services-button').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#free-wof-form').offset().top - 100
    }, 800, 'swing');
  });
});
