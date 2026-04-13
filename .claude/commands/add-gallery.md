# Add Photo Gallery

Add a PIN-protected photo gallery to the current client project.

Ask the user:
1. What PIN (4 digits) should protect the upload feature?
2. Should the gallery be a sub-page (separate route like `/galeria`) or embedded in the main page?
3. Gallery title text (e.g. "Mis Viajes", "Nuestros Trabajos", "Portfolio")

Then:
- If sub-page: create `GalleryPage.jsx` and update the router in `main.jsx`
- If embedded: add a Gallery section component to the main page
- Use masonry grid layout: `columns-2 sm:columns-3 lg:columns-4 gap-3`
- Lightbox with keyboard navigation (Escape, ArrowLeft, ArrowRight)
- PIN modal with 4 separate digit inputs that auto-advance and auto-submit
- Hover-visible delete button (also PIN-protected)
- Image compression via canvas before upload (maxWidth: 1400, quality: 0.78)
- API endpoint: `https://vcalldeal.vercel.app/api/gallery` (Vercel blob storage)
- Add a "📸 [gallery title]" navigation button to the main page header
- Dark theme consistent with the rest of the project

The PIN should be stored as a constant in the component (client-side UX guard only — server also validates).
