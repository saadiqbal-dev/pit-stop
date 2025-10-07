/**
 * Top Banner Close Functionality
 * Handles closing the top banner and persisting state in localStorage
 */

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('top-banner');
    const closeButton = document.getElementById('banner-close');
    const STORAGE_KEY = 'topBannerClosed';

    if (!banner || !closeButton) return;

    // Check if banner was previously closed
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
        banner.style.display = 'none';
    }

    closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        banner.style.display = 'none';
        localStorage.setItem(STORAGE_KEY, 'true');
    });
});
