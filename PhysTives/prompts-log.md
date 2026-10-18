

## Task #2: Zero-Shot Prompting
Create a simple webpage called Stay PhyActive that encourages students,
office workers, and community residents to take regular movement breaks
during school or work days.

## Task #3 Improve: Anatomy of a Prompt

Act as a frontend web developer specializing in semantic HTML,
responsive CSS, and accessible JavaScript.

Create a responsive single-page website called Stay PhyActive for students,
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

## Task#4 Experiment A: Few-Shot Prompting
Create movement activity cards using this format:

Example 1:
Activity: Stretch and reset
Category: Stretching
Description: Reach up gently, roll your shoulders, and stretch your arms
within a comfortable range.

Example 2:
Activity: Take a short walk
Category: Walking
Description: Walk around a room, hallway, or other safe nearby space at a
comfortable pace.

Generate four additional general movement activities using the same
format. Render all six activities as an accessible checklist using
semantic HTML, CSS, and vanilla JavaScript.

Include these categories where appropriate:
- Stretching
- Walking
- Standing
- Light movement
- Balance
- Rest breaks

Do not include medical treatment, diagnosis, medication advice, or
personalized exercise prescriptions.

## Task#4 Experiment B: Role Assignment
Act as a frontend accessibility reviewer and health-content safety
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

## Task #5: Analyze Structured Reasoning and Refinement
Review my PhysTive webpage against the original project requirements.

   Check:
   1. Whether the movement checklist works correctly.
   2. Whether the weekly progress tracker updates correctly.
   3. Whether the reset control works.
   4. Whether the HTML uses appropriate semantic elements.
   5. Whether every checklist control has a visible label.
   6. Whether keyboard users can operate the controls.
   7. Whether the layout works on mobile screens.
   8. Whether activity descriptions remain general educational content.
   9. Whether any wording sounds like medical treatment, diagnosis, or a
      personalized exercise prescription.

   Return only these sections:
   1. Observed issue and code evidence.
   2. Probable cause.
   3. Smallest appropriate correction.
   4. Verification steps.

   Do not provide hidden reasoning. Do not modify unrelated features.