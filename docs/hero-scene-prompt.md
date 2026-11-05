# Hero background refinement

Generated with the built-in imagegen tool, using the supplied original landing-page image as the visual reference. Only the hero's photography was generated. All text, navigation, badges, buttons and the gold/navy wave remain independent HTML/SVG/CSS elements.

## Exact generation prompt

Use case: ads-marketing. Asset type: ONLY a photographic website hero background, landscape aspect ratio 1.58:1, high resolution. Input image is the user's long landing-page design REFERENCE: reproduce ONLY the TOP HERO photography/color composition (top 420px of the 665px wide reference), not any other sections. Precisely preserve composition: two smiling Moroccan university students occupy left 49% of entire frame, curly dark-haired young man in navy hoodie and backpack at far left, behind; smiling young woman cream knit sweater, sunglasses on head, white headphones around neck, backpack and plain navy folder in front beside him. Both full heads visible, boy's head starts at 16% of frame height, girl's head at 27%; bodies continue off bottom edge, girl ends horizontally at 49%. Moroccan warm sandstone minaret at x=44% centered behind them, palm trees in far-left background, softly blurred sunlit garden. Background on left is softly lit natural daylight and royal blue sky, blends naturally into very deep navy #061B3C across right 50% with subtle blue atmospheric highlights; preserve large CLEAN EMPTY right half for real HTML headlines/buttons. Top 18% mostly clear navy for real header. Subjects must look extremely close to the hero students in the reference, natural realistic anatomy, sharp premium campaign photography, warm smiles. No white border, no gold curve, no waves (will be implemented in CSS). ABSOLUTELY NO text, no letters, no Arabic, no logo, no header, no buttons, no symbols, no UI, no watermarks. Do NOT recreate the entire landing page or any content below the top hero.

## Assets and implementation

- `assets/images/sources/hero-scene-v3.png`: high-resolution generated source, 1576 × 998.
- `assets/images/hero-scene-v3.webp`: optimized native-size image, with 1000px and 665px variants for responsive loading.
- `assets/images/hero-wave-v3.svg`: separate metallic gold/navy transition, shaped to match the reference's high curve at the left and swoop at the right.
- `assets/brand/logo-white-v3.svg`: full wordmark incorporating the directional logo recreated from the user's closer logo reference.
- `assets/icons/whatsapp-hero.svg`: self-contained green/white icon from the separately requested icon export.
- `css/hero-refinement.css`: scoped hero color, crop, typography, spacing, wave and breakpoint adjustments.

The mobile background uses the same approximately 1.58:1 aspect ratio as the reference's top hero. Desktop crops from the top while preserving faces. The folder mark is a separate SVG overlay on mobile and is hidden on desktop where the folder falls outside the crop. The campus is decorative and does not imply an institution affiliation.

## Browser verification

`hero-update-qa.json` records 320, 360, 375, 390, 430, 665, 768, 1024 and 1440px checks for image loading, heading/CTA clipping, horizontal overflow, headline/paragraph overlap, responsive image selection and console/network errors. Menu/Escape, WhatsApp URL and Arabic message, services anchor and reduced motion are checked.

Captures: `hero-updated-390.png`, `hero-updated-665.png`, `hero-updated-1440.png`, and `mobile-hero-update-full.png`.
