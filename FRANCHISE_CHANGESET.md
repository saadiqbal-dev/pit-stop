# Franchise opportunities page changeset

## New page

- Added `src/franchise.html`, served at `/franchise.html`.
- Copied the header, mobile header and menu, search overlay, footer, and shared scripts from `about.html`. Those regions are unchanged apart from existing Franchising links.
- Added `src/assets/css/franchise.css`, linked after `main.css` and `custom.css` on this page only. No existing CSS rules were edited.
- Added `src/js/franchise-form.js` and `src/js/franchise-faq-accordion.js`.
- Added franchise images under `src/assets/img/franchise/`.

## Page behavior

- In-page links scroll to Featured Territories, North Island Territories, South Island Territories, Convert Your Workshop, testimonials, the enquiry split, and FAQs.
- Enquire and Enquire Now go to `#franchise-enquiry-form`. See Available Territories goes to `#featured-territories`.
- Desktop header is not sticky. Mobile header is sticky at 80px, and anchors use `scroll-margin-top: 80px` from 768px down so headings stay below it.
- The enquiry form uses native required and email checks, then `preventDefault` and `alert('Form submitted successfully!')`. It does not load `booking-form.js`, which returns before its submit handler when the booking service dropdown is absent.
- The FAQ keeps one item open at a time, slides over 300ms, and rotates the plus icon −45° into an x. The first item starts open.
- Testimonials are responsive 16:9 YouTube iframes: `47vtlUAHOPE`, `--IZsje0bxk`, `y5NT3TlUQyc`, `103GMJAcpso`.

## CSS

- New classes use a `franchise-` prefix. Splits reuse Bootstrap `col-xl-6` with `.fw-content`, `.fw-text`, and `.fw-image`. Buttons reuse `.ps-btn.ps-btn-primary`. The form reuses `.ps-form-*`.
- Territory tiles use CSS grid so the 1920 tile sizes land on the spec boxes (featured 490×396, islands 556×450).
- Below 1200px, image-left splits stay in DOM order. The shared `:has()` rule that reverses the second back-to-back image split is overridden only on this page.
- At 768px and below, the experts, partnering, convert, and contact photos use the source images with `object-position: center top`. Wider layouts use the pre-cropped images.

## Links

Existing anchors whose text is Franchising now point at this page:

- `src/*.html` → `franchise.html` (home and the old service package page previously used `https://www.pitstop.co.nz/franchising`)
- `src/new-pages/*.html` → `../franchise.html`

## Validation

Served `src/` and compared section screenshots with the Figma slices at client widths 1920 and 430. Mean channel difference is against the matching Figma section. Text-only sections sit a few points above zero because Inter rasterizes differently from the Figma export.

| Section | 1920 | 430 | Result |
| --- | --- | --- | --- |
| Intro | 349px, mean 2.2 | 268px, mean 4.0 | Pass |
| Experts | 760px, mean 2.3 | 958px, mean 3.8 | Pass. Enquire Now is 146×40 at desktop and full width × 50 on mobile. |
| Partnering | 761px, mean 4.7 | 894px, mean 3.9 | Pass. See Available Territories is 236×40. Image stays before the text when the row stacks. |
| Featured territories | 652px, mean 0.9 | 1089px, mean 2.3 | Pass. Tiles 490×396 at x=192 desktop, 370×300 on mobile. Overlay 110px / 82px at 60% black. |
| North Island | 1075px, mean 1.4 | 2049px, mean 2.1 | Pass. Island tiles 556×450 at x=101 on the 1920 frame. |
| South Island | 1198px, mean 1.2 | 1999px, mean 2.1 | Pass |
| Convert | 761px, mean 2.5 | 1119px, mean 4.4 | Pass. Mobile photo matches the source image (photo mean 0.7). |
| Testimonials | 1276px, mean 19 | 1021px, mean 43 | Layout matches. Pixel diff is the live YouTube player against the static Figma mock. |
| Contact | 761px, mean 2.7 | 782px, mean 3.9 | Pass |
| Enquiry form | 923px, mean 0.4 | 650px vs spec 646, mean 3.6 | Pass. Card, shadow, 46px fields, and red asterisks match. Mobile section is 4px taller than the frame. |
| FAQs | 809px, mean 4.0 | 804px, mean 14.4 | Pass. Open icon is the plus rotated −45°, which is the Apparelmaster behavior. Mobile mean is mostly text antialiasing on the gray ground. |

Interactions:

- FAQ: opening question 2 closes question 1 (`aria-expanded` and `display: flex`). Clicking the open question closes it.
- Form: empty name is `valueMissing`, a bad email is `typeMismatch`, and a valid submit alerts `Form submitted successfully!`.
- Desktop anchor to Featured Territories leaves the heading 72px from the top of the viewport. The desktop header scrolls away.
- Mobile anchor to FAQs leaves the heading at 130px, below the 80px sticky header.
- Horizontal overflow is 0 at 1920, 1440, 1280, 1024, 768, 430, and 390.
- The partnering row is a row at 1440 and 1280, and a column from 1024 down, the same stack point as `about.html`.

## Known differences from the Figma frame

- The repo header includes the Afterpay banner, so the desktop header is 270px rather than the frame's 210px. Header and footer markup are the existing site chrome.
- Testimonials are real iframes, so they do not pixel-match the static YouTube mock.
- The FAQ open icon is a rotated plus, not the close SVG. The close icon is in the DOM and hidden.
- The mobile enquiry section is 4px taller than the 646px frame (650px).
