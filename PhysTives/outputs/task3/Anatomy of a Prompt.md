## Task 3 - Structured Prompt

**Technique:**  
Structured prompting

**Exact Prompt:**  
Act as a frontend web developer specializing in semantic HTML,
responsive CSS, and accessible JavaScript.

Create a responsive single-page website called PhysTive for students,
office workers, and community residents in the Philippines. The website
should encourage users to take short and safe movement breaks during
school or work days.

Include these core features:
1. A short movement-break and exercise checklist.
2. Activity idea cards combined with an educational wellness guide.
3. A weekly activity-progress tracker.

Use semantic HTML, CSS, and vanilla JavaScript only. Do not use external
frameworks, backend services, databases, authentication, or external APIs.

Use general educational wellness content only. Do not provide diagnoses,
treatment instructions, medication recommendations, or personalized medical
advice. Avoid promising specific health results.

Provide separate index.html, style.css, and script.js files.

Acceptance criteria:
- The page opens locally without a backend.
- Users can check and uncheck movement activities.
- The progress tracker updates when an activity is completed.
- The reset control works correctly.
- The controls can be used with a mouse and keyboard.
- Every form control has a visible label.
- The page is readable on mobile screens.
- The page includes a clear educational-purpose disclaimer.

**AI Output:**  
Created PhysTive as three local files:

- index.html
- style.css
- script.js

The page includes movement idea cards, a general wellness guide, a labeled activity checklist, weekly progress by day, and an educational-purpose disclaimer. Progress is stored locally in the browser; no backend or external services are used.

**Observation:**  
The structured prompt produced a more complete and organized PhysTive website than the zero-shot version. It created separate **index.html**, **style.css**, and **script.js** files and included the requested movement ideas, labeled checklist, weekly progress tracker, responsive layout, keyboard-accessible controls, local browser storage, and an educational wellness disclaimer. The main improvement still needed is to test the interactive features in the browser and confirm that the progress tracker, reset button, keyboard controls, and mobile layout work as expected.

**Next Action:**  
I will open the website in a browser and test each checklist item, the progress tracker, the reset button, and the saved progress after refreshing the page. I will also use the Tab and Space keys to check keyboard accessibility and resize the browser to a mobile width. After testing, I will compare the result with the zero-shot version and make only the necessary corrections.