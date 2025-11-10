// Free WOF Form Toggle - Show form when region is selected
$(document).ready(function () {
  const $freeWofForm = $("#free-wof-form");
  const $regionsDropdownWrapper = $(".regions-dropdown-wrapper");

  // Hide form initially
  $freeWofForm.hide();

  // Listen for region selection on the subitem itself (not just the link)
  $regionsDropdownWrapper.on("click", ".search-dropdown-subitem", function (e) {
    // Show the form with smooth scroll
    $freeWofForm.slideDown(400, function () {
      // Scroll to form after it's visible
      $("html, body").animate(
        {
          scrollTop: $freeWofForm.offset().top - 100,
        },
        600
      );
    });
  });
});
