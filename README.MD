# Dhenkanal.club

Welcome to the **Dhenkanal.club** website project. This is a premium, modern, responsive static website built with HTML, CSS, and Vanilla JavaScript, optimized for performance and accessibility.

## 1. How to run locally

This project uses [Vite](https://vitejs.dev/) for an optimal local development experience with hot-module replacement.

To start the local development server:
```bash
npm install
npm run dev
```
Then, open the provided localhost link in your browser (usually `http://localhost:5173`).

## 2. How to build

To build the project for production, run:
```bash
npm run build
```
This command bundles all assets, minifies CSS and JavaScript, and optimizes the HTML.

## 3. How to generate the static production output

When you run `npm run build`, Vite will generate the complete, optimized static production output into the `dist/` directory. The contents of this folder are ready to be served by any static file server.

You can preview the built static site locally by running:
```bash
npm run preview
```

## 4. Where to modify website content

All website content (text, sections, links) is located in `index.html`. It uses semantic HTML tags to logically separate sections (e.g., `<section id="hero">`, `<section id="why">`, etc.).

## 5. Where to replace images

Currently, the site relies heavily on modern CSS typography, layout, and abstract visual elements created via CSS/JavaScript. 
If you wish to add imagery:
- Place your optimized images in a `public/` directory or directly in the project root.
- Reference them in `index.html` using the standard `<img>` tag or as CSS `background-image` in `style.css`.

## 6. Where to modify colors

Colors are centrally managed via CSS Custom Properties (CSS variables) in `style.css`.
Look for the `:root` pseudo-class at the very top of `style.css`:

```css
:root {
  /* Color Palette */
  --color-bg: #FDFBF7; 
  --color-text: #1A1A1A;
  --color-accent: #6B705C; 
  --color-gold: #B69A54; 
  /* ... */
}
```
Change these hex values to easily update the site's color scheme globally.

## 7. Where to modify typography

Typography is also managed in `style.css`. The font variables are defined in the `:root` section:

```css
:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
}
```
To change fonts, make sure to update the Google Fonts `<link>` tag in the `<head>` of `index.html` and update the variable definitions in `style.css`.

## 8. How to deploy to a static hosting service

The generated `dist/` folder is a purely static site that can be deployed anywhere.

- **Vercel / Netlify / Cloudflare Pages:** Connect your GitHub repository. Set the framework preset to `Vite` (Build command: `npm run build`, Publish directory: `dist`).
- **GitHub Pages:** You can deploy the `dist/` folder to a `gh-pages` branch. You may need to set the `base` path in a `vite.config.js` file if deploying to a sub-path.
- **Traditional Hosting (cPanel, FTP):** Simply run `npm run build`, zip the contents of the `dist/` folder, and upload/extract them to your `public_html` directory.

---
*Built for Dhenkanal.club - A Community of Minds, Wisdom & Purpose.*
