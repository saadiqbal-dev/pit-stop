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
2. **Mobile-First Approach**: Write CSS for mobile first, then add media queries for larger screens
3. **Performance**: Lazy load images and defer non-critical JavaScript
4. **Accessibility**: Ensure proper ARIA labels, semantic HTML, and keyboard navigation
5. **Comments**: Add clear comments for complex logic or section boundaries
6. **Testing Commands**:
   - Lint: `npm run lint` (if available)
   - Type checking: `npm run typecheck` (if available)

## Development Workflow
1. Always check existing files before creating new ones
2. Follow existing patterns and conventions in the codebase
3. Test responsive behavior across all breakpoints
4. Validate no CSS/JS conflicts before completing tasks