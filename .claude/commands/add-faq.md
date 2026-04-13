# Add FAQ Section

Add a collapsible FAQ section to the current client project.

Ask the user:
1. List of questions and answers (or ask for the niche and generate relevant FAQs)
2. Section title text

Then create a `FAQ.jsx` section with:
- Accordion/collapsible items using React useState
- Each item: question as header, answer expands on click
- Smooth expand/collapse animation using Tailwind transitions
- Glassmorphism styling: `bg-white/5 backdrop-blur-sm border border-white/10`
- Plus/minus or chevron icon that rotates on open
- Import and add to main page before the Contact/Footer section
