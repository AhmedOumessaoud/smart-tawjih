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

Statistics `1500+`, `430+`, `95%` are preserved in configuration. Public hosts show neutral service descriptions until `statisticsApproved` is true. Local `file://` and localhost previews can show the reference values with a visible unverified-preview notice when `showLocalReferenceStats` is true. Verify each claim before enabling public display.

Review cards are explicitly labeled design previews and use generated portraits without fabricated names, ratings or client quotes. To replace them, supply `testimonials: [{ name, quote, image }]` with approved content and set `testimonialsApproved: true`. Use a real, authorized image path or omit `image`. Generated portraits must never be represented as real clients.

The logo is a manually reconstructed SVG based on the supplied screenshot, not an original vector master. Replace `assets/brand/logo-*.svg` with approved originals when available. Baloo Bhaijaan 2 (rounded reference headings) and Tajawal (body text) are self-hosted; SIL Open Font Licenses are included in the brand folder.

`docs/asset-prompts.md` records the visual audit and all built-in image generation prompts. `docs/fidelity-qa-results.json` records the latest browser and touch checks. `docs/preview-390-corrected.png` is the final mobile screenshot; native reference-width and desktop captures are also supplied. `docs/fidelity-audit.md` explains the correction pass, asset refinements, pixel-comparison methodology and remaining differences. `docs/mobile-reference-comparison.png` shows the reference beside the corrected mobile page.

The architectural image is decorative and does not imply an office or institution affiliation. The registration dialog holds form data in memory until the page closes or reloads. Only the final submission action opens a WhatsApp draft containing that information; no backend or analytics receives form data. Service scope and pricing are confirmed through direct contact.

## Latest design match

`css/design-match.css` contains the final rounded typography, card/artwork calibration and compact footer FAQ. `docs/design-match-390.png` and `docs/design-match-file-563.png` are the latest browser captures. `docs/design-before-after-comparison.png` compares the original design, your supplied previous screenshot, and the corrected page. See `docs/design-match-audit.md` for the exact changes, preview-only figures and verification. The FAQ is accessible through the header navigation or the small footer disclosure.

## Registration popup

`css/modal.css` and `js/registration.js` implement one accessible native dialog above the landing page. The header, hero, final registration button and floating mobile CTA use `data-open-registration`. The footer phone link remains a direct WhatsApp contact. `openRegistrationModal(trigger)` and `closeRegistrationModal()` are reusable global entry points.

The three steps collect contact information, academic information and requested services with consent. Validation accepts Moroccan 06/07 and +212/00212 formats, Arabic digits and decimal commas in grades. Parent/student fields, custom city, national grade and academic branch adapt to the selected options. Back and close retain the draft in page memory; nothing is persisted in localStorage. Academic year, cities, levels, branches and services are editable under `SMART_TAWJIH.registration` in `js/config.js`.

The final button opens an encoded WhatsApp message synchronously from the click. The fourth screen is a handoff reminder, never a receipt or proof of sending. Its retry link also handles blocked popups. No backend, API keys or build step are required for static Vercel hosting.

Browser verification: all four CTA triggers; keyboard focus trap/return and Escape; internal scrolling and sticky close button; page scroll lock/restoration; draft preservation; student/parent conditions; required fields, phone and grades; service/consent validation; encoded WhatsApp popup intercepted without sending; file:// operation; reduced motion; 21 step/layout checks across 320, 360, 375, 390, 430, 768 and 1440px. Results: `docs/registration-qa.json`. Screenshots: `docs/registration-landing.png`, `registration-step-1-390.png`, `registration-step-2-390.png`, `registration-step-3-390.png`, `registration-step-3-actions-390.png`, `registration-handoff-390.png` and `registration-desktop-1440.png`.
