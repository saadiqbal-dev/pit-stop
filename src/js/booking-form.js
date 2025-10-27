// Booking Form functionality
$(document).ready(function() {
  // Style placeholder asterisks in red
  function stylePlaceholderAsterisks() {
    const $inputs = $('.booking-form .ps-form-input[placeholder*="*"]');

    $inputs.each(function() {
      const input = this;
      const placeholder = $(input).attr('placeholder');
      if (placeholder && placeholder.includes('*')) {
        // Split placeholder text and asterisk
        const parts = placeholder.split('*');
        const textPart = parts[0].trim();

        // Create wrapper
        const $wrapper = $('<div></div>').css({
          'position': 'relative',
          'width': '100%'
        });

        // Replace input with wrapper
        $(input).wrap($wrapper);
        const $wrappedInput = $(input);

        // Remove placeholder completely
        $wrappedInput.attr('placeholder', '');

        // Create custom placeholder overlay
        const $overlay = $('<div class="custom-placeholder"></div>').css({
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'padding': '8px 18px',
          'pointer-events': 'none',
          'color': '#999',
          'font-family': '"Open Sans"',
          'font-size': '16px',
          'display': $wrappedInput.val() ? 'none' : 'flex',
          'align-items': 'center'
        }).html(`${textPart} <span style="color: #eb2227; margin-left: 2px;">*</span>`);

        $wrappedInput.parent().append($overlay);

        // Hide overlay when input has value or is focused
        $wrappedInput.on('focus', function() {
          $overlay.css('display', 'none');
        });

        $wrappedInput.on('blur', function() {
          if (!$wrappedInput.val()) {
            $overlay.css('display', 'flex');
          }
        });

        $wrappedInput.on('input', function() {
          if ($wrappedInput.val()) {
            $overlay.css('display', 'none');
          } else {
            $overlay.css('display', 'flex');
          }
        });
      }
    });
  }

  stylePlaceholderAsterisks();

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const regionParam = urlParams.get('region');

  // Service Dropdown
  const $serviceDropdown = $('.service-dropdown');
  if (!$serviceDropdown.length) return;

  const $serviceInput = $serviceDropdown.find('.ps-form-dropdown-input');
  const $serviceText = $serviceDropdown.find('.ps-form-dropdown-text');
  const $serviceItems = $serviceDropdown.find('.ps-form-dropdown-item');

  // Toggle service dropdown
  $serviceInput.on('click', function(e) {
    e.stopPropagation();
    $serviceDropdown.toggleClass('active');
  });

  // Handle service selection
  $serviceItems.on('click', function(e) {
    e.stopPropagation();
    $serviceItems.removeClass('selected');
    $(this).addClass('selected');
    $serviceText.text($(this).text());
    $serviceText.removeClass('placeholder');
    $serviceDropdown.removeClass('active');
  });

  // Location Dropdown with nested structure
  const $locationDropdown = $('.ps-form-dropdown').eq(1);
  if (!$locationDropdown.length) return;

  const $locationInput = $locationDropdown.find('.ps-form-dropdown-input');
  const $locationText = $locationDropdown.find('.ps-form-dropdown-text');
  const $parentItems = $locationDropdown.find('.ps-form-dropdown-item--parent');

  // Get URL parameters for location
  const locationParam = urlParams.get('location');

  // Preselect location from URL param
  if (locationParam) {
    $parentItems.each(function() {
      const $subitems = $(this).find('.ps-form-dropdown-subitem');
      $subitems.each(function() {
        if ($(this).attr('data-value') === locationParam) {
          $locationText.text($(this).text());
          $locationText.removeClass('placeholder');
          $(this).addClass('selected');
        }
      });
    });
  } else {
    $locationText.addClass('placeholder');
  }

  // Toggle location dropdown
  $locationInput.on('click', function(e) {
    e.stopPropagation();
    $locationDropdown.toggleClass('active');
  });

  // Handle parent region toggle
  $parentItems.each(function() {
    const $parentItem = $(this);
    const $toggle = $parentItem.find('.ps-form-dropdown-item-toggle');
    const $subitems = $parentItem.find('.ps-form-dropdown-subitem:not(.ps-form-dropdown-subitem--empty)');

    // Toggle sublist on parent click
    $toggle.on('click', function(e) {
      e.stopPropagation();

      // Close other sublists
      $parentItems.each(function() {
        if (!$(this).is($parentItem)) {
          $(this).removeClass('active');
          const $itemToggle = $(this).find('.ps-form-dropdown-item-toggle');
          $itemToggle.text($itemToggle.text().replace('-', '+'));
        }
      });

      // Toggle current sublist
      $parentItem.toggleClass('active');

      // Change + to - when expanded
      if ($parentItem.hasClass('active')) {
        $toggle.text($toggle.text().replace('+', '-'));
      } else {
        $toggle.text($toggle.text().replace('-', '+'));
      }
    });

    // Handle subitem selection
    $subitems.on('click', function(e) {
      e.stopPropagation();

      // Remove selection from all subitems
      $locationDropdown.find('.ps-form-dropdown-subitem').removeClass('selected');

      // Add selection to clicked subitem
      $(this).addClass('selected');
      $locationText.text($(this).text());
      $locationText.removeClass('placeholder');
      $locationDropdown.removeClass('active');

      // Reset all parent items
      $parentItems.each(function() {
        const $itemToggle = $(this).find('.ps-form-dropdown-item-toggle');
        $(this).removeClass('active');
        $itemToggle.text($itemToggle.text().replace('-', '+'));
      });
    });
  });

  // Close dropdowns when clicking outside
  $(document).on('click', function(e) {
    if (!$serviceDropdown.is(e.target) && $serviceDropdown.has(e.target).length === 0) {
      $serviceDropdown.removeClass('active');
    }
    if (!$locationDropdown.is(e.target) && $locationDropdown.has(e.target).length === 0) {
      $locationDropdown.removeClass('active');
      // Reset all toggles
      $parentItems.each(function() {
        const $toggle = $(this).find('.ps-form-dropdown-item-toggle');
        $(this).removeClass('active');
        $toggle.text($toggle.text().replace('-', '+'));
      });
    }
  });

  // Calendar Popup
  const $dateInput = $('.ps-form-date-input');
  const $wofDateInput = $('.ps-form-wof-date-input');
  if (!$dateInput.length) return;

  let activeCalendarInput = null;

  // Create calendar popup
  const $calendarOverlay = $('<div class="calendar-overlay"></div>');
  $('body').append($calendarOverlay);

  const $calendarPopup = $(`
    <div class="calendar-popup">
      <div class="calendar-header">
        <button type="button" class="calendar-prev">&lt;</button>
        <span class="calendar-month-year"></span>
        <button type="button" class="calendar-next">&gt;</button>
      </div>
      <div class="calendar-weekdays">
        <div class="calendar-weekday">Sun</div>
        <div class="calendar-weekday">Mon</div>
        <div class="calendar-weekday">Tue</div>
        <div class="calendar-weekday">Wed</div>
        <div class="calendar-weekday">Thu</div>
        <div class="calendar-weekday">Fri</div>
        <div class="calendar-weekday">Sat</div>
      </div>
      <div class="calendar-days"></div>
    </div>
  `);
  $('body').append($calendarPopup);

  let currentDate = new Date();
  let selectedDate = null;

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    $calendarPopup.find('.calendar-month-year').text(`${date.toLocaleString('default', { month: 'long' })} ${year}`);

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const $daysContainer = $calendarPopup.find('.calendar-days');
    $daysContainer.empty();

    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay; i++) {
      $daysContainer.append('<div class="calendar-day disabled"></div>');
    }

    // Add days of month
    const today = new Date();
    for (let day = 1; day <= lastDate; day++) {
      const $dayElement = $('<div class="calendar-day"></div>').text(day);

      // Mark today
      if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        $dayElement.addClass('today');
      }

      // Mark selected date
      if (selectedDate && day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear()) {
        $dayElement.addClass('selected');
      }

      $dayElement.on('click', function() {
        selectedDate = new Date(year, month, day);
        if (activeCalendarInput) {
          const formattedDate = `${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`;
          activeCalendarInput.val(formattedDate);
        }
        closeCalendar();
      });

      $daysContainer.append($dayElement);
    }
  }

  function openCalendar($input) {
    activeCalendarInput = $input;
    selectedDate = null;
    currentDate = new Date();
    renderCalendar(currentDate);
    $calendarOverlay.addClass('active');
    $calendarPopup.addClass('active');
  }

  function closeCalendar() {
    $calendarOverlay.removeClass('active');
    $calendarPopup.removeClass('active');
    activeCalendarInput = null;
  }

  // Calendar navigation
  $calendarPopup.find('.calendar-prev').on('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  $calendarPopup.find('.calendar-next').on('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  // Open calendar on date input click
  $dateInput.on('click', function() {
    openCalendar($(this));
  });

  $wofDateInput.on('click', function() {
    openCalendar($(this));
  });

  // Close calendar when clicking overlay
  $calendarOverlay.on('click', closeCalendar);

  // Time Picker
  const $timeInput = $('.ps-form-time-input');
  if (!$timeInput.length) return;

  // Create time picker popup
  const $timeOverlay = $('<div class="calendar-overlay"></div>');
  $('body').append($timeOverlay);

  const $timePickerPopup = $(`
    <div class="time-picker-popup">
      <div class="time-picker-header">Select Time</div>
      <div class="time-picker-content">
        <div class="time-picker-column">
          <div class="time-picker-label">Hour</div>
          <div class="time-picker-select hour-select"></div>
        </div>
        <div class="time-picker-column">
          <div class="time-picker-label">Minute</div>
          <div class="time-picker-select minute-select"></div>
        </div>
        <div class="time-picker-column">
          <div class="time-picker-label">Period</div>
          <div class="time-picker-select period-select"></div>
        </div>
      </div>
      <button type="button" class="time-picker-confirm">Confirm</button>
    </div>
  `);
  $('body').append($timePickerPopup);

  // Populate time options
  const $hourSelect = $timePickerPopup.find('.hour-select');
  const $minuteSelect = $timePickerPopup.find('.minute-select');
  const $periodSelect = $timePickerPopup.find('.period-select');

  for (let i = 1; i <= 12; i++) {
    $hourSelect.append($('<div class="time-option"></div>').text(i.toString().padStart(2, '0')).attr('data-value', i));
  }

  for (let i = 0; i < 60; i += 15) {
    $minuteSelect.append($('<div class="time-option"></div>').text(i.toString().padStart(2, '0')).attr('data-value', i));
  }

  ['AM', 'PM'].forEach(period => {
    $periodSelect.append($('<div class="time-option"></div>').text(period).attr('data-value', period));
  });

  let selectedHour = null;
  let selectedMinute = null;
  let selectedPeriod = null;

  // Handle time selection
  $hourSelect.find('.time-option').on('click', function() {
    $hourSelect.find('.time-option').removeClass('selected');
    $(this).addClass('selected');
    selectedHour = $(this).attr('data-value');
  });

  $minuteSelect.find('.time-option').on('click', function() {
    $minuteSelect.find('.time-option').removeClass('selected');
    $(this).addClass('selected');
    selectedMinute = $(this).attr('data-value');
  });

  $periodSelect.find('.time-option').on('click', function() {
    $periodSelect.find('.time-option').removeClass('selected');
    $(this).addClass('selected');
    selectedPeriod = $(this).attr('data-value');
  });

  function openTimePicker() {
    $timeOverlay.addClass('active');
    $timePickerPopup.addClass('active');
  }

  function closeTimePicker() {
    $timeOverlay.removeClass('active');
    $timePickerPopup.removeClass('active');
  }

  $timeInput.on('click', function() {
    openTimePicker();
  });

  $timePickerPopup.find('.time-picker-confirm').on('click', function() {
    if (selectedHour && selectedMinute !== null && selectedPeriod) {
      const timeString = `${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')} ${selectedPeriod}`;
      $timeInput.val(timeString);
      closeTimePicker();
    } else {
      alert('Please select hour, minute, and period');
    }
  });

  $timeOverlay.on('click', closeTimePicker);

  // Form submission
  $('.booking-form').on('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Here you can add actual form submission logic
  });
});