# Spiti Expedition 2026 — r/punebikers

Source for [rpbspitiexpedition2026.github.io](https://rpbspitiexpedition2026.github.io/), a single-page site for a self-supported motorcycle expedition: five riders, five bikes, Chandigarh → Spiti Valley → Manali, 19 Sep – 3 Oct 2026.

A static, no-build site — plain HTML/CSS/JS, no framework, no bundler, no dependencies. Deployed directly via GitHub Pages.

## Structure

```
index.html              Page markup + meta tags; sections are populated by JS at load
css/site.css             All styling, incl. light/dark theme via CSS custom properties
js/geo.js                Waypoint data (for the elevation chart) + the stylized circuit-map SVG renderer
js/itinerary-data.js     Day-by-day itinerary content (window.ITIN)
js/manual-data.js        Per-day stats, rider/luggage assignments, route segments (window.MANUAL)
js/site.js               Renders all sections into the DOM, countdown timer, theme toggle, mobile nav
assets/manual.pdf         Downloadable expedition manual (full trip details, budget, medicine, etc.)
assets/logo-rider.png     Footer emblem
.nojekyll                 Disables Jekyll processing on GitHub Pages
```

`site.js` reads `window.SPITI` (from `geo.js`), `window.ITIN`, and `window.MANUAL` and renders the hero map, elevation profile, rider cards, itinerary accordion, essentials grid, and route-segment strip. Only the data those renderers actually consume lives in the data files — keep it that way; don't add fields nothing reads.

## Running locally

No build step. Serve the directory with any static file server, e.g.:

```
python3 -m http.server 8080
```

then open `http://localhost:8080/`.

## Deployment

Pushes to the default branch publish directly via GitHub Pages — there's no CI/build pipeline.
