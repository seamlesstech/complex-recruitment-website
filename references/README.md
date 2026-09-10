# Complex Recruitment Design References

This folder contains the static HTML design/prototype references created during the Complex Recruitment website redesign.

These files are **reference material only**. They are not production pages and should not be imported into the Next.js application.

## How Codex should use this folder

When refining a page:

1. Inspect the current Next.js implementation first.
2. Inspect the corresponding file in `references/pages/` as the approved visual/design baseline.
3. Use the reference to understand layout, hierarchy, image treatment, spacing, interaction direction, and content structure.
4. Preserve newer approved changes already present in the current application.
5. Do not blindly overwrite current code to match an older reference if the live implementation has since been improved.
6. Treat the user's latest amendment prompt as the highest-priority source of truth.
7. Keep all refinements responsive across desktop, laptop, tablet, and mobile.
8. Avoid layout jumps and visible text wrapping/unwrapping during animated expansion interactions.
9. Reuse shared components and existing design-system patterns where practical.
10. Do not modify unrelated pages unless explicitly requested.

## Source-of-truth priority

Use this order when instructions conflict:

1. Latest user amendment / direction
2. Current Next.js implementation
3. HTML reference in this folder

The HTML references are design snapshots, not a replacement for production code.

## Page mapping

| Route | Reference file |
| --- | --- |
| `/` | `pages/home.html` |
| `/employers` | `pages/employers.html` |
| `/candidates` | `pages/candidates.html` |
| `/sectors` | `pages/sectors.html` |
| `/sectors/driving` | `pages/driving.html` |
| `/sectors/industrial` | `pages/industrial.html` |
| `/sectors/construction` | `pages/construction.html` |
| `/jobs` | `pages/jobs.html` |
| `/jobs/[slug]` | `pages/job-detail.html` |
| `/training` | `pages/training.html` |
| `/training/driver-assessments` | `pages/driver-assessments.html` |
| `/training/cpc` | `pages/cpc-training.html` |
| `/about` | `pages/about.html` |
| `/contact` | `pages/contact.html` |
| `/request-staff` | `pages/request-staff.html` |
| `/register-interest` | `pages/register-interest.html` |
| `/privacy` | `pages/privacy.html` |
| `/cookies` | `pages/cookies.html` |
| `/terms` | `pages/terms.html` |
| `/modern-slavery` | `pages/modern-slavery.html` |
| `404` | `pages/404.html` |

## Notes

- `pages/sectors.html` intentionally uses the approved v19 Sectors direction, not the later cutout-image experiment.
- `pages/driving.html` uses the later Driving reference that includes the revised two-line headline, dark-hero navigation treatment, and rotating hero imagery.
- The `screenshots/` folder is intentionally available for any future visual references that are genuinely useful. Screenshots do not need to be added for every amendment.
