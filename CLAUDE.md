# Project Guidelines for Pitstop

## CSS Guidelines
1. **No Inline CSS**: Each section must have its own dedicated CSS file
2. **File Naming Convention**: CSS files should be named according to their section (e.g., `header.css`, `hero.css`, `footer.css`)
3. **Responsive Breakpoints**:
   - 1920px (Desktop - Main/Default)
   - 1440px (Laptop Large)
   - 1280px (Laptop)
   - 1024px (Tablet Landscape)
   - 768px (Tablet Portrait/Mobile Large)

## JavaScript Guidelines
1. **Modular JS Files**: Each JavaScript function should be in its own file
2. **File Naming Convention**: JS files should be named according to their functionality and section (e.g., `header-navigation.js`, `hero-carousel.js`)
3. **Module Imports**: Use ES6 modules for importing/exporting functions between files

## Naming Conventions & Conflict Prevention
1. **CSS Classes**: Use BEM methodology or section-prefixed classes (e.g., `.header__nav-item`, `.hero-title`)
2. **JS Variables**: Use descriptive names with section prefixes to avoid global conflicts
3. **ID Attributes**: Use sparingly and ensure uniqueness with section prefixes
4. **Data Attributes**: Prefer `data-*` attributes for JS hooks over classes/IDs

## File Structure
```
/src
  /css
    - reset.css
    - variables.css
    - [section-name].css
  /js
    - [section-name]-[functionality].js
  /assets
    /images
    /fonts
```

## Additional Best Practices
1. **CSS Variables**: Define global variables in `variables.css` for colors, fonts, spacing
2. **DRY Principle**: Create variables for any values used more than once to maintain consistency and ease of maintenance
3. **Mobile-First Approach**: Write CSS for mobile first, then add media queries for larger screens
4. **Performance**: Lazy load images and defer non-critical JavaScript
5. **Accessibility**: Ensure proper ARIA labels, semantic HTML, and keyboard navigation
6. **Comments**: Add clear comments for complex logic or section boundaries
6. **Testing Commands**:
   - Lint: `npm run lint` (if available)
   - Type checking: `npm run typecheck` (if available)

## Development Workflow
1. Always check existing files before creating new ones
2. Follow existing patterns and conventions in the codebase
3. Test responsive behavior across all breakpoints
4. Validate no CSS/JS conflicts before completing tasks

## Front-End Styling Guidelines (CMS & System Architecture)

### 1. General Principles
- **Do not style raw HTML tags** (`p`, `a`, `h1`, etc.) inside isolated divs or components
- **Create general reusable classes** (e.g., `.paragraph`, `.link`, `.form-input`) that can be applied consistently across the system
- **CMS users will add their own content** — they should not need to know class names. Default styles for common tags (`p`, `a`, `h1–h6`, `ul`, `ol`, `form`) must already be defined globally
- Base styles are defined in `base.css` and should work without additional classes

### 2. Typography & Text Elements
- Create base typography rules for `p`, `h1–h6`, `a`, `ul`, `ol`, `blockquote` in `base.css`
- Define spacing, font-size, color, and line-height once in a central stylesheet
- **Avoid writing styles like `.some-div p { ... }`** — this makes the design rigid and breaks CMS flexibility
- Use modifier classes for specific variations (e.g., `.paragraph--highlight`, `.heading--large`)

### 3. Links & Buttons
- **Do not use `<button>` for links.** If the element navigates → use `<a>`. If it submits a form → use `<button>`
- Create utility classes for buttons/links (e.g., `.btn`, `.btn-primary`, `.btn-outline`) that can be applied to both `<button>` and `<a>`
- This way, converting a button to an anchor will not break the styling
- Button states (hover, focus, active, disabled) must be defined for all button variants

### 4. Forms
- Create global form styles in `base.css` so every form looks consistent (inputs, labels, validation messages)
- **Do not re-invent form styling per component**
- Define focus states, validation states, and disabled states globally
- Use modifier classes for specific form variations only when necessary

### 5. Bootstrap Usage (If Applicable)
- Use Bootstrap's grid system (`.container`, `.row`, `.col-*`) instead of writing new layouts from scratch
- Use spacing helpers like `.mb-3`, `.pt-4` instead of writing repetitive CSS
- Only extend Bootstrap if absolutely necessary

### 6. Reusable Components
- Create common reusable styles for:
  - Cards
  - Modals
  - Alerts/Notifications
  - Tables
- Keep them generic so we can reuse them across pages
- Define in `base.css` or a dedicated `components.css` file

### 7. Consistency
- All colors, fonts, and spacing should come from `variables.css` (CSS custom properties)
- **Never hardcode inline styles** (e.g., `<div style='color:red;'>`)
- Use CSS variables for all values that may change or be reused

### 8. CMS Compatibility
- Base typography (paragraphs, headings, lists, links) must look good **without extra classes**
- Define global styles so even if a user pastes content without classes, it looks clean and consistent
- Test by adding unstyled HTML content to verify base styles work

### 9. Extending General Styles for Specific Cases
- The generalised/base styles (for `p`, `a`, `form`, etc.) should always be the starting point
- If you need special/custom styling for a specific section, component, or page:
  1. **Do not modify the global base styles**
  2. Instead, create an additional class that extends the base (e.g., `.paragraph--highlight`, `.btn--hero`)
- Use BEM methodology for section-specific extensions (e.g., `.hero__button`, `.services__card-title`)

### 10. Performance & Clean Code
- **Avoid redundant classes** like `.blue-text` or `.p-20`. Use semantic names like `.highlight` or spacing utilities from variables
- Keep CSS modular and grouped logically
- Remove unused or duplicate styles
- **No nested CSS syntax** (e.g., `p { span { ... } }`) — this requires a preprocessor and will break when minified
- Always write standard CSS that minifies without errors

### 11. Additional Best Practices
- Follow **BEM naming convention** (`.block__element--modifier`) for new custom classes
- Test across browsers and responsive breakpoints
- Document all new classes/components in a shared style guide (so everyone knows what's available)
- Ensure styles are minification-safe (no preprocessor-only syntax unless using a build tool)

### 12. CSS Architecture
```
Load Order:
1. reset.css         - CSS reset
2. fonts.css         - Font imports
3. variables.css     - CSS custom properties
4. base.css          - Global base styles (typography, buttons, forms, components)
5. [section].css     - Section-specific styles (header, hero, footer, etc.)
```

### 13. Testing Checklist
- [ ] Test CSS minification (no syntax errors)
- [ ] Test responsive design at all breakpoints
- [ ] Test CMS compatibility (unstyled HTML elements)
- [ ] Validate no CSS conflicts between sections
- [ ] Check button/link semantics (`<a>` for navigation, `<button>` for actions)
- [ ] Verify all colors/spacing use CSS variables