# Pit Stop page updates — 9 September 2026

## Pages

- `/` (`src/home.html`): homepage. `src/index.html` mirrors the homepage content changes.
- `/about.html`: new About page.
- `/auto-service-experts.html`: new Auto Service Experts page.

The existing Vercel configuration publishes `src` and rewrites `/` to `home.html`.

## Homepage

- Updated Welcome heading to **Your Complete Auto Service** and replaced the supporting copy.
- Replaced the Vimeo embed with `assets/vid/Complete_Auto_Service_960x730px.mp4`, using native video with muted autoplay, looping, inline playback and metadata preload.
- Added `.section-video-media` to fill the left column. The video uses `object-fit: cover`; cropping is intentional when its container differs from the source ratio.
- Desktop video section stays at 730px. On mobile the section grows with its text; media height is 400px, or 300px at 480px and below.
- Added Our Story above the existing New Zealand’s Trusted section, reusing the reviews section structure with the image on the left and left-aligned text in the right column.
- Our Story desktop height is 767px; content maximum width is 577px, with responsive inset and Figma spacing. It stacks on mobile.
- Kept the original location-search appearance. A scoped 769–850px rule reduces horizontal padding and lets the input shrink, preventing side clipping while retaining the horizontal row. Other breakpoints retain their original styles.

## About

- Reused the header/footer from the existing vehicle-brakes/new-pages layout.
- Reused `.fw-content`, `.fw-text`, `.fw-bold-content`, `.fw-bold-text`, `.fw-image`, `.s-cards`, and `.s-card` sections.
- Added About, What we do, Why Trust Pit Stop (three cards), and Keeping Kiwis moving since 1978 content.
- Uses Bootstrap columns, alignment and spacing utilities with existing image/text sections.
- Reusable variants in `src/assets/css/main.css`:
  - `data-background="light"` / `"dark"`: white or dark split-section background with inherited text colours.
  - `data-content-width="compact"`: 620px maximum text width and responsive desktop inset.
  - `data-presentation="centered"`: centered service-card presentation, 130px icons and desktop spacing.
- Extended `.fw-text` heading styling to h2 and added `.fw-bold-text h2` styling.
- Updated existing `.fw-bold-text h3` maximum width from 516px to 520px.
- Shared `.text-content` horizontal padding changed from 214px to 190px in the assets stylesheet.

## Auto Service Experts

- Reused the existing header/footer and the vehicle-brakes Service You Can Trust split-section structure.
- Added a responsive Bootstrap ratio player with a maximum 1720px width and 968px height at that width.
- Uses the same local MP4 with native playback controls, inline playback and metadata preload. `object-fit: cover` fills the player; the 960×730 source is cropped to the wider player shape.
- Reused the supplied `auto-service-experts.png` image.
- Service section is capped at 760px on large desktops, uses 600px at widths below 1400px, and stacks with automatic height below 992px.
- Text is anchored toward the image within its left container, with a maximum 562px width.
- Page-scoped `.auto-experts-video*` and `.auto-experts-trust*` styles are in `src/assets/css/custom.css`.

## Added assets

- `src/assets/img/about-storefront.png`
- `src/assets/img/about-team.png`
- `src/assets/img/auto-service-experts.png`
- `src/assets/img/handshake.svg`
- `src/assets/img/our-story.jpg`
- `src/assets/vid/Complete_Auto_Service_960x730px.mp4`

## Integration

These are static HTML pages, ready to use as markup references for Blade integration; Blade components have not been implemented. Move shared header/footer into the master layout once, and extract reusable split sections/cards with content, orientation and data-attribute options. Load shared styles once. The homepage uses `src/main.css`; About/Experts use `src/assets/css/main.css` plus `custom.css`. Preserve this distinction during integration or reconcile the two stylesheets deliberately.

No new JavaScript or inline CSS was added for these page changes. Existing scripts, forms and placeholder navigation are inherited from the source pages.

## Verification and known issues

- Chrome responsive audits covered 330–3300px, including breakpoint boundaries and a 30px-step section-containment sweep before the local-video replacement.
- Subsequently verified the targeted location-search fix at 769, 780, 800, 820, 850px and neighbouring widths, with no side overflow detected.
- Confirmed the local MP4 loads in both page types and reports 960×730 native dimensions; the Experts desktop player remains 1720×968.
- Existing homepage FREE WOF CHECK banner spacing/icon placement issue was reported and left untouched.
- Localhost reCAPTCHA restriction is inherited and is not a responsive-layout issue.
- This is a Chrome layout audit, not a cross-browser or end-to-end form submission certification.

## Exact CSS changes

The following diff records all pending CSS changes included with this update, including formatting changes already present in the working tree.

```diff
diff --git a/src/assets/css/custom.css b/src/assets/css/custom.css
index cc828c9..de1221b 100644
--- a/src/assets/css/custom.css
+++ b/src/assets/css/custom.css
@@ -71,3 +71,144 @@ a:hover {
     max-width: 280px;
   }
 }
+
+/* Auto Service Experts page */
+.auto-experts-video {
+  padding: 85px clamp(24px, 5.208333vw, 100px) 110px;
+}
+
+.auto-experts-video__inner {
+  max-width: 1720px;
+}
+
+.auto-experts-video__inner h1 {
+  margin: 0 0 50px;
+  color: var(--color-black);
+  font-family: var(--font-family-base);
+  font-size: 40px;
+  font-weight: 700;
+  line-height: 50px;
+}
+
+.auto-experts-video__player {
+  --bs-aspect-ratio: 56.2790697674%; /* 968 / 1720 */
+  background: var(--color-black);
+}
+
+.auto-experts-video__player video {
+  display: block;
+  object-fit: cover;
+  border: 0;
+}
+
+.auto-experts-trust {
+  background: var(--color-black);
+  color: var(--color-white);
+}
+
+.auto-experts-trust > .row {
+  height: 760px;
+  max-height: 760px;
+}
+
+.auto-experts-trust > .row > .col-lg-6 {
+  height: 100%;
+  min-height: 0;
+}
+
+.auto-experts-trust .fw-bold-content {
+  padding: 215px clamp(32px, 8.28125vw, 159px) 80px clamp(32px, 12.447917vw, 239px);
+}
+
+.auto-experts-trust__text {
+  width: 100%;
+  max-width: 562px;
+  margin-left: auto;
+  gap: 37px;
+}
+
+.auto-experts-trust__text h2 {
+  margin: 0;
+  color: inherit;
+  font-family: var(--font-family-base);
+  font-size: 40px;
+  font-weight: 700;
+  line-height: 50px;
+}
+
+.auto-experts-trust .auto-experts-trust__text p {
+  margin: 0;
+  color: inherit;
+  font-family: var(--font-family-base);
+  font-size: 20px;
+  font-weight: 400;
+  line-height: 29px;
+}
+
+.auto-experts-trust__text .ps-btn {
+  padding: 8px 16px;
+  font-size: 16px;
+  line-height: 24px;
+  border-radius: 3px;
+}
+
+.auto-experts-trust .fw-image {
+  height: 100%;
+  object-fit: cover;
+}
+
+@media (max-width: 1399px) {
+  .auto-experts-trust > .row {
+    height: 600px;
+  }
+
+  .auto-experts-trust .fw-bold-content {
+    padding: 80px 40px;
+  }
+}
+
+@media (max-width: 991px) {
+  .auto-experts-trust > .row {
+    height: auto;
+    max-height: none;
+  }
+
+  .auto-experts-trust > .row > .col-lg-6 {
+    height: auto;
+  }
+
+  .auto-experts-video {
+    padding-top: 48px;
+    padding-bottom: 60px;
+  }
+
+  .auto-experts-video__inner h1 {
+    margin-bottom: 30px;
+    font-size: 32px;
+    line-height: 42px;
+  }
+
+  .auto-experts-trust .fw-bold-content {
+    min-height: 0;
+    padding: 60px 30px;
+  }
+
+  .auto-experts-trust__text {
+    margin-left: 0;
+    gap: 24px;
+  }
+
+  .auto-experts-trust__text h2 {
+    font-size: 32px;
+    line-height: 42px;
+  }
+
+  .auto-experts-trust .auto-experts-trust__text p {
+    font-size: 18px;
+    line-height: 28px;
+  }
+
+  .auto-experts-trust .fw-image {
+    height: auto;
+  }
+}
diff --git a/src/assets/css/main.css b/src/assets/css/main.css
index b7bed31..13a230f 100644
--- a/src/assets/css/main.css
+++ b/src/assets/css/main.css
@@ -2018,7 +2018,7 @@ a.mobile-cta__button:hover {
   flex-direction: column;
   width: 100%;
   height: 100%;
-  padding: 0 214px;
+  padding: 0 190px;
   align-items: start;
   justify-content: center;
   gap: 50px;
@@ -8344,7 +8344,8 @@ body.search-page .search-input::placeholder {
   margin: 0;
 }

-.fw-text h1 {
+.fw-text h1,
+.fw-text h2 {
   color: #000;
   font-family: var(--font-family-base);
   font-size: 40px;
@@ -8359,7 +8360,8 @@ body.search-page .search-input::placeholder {
   .fw-text {
     gap: 0px;
   }
-  .fw-text h1 {
+  .fw-text h1,
+.fw-text h2 {
     color: #000;
     font-size: 26px;
     font-style: normal;
@@ -8534,7 +8536,7 @@ section.container-fluid:has(.top-bar) {
   font-size: clamp(1.5rem, 1.17rem + 0.69vw, 2rem);
   font-weight: 700;
   line-height: clamp(2.4375rem, 2.06rem + 0.78vw, 3rem);
-  max-width: 516px;
+  max-width: 520px;
   margin: 0;
 }

@@ -9954,3 +9956,72 @@ section.container-fluid:has(.top-bar) {
     padding: 60px 30px;
   }
 }
+
+/* Explicit, reusable background variants for the existing split sections. */
+.fw-content[data-background="light"],
+.fw-bold-content[data-background="light"] {
+  background: var(--color-white);
+  color: var(--color-black);
+}
+
+.fw-content[data-background="dark"],
+.fw-bold-content[data-background="dark"] {
+  background: #272626;
+  color: var(--color-white);
+}
+
+[data-background] .fw-text h1,
+[data-background] .fw-text h2,
+[data-background] .fw-text p,
+[data-background] .fw-bold-text h2,
+[data-background] .fw-bold-text h3,
+[data-background] .fw-bold-text p {
+  color: inherit;
+}
+
+.fw-bold-text h2 {
+  margin: 0;
+  font-family: var(--font-family-base);
+  font-size: 40px;
+  font-weight: 700;
+  line-height: 50px;
+}
+
+@media (max-width: 768px) {
+  .fw-bold-text h2 {
+    font-size: 26px;
+    line-height: 36px;
+  }
+}
+
+/* Centered presentation of the existing service cards. */
+.s-cards[data-presentation="centered"] .img-container {
+  height: 130px;
+  max-height: 130px;
+}
+
+.s-cards[data-presentation="centered"] .img-container img {
+  max-height: 130px;
+}
+
+@media (min-width: 1200px) {
+  .s-cards[data-presentation="centered"] {
+    padding: 94px 100px 130px;
+    gap: 68px;
+  }
+
+  .s-cards[data-presentation="centered"] .s-card {
+    min-height: 472px;
+    padding: 60px 57px;
+  }
+}
+
+.fw-bold-text[data-content-width="compact"] {
+  max-width: 620px;
+}
+
+@media (min-width: 1200px) {
+  .fw-bold-content:has([data-content-width="compact"]) {
+    padding: 80px clamp(80px, 10vw, 190px);
+  }
+}
diff --git a/src/main.css b/src/main.css
index 3a407f5..c355cb9 100644
--- a/src/main.css
+++ b/src/main.css
@@ -93,11 +93,13 @@ body {

 :root {
   /* Font Families */
-  --font-family-open-sans: "Open Sans", -apple-system, BlinkMacSystemFont,
-    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans",
-    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
-  --font-family-inter: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
-    Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
+  --font-family-open-sans:
+    "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
+    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
+    "Apple Color Emoji", "Segoe UI Emoji";
+  --font-family-inter:
+    "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
+    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
     "Apple Color Emoji", "Segoe UI Emoji";

   --font-family-base: var(--font-family-open-sans);
@@ -457,7 +459,9 @@ body {
   border-radius: var(--radius-lg);
   box-shadow: var(--shadow-card);
   padding: var(--spacing-xl);
-  transition: box-shadow 0.3s ease, transform 0.3s ease;
+  transition:
+    box-shadow 0.3s ease,
+    transform 0.3s ease;
 }

 .card:hover {
@@ -856,7 +860,9 @@ body {
   z-index: 9998;
   opacity: 0;
   visibility: hidden;
-  transition: opacity 0.2s ease, visibility 0.2s ease;
+  transition:
+    opacity 0.2s ease,
+    visibility 0.2s ease;
   pointer-events: none;
 }

@@ -1690,6 +1696,28 @@ a.mobile-cta__button:hover {
   justify-content: center;
 }

+/* Preserve the original search row; allow only the input to shrink on narrow tablets. */
+@media (min-width: 769px) and (max-width: 850px) {
+  .search-wrapper > .search-content {
+    padding-left: 30px;
+    padding-right: 30px;
+  }
+
+  .search-content .search-controls {
+    flex: 0 1 420px;
+    min-width: 0;
+  }
+
+  .search-content .search-input form,
+  .search-content .input-bar {
+    width: 100%;
+  }
+
+  .search-content .regions-dropdown-wrapper {
+    flex: 0 0 130px;
+  }
+}
+
 /* Search Heading Wrapper */
 .search-heading {
   flex: 0 0 auto;
@@ -1994,7 +2022,9 @@ a.mobile-cta__button:hover {
 .section-video-wrapper {
   display: flex;
   width: 100vw;
-  height: auto;
+  height: 100%;
+  max-height: 730px;
+  min-height: 730px;
   background: var(--color-text-gray);
   margin: 0 auto;
   overflow: hidden;
@@ -2003,9 +2033,7 @@ a.mobile-cta__button:hover {
 .section-video-content {
   display: grid;
   grid-template-columns: 1fr 1fr;
-  /* display: contents; */
   width: 100%;
-  max-width: 1920px;
   margin: 0 auto;
   align-items: center;
   justify-content: center;
@@ -2016,10 +2044,11 @@ a.mobile-cta__button:hover {
   flex-direction: column;
   width: 100%;
   height: 100%;
-  padding: 0 214px;
+  padding: 0 190px;
   align-items: start;
   justify-content: center;
   gap: 50px;
+  max-width: 1000px;
 }

 .text-content-heading-container {
@@ -2067,12 +2096,23 @@ a.mobile-cta__button:hover {
   line-height: 30px; /* 150% */
 }

-.video-wrapper {
-  width: 100%;
+.section-video-media {
+  position: relative;
+  align-self: stretch;
+  min-width: 0;
   height: 100%;
-  min-height: 600px;
-  scale: 1;
   overflow: hidden;
+}
+
+/* Fill the media area with the local video without letterboxing. */
+.section-video-media .video-wrapper {
+  position: absolute;
+  top: 50%;
+  left: 50%;
+  width: 100%;
+  height: 100%;
+  object-fit: cover;
+  transform: translate(-50%, -50%);
   border: none;
   display: block;
 }
@@ -2151,7 +2191,10 @@ a.mobile-cta__button:hover {
   align-items: center;
   justify-content: space-between;
   gap: 53px;
-  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
+  transition:
+    opacity 0.3s ease,
+    transform 0.3s ease,
+    box-shadow 0.3s ease;
 }

 .services-icon-container {
@@ -2302,7 +2345,9 @@ a.mobile-cta__button:hover {

 .carousel-arrows svg {
   cursor: pointer;
-  transition: 0.3s ease, transform 0.2s ease;
+  transition:
+    0.3s ease,
+    transform 0.2s ease;
 }

 .carousel-arrows svg:first-child circle {
@@ -3905,7 +3950,9 @@ body.search-page .search-input::placeholder {
   z-index: 999;
   opacity: 0;
   visibility: hidden;
-  transition: opacity 0.3s ease, visibility 0.3s ease;
+  transition:
+    opacity 0.3s ease,
+    visibility 0.3s ease;
   pointer-events: none;
 }

@@ -6533,6 +6580,12 @@ body.search-page .search-input::placeholder {
     font-size: 12px;
     padding: 0 14px;
   }
+  .section-video-wrapper {
+    height: auto;
+    min-height: 0;
+    max-height: none;
+  }
+
   .section-video-content {
     grid-template-columns: 1fr;
     width: 100%;
@@ -6564,9 +6617,9 @@ body.search-page .search-input::placeholder {
     line-height: 22px;
   }

-  .video-wrapper {
+  .section-video-media {
     order: -1;
-    min-height: 400px;
+    height: 400px;
   }
   .services-container {
     padding: 60px var(--padding-x-mobile);
@@ -7856,9 +7909,9 @@ body.search-page .search-input::placeholder {
     line-height: 20px;
   }

-  .video-wrapper {
+  .section-video-media {
     order: -1;
-    min-height: 300px;
+    height: 300px;
   }
   .services-container {
     padding: 40px 30px;
@@ -8309,3 +8362,112 @@ body.search-page .search-input::placeholder {
     padding: 10px 0;
   }
 }
+
+/* Our Story: Figma's 1920px layout, using the existing reviews section. */
+.our-story {
+  height: 767px;
+  max-height: none;
+}
+
+.our-story .reviews-container {
+  height: 100%;
+  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
+}
+
+.our-story .reviews-content {
+  --story-inset: clamp(32px, 10.15625vw, 195px);
+  align-self: start;
+  width: calc(100% - var(--story-inset) - 32px);
+  max-width: 577px;
+  margin: 213px 0 0 var(--story-inset);
+  padding: 0;
+  gap: 29px;
+  text-align: left;
+}
+
+.our-story .reviews-text {
+  width: 100%;
+  gap: 17px;
+}
+
+.our-story .text-content-heading-container {
+  width: 100%;
+  gap: 25px;
+}
+
+.our-story .text-content-heading-container img {
+  width: 472px;
+  max-width: 100%;
+  height: 16px;
+  max-height: none;
+  object-fit: contain;
+  object-position: left;
+}
+
+.our-story .reviews-text h2 {
+  font-size: 40px;
+  font-weight: 600;
+  line-height: 62px;
+}
+
+.our-story .reviews-text p {
+  min-height: 108px;
+  font-size: 20px;
+  font-weight: 400;
+  line-height: 29px;
+}
+
+.our-story .hero__button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  margin: 0;
+  min-height: 50px;
+  padding: 12px 24px;
+  border: 1px solid var(--color-white);
+  border-radius: 5px;
+  font-size: 16px;
+  font-weight: 600;
+  line-height: 24px;
+}
+
+@media (max-width: 768px) {
+  .our-story {
+    height: auto;
+  }
+
+  .our-story .reviews-container {
+    flex-direction: column;
+  }
+
+  .our-story .image-container-reviews {
+    width: 100%;
+    height: auto;
+  }
+
+  .our-story .reviews-img {
+    height: auto;
+  }
+
+  .our-story .reviews-content {
+    width: 100%;
+    max-width: none;
+    margin: 0;
+    padding: 60px 30px;
+  }
+
+  .our-story .reviews-text {
+    max-width: 577px;
+  }
+
+  .our-story .reviews-text h2 {
+    font-size: 32px;
+    line-height: 42px;
+  }
+
+  .our-story .reviews-text p {
+    min-height: 0;
+    font-size: 18px;
+    line-height: 28px;
+  }
+}
```
