# Add Plans / Pricing Section

Add a pricing or plans section to the current client project.

Ask the user:
1. How many plans/tiers? (usually 2-4)
2. For each plan: name, price, currency, list of features/benefits, which one is "most popular"
3. CTA button text (e.g. "Quiero este plan", "Empezar ahora", "Contáctame")
4. CTA action: WhatsApp link or a custom URL

Then add a `Plans.jsx` section (or equivalent) with:
- Cards using `bg-white/90 backdrop-blur-md border-2` on a dark/image background
- Text in `text-gray-900` (black) — NEVER white text on light card backgrounds
- The "most popular" plan highlighted with amber/gold accent border and badge
- Feature list with checkmarks
- CTA button per card linking to WhatsApp or the specified URL
- Responsive grid: 1 col mobile, auto-fit for desktop
- Section has a cruise/relevant background image with `bg-gray-950/85` overlay if the client is in travel/inCruises niche, or a solid dark background otherwise

Import and add the section to the main `App.jsx` or `IsidraApp.jsx` in the correct position.
