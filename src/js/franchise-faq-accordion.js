/**
 * Franchise FAQ accordion.
 * Port of Apparelmaster initFaqAccordion (js/main.js): one item open at a
 * time, jQuery slide 300ms, plus icon rotates to an x via CSS.
 */
$(function () {
  var $root = $("[data-franchise-faq]");

  if (!$root.length) {
    return;
  }

  function closeItem($item) {
    var $answer = $item.find("[data-franchise-faq-answer]");

    $item.removeClass("is-open");
    $item.find("[data-franchise-faq-question]").attr("aria-expanded", "false");
    $answer.removeClass("is-shown");

    if ($answer.is(":visible")) {
      $answer.css("display", "flex").slideUp(300);
    }
  }

  function openItem($item) {
    var $answer = $item.find("[data-franchise-faq-answer]");

    $item.addClass("is-open");
    $item.find("[data-franchise-faq-question]").attr("aria-expanded", "true");
    $answer.slideDown(300, function () {
      $answer.css("display", "flex").addClass("is-shown");
    });
  }

  $root.on("click", "[data-franchise-faq-question]", function () {
    var $item = $(this).closest("[data-franchise-faq-item]");
    var isOpen = $item.hasClass("is-open");

    $root
      .find("[data-franchise-faq-item].is-open")
      .not($item)
      .each(function () {
        closeItem($(this));
      });

    if (isOpen) {
      closeItem($item);
    } else {
      openItem($item);
    }
  });
});
