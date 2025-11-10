// Free WOF - Simple Dropdown and Form Reveal
$(document).ready(function () {
  // Hide form initially
  $("#free-wof-form").hide();

  // Toggle dropdown on button click
  $(".regions-selector-button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".regions-dropdown-wrapper").toggleClass("active");
  });

  // Toggle parent regions (+ to -)
  $(".search-dropdown-item-toggle").on("click", function (e) {
    e.stopPropagation();
    const $parent = $(this).closest(".search-dropdown-item--parent");

    // Close all other parents
    $(".search-dropdown-item--parent").not($parent).removeClass("active");
    $(".search-dropdown-item-toggle").each(function () {
      if ($(this).text().startsWith("-")) {
        $(this).text($(this).text().replace("-", "+"));
      }
    });

    // Toggle current parent
    $parent.toggleClass("active");
    if ($parent.hasClass("active")) {
      $(this).text($(this).text().replace("+", "-"));
    } else {
      $(this).text($(this).text().replace("-", "+"));
    }
  });

  // When a region is selected
  $(".search-dropdown-subitem").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Get selected location
    const locationText =
      $(this).find("a").text().trim() || $(this).text().trim();

    // Update button text
    $(".regions-selector-button")
      .contents()
      .filter(function () {
        return this.nodeType === 3;
      })[0].nodeValue = locationText + " ";

    // Remove active class from all items
    $(".search-dropdown-subitem").removeClass("selected");
    $(this).addClass("selected");

    // Close dropdown
    $(".regions-dropdown-wrapper").removeClass("active");
    $(".search-dropdown-item--parent").removeClass("active");
    $(".search-dropdown-item-toggle").each(function () {
      if ($(this).text().startsWith("-")) {
        $(this).text($(this).text().replace("-", "+"));
      }
    });

    // Region routing logic
    // Define regions that should navigate to service pages (for future use)
    const regionRoutes = {
      // Example: "Auckland": "/services/auckland",
      // For now, all regions show the form
      Kerikeri: "https://www.pitstop.co.nz/branch/kerikeri",
    };

    // Check if this region should navigate
    if (regionRoutes[locationText]) {
      // Navigate to service page
      window.location.href = regionRoutes[locationText];
    } else {
      // Show form for this region with animation
      $("#free-wof-form").slideDown(500);
    }
  });

  // Close dropdown when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".regions-dropdown-wrapper").length) {
      $(".regions-dropdown-wrapper").removeClass("active");
      $(".search-dropdown-item--parent").removeClass("active");
      $(".search-dropdown-item-toggle").each(function () {
        if ($(this).text().startsWith("-")) {
          $(this).text($(this).text().replace("-", "+"));
        }
      });
    }
  });
});
