const carouselArrows = (() => {
  let currentIndex = 0;
  let carouselCards = [];
  let carouselTrack = null;
  let prevButton = null;
  let nextButton = null;
  let cardWidth = 0;
  let visibleCards = 3;
  let gap = 50;
  let resizeTimeout = null;
  let autoScrollInterval = null;
  let autoScrollDelay = 3500; // 3.5 seconds

  const startAutoScroll = () => {
    stopAutoScroll(); // Clear any existing interval
    autoScrollInterval = setInterval(() => {
      if (!carouselTrack) return;

      const maxScroll = Math.max(
        0,
        carouselTrack.scrollWidth - carouselTrack.clientWidth
      );
      const atEnd = carouselTrack.scrollLeft >= maxScroll - 1;

      if (atEnd) {
        // Loop back to start
        carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to next card
        slideNext();
      }
    }, autoScrollDelay);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  };

  const cleanup = () => {
    stopAutoScroll();
    if (prevButton) {
      prevButton.removeEventListener("click", slidePrev);
    }
    if (nextButton) {
      nextButton.removeEventListener("click", slideNext);
    }
    if (carouselTrack) {
      carouselTrack.removeEventListener("scroll", updateButtonStates);
    }
  };

  const init = () => {
    // Get the unified carousel
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    if (!carouselWrapper) return;

    // Clean up previous event listeners
    cleanup();

    // Get carousel track
    carouselTrack = carouselWrapper.querySelector(".carousel-cards-container");
    if (!carouselTrack) return;

    // Get carousel cards
    carouselCards = Array.from(carouselTrack.querySelectorAll(".carousel-card"));
    if (carouselCards.length === 0) return;

    // Get arrow buttons
    const arrows = carouselWrapper.querySelectorAll(".carousel-arrows svg");
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

    carouselTrack.style.display = "flex";
    // We now scroll instead of transforming
    carouselTrack.style.transition = "";
    carouselTrack.style.willChange = "scroll-position";

    const containerWidth = carouselTrack.parentElement.offsetWidth;
    const contentWidth =
      document.querySelector(".carousel-content")?.offsetWidth || 0;
    const availableWidth = containerWidth - contentWidth - 100;

    // Read actual computed gap from CSS to avoid drift
    const computedGap = parseFloat(getComputedStyle(carouselTrack).gap || "50");
    gap = isNaN(computedGap) ? 50 : computedGap;

    visibleCards = Math.floor(availableWidth / (cardWidth + gap));
    visibleCards = Math.max(1, Math.min(visibleCards, 3));
  };

  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      init(); // Reinitialize to recalculate dimensions
    }, 150);
  };

  const attachEventListeners = () => {
    const handleUserInteraction = () => {
      stopAutoScroll();
      setTimeout(() => {
        startAutoScroll();
      }, 1000); // Restart auto-scroll 1 second after user interaction
    };

    prevButton.addEventListener("click", () => {
      slidePrev();
      handleUserInteraction();
    });
    nextButton.addEventListener("click", () => {
      slideNext();
      handleUserInteraction();
    });

    prevButton.style.cursor = "pointer";
    nextButton.style.cursor = "pointer";

    carouselTrack.addEventListener("scroll", updateButtonStates, {
      passive: true,
    });

    // Pause auto-scroll on hover
    carouselTrack.addEventListener("mouseenter", stopAutoScroll);
    carouselTrack.addEventListener("mouseleave", startAutoScroll);

    // Start auto-scroll
    startAutoScroll();
  };

  const slidePrev = () => {
    const step = cardWidth + gap;
    carouselTrack.scrollBy({ left: -step, behavior: "smooth" });
  };

  const slideNext = () => {
    const step = cardWidth + gap;
    carouselTrack.scrollBy({ left: step, behavior: "smooth" });
  };

  const snapToNearestCard = () => {
    const step = cardWidth + gap;
    const index = Math.round(carouselTrack.scrollLeft / step);
    const target = index * step;
    carouselTrack.scrollTo({ left: target, behavior: "auto" });
  };

  const updateButtonStates = () => {
    const maxScroll = Math.max(
      0,
      carouselTrack.scrollWidth - carouselTrack.clientWidth
    );
    const atStart = carouselTrack.scrollLeft <= 0;
    const atEnd = carouselTrack.scrollLeft >= maxScroll - 1;

    if (atStart) {
      prevButton.style.opacity = "1";
      prevButton.style.pointerEvents = "none";
    } else {
      prevButton.style.opacity = "1";
      prevButton.style.pointerEvents = "auto";
    }

    if (atEnd) {
      nextButton.style.opacity = "1";
      nextButton.style.pointerEvents = "none";
    } else {
      nextButton.style.opacity = "1";
      nextButton.style.pointerEvents = "auto";
    }
  };

  return {
    init,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  carouselArrows.init();
  window.addEventListener("resize", () => {
    carouselArrows.init();
  });
});
