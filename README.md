# SMART TAWJIH

Arabic RTL landing page built with semantic HTML, CSS and vanilla JavaScript. No framework, build step, runtime dependencies or external image requests.

## Run locally

From this directory:

```sh
python -m http.server 4173
```

Open http://localhost:4173. The page can also be opened directly with `index.html`.

## Deploy on Vercel

Import this directory as the project root. Choose **Other**, leave the build command empty, and use `.` as the output directory. This project has not been deployed by this task. After deployment, set an absolute production `og:image` URL and add the production canonical/og:url in `index.html`.

## Edit content

- `index.html`: selectable Arabic copy and semantic page structure.
- `css/style.css`: palette, spacing, responsive compositions, motion.
- `js/config.js`: WhatsApp number/message, Instagram, statistics, testimonial approval flags and content.
- `js/main.js`: menu, links, review navigation and scroll reveals.
- `assets/`: all local campaign photography, font files, SVG branding and icons.

Statistics `1500+`, `430+`, `95%` are preserved in configuration but are **not displayed** until `statisticsApproved` is true. The initial cards show neutral service descriptions. Verify each claim before enabling.

Review cards are explicitly labeled design previews and use generated portraits without fabricated names, ratings or client quotes. To replace them, supply `testimonials: [{ name, quote, image }]` with approved content and set `testimonialsApproved: true`. Use a real, authorized image path or omit `image`. Generated portraits must never be represented as real clients.

The logo is a manually reconstructed SVG based on the supplied screenshot, not an original vector master. Replace `assets/brand/logo-*.svg` with approved originals when available. Tajawal is self-hosted (Google Fonts, SIL Open Font License); its license is included in the brand folder.

`docs/asset-prompts.md` records the visual audit and all built-in image generation prompts. `docs/fidelity-qa-results.json` records the latest browser and touch checks. `docs/preview-390-corrected.png` is the final mobile screenshot; native reference-width and desktop captures are also supplied. `docs/fidelity-audit.md` explains the correction pass, asset refinements, pixel-comparison methodology and remaining differences. `docs/mobile-reference-comparison.png` shows the reference beside the corrected mobile page.

The architectural image is decorative and does not imply an office or institution affiliation. No data is collected or submitted by this static page; consultation CTAs open WhatsApp. Service scope and pricing are confirmed through direct contact.
