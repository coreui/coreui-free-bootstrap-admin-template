# Development Guide

This guide provides practical information for developers working on the CoreUI Free Bootstrap Admin Template.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Adding New Features](#adding-new-features)
- [Working with Components](#working-with-components)
- [Styling Guidelines](#styling-guidelines)
- [JavaScript Patterns](#javascript-patterns)
- [Testing Your Changes](#testing-your-changes)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Basic knowledge of HTML, CSS (Sass), and JavaScript
- Familiarity with Pug templating (optional but helpful)
- Text editor or IDE (VS Code recommended)

### Initial Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/coreui/coreui-free-bootstrap-admin-template.git
   cd coreui-free-bootstrap-admin-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

4. Open your browser to [http://localhost:3000](http://localhost:3000)

The development server includes live reload - changes to Pug, Sass, or JavaScript files will automatically refresh the browser.

## Project Structure

```
src/
├── pug/              # HTML templates (edit these, not HTML files!)
│   ├── _layout/      # Base page layouts
│   ├── _partials/    # Reusable components (header, sidebar, footer)
│   ├── _mixins/      # Pug helper functions
│   └── views/        # Individual page templates
├── scss/             # Stylesheets
│   └── style.scss    # Main stylesheet (imports Bootstrap + CoreUI)
├── js/               # JavaScript modules
│   ├── main.js       # Dashboard charts
│   ├── color-modes.js # Theme switcher
│   └── *.js          # Other page-specific scripts
└── assets/           # Images, icons, static files
```

**Important**: Always edit source files in `src/`, never the compiled files in `dist/` or `src/views/`.

## Development Workflow

### File Watching

The `npm start` command runs multiple watchers in parallel:

- **Pug watcher**: Compiles `.pug` files to HTML
- **Sass watcher**: Compiles `.scss` files to CSS
- **JS watcher**: Transpiles JavaScript with Babel
- **Browser-sync**: Live reload server

### Individual Watchers

Run specific watchers if you're only working on one file type:

```bash
npm run watch-pug    # Watch Pug templates only
npm run watch-css    # Watch Sass files only
npm run watch-js     # Watch JavaScript files only
```

### Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` directory ready for deployment.

## Adding New Features

### Adding a New Page

1. **Create Pug template** in `src/pug/views/`:

   ```pug
   //- src/pug/views/my-new-page.pug
   extends ../_layout/default.pug

   block content
     .container-lg.px-4
       .row
         .col-12
           h1 My New Page
           p Welcome to my new page!
   ```

2. **Compile the template**:
   ```bash
   npm run pug
   ```

   This creates `src/views/my-new-page.html`

3. **View in browser**:
   Navigate to [http://localhost:3000/my-new-page.html](http://localhost:3000/my-new-page.html)

4. **Add to navigation** (optional):
   Edit `src/pug/_partials/_sidebar.pug` to add a menu link

### Adding Page-Specific JavaScript

1. **Create JS file** in `src/js/`:

   ```javascript
   // src/js/my-feature.js

   /**
    * My Feature Module
    *
    * Description of what this module does
    */

   /**
    * Initialize the feature
    */
   const initMyFeature = () => {
     console.log('My feature initialized')
   }

   // Run on DOM ready
   document.addEventListener('DOMContentLoaded', () => {
     initMyFeature()
   })
   ```

2. **Include in your Pug template**:

   ```pug
   block scripts
     script(src='js/my-feature.js')
   ```

3. **Compile**:
   ```bash
   npm run js
   ```

### Adding Page-Specific Styles

1. **Create partial** in `src/scss/`:

   ```scss
   // src/scss/_my-feature.scss

   .my-feature {
     padding: 1rem;
     background-color: var(--cui-body-bg);

     &__title {
       color: var(--cui-primary);
     }
   }
   ```

2. **Import in main stylesheet**:

   ```scss
   // src/scss/style.scss
   @import "my-feature";
   ```

3. **Compile**:
   ```bash
   npm run css
   ```

## Working with Components

### Using CoreUI Components

**Always use CoreUI Bootstrap components** from the official documentation: https://coreui.io/bootstrap/docs/

#### Example: Adding a Modal

1. **Find component in CoreUI docs**: https://coreui.io/bootstrap/docs/components/modal/

2. **Convert HTML to Pug** (use https://html2pug.com if needed):

   ```pug
   //- Modal Button
   button.btn.btn-primary(type='button' data-coreui-toggle='modal' data-coreui-target='#myModal')
     | Launch Modal

   //- Modal
   .modal.fade#myModal(tabindex='-1' aria-labelledby='myModalLabel' aria-hidden='true')
     .modal-dialog
       .modal-content
         .modal-header
           h5.modal-title#myModalLabel Modal Title
           button.btn-close(type='button' data-coreui-dismiss='modal' aria-label='Close')
         .modal-body
           p Modal content goes here
         .modal-footer
           button.btn.btn-secondary(type='button' data-coreui-dismiss='modal') Close
           button.btn.btn-primary(type='button') Save changes
   ```

3. **Initialize if needed**:

   Some components require JavaScript initialization:

   ```javascript
   import { Modal } from '@coreui/coreui'

   const myModal = new Modal(document.getElementById('myModal'))
   myModal.show()
   ```

### Creating Reusable Components

For components used across multiple pages, create a Pug mixin:

1. **Create mixin file** in `src/pug/_mixins/`:

   ```pug
   //- src/pug/_mixins/alert.pug

   mixin alert(type, message)
     .alert(class=`alert-${type}` role='alert')
       = message
   ```

2. **Use the mixin** in your pages:

   ```pug
   include _mixins/alert

   +alert('success', 'Your changes have been saved!')
   +alert('danger', 'An error occurred.')
   ```

## Styling Guidelines

### Use Bootstrap/CoreUI Classes First

Before writing custom CSS, check if Bootstrap or CoreUI provides a utility class:

```pug
//- Good: Using utility classes
.d-flex.justify-content-between.align-items-center.mb-3
  h2 Title
  button.btn.btn-primary Action

//- Avoid: Custom CSS when utilities exist
.my-custom-header
  h2 Title
  button Action
```

### CSS Custom Properties (Variables)

Use CoreUI's CSS variables for theming:

```scss
.my-component {
  color: var(--cui-body-color);          // Text color (theme-aware)
  background: var(--cui-body-bg);        // Background color
  border-color: var(--cui-border-color); // Border color
}
```

### Common CSS Variables

| Variable | Purpose |
|----------|---------|
| `--cui-primary` | Primary brand color |
| `--cui-secondary` | Secondary color |
| `--cui-success`, `--cui-danger`, etc. | Status colors |
| `--cui-body-color` | Default text color |
| `--cui-body-bg` | Default background |
| `--cui-border-color` | Border color |

### Naming Conventions

Use Bootstrap/CoreUI class naming conventions for custom styles:

```scss
.my-custom-section {
  padding: 1rem;

  .section-title {
    font-weight: bold;
  }
}

// Or extend existing CoreUI/Bootstrap components
.sidebar-custom {
  background-color: var(--cui-sidebar-bg);
}
```

### Dark Mode Support

CSS variables automatically adapt to dark mode. Test both themes:

```javascript
// Switch theme programmatically for testing
localStorage.setItem('coreui-free-bootstrap-admin-template-theme', 'dark')
location.reload()
```

## JavaScript Patterns

### Module Structure

Follow this pattern for new JavaScript modules:

```javascript
/* global LibraryName */

/**
 * Module Name
 *
 * Description of what this module does and which pages use it.
 */

/**
 * Function description
 * @param {type} paramName - Parameter description
 * @returns {type} Return value description
 */
const myFunction = (paramName) => {
  // Implementation
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  myFunction()
})
```

### ESLint Rules

- **No semicolons** (enforced by ESLint)
- **2-space indentation**
- **Single quotes** for strings
- Use arrow functions `() => {}` instead of `function() {}`

### Accessing CoreUI Utilities

```javascript
/* global coreui */

// Get CSS variable value
const primaryColor = coreui.Utils.getStyle('--cui-primary')

// Convert RGB to HEX
const hexColor = coreui.Utils.rgbToHex('rgb(255, 0, 0)')
```

### Working with Chart.js

```javascript
/* global Chart, coreui */

const myChart = new Chart(document.getElementById('my-chart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3],
      borderColor: coreui.Utils.getStyle('--cui-primary'),
      backgroundColor: `rgba(${coreui.Utils.getStyle('--cui-primary-rgb')}, 0.1)`
    }]
  },
  options: {
    responsive: true
  }
})

// Update chart when theme changes
document.documentElement.addEventListener('ColorSchemeChange', () => {
  myChart.options.scales.x.ticks.color = coreui.Utils.getStyle('--cui-body-color')
  myChart.update()
})
```

## Testing Your Changes

### Visual Testing

1. **Test in both themes**:
   - Click theme toggle in header
   - Verify dark mode looks correct

2. **Test responsive design**:
   - Resize browser window
   - Test mobile view (Chrome DevTools: Cmd+Shift+M / Ctrl+Shift+M)

3. **Test in multiple browsers**:
   - Chrome/Edge
   - Firefox
   - Safari (if on macOS)

### Code Quality Checks

Run linters before committing:

```bash
npm run lint        # Run all linters
npm run lint:js     # JavaScript only
npm run lint:css    # Styles only
```

Fix auto-fixable issues:

```bash
npm run lint:js -- --fix
```

## Common Tasks

### Update Dependencies

```bash
npm update              # Update to latest compatible versions
npm outdated            # Check for outdated packages
npm audit fix           # Fix security vulnerabilities
```

### Change Template Version

```bash
npm run change-version 5.4.0
```

This updates version numbers across all files.

### Create Distribution Package

```bash
npm run zip
```

Creates a `.zip` file with the production build.

### Clean Build

If you encounter build issues:

```bash
rm -rf node_modules dist
npm install
npm run build
```

## Troubleshooting

### Pug Compilation Errors

**Error**: "Cannot find module"

```
Error: src/pug/views/my-page.pug
  > 1| extends ../_layout/wrong-path.pug
```

**Solution**: Check that include/extend paths are correct and relative to the current file.

### Sass Compilation Errors

**Error**: "Undefined variable $primary"

**Solution**: Import Bootstrap/CoreUI variables before using them:

```scss
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

// Now you can use variables
.my-class {
  color: $primary;
}
```

### JavaScript Errors

**Error**: "ReferenceError: Chart is not defined"

**Solution**: Add global comment at top of file:

```javascript
/* global Chart */
```

### Live Reload Not Working

1. Check that `npm start` is running without errors
2. Restart the development server: `Ctrl+C` then `npm start`
3. Clear browser cache: `Cmd+Shift+R` / `Ctrl+Shift+F5`
4. Check that files are being saved in `src/` not `dist/`

### Port Already in Use

**Error**: "Port 3000 is already in use"

**Solution**: Kill the process or use a different port:

```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
PORT=3001 npm start
```

### ESLint Errors

**Error**: "Unexpected console statement"

**Solution**: Disable ESLint for specific lines when console is needed:

```javascript
// eslint-disable-next-line no-console
console.log('Debug info')
```

Or disable for entire file (not recommended):

```javascript
/* eslint-disable no-console */
```

## Best Practices

### Do's

- ✅ Use CoreUI Bootstrap components from official docs
- ✅ Edit source files in `src/`, never compiled files
- ✅ Use CSS variables for colors and theme values
- ✅ Add JSDoc comments to all functions
- ✅ Test in both light and dark modes
- ✅ Follow existing code patterns and conventions
- ✅ Run linters before committing
- ✅ Keep JavaScript modules focused and small

### Don'ts

- ❌ Don't use Tailwind CSS (this project uses Bootstrap)
- ❌ Don't edit files in `dist/` or `src/views/` (auto-generated)
- ❌ Don't add unnecessary dependencies
- ❌ Don't use inline styles (use utility classes or Sass)
- ❌ Don't hardcode colors (use CSS variables)
- ❌ Don't ignore ESLint/Stylelint warnings
- ❌ Don't commit `node_modules/` or `dist/`

## Getting Help

- **CoreUI Documentation**: https://coreui.io/bootstrap/docs/
- **Bootstrap 5 Docs**: https://getbootstrap.com/docs/5.3/
- **Pug Documentation**: https://pugjs.org/
- **Chart.js Documentation**: https://www.chartjs.org/
- **GitHub Issues**: https://github.com/coreui/coreui-free-bootstrap-admin-template/issues

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Code style and conventions
- Commit message format
- Pull request process
- Bug reporting

---

**Need more help?** Check [ARCHITECTURE.md](ARCHITECTURE.md) for technical details about the project structure and build pipeline.
