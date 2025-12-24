# Deployment Guide

Your portfolio is now pushed to GitHub and ready to deploy!

---

## 🚀 GitHub Pages Deployment (Automated)

I've set up automatic deployment to GitHub Pages. Here's how to enable it:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/excelross12/excelross
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save

### Step 2: Trigger Deployment

The deployment will automatically trigger when you push to the `main` branch.

To manually trigger:
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages**
3. Click **Run workflow**

### Step 3: Access Your Site

Once deployed, your portfolio will be available at:

**🌐 https://excelross12.github.io/excelross/**

---

## 🎯 Alternative Deployment Options

### Option 1: Vercel (Recommended for Custom Domain)

**Pros:** Fast, free, custom domain support, automatic deployments

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New Project**
4. Import `excelross12/excelross`
5. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**

**Your site will be live at:** `https://excelross.vercel.app`

**Add Custom Domain:**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `excelross.com`)
3. Follow DNS configuration instructions

---

### Option 2: Netlify

**Pros:** Free, custom domain support, form handling

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **Add new site** → **Import an existing project**
4. Choose GitHub and select `excelross12/excelross`
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy**

**Your site will be live at:** `https://excelross.netlify.app`

---

### Option 3: Cloudflare Pages

**Pros:** Fast CDN, free, custom domain support

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign in and click **Create a project**
3. Connect to GitHub and select `excelross12/excelross`
4. Configure:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click **Save and Deploy**

---

## 🔧 Deployment Configuration

### Environment Variables

If you need environment variables (e.g., for contact form):

**Vercel:**
1. Project Settings → Environment Variables
2. Add variables (e.g., `VITE_FORMSPREE_ID`)

**Netlify:**
1. Site Settings → Environment Variables
2. Add variables

**GitHub Pages:**
- Add to repository secrets
- Reference in workflow file

### Build Settings

Current configuration:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 20.x
- **Package Manager:** npm

---

## 📊 Monitoring Deployment

### GitHub Actions

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Monitor build and deployment progress

### Deployment Status

- ✅ **Success:** Green checkmark
- ❌ **Failed:** Red X (click for logs)
- 🟡 **In Progress:** Yellow dot

---

## 🐛 Troubleshooting

### Build Fails

**Check the logs:**
1. Go to Actions tab
2. Click on failed workflow
3. Expand failed step
4. Read error message

**Common issues:**
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to test
- Environment variables: Check if all required vars are set

### Site Not Loading

**Check:**
1. Deployment completed successfully
2. GitHub Pages is enabled
3. Correct URL: `https://excelross12.github.io/excelross/`
4. Wait 2-3 minutes after first deployment

### 404 Errors

**For GitHub Pages:**
- Ensure `base` in `vite.config.ts` matches repo name
- Current: `base: "/excelross/"`

**For Vercel/Netlify:**
- No base path needed
- Update `vite.config.ts` if deploying there

---

## 🔄 Updating Your Portfolio

### Make Changes Locally

```bash
# Make your changes
npm run dev  # Test locally

# Commit and push
git add .
git commit -m "Update portfolio content"
git push
```

### Automatic Deployment

- GitHub Pages: Deploys automatically on push
- Vercel: Deploys automatically on push
- Netlify: Deploys automatically on push

---

## 🌐 Custom Domain Setup

### For GitHub Pages

1. Buy a domain (Namecheap, Google Domains, etc.)
2. Add `CNAME` file to `public/` folder:
   ```
   yourdomain.com
   ```
3. Configure DNS:
   - Add A records pointing to GitHub Pages IPs
   - Or add CNAME record pointing to `excelross12.github.io`
4. Enable HTTPS in repository settings

### For Vercel/Netlify

1. Go to project settings
2. Add custom domain
3. Follow DNS configuration instructions
4. HTTPS is automatic

---

## 📈 Performance Optimization

### Before Deploying

- [ ] Optimize images (use TinyPNG)
- [ ] Remove unused dependencies
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Check Lighthouse score
- [ ] Verify mobile responsiveness

### After Deploying

- [ ] Test on multiple devices
- [ ] Check loading speed
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check SEO meta tags

---

## ✅ Deployment Checklist

- [x] Code pushed to GitHub
- [x] GitHub Actions workflow configured
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] Custom domain configured (optional)
- [ ] Contact form tested
- [ ] All links verified
- [ ] Mobile tested
- [ ] SEO optimized

---

## 🎉 Your Portfolio is Live!

**GitHub Repository:** https://github.com/excelross12/excelross

**Live Site (after enabling Pages):** https://excelross12.github.io/excelross/

**Next Steps:**
1. Enable GitHub Pages in repository settings
2. Wait 2-3 minutes for deployment
3. Visit your live site!
4. Share your portfolio URL

---

## 📞 Need Help?

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com

**Happy deploying!** 🚀
