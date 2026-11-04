# Reference fidelity correction

The supplied 665 × 2365 reference was compared with the browser render at its native width and at 390px. `mobile-reference-comparison.png` shows the natural-size mobile reference beside the actual corrected page. `reference-pixel-comparison.png` shows the reference, the corrected sections aligned to reference heights, and absolute RGB differences amplified 3×. The alignment is solely a diagnostic: **the website and final mobile screenshot are not resized, flattened, or fabricated**. `pixel-comparison-metrics.json` records each reference/implemented section height and mean channel difference. A low residual error is not represented as a similarity percentage.

## Corrected

- Replaced the square, excessively heavy Cairo rendering with self-hosted Tajawal Regular, Bold and ExtraBold; isolated Latin branding inside Arabic headings.
- Reworked mobile dimensions against the original 665px proportions: header, two-line headline, hero crop, CTA dimensions, about composition, cards, five numbered rows, benefits panel, timeline and portrait cards.
- Added separate reference-guided student cutouts, laptop composition and dimensional graduation/books asset using built-in imagegen. Sources are saved in `assets/images/sources/*-v2.png`, optimized images in `assets/images/*-v2.webp`; the mobile hero has a 640px variant.
- Added SVG gold/navy wave transitions, gold gradient pictograms, an eye icon, Moroccan skyline and diploma decoration. Added separately rendered brand marks on the student folders and laptop.
- Replaced the oversized review carousel presentation with the reference's three compact portrait cards; smaller screens retain native horizontal swiping, working dots, and Home/End/arrow keyboard controls. Controls hide where all cards fit.
- Fixed RTL carousel alignment and inconsistent current-page indicators. Menu closes with Escape/outside click and returns focus correctly; anchor navigation focuses its destination. FAQ supports mouse, touch and keyboard.
- Floating WhatsApp appears after the hero and hides at the final CTA. Scroll reveals, staggered cards, button shine and gentle cap movement respect reduced motion. Content stays visible with JavaScript disabled.

## Intentional differences / remaining fidelity limits

- The FAQ requested in the original brief is retained, although it does not exist in the raster design. It adds real page height.
- Unverified statistics remain disabled. Neutral service labels occupy their original navy card layout.
- Testimonials remain explicitly identified design previews, with generated portraits and no fabricated names, ratings or client quotes.
- The supplied reference is a flattened creative, not layered photography or a vector brand master. Reconstructed branding and generated photographs/illustrations are closer recreations, not pixel-identical original assets. The difference image makes these residuals visible.
- The design's compact four-column mobile composition is preserved. The FAQ and navigation retain comfortable touch controls; desktop uses a separate fluid layout.

## Verification

`fidelity-qa-results.json` records checks at 320, 360, 375, 390, 430, 665, 768, 1024 and 1440px: horizontal overflow, missing images, clipped heading/benefit text and browser errors. Interaction checks cover menu/Escape/focus, anchor focus, FAQ mouse/keyboard, every WhatsApp URL and actual CTA popup, Instagram URL, RTL carousel dots/Home/End and a real emulated touch swipe, reduced motion and no-JavaScript visibility.

Final untouched browser captures: `preview-390-corrected.png`, `preview-665-corrected.png`, `preview-1440-corrected.png`.

## Refinement prompts (built-in imagegen)

Reference image for each prompt: the user-supplied original design screenshot. No entire webpage screenshot is used as a site background.

1. **hero-students-v2** — Background extraction of only the top hero's two students, preserving the curly-haired boy's navy hoodie/backpack and the smiling girl's cream knit sweater, sunglasses, headphones and navy folder. Preserve relative arrangement and expressions. Tight waist-up photographic cutout with complete heads; transparent background; no UI, text, architecture or waves.
2. **student-guidance-v2** — Background extraction of the middle section's smiling woman with long dark wavy hair, denim jacket, white top, navy notebook and thumbs-up on the viewer's right. Preserve reference pose, expression and styling. Waist-up transparent cutout without UI, text, gold ring or logo.
3. **study-laptop-v2** — Reconstruct the middle panel's photographic desk: silver laptop angled slightly left with blank navy screen; three stacked navy/cream books with gold edges in front on the left; plants on both sides; warm wood desk and blurred warm interior. Match original perspective. No UI, text, logo, navy overlay or waves.
4. **academic-books-v2** — Extract/reconstruct the about section's dimensional navy mortarboard with gold tassel atop three cream books with navy/gold covers. Preserve composition, perspective, lighting and material. Tight transparent render without text, UI or extra objects.
