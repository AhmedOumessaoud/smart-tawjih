# Match to the supplied design and actual file screenshot

This pass uses both the original 665 × 2365 artwork and the user's 576 × 2378 screenshot of the local `index.html`. The screenshot includes a scrollbar; its 563px content area is tested separately and captured from both HTTP and `file://`.

## Changes

- Compared Arabic font specimens and selected self-hosted **Baloo Bhaijaan 2** for the original design's rounded headings, service rows and card labels. Body copy retains editable Arabic text. Corrected weights, line grouping and the Latin brand's isolation inside RTL headings.
- Matched actual dark-pixel heading rows at the native reference width. The guidance heading and several later headings now align with the reference within a few raster rows; image and card spacing is calibrated against that rendered output.
- Added dedicated navy/gold SVG clipboard/check, scholarship/cap/coins, stacked books and specialist/headset icons.
- Generated separate reference-guided transparent about/footer cap-and-books artwork and male/female review cutouts. Corrected their scale, crop, position and fade. High-resolution sources remain under `assets/images/sources/`; exact prompts are in `design-v4-asset-prompts.json`.
- Reworked white card gradients, gold markers, shadows, timeline labels and review portrait layouts. Demo rating decoration is explicitly identified as illustrative and is excluded from approved review rendering.
- Moved the large FAQ block into an accessible, native footer disclosure. Header navigation opens it; all questions remain editable and support keyboard operation. It works without JavaScript. This restores the reference's continuous section order and removes the large unmatched gap before the closing CTA.
- Repositioned the final cap, skyline, diploma, CTA and contact pills. The footer FAQ expands when requested instead of permanently adding its height to the landing page.

## Statistics and testimonials

`statisticsApproved` remains false pending owner confirmation. `showLocalReferenceStats` displays the reference values **only on `file://`, localhost, 127.0.0.1 and ::1**, with a visible notice stating that they are unverified design-preview figures. On public hosts, neutral service labels remain until the owner approves the claims. The browser check includes a simulated public host to verify that no unverified figures are shown there. Set `showLocalReferenceStats: false` to disable even the local preview.

Generated review portraits, rating decorations and sample copy are clearly marked as design previews. No real customer names, results or ratings have been invented. Approved content can still be supplied through `config.js`.

## Final artifacts

- `design-match-390.png`: full-page mobile browser capture.
- `design-match-563.png`: exact content-width counterpart to the user's browser screenshot.
- `design-match-file-563.png`: direct local-file capture, matching how the user opened the page.
- `design-match-file-scrollbar-576.png`: direct local-file capture with a classic Windows-style scrollbar at the supplied screenshot's 576px viewport width. Responsive units use the available document content width, so the scrollbar does not enlarge fonts or cards.
- `design-match-665.png`: original design width.
- `design-match-1440.png`: desktop capture.
- `design-before-after-comparison.png`: original design, supplied before screenshot, corrected website at equal width.
- `design-natural-pixel-comparison.png`: native-width original, actual corrected page and absolute pixel differences, **without vertical section alignment or rescaling**.
- `design-comparison-metrics.json`: natural sizes, section boundaries and raw RGB difference measurements. These are not presented as a similarity percentage.
- `design-match-qa.json`: responsive and interaction verification.

The original image is a flattened creative. Photographs, reconstructed branding and decorative artwork remain recreations, so residual pixel differences are visible in the diagnostic. All website text and controls remain real HTML.

The final native capture is 665 × 2372, compared with the reference's 665 × 2365. The full-page PNG widths are checked against their actual viewports; the offset student cutout is clipped at the main viewport boundary so it cannot silently enlarge the screenshot. Classic-scrollbar file checks cover 390px/375px content and 576px/561px content, with no body overflow.
