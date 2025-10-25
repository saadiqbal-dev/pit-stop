// Google Places Autocomplete for Location Search
let autocomplete;
let selectedPlace = null;

// Initialize autocomplete - using old API (still works, just deprecated)
function initAutocomplete() {
  const input = document.getElementById('location-autocomplete');

  if (!input) {
    console.error('Location autocomplete input not found');
    return;
  }

  // Check if Google Maps API is loaded
  if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
    console.error('Google Maps API not loaded yet');
    return;
  }

  // Create autocomplete instance
  // Restrict to New Zealand addresses
  autocomplete = new google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: 'nz' },
    fields: ['formatted_address', 'geometry', 'name', 'place_id'],
    types: ['geocode', 'establishment']
  });

  // Fix dropdown positioning - Google places it at body level
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    selectedPlace = autocomplete.getPlace();

    if (!selectedPlace.geometry) {
      console.log('No details available for input: ' + selectedPlace.name);
      return;
    }

    console.log('Selected place:', selectedPlace);
  });

  // Force position the Google dropdown below the input field
  function positionPacContainer() {
    const pacContainer = document.querySelector('.pac-container');
    if (pacContainer && input) {
      const rect = input.getBoundingClientRect();
      pacContainer.style.position = 'fixed';
      pacContainer.style.left = rect.left + 'px';
      pacContainer.style.top = (rect.bottom + 4) + 'px';
      pacContainer.style.width = rect.width + 'px';
    }
  }

  // Position on input focus and whenever user types
  input.addEventListener('focus', function() {
    setTimeout(positionPacContainer, 100);
  });

  input.addEventListener('input', function() {
    setTimeout(positionPacContainer, 100);
  });

  // Reposition on scroll or resize
  window.addEventListener('scroll', positionPacContainer);
  window.addEventListener('resize', positionPacContainer);

  // Handle submit button click
  const submitButton = document.querySelector('.search-button');
  if (submitButton) {
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();

      const inputValue = input.value.trim();

      if (!inputValue) {
        alert('Please enter a location');
        return;
      }

      // If a place was selected from autocomplete
      if (selectedPlace && selectedPlace.geometry) {
        // Redirect to booking page with location data
        window.location.href = 'booking.html?location=' + encodeURIComponent(selectedPlace.name) +
                              '&address=' + encodeURIComponent(selectedPlace.formatted_address) +
                              '&placeId=' + selectedPlace.place_id;
      } else {
        // If user typed something but didn't select from dropdown
        window.location.href = 'booking.html?search=' + encodeURIComponent(inputValue);
      }
    });
  }
}

// Wait for DOM and Google Maps to load
document.addEventListener('DOMContentLoaded', function() {
  // Check if Google Maps is already loaded
  if (typeof google !== 'undefined' && google.maps && google.maps.places) {
    initAutocomplete();
  } else {
    // Wait for Google Maps to load
    window.addEventListener('load', function() {
      // Give it a small delay to ensure everything is ready
      setTimeout(initAutocomplete, 100);
    });
  }
});
