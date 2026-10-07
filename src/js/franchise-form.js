/**
 * Franchise enquiry form.
 * Same outcome as booking-form.js (native required/email checks, then
 * preventDefault and a success alert). booking-form.js returns before its
 * submit handler when the booking service dropdown is missing, so this page
 * does not load that file.
 * Placeholder asterisks use a CSS overlay instead of inline styles.
 */
$(function () {
  var $form = $(".franchise-form");

  if (!$form.length) {
    return;
  }

  $form.find(".franchise-field").each(function () {
    var $field = $(this);
    var $input = $field.find(".ps-form-input");

    function syncFilled() {
      $field.toggleClass("is-filled", $.trim($input.val()).length > 0);
    }

    $input.on("focus", function () {
      $field.addClass("is-focused");
    });

    $input.on("blur", function () {
      $field.removeClass("is-focused");
      syncFilled();
    });

    $input.on("input", syncFilled);
    syncFilled();
  });

  $form.on("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
  });
});
