# Portfolio Customization Guide

Your portfolio website is now set up with the pixel-perfect template! Here's how to customize it with your own content.

---

## 🚀 Quick Start

### 1. Run the Development Server

```bash
cd Portfolio
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 2. Build for Production

```bash
npm run build
```

### 3. Preview Production Build

```bash
npm run preview
```

---

## 📝 Customization Checklist

### Essential Customizations

- [ ] Replace profile image
- [ ] Update Hero section text
- [ ] Add your projects
- [ ] Update About section
- [ ] Add your skills
- [ ] Update experience timeline
- [ ] Configure contact form
- [ ] Update footer links
- [ ] Add your social media links

---

## 🎨 Component Customization

### 1. Hero Section (`src/components/Hero.tsx`)

**Update your title and location:**

```typescript
// Lines 28-30
<span>Full-Stack Developer</span>  // ← Your role
<span>Based in San Francisco</span>  // ← Your location
<span className="hidden md:block">Available for Work</span>  // ← Your status
```

**Update your main headline:**

```typescript
// Lines 40-42
<h1 className="...">
  <span className="block">Creative</span>  // ← Adjective
  <span className="block text-stroke">Developer</span>  // ← Your role
  <span className="block gradient-text">&amp; Designer</span>  // ← Specialty
</h1>
```

**Update your bio:**

```typescript
// Lines 49-51
<p className="text-lg text-muted-foreground max-w-md mb-8">
  I craft digital experiences that merge stunning design with robust 
  engineering. Obsessed with pixels and performance.  // ← Your description
</p>
```

**Update experience badge:**

```typescript
// Line 107
<motion.div className="...">
  5+ Years XP  // ← Your years of experience
</motion.div>
```

**Update tech stack marquee:**

```typescript
// Lines 115-117
<span className="...">
  React • TypeScript • Node.js • Design •  // ← Your tech stack
</span>
```

**Replace Profile Image:**

1. Add your image to `src/assets/` (e.g., `my-photo.jpg`)
2. Update line 3:
```typescript
import profileImage from '@/assets/my-photo.jpg';  // ← Your image
```

---

### 2. Projects Section (`src/components/Projects.tsx`)

**Update the projects array (lines 6-32):**

```typescript
const projects = [
  {
    id: '01',
    title: 'Your Project Name',  // ← Project title
    category: 'Your Category',  // ← e.g., "Full-Stack Development"
    description: 'Your project description here.',  // ← Brief description
    tags: ['React', 'Node.js', 'PostgreSQL'],  // ← Technologies used
    image: 'https://your-image-url.com/image.jpg',  // ← Project screenshot
    color: 'from-orange-500/20',  // ← Accent color
  },
  {
    id: '02',
    title: 'Another Project',
    category: 'AI/ML Integration',
    description: 'Another amazing project description.',
    tags: ['Next.js', 'OpenAI', 'TypeScript'],
    image: 'https://your-image-url.com/image2.jpg',
    color: 'from-blue-500/20',
  },
  // Add more projects...
];
```

**Color Options for Projects:**
- `from-orange-500/20` - Orange accent
- `from-blue-500/20` - Blue accent
- `from-emerald-500/20` - Green accent
- `from-purple-500/20` - Purple accent
- `from-pink-500/20` - Pink accent
- `from-yellow-500/20` - Yellow accent

**Project Image Options:**

1. **Use Unsplash** (current): Keep the Unsplash URLs
2. **Use your own images**:
   - Add images to `public/projects/`
   - Update image path: `image: '/projects/my-project.jpg'`
3. **Use project screenshots**: Take screenshots of your live projects

**Update Project Links:**

```typescript
// Line 123: Live project link
<motion.a href="https://your-project-url.com">  // ← Your project URL
  View Project
</motion.a>

// Line 131: GitHub link
<motion.a href="https://github.com/you/project">  // ← Your GitHub repo
  <Github size={18} />
</motion.a>
```

---

### 3. About Section (`src/components/About.tsx`)

**Update Stats (lines 6-11):**

```typescript
const stats = [
  { value: '5+', label: 'Years of Experience' },  // ← Your experience
  { value: '50+', label: 'Projects Delivered' },  // ← Your projects
  { value: '30+', label: 'Happy Clients' },  // ← Your clients
  { value: '99%', label: 'Client Satisfaction' },  // ← Your rating
];
```

**Update Headline (lines 73-77):**

```typescript
<h2 className="...">
  Crafting Digital<br />
  <span className="text-stroke-primary">Experiences</span><br />
  Since 2019  // ← Your start year
</h2>
```

**Update Bio Text (lines 79-91):**

```typescript
<div className="space-y-6 text-muted-foreground text-lg mb-10">
  <p>
    I'm a passionate Full-Stack Developer who believes that great software 
    is born at the intersection of creativity and engineering. My journey 
    started with a simple question: "How do I make this better?"
    // ← Your intro paragraph
  </p>
  <p>
    With expertise spanning React, TypeScript, Node.js, and cloud technologies, 
    I build products that not only look stunning but perform flawlessly. 
    Every pixel matters, every millisecond counts.
    // ← Your skills paragraph
  </p>
  <p>
    When I'm not coding, I'm exploring new technologies, contributing to 
    open-source, or mentoring the next generation of developers.
    // ← Your interests paragraph
  </p>
</div>
```

---

### 4. Skills Section (`src/components/Skills.tsx`)

**Update Skill Categories (lines 5-20):**

```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    // ← Add your frontend skills
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    // ← Add your backend skills
  },
  {
    title: 'DevOps',
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Vercel'],
    // ← Add your DevOps skills
  },
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems', 'Motion'],
    // ← Add your design skills
  },
];
```

**Update Experience Timeline (lines 22-26):**

```typescript
const experienceData = [
  { year: '2022', role: 'Senior Developer', company: 'TechCorp Inc.' },
  { year: '2020', role: 'Full-Stack Developer', company: 'Digital Solutions' },
  { year: '2019', role: 'Frontend Developer', company: 'StartupXYZ' },
  // ← Add your work experience
];
```

**Update Tech Stack Marquee (line 119):**

```typescript
{['React', 'TypeScript', 'Node', 'AWS', 'Docker', ...].map((tech, i) => (
  // ← Add your favorite technologies
))}
```

---

### 5. Contact Section (`src/components/Contact.tsx`)

Let me check this file:

```typescript
// Update your contact information
// Update email address
// Update social media links
// Configure form submission
```

---

### 6. Header (`src/components/Header.tsx`)

**Update Navigation Links:**

```typescript
// Update your name/logo
// Update navigation menu items
// Add/remove sections as needed
```

---

### 7. Footer (`src/components/Footer.tsx`)

**Update Footer Content:**

```typescript
// Update copyright year
// Update social media links
// Add additional links
```

---

## 🖼️ Adding Your Images

### Profile Image

1. **Prepare your image:**
   - Recommended size: 800x1000px (4:5 aspect ratio)
   - Format: JPG or PNG
   - File size: < 500KB (optimize with TinyPNG)

2. **Add to project:**
   - Place in `src/assets/` folder
   - Name it `profile-image.jpg` (or update imports)

3. **Update imports:**
   ```typescript
   // In Hero.tsx and About.tsx
   import profileImage from '@/assets/profile-image.jpg';
   ```

### Project Images

1. **Option A: Use Unsplash (current)**
   - Keep existing Unsplash URLs
   - Or find new images at unsplash.com

2. **Option B: Use your own images**
   - Create `public/projects/` folder
   - Add project screenshots
   - Update image paths in Projects.tsx:
   ```typescript
   image: '/projects/my-project.jpg'
   ```

3. **Image Guidelines:**
   - Recommended size: 1200x900px (4:3 aspect ratio)
   - Format: JPG or WebP
   - File size: < 300KB each

---

## 🎨 Customizing Colors

### Theme Colors

Edit `src/index.css` to change the color scheme:

```css
@layer base {
  :root {
    --primary: 142 76% 36%;  /* Main accent color */
    --primary-foreground: 355.7 100% 97.3%;
    /* ... other colors */
  }
}
```

### Color Presets

**Green (Current):**
```css
--primary: 142 76% 36%;
```

**Blue:**
```css
--primary: 221 83% 53%;
```

**Purple:**
```css
--primary: 262 83% 58%;
```

**Orange:**
```css
--primary: 25 95% 53%;
```

**Pink:**
```css
--primary: 330 81% 60%;
```

---

## 📧 Setting Up Contact Form

### Option 1: Formspree (Recommended)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update Contact.tsx:

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Set up email service
3. Install EmailJS:
```bash
npm install @emailjs/browser
```
4. Configure in Contact.tsx

### Option 3: Custom Backend

Create your own API endpoint and handle form submissions.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

---

## 🔧 Advanced Customization

### Adding New Sections

1. Create new component in `src/components/`
2. Import in `src/pages/Index.tsx`
3. Add to the page layout
4. Update navigation in Header.tsx

### Changing Fonts

The template uses:
- **Display Font**: System font stack (optimized)
- **Body Font**: System font stack

To use custom fonts:

1. Add to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.ts`:
```typescript
fontFamily: {
  display: ['Your Font', 'sans-serif'],
}
```

### Adding Animations

The template uses Framer Motion. Add custom animations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

---

## 📱 Mobile Optimization

The template is fully responsive! Test on:
- Mobile (375px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

Use Chrome DevTools to test different screen sizes.

---

## ✅ Pre-Launch Checklist

Before deploying:

- [ ] All personal information updated
- [ ] Profile images added and optimized
- [ ] All projects added with correct links
- [ ] Contact form configured and tested
- [ ] Social media links updated
- [ ] Footer copyright year updated
- [ ] All placeholder text replaced
- [ ] Tested on mobile devices
- [ ] Tested in different browsers
- [ ] SEO meta tags updated (index.html)
- [ ] Favicon updated (public/favicon.ico)
- [ ] Performance optimized (run Lighthouse)

---

## 🐛 Troubleshooting

### Images not loading

- Check file paths are correct
- Ensure images are in `public/` or `src/assets/`
- Check file extensions match imports

### Animations not working

- Ensure Framer Motion is installed
- Check browser supports animations
- Clear cache and reload

### Build errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

## 📚 Resources

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **shadcn/ui**: https://ui.shadcn.com
- **Vite**: https://vitejs.dev

---

## 🎉 You're Ready!

Your portfolio is set up and ready to customize. Start by updating the Hero section with your information, then work through each component.

**Need help?** Check the component files - they're well-commented and easy to understand!

**Happy customizing!** 🚀
