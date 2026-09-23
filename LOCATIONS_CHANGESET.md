# Locations page changeset

## New page

- Added `src/locations.html`.
- Reused the project header from `find-a-store.html` and the project footer structure from the existing site pages.
- Added the downloaded branch-selection body sections: hero branch selector, regional headings, responsive branch cards, addresses, and booking links.
- Uses Bootstrap 5.3.3’s grid from the CDN together with the existing project `main.css` components.

## New page behavior

- Added `src/js/branch-selection.js` for region dropdown interaction, keyboard support, and scrolling to the selected branch.
- Reused existing `.find-dropdown` and `.ps-btn` components and existing booking URL patterns.

## CSS changes

- Added `src/assets/css/branch-selection.css` for page-scoped hero, directory, card, and responsive layout styles.
- The hero uses `src/assets/img/locations-hero-bg-image.png` with the Figma image positioning and sizing values.
- Branch cards use Bootstrap columns with these breakpoints:
  - Four columns at 1480px and above.
  - Three columns from 992px through 1479px.
  - Two columns from 576px through 991px.
  - One column below 576px.
- Grid columns stretch and branch cards use full height so cards in each row align consistently.

## Validation

- Served and checked at `http://localhost:8000/locations.html`.
- `git diff --check` passes.
- No existing shared CSS or unrelated files were modified.
