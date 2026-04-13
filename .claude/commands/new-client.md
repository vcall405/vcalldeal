# New Client Landing Page

Create a complete landing page for a new client from scratch.

Ask the user for the following information before starting:
1. Client full name
2. Business type / niche (inCruises rep, real estate, beauty salon, gym, restaurant, etc.)
3. WhatsApp number (with country code)
4. Primary language (Spanish / English / Bilingual)
5. Color scheme preference (or use a professional default based on niche)
6. Sections needed (Hero, About, Services/Plans, Testimonials, Gallery, Contact, FAQ)

Then:
- Create a new folder at `/home/user/vcalldeal/clients/<client-slug>/`
- Scaffold a complete Vite + React + Tailwind project
- Use `bg-gray-950` dark theme with glassmorphism cards (`bg-white/5 backdrop-blur-sm border border-white/10`)
- All UI text in the client's preferred language
- WhatsApp CTA button linking to their number
- Include only the sections the client requested
- Use functional components only, one per file, `.jsx` extension
- No TypeScript

After creating all files, run `npm install` inside the client folder and confirm it builds successfully with `npm run build`.
