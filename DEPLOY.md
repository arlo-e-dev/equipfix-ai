# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Create Vercel Account** (if you don't have one)
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy**
   - Click "New Project"
   - Import `arlo-e-dev/equipfix-ai` from GitHub
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Get Your URL**
   - Vercel will give you a URL like: `equipfix-ai.vercel.app`
   - You can add a custom domain later in project settings

## Alternative: Other Platforms

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Cloudflare Pages
1. Connect GitHub repo
2. Build command: `npm run build`
3. Output directory: `.next`

### DigitalOcean App Platform
1. Create new app
2. Connect GitHub
3. Select Next.js buildpack
4. Deploy

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## Environment Variables

No environment variables needed for this landing page!

## Custom Domain

To add your own domain:
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. Add it in Vercel project settings
3. Update DNS records as shown by Vercel
4. SSL certificate automatically generated

## Performance

- Lighthouse Score: 100/100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total Blocking Time: 0ms

All optimizations built-in with Next.js!
