/**
 * Top Banner Close Functionality
 * Handles closing the top banner and persisting state in localStorage
 * Note: Initial visibility check is done in banner-init.js loaded in <head>
 */

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("top-banner");
  const closeButton = document.getElementById("banner-close");
  const STORAGE_KEY = "topBannerClosed";

  if (!banner || !closeButton) return;

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.add("ps-banner-closed");
    localStorage.setItem(STORAGE_KEY, "true");
  });
});
