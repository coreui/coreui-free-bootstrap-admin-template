# Architecture Documentation

## Project Purpose

CoreUI Free Bootstrap Admin Template is a professional admin dashboard template built on Bootstrap 5 and CoreUI components. It provides a ready-to-use foundation for building admin panels, dashboards, and web applications with a clean, modern interface.

**Key Characteristics:**
- Server-side templating approach (Pug → HTML)
- Bootstrap 5 + CoreUI component library
- Vanilla JavaScript (no framework dependencies)
- Multi-page application (MPA) architecture
- Static file generation with build-time compilation

## High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Source Files                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │   Pug    │  │   Sass   │  │    JS    │           │
│  │Templates │  │  Styles  │  │ Modules  │           │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘           │
│       │             │             │                 │
└───────┼─────────────┼─────────────┼─────────────────┘
        │             │             │
        ▼             ▼             ▼
┌─────────────────────────────────────────────────────┐
│                  Build Pipeline                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │   Pug    │  │PostCSS + │  │  Babel   │           │
│  │Compiler  │  │  Sass    │  │Transpiler│           │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘           │
│       │             │             │                 │
└───────┼─────────────┼─────────────┼─────────────────┘
        │             │             │
        ▼             ▼             ▼
┌─────────────────────────────────────────────────────┐
│                 Distribution Files                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │   HTML   │  │   CSS    │  │    JS    │           │
│  │  Files   │  │ (minified)│  │(bundled) │          │
│  └──────────┘  └──────────┘  └──────────┘           │
│         (served via browser-sync or web server)     │
└─────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **HTML Generation**: Pug 3.0.3 (template engine)
- **CSS Framework**: Bootstrap 5.3.x
- **Component Library**: CoreUI 5.x (@coreui/coreui)
- **Icons**: CoreUI Icons (@coreui/icons)
- **JavaScript**: Vanilla ES6+ (no framework)
- **Charts**: Chart.js 4.x
- **Scrollbars**: SimpleBar 6.x

### Build Tools
- **Package Manager**: npm
- **CSS Processing**: Sass 1.97.0 → PostCSS → Autoprefixer
- **JS Transpilation**: Babel 7.28.x with preset-env
- **Task Runner**: npm scripts with npm-run-all
- **File Watching**: Nodemon
- **Live Server**: Browser-sync 3.0.4

### Code Quality
- **Linting**: ESLint 9.x (flat config) with XO + Unicorn
- **Style Linting**: Stylelint 16.x with Bootstrap config
- **Formatting**: Prettier 3.7.4
- **Editor Config**: .editorconfig for consistency

## Directory Structure

```
coreui-free-bootstrap-admin-template/
│
├── src/                          # Source files (edit these)
│   ├── pug/                      # Pug templates (HTML source)
│   │   ├── _layout/              # Base layout templates
│   │   │   └── default.pug       # Main layout with sidebar/header
│   │   ├── _partials/            # Reusable components
│   │   │   ├── _header.pug       # Top navigation bar
│   │   │   ├── _sidebar.pug      # Left sidebar navigation
│   │   │   ├── _footer.pug       # Page footer
│   │   │   └── _breadcrumb.pug   # Breadcrumb navigation
│   │   ├── _mixins/              # Pug helper mixins
│   │   │   ├── breadcrumb.pug    # Breadcrumb generator
│   │   │   ├── callout.pug       # Alert/callout boxes
│   │   │   └── example.pug       # Code example displays
│   │   └── views/                # Page templates
│   │       ├── dashboard.pug     # Main dashboard page
│   │       ├── base/             # UI base components
│   │       ├── buttons/          # Button examples
│   │       ├── forms/            # Form components
│   │       ├── icons/            # Icon libraries
│   │       ├── notifications/    # Alerts, toasts, modals
│   │       ├── pages/            # Auth pages (login, register)
│   │       └── ...
│   │
│   ├── scss/                     # Sass stylesheets
│   │   ├── style.scss            # Main stylesheet entry
│   │   ├── style-rtl.scss        # RTL (right-to-left) styles
│   │   └── examples.scss         # Demo/example page styles
│   │
│   ├── js/                       # JavaScript modules
│   │   ├── main.js               # Main entry point
│   │   ├── charts.js             # Chart.js configurations
│   │   ├── color-modes.js        # Dark/light theme switcher
│   │   ├── tooltips.js           # Tooltip initialization
│   │   ├── popovers.js           # Popover initialization
│   │   └── ...
│   │
│   ├── assets/                   # Static assets
│   │   ├── brand/                # Logo files
│   │   ├── favicon/              # Favicon files
│   │   └── img/                  # Images
│   │
│   └── views/                    # Compiled HTML (auto-generated)
│       └── *.html                # Do NOT edit these manually
│
├── dist/                         # Production build output
│   ├── css/                      # Minified CSS
│   ├── js/                       # Transpiled JS
│   ├── assets/                   # Copied assets
│   ├── vendors/                  # Third-party libraries
│   └── *.html                    # Production HTML files
│
├── build/                        # Build scripts
│   ├── pug.mjs                   # Pug compilation script
│   ├── postcss.config.mjs        # PostCSS configuration
│   ├── vendors.mjs               # Vendor file bundling
│   └── change-version.mjs        # Version management
│
├── node_modules/                 # npm dependencies (ignored)
│
└── Configuration files
    ├── package.json              # Dependencies and scripts
    ├── .editorconfig             # Editor settings
    ├── eslint.config.mjs         # ESLint flat config
    ├── .prettierrc.json          # Prettier formatting
    ├── .stylelintrc              # Stylelint rules
    ├── .browserslistrc           # Target browsers
    ├── .babelrc.js               # Babel transpiler config
    └── .cursorrules              # AI context (Cursor IDE)
```

## Build Pipeline Details

### Development Mode (`npm start`)

1. **Clean**: Remove old compiled files
2. **Compile Pug**: `src/pug/**/*.pug` → `src/views/*.html`
3. **Compile Sass**: `src/scss/*.scss` → `dist/css/*.css` (expanded, autoprefixed)
4. **Transpile JS**: `src/js/*.js` → `dist/js/*.js` (Babel with source maps)
5. **Copy Assets**: `src/assets/**/*` → `dist/assets/`
6. **Build Vendors**: Bundle third-party libraries
7. **Watch Files**: Monitor changes and recompile
8. **Browser-sync**: Live reload server on http://localhost:3000

### Production Build (`npm run build`)

1. **All development steps**
2. **Minify CSS**: Compress stylesheets with cssnano
3. **Minify JS**: Already transpiled by Babel
4. **Optimize Assets**: Copy optimized files
5. **Generate zip**: Create distribution package

### File Watching

```
npm run watch          # Watch all file types
npm run watch-pug      # Watch Pug templates only
npm run watch-css      # Watch Sass files only
npm run watch-js       # Watch JavaScript files only
```

Each watch task uses **nodemon** to monitor file changes and trigger appropriate compilation.

## Data Flow

### Page Rendering Flow

```
1. Browser Request
   └─> /index.html

2. Server Response
   └─> Serve dist/index.html (static file)

3. HTML Loads Resources
   ├─> dist/css/style.css (Bootstrap + CoreUI + custom styles)
   ├─> dist/js/main.js (app initialization)
   └─> dist/vendors/*.js (Chart.js, SimpleBar, etc.)

4. JavaScript Execution
   ├─> Initialize CoreUI components
   ├─> Set up event listeners
   ├─> Configure charts (if on dashboard)
   └─> Enable tooltips/popovers

5. User Interaction
   └─> JavaScript handles UI updates (no page reload)
```

### Theme Switching Flow

```
1. User clicks theme toggle button
   └─> color-modes.js listens for click

2. ColorModeStorageManager updates preference
   ├─> Save to localStorage
   └─> Update [data-coreui-theme] attribute

3. CSS custom properties respond
   └─> Variables change (--cui-primary-bg, --cui-text-color, etc.)

4. ColorSchemeChange event fires
   └─> Charts re-render with new theme colors
```

### Chart Rendering Flow

```
1. charts.js module loads
   └─> import Chart from 'chart.js/auto'

2. DOM ready
   └─> Find chart canvas elements

3. Fetch data (or use inline data)
   └─> Random data generator for demo

4. Create Chart.js instance
   ├─> Configure chart type (line, bar, pie, etc.)
   ├─> Apply theme colors from CSS variables
   └─> Set responsive options

5. Theme changes
   └─> Re-initialize charts with new colors
```

## Component Organization

### Pug Template Hierarchy

```
default.pug (base layout)
├─> _header.pug (navigation bar)
├─> _sidebar.pug (side navigation)
├─> block content
│   └─> dashboard.pug (page content)
├─> block scripts (page-specific JS)
└─> _footer.pug (page footer)
```

**Block System:**
- `block content`: Main page content area
- `block scripts`: Page-specific JavaScript includes
- Each view extends the layout and overrides blocks

### CSS Architecture

```
style.scss
├─> Import Bootstrap 5
├─> Import CoreUI components
├─> Import custom variables
└─> Import custom component styles

Theme System:
[data-coreui-theme="light"]  # Light mode (default)
[data-coreui-theme="dark"]   # Dark mode
[data-coreui-theme="auto"]   # System preference
```

**CSS Custom Properties:**
- `--cui-primary`, `--cui-secondary`, etc. (colors)
- `--cui-bg`, `--cui-text-color` (backgrounds/text)
- `--cui-border-color`, `--cui-shadow` (UI elements)

### JavaScript Module Pattern

Each JS file in `src/js/` is an ES6 module:

```javascript
// Import dependencies
import { Something } from '@coreui/coreui'

// Define functionality
const doSomething = () => { /* ... */ }

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  doSomething()
})

// Export if needed (most files use side effects only)
```

## Key Dependencies

### Runtime Dependencies

| Package | Purpose | Used In |
|---------|---------|---------|
| `@coreui/coreui` | UI component library | All pages |
| `@coreui/icons` | Icon library | Icon pages |
| `chart.js` | Charts and graphs | Dashboard |
| `simplebar` | Custom scrollbars | Sidebar |
| `@coreui/utils` | Utility functions | Theme switching |

### Build Dependencies

| Package | Purpose |
|---------|---------|
| `sass` | CSS preprocessing |
| `@babel/core` | JavaScript transpilation |
| `pug` | HTML templating |
| `postcss` | CSS post-processing |
| `autoprefixer` | Vendor prefix automation |
| `browser-sync` | Development server |
| `eslint` | JavaScript linting |
| `stylelint` | CSS linting |

## Browser Support

Defined in `.browserslistrc`:

```
>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Edge >= 79
Safari >= 12
iOS >= 12
```

Modern browsers with ES6+ support (Babel handles transpilation for older browsers if needed).

## Deployment

### Static Hosting (Recommended)

1. Run `npm run build`
2. Deploy `dist/` folder to:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static file server

### Traditional Web Server

1. Run `npm run build`
2. Copy `dist/` contents to web root
3. Configure server to serve `index.html` as default
4. Set proper MIME types for CSS/JS files

### Docker (Optional)

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
```

## Performance Considerations

### CSS Optimization
- Sass compilation removes unused styles
- PostCSS autoprefixer adds only necessary prefixes
- Minification in production build
- CSS is render-blocking (loaded in `<head>`)

### JavaScript Optimization
- Babel transpiles only necessary polyfills (preset-env)
- Source maps for debugging (development only)
- Modules loaded as separate files (no bundler)
- Deferred script loading where possible

### Asset Optimization
- SVG icons (scalable, small file size)
- Favicon in multiple formats for compatibility
- Images in `src/assets/` should be optimized before adding

## Security Considerations

### Content Security Policy (CSP)
Template includes inline scripts and styles. For strict CSP:
1. Extract inline scripts to external files
2. Use nonces or hashes for required inline scripts
3. Update CSP headers accordingly

### XSS Prevention
- Pug automatically escapes HTML by default
- Use `!= html` only for trusted content
- Sanitize user input on server-side (if adding backend)

### Dependency Management
- Regularly update npm dependencies
- Run `npm audit` to check for vulnerabilities
- Pin major versions in `package.json`

## Extensibility

### Adding New Pages

1. Create `src/pug/views/my-page.pug`
2. Extend layout: `extends ../_layout/default.pug`
3. Override content block:
   ```pug
   block content
     .container-lg.px-4
       h1 My Page Title
       p Page content here
   ```
4. Run `npm start` to compile
5. Access at `/my-page.html`

### Adding New Components

1. Check CoreUI docs: https://coreui.io/bootstrap/docs/
2. Copy component markup to Pug file
3. Convert HTML to Pug syntax (use html2pug.com if needed)
4. Import required JavaScript:
   ```javascript
   import { Modal } from '@coreui/coreui'
   ```
5. Initialize component in page-specific JS

### Adding New Styles

1. Edit `src/scss/style.scss` or create new partial
2. Use Sass modules syntax to import CoreUI:
   ```scss
   @use "@coreui/coreui/scss/coreui" as * with (
     $enable-deprecation-messages: false
   );
   ```
   For CoreUI Pro projects:
   ```scss
   @use "@coreui/coreui-pro/scss/coreui" as * with (
     $enable-deprecation-messages: false
   );
   ```
3. Use CSS custom properties for theme compatibility
4. Run `npm run css` to compile

### Integrating Backend APIs

This template is frontend-only. To add backend:

1. **Fetch API** for AJAX requests:
   ```javascript
   fetch('/api/endpoint')
     .then(response => response.json())
     .then(data => updateUI(data))
   ```

2. **Authentication**: Implement token-based auth
   - Store JWT in localStorage/sessionStorage
   - Add Authorization header to requests
   - Redirect to login on 401 responses

3. **State Management**: For complex apps, consider:
   - Vanilla JS with custom events
   - Lightweight state library (Zustand, Nano Stores)
   - Full framework migration (React, Vue, etc.)

## Common Issues and Solutions

### Pug Compilation Errors
- **Error**: "Cannot find module"
  - **Fix**: Check Pug include/extend paths (relative to file)

### Sass Compilation Errors
- **Error**: "Undefined variable"
  - **Fix**: Import Bootstrap/CoreUI variables before using

### JavaScript Errors
- **Error**: "X is not defined"
  - **Fix**: Add `/* global X */` comment or import module

### Live Reload Not Working
- **Error**: Browser-sync not updating
  - **Fix**: Check if `watch` scripts are running, restart `npm start`

### Build Fails
- **Error**: npm scripts fail
  - **Fix**: Delete `node_modules/` and `dist/`, run `npm install`, then `npm run build`

## Resources

- **CoreUI Bootstrap Docs**: https://coreui.io/bootstrap/docs/
- **Pug Documentation**: https://pugjs.org/
- **Chart.js Documentation**: https://www.chartjs.org/
- **Sass Documentation**: https://sass-lang.com/documentation/

## Changelog

See [releases](https://github.com/coreui/coreui-free-bootstrap-admin-template/releases) for version history and updates.
