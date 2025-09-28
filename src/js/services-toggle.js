const servicesGrid = document.querySelector('.services-grid');
const servicesToggleButton = document.querySelector('.services-container > .services-button');

servicesToggleButton.addEventListener('click', () => {
  const isExpanded = servicesGrid.classList.contains('expanded');

  if (isExpanded) {
    servicesGrid.classList.remove('expanded');
    servicesToggleButton.textContent = 'See All Services';
  } else {
    servicesGrid.classList.add('expanded');
    servicesToggleButton.textContent = 'Show Less';
  }
});