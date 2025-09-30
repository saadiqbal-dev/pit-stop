// Booking Form functionality
document.addEventListener('DOMContentLoaded', function() {
  // Style placeholder asterisks in red
  function stylePlaceholderAsterisks() {
    const inputs = document.querySelectorAll('.booking-form .form-input[placeholder*="*"]');

    inputs.forEach(input => {
      const placeholder = input.getAttribute('placeholder');
      if (placeholder && placeholder.includes('*')) {
        // Split placeholder text and asterisk
        const parts = placeholder.split('*');
        const textPart = parts[0].trim();

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.width = '100%';

        // Replace input with wrapper
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        // Remove placeholder completely
        input.setAttribute('placeholder', '');

        // Create custom placeholder overlay
        const overlay = document.createElement('div');
        overlay.className = 'custom-placeholder';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.padding = '8px 18px';
        overlay.style.pointerEvents = 'none';
        overlay.style.color = '#999';
        overlay.style.fontFamily = '"Open Sans"';
        overlay.style.fontSize = '16px';
        overlay.style.display = input.value ? 'none' : 'flex';
        overlay.style.alignItems = 'center';
        overlay.innerHTML = `${textPart} <span style="color: #eb2227; margin-left: 2px;">*</span>`;

        wrapper.appendChild(overlay);

        // Hide overlay when input has value or is focused
        input.addEventListener('focus', function() {
          overlay.style.display = 'none';
        });

        input.addEventListener('blur', function() {
          if (!input.value) {
            overlay.style.display = 'flex';
          }
        });

        input.addEventListener('input', function() {
          if (input.value) {
            overlay.style.display = 'none';
          } else {
            overlay.style.display = 'flex';
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
  const serviceDropdown = document.querySelector('.service-dropdown');
  const serviceInput = serviceDropdown.querySelector('.form-dropdown-input');
  const serviceText = serviceDropdown.querySelector('.form-dropdown-text');
  const serviceItems = serviceDropdown.querySelectorAll('.form-dropdown-item');

  // Toggle service dropdown
  serviceInput.addEventListener('click', function(e) {
    e.stopPropagation();
    serviceDropdown.classList.toggle('active');
  });

  // Handle service selection
  serviceItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      serviceItems.forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
      serviceText.textContent = this.textContent;
      serviceText.classList.remove('placeholder');
      serviceDropdown.classList.remove('active');
    });
  });

  // Location Dropdown
  const locationDropdown = document.querySelectorAll('.form-dropdown')[1];
  const locationInput = locationDropdown.querySelector('.form-dropdown-input');
  const locationText = locationDropdown.querySelector('.form-dropdown-text');
  const locationItems = locationDropdown.querySelectorAll('.form-dropdown-item');

  // Preselect location from URL param
  if (regionParam) {
    const selectedItem = Array.from(locationItems).find(item => item.getAttribute('data-value') === regionParam);
    if (selectedItem) {
      locationText.textContent = selectedItem.textContent;
      locationText.classList.remove('placeholder');
      selectedItem.classList.add('selected');
    }
  } else {
    locationText.classList.add('placeholder');
  }

  // Toggle location dropdown
  locationInput.addEventListener('click', function(e) {
    e.stopPropagation();
    locationDropdown.classList.toggle('active');
  });

  // Handle location selection
  locationItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      locationItems.forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
      locationText.textContent = this.textContent;
      locationText.classList.remove('placeholder');
      locationDropdown.classList.remove('active');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!serviceDropdown.contains(e.target)) {
      serviceDropdown.classList.remove('active');
    }
    if (!locationDropdown.contains(e.target)) {
      locationDropdown.classList.remove('active');
    }
  });

  // Calendar Popup
  const dateInput = document.querySelector('.form-date-input');
  const wofDateInput = document.querySelector('.form-wof-date-input');
  let activeCalendarInput = null;

  // Create calendar popup
  const calendarOverlay = document.createElement('div');
  calendarOverlay.className = 'calendar-overlay';
  document.body.appendChild(calendarOverlay);

  const calendarPopup = document.createElement('div');
  calendarPopup.className = 'calendar-popup';
  calendarPopup.innerHTML = `
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
  `;
  document.body.appendChild(calendarPopup);

  let currentDate = new Date();
  let selectedDate = null;

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const monthYear = calendarPopup.querySelector('.calendar-month-year');
    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const daysContainer = calendarPopup.querySelector('.calendar-days');
    daysContainer.innerHTML = '';

    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.className = 'calendar-day disabled';
      daysContainer.appendChild(emptyDay);
    }

    // Add days of month
    const today = new Date();
    for (let day = 1; day <= lastDate; day++) {
      const dayElement = document.createElement('div');
      dayElement.className = 'calendar-day';
      dayElement.textContent = day;

      const currentDateObj = new Date(year, month, day);

      // Mark today
      if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        dayElement.classList.add('today');
      }

      // Mark selected date
      if (selectedDate && day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear()) {
        dayElement.classList.add('selected');
      }

      dayElement.addEventListener('click', function() {
        selectedDate = new Date(year, month, day);
        if (activeCalendarInput) {
          const formattedDate = `${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`;
          activeCalendarInput.value = formattedDate;
        }
        closeCalendar();
      });

      daysContainer.appendChild(dayElement);
    }
  }

  function openCalendar(input) {
    activeCalendarInput = input;
    selectedDate = null;
    currentDate = new Date();
    renderCalendar(currentDate);
    calendarOverlay.classList.add('active');
    calendarPopup.classList.add('active');
  }

  function closeCalendar() {
    calendarOverlay.classList.remove('active');
    calendarPopup.classList.remove('active');
    activeCalendarInput = null;
  }

  // Calendar navigation
  calendarPopup.querySelector('.calendar-prev').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  calendarPopup.querySelector('.calendar-next').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  // Open calendar on date input click
  dateInput.addEventListener('click', function() {
    openCalendar(this);
  });

  wofDateInput.addEventListener('click', function() {
    openCalendar(this);
  });

  // Close calendar when clicking overlay
  calendarOverlay.addEventListener('click', closeCalendar);

  // Time Picker
  const timeInput = document.querySelector('.form-time-input');

  // Create time picker popup
  const timeOverlay = document.createElement('div');
  timeOverlay.className = 'calendar-overlay';
  document.body.appendChild(timeOverlay);

  const timePickerPopup = document.createElement('div');
  timePickerPopup.className = 'time-picker-popup';
  timePickerPopup.innerHTML = `
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
  `;
  document.body.appendChild(timePickerPopup);

  // Populate time options
  const hourSelect = timePickerPopup.querySelector('.hour-select');
  const minuteSelect = timePickerPopup.querySelector('.minute-select');
  const periodSelect = timePickerPopup.querySelector('.period-select');

  for (let i = 1; i <= 12; i++) {
    const hourOption = document.createElement('div');
    hourOption.className = 'time-option';
    hourOption.textContent = i.toString().padStart(2, '0');
    hourOption.dataset.value = i;
    hourSelect.appendChild(hourOption);
  }

  for (let i = 0; i < 60; i += 15) {
    const minuteOption = document.createElement('div');
    minuteOption.className = 'time-option';
    minuteOption.textContent = i.toString().padStart(2, '0');
    minuteOption.dataset.value = i;
    minuteSelect.appendChild(minuteOption);
  }

  ['AM', 'PM'].forEach(period => {
    const periodOption = document.createElement('div');
    periodOption.className = 'time-option';
    periodOption.textContent = period;
    periodOption.dataset.value = period;
    periodSelect.appendChild(periodOption);
  });

  let selectedHour = null;
  let selectedMinute = null;
  let selectedPeriod = null;

  // Handle time selection
  hourSelect.querySelectorAll('.time-option').forEach(option => {
    option.addEventListener('click', function() {
      hourSelect.querySelectorAll('.time-option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      selectedHour = this.dataset.value;
    });
  });

  minuteSelect.querySelectorAll('.time-option').forEach(option => {
    option.addEventListener('click', function() {
      minuteSelect.querySelectorAll('.time-option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      selectedMinute = this.dataset.value;
    });
  });

  periodSelect.querySelectorAll('.time-option').forEach(option => {
    option.addEventListener('click', function() {
      periodSelect.querySelectorAll('.time-option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      selectedPeriod = this.dataset.value;
    });
  });

  function openTimePicker() {
    timeOverlay.classList.add('active');
    timePickerPopup.classList.add('active');
  }

  function closeTimePicker() {
    timeOverlay.classList.remove('active');
    timePickerPopup.classList.remove('active');
  }

  timeInput.addEventListener('click', function() {
    openTimePicker();
  });

  timePickerPopup.querySelector('.time-picker-confirm').addEventListener('click', function() {
    if (selectedHour && selectedMinute !== null && selectedPeriod) {
      const timeString = `${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')} ${selectedPeriod}`;
      timeInput.value = timeString;
      closeTimePicker();
    } else {
      alert('Please select hour, minute, and period');
    }
  });

  timeOverlay.addEventListener('click', closeTimePicker);

  // Form submission
  const form = document.querySelector('.booking-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Here you can add actual form submission logic
  });
});