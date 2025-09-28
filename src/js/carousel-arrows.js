const carouselArrows = (() => {
  let currentIndex = 0;
  let carouselCards = [];
  let carouselTrack = null;
  let prevButton = null;
  let nextButton = null;
  let cardWidth = 0;
  let visibleCards = 3;
  let gap = 50;

  const init = () => {
    carouselTrack = document.querySelector('.carousel-cards-container');
    if (!carouselTrack) return;

    carouselCards = Array.from(carouselTrack.querySelectorAll('.carousel-card'));
    if (carouselCards.length === 0) return;

    const arrows = document.querySelectorAll('.carousel-arrows svg');
    prevButton = arrows[0];
    nextButton = arrows[1];

    if (!prevButton || !nextButton) return;

    setupCarousel();
    attachEventListeners();
    updateButtonStates();
  };

  const setupCarousel = () => {
    const firstCard = carouselCards[0];
    if (firstCard) {
      cardWidth = firstCard.offsetWidth;
    }

    carouselTrack.style.display = 'flex';
    carouselTrack.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    carouselTrack.style.willChange = 'transform';

    const containerWidth = carouselTrack.parentElement.offsetWidth;
    const contentWidth = document.querySelector('.carousel-content')?.offsetWidth || 0;
    const availableWidth = containerWidth - contentWidth - 100;

    visibleCards = Math.floor(availableWidth / (cardWidth + gap));
    visibleCards = Math.max(1, Math.min(visibleCards, 3));
  };

  const attachEventListeners = () => {
    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);

    prevButton.style.cursor = 'pointer';
    nextButton.style.cursor = 'pointer';

    window.addEventListener('resize', () => {
      setupCarousel();
      updateCarouselPosition();
    });
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarouselPosition();
      updateButtonStates();
    }
  };

  const slideNext = () => {
    const maxIndex = Math.max(0, carouselCards.length - visibleCards);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarouselPosition();
      updateButtonStates();
    }
  };

  const updateCarouselPosition = () => {
    const translateX = -(currentIndex * (cardWidth + gap));
    carouselTrack.style.transform = `translateX(${translateX}px)`;
  };

  const updateButtonStates = () => {
    const maxIndex = Math.max(0, carouselCards.length - visibleCards);

    if (currentIndex <= 0) {
      prevButton.style.opacity = '0.3';
      prevButton.style.pointerEvents = 'none';
    } else {
      prevButton.style.opacity = '1';
      prevButton.style.pointerEvents = 'auto';
    }

    if (currentIndex >= maxIndex) {
      nextButton.style.opacity = '0.3';
      nextButton.style.pointerEvents = 'none';
    } else {
      nextButton.style.opacity = '1';
      nextButton.style.pointerEvents = 'auto';
    }
  };

  return {
    init
  };
})();

document.addEventListener('DOMContentLoaded', carouselArrows.init);