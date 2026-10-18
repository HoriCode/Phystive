## Task 4B - Role Assignment

**Technique:**  
Role-assignment prompting

**Exact Prompt:**  
> Act as a frontend accessibility reviewer and health-content safety
reviewer.

Review my PhysTive webpage for:
- semantic HTML,
- clear heading structure,
- visible labels,
- keyboard access,
- visible focus indicators,
- readable mobile layout,
- understandable activity descriptions,
- safe and non-medical wellness wording,
- correct progress-tracker feedback.

Identify specific problems and recommend targeted corrections without
changing the project scope. Do not add a backend, external API, diagnosis
feature, or personalized exercise plan.

For every recommendation, explain how I can verify whether the issue exists.

**AI Output:**  
## Review summary
The page has a solid accessibility and content-safety foundation: it uses semantic page regions, a clear h1 → h2 → h3 heading hierarchy, and a fieldset/legend for the activity checklist. Each checkbox is inside a visible label, and the tracker provides daily and weekly counts. The wellness guide and footer use general, non-medical wording and include a clear educational-purpose disclaimer.

## Targeted recommendations
Make the weekly tracker easier to read on narrow screens. At widths below 380px, the seven-day row reduces day names and counts to 9px. That may be difficult to read, especially on smaller phones. Consider switching to a two-row, four-column layout at that breakpoint or otherwise increasing the text size. See style.css.
How to verify: Open the page at 320px and 375px wide. Check whether each day label and count is legible without zooming or horizontal scrolling.

Increase the activity-card category and description text size. These details use 11px text at all screen sizes, which may be small for users with low vision. Consider raising it to at least 13px while keeping the cards readable. See style.css.
How to verify: Inspect the checklist on a phone and at 200% browser zoom. Confirm that the category and full description can be read comfortably without clipping.

Refresh the tracker’s date while the page remains open. The script sets today, the week start, and date keys once at load. If someone leaves the page open across midnight or a week boundary, later check-ins may be assigned to the old day or week until they reload. See script.js.
How to verify: Leave the page open across local midnight or a week boundary, then check the highlighted day, week label, and where a new check-in appears. They should reflect the current local date without a reload.

## Checks that appear sound
Keyboard and focus: The checkboxes remain native inputs; the CSS provides a visible focus style for them and for links and buttons. See style.css and index.html. Verify by tabbing through the page and using Space to toggle each checkbox.
Progress feedback: Daily and weekly counts update from the checked activities, and the tracker exposes daily bars as progress indicators. See script.js.
Activity wording: The descriptions include comfort or safe-space guidance, and the balance activity offers a seated alternative. The educational disclaimer is present in index.html

**Observation:**  
The review confirmed that the page has a strong accessibility and content-safety foundation. It uses semantic HTML, a clear heading structure, a fieldset and legend for the checklist, visible checkbox labels, keyboard-friendly controls, and an educational disclaimer. The review also identified three possible improvements: the weekly tracker text may be too small on narrow screens, the activity details may be difficult to re

**Next Action:**  
I will inspect the CSS and JavaScript to confirm these issues before making changes. I will test the page at 320px and 375px widths, check the text at 200% zoom, and use the Tab and Space keys to test keyboard access and visible focus. I will also verify that the daily and weekly progress counts update correctly and that the wellness content remains general and non-medical. I will apply only the corrections that are supported by the source code.