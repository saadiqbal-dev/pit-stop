# Integration Strategy - Prefixed Classes (Simplified)

## ✅ What We Did

We added `.ps-` prefix to the **most common conflicting classes** only:

### Prefixed Classes:
- `.header-wrapper` → `.ps-header-wrapper`
- `.header__*` → `.ps-header__*` (all BEM variations)
- `.banner` → `.ps-banner`
- `.banner-content` → `.ps-banner-content`
- `.footer-wrapper` → `.ps-footer-wrapper`
- `.footer-container` → `.ps-footer-container`
- `.footer-*` → `.ps-footer-*` (all footer classes)

### NOT Prefixed (Safe/Specific):
- `.hero-section`, `.search-bar`, `.video-section` - Page-specific
- `.booking-form`, `.find-a-store` - Template-specific
- `.btn`, `.red-bg`, utility classes - Generic utilities

---

## 📁 Current State

All files have been updated:

### CSS File
- **`src/assets/css/main.css`** - Updated with `.ps-` prefixes

### HTML Files (All Updated)
- `src/index.html`
- `src/service-packages.html`
- `src/booking.html`
- `src/extensive.html`
- `src/find-a-store.html`
- `src/search.html`

---

## 🔧 Laravel Integration

### Step 1: Copy CSS to Laravel

```bash
# Copy main.css to Laravel project
cp src/assets/css/main.css resources/css/app.css
```

### Step 2: Update webpack.mix.js

```javascript
const mix = require('laravel-mix');

mix
  // New design CSS
  .postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('postcss-nesting'),
    require('autoprefixer'),
  ])

  // Old site CSS (unchanged)
  .sass('resources/css/old-site/app.scss', 'public/themes/pitstopnew/css')

  // Versioning for cache busting
  .version();
```

### Step 3: Create Master Layout

**File:** `resources/views/layouts/master.blade.php`

```blade
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'PitStop')</title>

    {{-- NEW CSS (with .ps- prefixes) --}}
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    {{-- Page-specific old CSS (if needed) --}}
    @stack('styles')
</head>
<body>
    {{-- NEW HEADER (prefixed with .ps-*) --}}
    @include('partials.header')

    {{-- Main Content --}}
    <main>
        @yield('content')
    </main>

    {{-- NEW FOOTER (prefixed with .ps-*) --}}
    @include('partials.footer')

    {{-- Scripts --}}
    <script src="{{ asset('js/banner-close.js') }}"></script>
    <script src="{{ asset('js/header-navigation.js') }}"></script>
    <script src="{{ asset('js/mobile-menu-toggle.js') }}"></script>

    @stack('scripts')
</body>
</html>
```

### Step 4: Create Header Partial

**File:** `resources/views/partials/header.blade.php`

Copy from `src/index.html` - the header section with `.ps-*` classes.

### Step 5: Create Footer Partial

**File:** `resources/views/partials/footer.blade.php`

Copy from `src/index.html` - the footer section with `.ps-*` classes.

### Step 6: Update Old Pages

**Example:** `resources/views/old-pages/service-packages.blade.php`

```blade
@extends('layouts.master')

@section('title', 'Service Packages')

@push('styles')
    {{-- Load old site CSS for content area ONLY --}}
    <link rel="stylesheet" href="{{ asset('themes/pitstopnew/css/app.min.css') }}">
@endpush

@section('content')
    {{-- OLD PAGE CONTENT (uses Bootstrap, .container, .row, etc.) --}}
    <section class="banner">
        <div class="container">
            <!-- Old content here -->
        </div>
    </section>
@endsection

@push('scripts')
    <script src="{{ asset('themes/pitstopnew/js/app.min.js') }}"></script>
@endpush
```

**What Gets Loaded:**
1. `app.css` (new header/footer with `.ps-*`)
2. `app.min.css` (old content area with `.container`, `.banner`, etc.)

**No conflicts** because:
- Header uses `.ps-header-wrapper`
- Footer uses `.ps-footer-wrapper`
- Content uses `.container`, `.banner` (from old CSS)

### Step 7: Create New Pages

**Example:** `resources/views/new-pages/index.blade.php`

```blade
@extends('layouts.master')

@section('title', 'Home')

@section('content')
    {{-- NEW PAGE CONTENT --}}
    <section class="hero-wrapper">
        <div class="hero-container">
            <!-- New content here -->
        </div>
    </section>
@endsection
```

**What Gets Loaded:**
- Only `app.css` (includes header/footer + all page content)

---

## 🎯 Why This Works

### Old Pages
```html
<link rel="stylesheet" href="app.css">        <!-- .ps-header, .ps-footer -->
<link rel="stylesheet" href="app.min.css">    <!-- .container, .banner, .row -->

<body>
  <header class="ps-header-wrapper">...</header>  <!-- From app.css -->
  <main>
    <div class="container">...</div>              <!-- From app.min.css -->
  </main>
  <footer class="ps-footer-wrapper">...</footer>  <!-- From app.css -->
</body>
```

### New Pages
```html
<link rel="stylesheet" href="app.css">        <!-- Everything with .ps-* prefixes -->

<body>
  <header class="ps-header-wrapper">...</header>  <!-- From app.css -->
  <main>
    <section class="hero-wrapper">...</section>   <!-- From app.css -->
  </main>
  <footer class="ps-footer-wrapper">...</footer>  <!-- From app.css -->
</body>
```

---

## ✅ Benefits

1. **No Bootstrap Import** - You're not using Bootstrap in new code
2. **Minimal Prefixes** - Only critical classes prefixed (header, banner, footer)
3. **Zero Conflicts** - Old `.container` vs new `.ps-header` don't clash
4. **Easy Migration** - Update pages one by one
5. **Clean Separation** - Old content CSS loads only when needed

---

## 🚀 Testing Checklist

- [ ] Compile CSS: `npm run dev`
- [ ] Test old page (e.g., `/service-packages`)
  - [ ] New header appears correctly
  - [ ] Old content displays correctly
  - [ ] New footer appears correctly
  - [ ] No CSS conflicts or broken styles
- [ ] Test new page (e.g., `/` homepage)
  - [ ] Header displays correctly
  - [ ] All sections display correctly
  - [ ] Footer displays correctly
- [ ] Test responsive breakpoints (768px, 1024px, 1280px, etc.)
- [ ] Test mobile menu
- [ ] Test header dropdowns
- [ ] Test all interactive elements

---

## 📝 Notes

- CSS reset is scoped to `.ps-header-wrapper` and `.ps-footer-wrapper` only
- No global resets that would break old pages
- All JavaScript files work with prefixed classes
- Mobile header also uses `.ps-mobile-*` prefixes
