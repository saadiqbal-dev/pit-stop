/**
 * Top Banner Close Functionality
 * Handles closing the top banner
 */

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("top-banner");
  const closeButton = document.getElementById("banner-close");

  if (!banner || !closeButton) return;

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.add("ps-banner-closed");
  });
});
