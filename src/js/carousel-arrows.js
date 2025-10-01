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
    // Check for desktop carousel first, then mobile
    carouselTrack = document.querySelector(".carousel-cards-container");
    let isMobile = false;

    if (!carouselTrack || window.getComputedStyle(carouselTrack).display === 'none') {
      carouselTrack = document.querySelector(".carousel-cards-container-mobile");
      isMobile = true;
    }

    if (!carouselTrack) return;

    const cardSelector = isMobile ? ".carousel-card-mobile" : ".carousel-card";
    carouselCards = Array.from(carouselTrack.querySelectorAll(cardSelector));
    if (carouselCards.length === 0) return;

    const arrowsSelector = isMobile ? ".carousel-arrows-mobile svg" : ".carousel-arrows svg";
    const arrows = document.querySelectorAll(arrowsSelector);
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

  const attachEventListeners = () => {
    prevButton.addEventListener("click", slidePrev);
    nextButton.addEventListener("click", slideNext);

    prevButton.style.cursor = "pointer";
    nextButton.style.cursor = "pointer";

    window.addEventListener("resize", () => {
      setupCarousel();
      snapToNearestCard();
      updateButtonStates();
    });

    carouselTrack.addEventListener(
      "scroll",
      () => {
        updateButtonStates();
      },
      { passive: true }
    );
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
      prevButton.style.opacity = "0.3";
      prevButton.style.pointerEvents = "none";
    } else {
      prevButton.style.opacity = "1";
      prevButton.style.pointerEvents = "auto";
    }

    if (atEnd) {
      nextButton.style.opacity = "0.3";
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

document.addEventListener("DOMContentLoaded", carouselArrows.init);
