# HELMUT - Art Gallery

A minimalist art gallery website showcasing Helmut Relinger's meditation series, built with Next.js 15 and inspired by Sotheby's aesthetic.

## Features

- 🎨 26+ artworks with infinite scroll
- 🖼️ Click-to-expand full-screen artwork viewer
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized image loading with Next.js Image
- 🎭 Elegant hover interactions
- 🚀 Blazing fast performance

## Performance Optimizations

This site is optimized for fast loading on Vercel:

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Lazy Loading**: Images load 800px before scroll position
- **Quality Tuning**: Gallery uses 80% quality, modal uses 95%
- **GPU Acceleration**: Hardware-accelerated transforms
- **Aggressive Preloading**: Loads 15 images initially, 8 per batch
- **CDN Caching**: 1-year cache TTL on images

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Vercel

1. Push to GitHub (already done)
2. Go to https://vercel.com/new
3. Import `dan-moll/art-gallery`
4. Click "Deploy"
5. Your site will be live in ~2 minutes!

## Adding More Artworks

1. Add images to `public/artworks/`
2. Update `data/artworks.json` with metadata
3. Commit and push changes

## Performance Tips

- Images are automatically optimized by Next.js
- WebP/AVIF formats served to supported browsers
- Vercel Edge Network serves from 100+ global locations
- First 3 artworks are prioritized for instant loading

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image + Sharp

## License

Private collection © Helmut Relinger
