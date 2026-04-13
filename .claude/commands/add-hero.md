# Add / Update Hero Section

Add or replace the hero section of the current client project.

Ask the user:
1. Headline text (main message)
2. Subheadline / description text
3. Primary CTA button text and action (WhatsApp or URL)
4. Secondary CTA button (optional)
5. Background: specific image URL, or describe the niche and use a relevant Unsplash photo
6. Any stats to show below the CTAs (e.g. "108,000+ clientes", "9+ años")

Then update or create the Hero section with:
- Full viewport height (`min-h-screen` or `py-24`)
- Background image with `bg-gray-950/80` dark overlay
- Centered text layout
- Headline in large bold white text (`text-4xl md:text-6xl font-black`)
- Amber/gold accent for labels or highlighted words
- Primary CTA: solid amber button linking to WhatsApp (`https://wa.me/<number>`) or URL
- Secondary CTA: outline/ghost button if requested
- Stats row if provided, each stat in a glassmorphism pill
- Fully responsive
