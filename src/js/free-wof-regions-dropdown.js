// Free WOF Regions Dropdown functionality with form reveal
$(document).ready(function () {
  const $regionsWrapper = $(".regions-dropdown-wrapper");
  const $regionsButton = $(".regions-selector-button");
  const $dropdown = $regionsWrapper.find(".search-dropdown");
  const $parentItems = $(".search-dropdown-item--parent");
  const $freeWofForm = $("#free-wof-form");

  // Hide form initially
  $freeWofForm.hide();

  // Toggle dropdown on button click
  $regionsButton.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $regionsWrapper.toggleClass("active");
  });

  // Handle parent region toggle
  $parentItems.each(function () {
    const $parentItem = $(this);
    const $toggle = $parentItem.find(".search-dropdown-item-toggle");
    const $sublist = $parentItem.find(".search-dropdown-sublist");
    const $subitems = $parentItem.find(
      ".search-dropdown-subitem:not(.search-dropdown-subitem--empty)"
    );

    if ($toggle.length === 0) return;

    // Toggle sublist on parent click
    $toggle.on("click", function (e) {
      e.stopPropagation();

      // Close other sublists
      $parentItems.each(function () {
        const $otherItem = $(this);
        if ($otherItem[0] !== $parentItem[0]) {
          $otherItem.removeClass("active");
          const $otherToggle = $otherItem.find(".search-dropdown-item-toggle");
          if ($otherToggle.text().startsWith("-")) {
            $otherToggle.text($otherToggle.text().replace("-", "+"));
          }
        }
      });

      // Toggle current sublist
      $parentItem.toggleClass("active");

      // Change + to - when expanded
      if ($parentItem.hasClass("active")) {
        $toggle.text($toggle.text().replace("+", "-"));
      } else {
        $toggle.text($toggle.text().replace("-", "+"));
      }
    });

    // Handle subitem selection
    $subitems.on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const $subitem = $(this);
      const $link = $subitem.find("a");

      // Remove selection from all subitems
      $(".search-dropdown-subitem").removeClass("selected");

      // Add selection to clicked subitem
      $subitem.addClass("selected");

      // Get location text
      const locationText = $link.length
        ? $link.text().trim()
        : $subitem.text().trim();

      // Update button text to show selected location
      const buttonText = $regionsButton.contents().filter(function () {
        return this.nodeType === 3; // Text node
      });
      if (buttonText.length) {
        buttonText[0].nodeValue = locationText + " ";
      }

      // Close dropdown
      $regionsWrapper.removeClass("active");

      // Reset all parent items
      $parentItems.each(function () {
        const $item = $(this);
        const $itemToggle = $item.find(".search-dropdown-item-toggle");
        $item.removeClass("active");
        if ($itemToggle.text().startsWith("-")) {
          $itemToggle.text($itemToggle.text().replace("-", "+"));
        }
      });

      // Show the form and scroll to it
      $freeWofForm.slideDown(600, function () {
        // Add a small delay to ensure form is fully expanded
        setTimeout(function() {
          const $formAnchor = $("#form-anchor");
          if ($formAnchor.length) {
            const isMobile = $(window).width() <= 768;
            const offset = isMobile ? 100 : 20;
            const scrollPosition = $formAnchor.offset().top - offset;

            $("html, body").animate({
              scrollTop: scrollPosition
            }, 800);
          }
        }, 200);
      });
    });
  });

  // Close dropdown when clicking outside
  $(document).on("click", function (e) {
    if (!$regionsWrapper.is(e.target) && $regionsWrapper.has(e.target).length === 0) {
      $regionsWrapper.removeClass("active");
      // Reset all toggles
      $parentItems.each(function () {
        const $item = $(this);
        const $toggle = $item.find(".search-dropdown-item-toggle");
        $item.removeClass("active");
        if ($toggle.text().startsWith("-")) {
          $toggle.text($toggle.text().replace("-", "+"));
        }
      });
    }
  });
});
