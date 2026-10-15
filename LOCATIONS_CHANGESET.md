# Locations page changeset

## New page

- Added `src/locations.html`.
- Reused the project header from `find-a-store.html` and the project footer structure from the existing site pages.
- The body carries both `find-a-store-page` and `branch-selection-page`, so the shared find-a-store styles apply and the page CSS layers on top.
- Added the downloaded branch-selection body sections: hero branch selector, regional headings (Northland and Auckland), 15 responsive branch cards with addresses, and Book Now links to `booking.html?location=…&region=…`.
- Uses Bootstrap 5.3.3's grid-only stylesheet (`bootstrap-grid.min.css`) from the CDN together with the existing project `main.css` components.
- The Franchising links in the header, mobile menu, and footer point to `franchise.html` (updated with the franchise page).

## New page behavior

- The hero selector reuses the shared `.find-dropdown` component and `src/js/find-dropdown.js`, the same as `find-a-store.html`.
- The dropdown lists every region with its branches (47 branches). Expanding a region shows its branches. Choosing a branch closes the menu and goes straight to `booking.html?location=<branch>&region=<region>`.
- Branch cards reuse the existing `.ps-btn` component and existing booking URL patterns.

## Shared JavaScript changes

`src/js/find-dropdown.js` is also used by `find-a-store.html`, so these changes affect both pages:

- The title lookup (`.find-container h2`) is optional, because the locations page has no such heading.
- Choosing a branch now navigates to the booking page immediately. It no longer hides the dropdown and waits 2 seconds. The loading state is shown only if the page has a `.find-loading` element.

## CSS changes

All in `src/assets/css/branch-selection.css`, which is page-scoped. No shared CSS was modified.

- **Page background:** `body.branch-selection-page` sets a white background. This overrides the red background from the shared `body.find-a-store-page` rule, at the same specificity.
- **Hero image:** uses `src/assets/img/locations-hero-bg-image.webp` (mechanic tools). The image sits on an empty `.branch-hero__media` element, drawn with a `::before` layer at `cover`, centred, and scaled to 120%. `.branch-hero__media` clips the zoomed image, so the hero itself can let the dropdown overflow. Below the image is a `#d3d3d3` fallback colour.
- **Hero height:** 630px by default, 430px at 991px and below, and 340px at 575px and below.
- **Dropdown:** the selector fills the hero content width. The open options list sits over the selector (`top: 0`, `z-index: 3`) rather than below it. It keeps the shared dropdown background colour.
- **Branch cards:** Bootstrap columns (`col-12 col-sm-6 col-lg-4`, plus a page rule for four columns) with these breakpoints:
  - Four columns at 1480px and above.
  - Three columns from 992px through 1479px.
  - Two columns from 576px through 991px.
  - One column below 576px.
- Grid columns stretch and branch cards use full height, so cards in each row align consistently.
- Below 576px, cards use 28px padding and a 15px gap between the title, address, and button.
- **Footer:** page-scoped spacing overrides for the shared footer (`.branch-selection-page .ps-footer-*`). The desktop footer phone is hidden.

## Unused files

The page no longer references these files:

- `src/js/branch-selection.js`: the original dropdown script, replaced by the shared `find-dropdown.js`.
- `src/assets/img/locations-hero-bg-image.png`: the original hero image, replaced by the `.webp`.

## Validation

- Served and checked at `http://localhost:8000/locations.html`.
- `git diff --check` passes.
- Shared files modified: `src/js/find-dropdown.js` only (see above). No shared CSS was modified.
