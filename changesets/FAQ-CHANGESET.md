# FAQ redesign change-set

CSS only. No HTML and no JavaScript were changed. `js/faq-accordion.js` still toggles `.active` on `.faq-item`. The open icon is still the existing `faq-plus.svg`, rotated `-45deg`. `.faq-container-base` and `.faq-heading-base` were not edited.

Branch: `cursor/faq-redesign-2e87` (off `main` at `3e84bf9`). PR #10.

Franchise FAQ is the source of truth. Open Sans is kept (`var(--font-family-base)`). Figma’s Inter is ignored. Questions and answers are weight 400. Title stays weight 700.

## Affected pages (13)

All of these render the shared FAQ from `main.css`:

| Page | Section | Extra FAQ rule |
| --- | --- | --- |
| `franchise.html` | `.faq` | `franchise.css` last-item border |
| `blog-article.html` | `.faq` | `blog.css` container `835px` + last-item border |
| `brakes.html` | `.faq` | `service-template.css` last-item border |
| `towbars.html` | `.faq` | `service-template.css` last-item border |
| `free-wof.html` | `.free-wof-faq` | trailing `.faq-divider` in the markup (now 2px) |
| `new-pages/battery.html` | `.faq` | trailing `.faq-divider` |
| `new-pages/brake-special.html` | `.faq` | trailing `.faq-divider`; page loads `app.css` (no FAQ rules) |
| `new-pages/exhaust-systems.html` | `.faq` | trailing `.faq-divider`; answer uses an `ol` |
| `new-pages/fleet.html` | `.faq` | trailing `.faq-divider` |
| `new-pages/shock-absorbers.html` | `.faq` | trailing `.faq-divider` |
| `new-pages/towbars.html` | `.faq` | trailing `.faq-divider` |
| `new-pages/tyres.html` | `.faq` | trailing `.faq-divider` |
| `new-pages/vehicle-brakes.html` | `.faq` | trailing `.faq-divider` |

`free-wof.html` and the `new-pages/*` files link `wof.css`, which is not in the repo, so they take the shared rules from `main.css`. `new-pages/new.css` still has a copy of the old FAQ rules and is not loaded by these pages. It was left unchanged.

`free-wof` and the eight `new-pages` files already place a `.faq-divider` after the last item, so `.faq-item:last-child` does not match there. That trailing divider is what draws the line under the last question, and it is 2px from `.faq-divider`.

## Selectors

### `src/assets/css/main.css` — base (was ~L9510)

| Selector | Old | New |
| --- | --- | --- |
| `.faq` | padding `108px 30px 148px 30px`; background `#eeeeee99` | grouped with `.free-wof-faq`; padding `108px 30px 148px`; background `var(--color-background-light)` (`#f4f5f7`) |
| `.faq-container` | `max-width: 868px` (commented `padding: 0 100px` removed) | `max-width: 827px`; `margin: 0 auto`; `width: 100%` |
| `.faq-container h2` | Inter (`var(--font-family-accent)`), `26px` / `36px` / `700`, margin `0 0 39px` | Open Sans (`var(--font-family-base)`), `20px` / `28px` / `700`, margin `0 0 30px` |
| `.faq-item:last-child` | (no shared rule) | `border-bottom: 2px solid #000` |
| `.faq-divider` | height `1px`; transition on background and height | height `2px`; background `#000`; transition removed |
| `.faq-item.active .faq-divider` | background `#eb2227`; height `4px` | rule removed (open items keep the 2px black divider) |
| `.faq-question` | padding `20px 0`; gap `20px` | padding `22px 0`; gap `20px` |
| `.faq-question span` | `font-family: "Open Sans"`; weight `500`; `20px` / `28px` | `var(--font-family-base)`; weight `400`; `20px` / `28px` |
| `.faq-icon` | width `20px` | `30px` × `30px` (same `faq-plus.svg`, same `-45deg` rotation when `.active`) |
| `.faq-answer` | padding `0 0 32px`; `max-width: 650px` | padding `0 0 22px`; `max-width: 732px` |
| `.faq-answer p`, `.faq-answer ol` | weight `500`; `20px` / `28px` | weight `400`; `20px` / `28px` |
| `.faq-answer a` | `#eb2227`, underline | unchanged |

### `main.css` — breakpoints

FAQ rules were removed from `@media (max-width: 1440px)`, `1280px`, and `1024px`, so 1200–1440 keeps the desktop padding (`108px 30px 148px`) and does not add container padding. Hero rules in those queries were left as they were.

| Query | Old FAQ values | New |
| --- | --- | --- |
| `max-width: 1440px` | `.faq` padding `70px 0`; `.faq-container` padding `0 90px`; title `26px/36px`, margin-bottom `70px` | removed |
| `max-width: 1280px` | `.faq` padding `65px 0`; container padding `0 80px`; title `26px/36px`, margin-bottom `65px` | removed |
| `max-width: 1024px` | `.faq` padding `60px 0`; container padding `0 60px`; title `26px/36px`, margin-bottom `60px`; question padding `28px 0`; answer padding `0 0 28px` | removed |
| `max-width: 768px` | `.faq` padding `50px 0`; container padding `0 40px`; title `26px/36px`, margin-bottom `50px`; question padding `24px 0`; question `22px/30px`; answer padding `0 0 24px`; answer `18px/26px` | replaced with the Franchise mobile frame, see below |
| `max-width: 480px` | `.faq` padding `40px 30px 87px`; container padding `0`; title `26px/36px`, margin-bottom `40px`; question padding `20px 0`, gap `15px`; question `18px/26px`; answer padding `0 0 20px`; answer `16px/24px`; icons `20px` | removed (the 768 block now covers 430) |

`@media (max-width: 768px)` is the Franchise mobile frame:

```css
.faq,
.free-wof-faq { padding: 50px 30px; }
.faq-container { padding: 0; }
.faq-container h2 { margin-bottom: 24px; font-size: 20px; font-weight: 700; line-height: 28px; }
.faq-question { padding: 20px 0; gap: 16px; }
.faq-question span { font-size: 18px; font-weight: 400; line-height: 26px; }
.faq-icon { width: 20px; height: 20px; }
.faq-answer { max-width: 100%; padding: 0 0 24px; }
.faq-answer p,
.faq-answer ol { font-size: 18px; font-weight: 400; line-height: 26px; }
```

Title stays `20/28/700` with a `24px` gap. Question and answer text become `18/26/400`. The icon drops from the desktop `30px` to `20px`. The answer is full width with `24px` of padding underneath. Dividers stay `2px` black. Desktop rules are unchanged.

### Page files

| Selector | File | Old | New |
| --- | --- | --- | --- |
| `body.franchise .faq-item:last-child` | `franchise.css` | `border-bottom: 1px solid #000` | `border-bottom: 2px solid #000` |
| `body.post .faq-container` | `blog.css` | (none) | `max-width: 835px` |
| `body.post .faq-item:last-child` | `blog.css` | `border-bottom: 1px solid #000` | `border-bottom: 2px solid #000` |
| `body.service-template .faq-item:last-child` | `service-template.css` | `border-bottom: 1px solid #000` | `border-bottom: 2px solid #000` |

`body.post .faq-container` is the real container. The FAQ sits beside `<article>`, not inside `.article-col`. At 1920 the article column and the FAQ container both measure `835px` with the same left edge (`542.5px`).

## Checklist

- [x] No markup changes
- [x] No JavaScript changes
- [x] `.faq-container-base` / `.faq-heading-base` unchanged
- [x] Open Sans, not Inter; questions and answers weight 400; title weight 700
- [x] Background `#f4f5f7`; container `827px`; title gap `30px`; answer `732px`
- [x] Row padding `22px`, gap `20px`; dividers `2px` black, including under the last item
- [x] Red `4px` open-state line removed; plus icon `30px` and still rotates `-45deg`
- [x] 1200 and 1440 keep desktop padding (measured `108px 30px 148px`, container `827px`)
- [x] `≤768` is the Franchise mobile frame and replaces the old `≤480` FAQ overrides: section `50px 30px`, title `20/28/700` gap `24px`, question padding `20px 0` gap `16px`, question and answer `18/26/400`, icon `20px`, answer full width with padding-bottom `24px`
- [x] Desktop rechecked against the Franchise frame and left as-is: `#f4f5f7`, container `827px`, title `20/28/700` gap `30px`, question and answer `20/28/400`, answer `732px`, row padding `22px` gap `20px`, `2px` black dividers, icon `30px`, no red open line
- [x] Article FAQ `max-width: 835px` lines up with the article column at 1920
- [x] All 13 pages open one item: black `2px` divider, rotated icon, no horizontal overflow
