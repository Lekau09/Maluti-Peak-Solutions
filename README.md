# Maluti Peak Solutions — Website

Plain HTML, CSS, and JavaScript website for Maluti Peak Solutions, a student-led digital consultancy based in Lesotho.

---

## How to Run Locally

No build tools needed — this is plain HTML. Just open the files directly in your browser.

**Option 1 — Double-click (simplest):**
Open `index.html` in your file explorer and double-click it. It will open in your default browser.

**Option 2 — VS Code Live Server (recommended for development):**
1. Install the "Live Server" extension in VS Code
2. Open the `maluti-peak-solutions` folder in VS Code
3. Right-click on `index.html` → "Open with Live Server"
4. Your site will auto-refresh when you save any file

---

## Folder Structure

```
maluti-peak-solutions/
├── index.html              Home page
├── about.html              About page
├── services.html           Services overview
├── blog.html               Blog index
├── portfolio.html          Portfolio grid
├── contact.html            Contact form
├── services/
│   ├── website-design.html
│   ├── blog-creation.html
│   ├── cv-design.html
│   └── statistical-analysis.html
├── blog/
│   ├── why-small-businesses-need-a-website.html
│   └── cv-design-tips-for-students.html
├── css/
│   └── style.css           All styles — one file, well-commented
├── js/
│   └── main.js             Navigation, animations, form handling
└── images/
    ├── logo.png            ← ADD YOUR LOGO HERE
    ├── hero-bg.jpg         ← ADD A HERO PHOTO HERE (optional but recommended)
    └── portfolio/          ← ADD PROJECT SCREENSHOTS HERE
```

---

## How to Add a New Blog Post

1. Go to the `blog/` folder
2. Copy one of the existing post files (e.g., `cv-design-tips-for-students.html`)
3. Rename the copy to match your post title (e.g., `how-to-start-a-business-online.html`)
4. Open the new file and update:
   - The `<title>` tag (line 5)
   - The `<meta name="description">` tag (line 6)
   - The `og:title` and `og:description` tags
   - The page hero heading and subtitle
   - The `<article>` content (replace everything between the `<div class="blog-post__meta">` and the closing `</article>`)
   - The breadcrumb text
   - The date, reading time, and category tag
5. Open `blog.html` and add a new `<a class="blog-card">` block following the same pattern as the existing ones
6. Save both files. Done.

---

## How to Edit Service Descriptions

Each service has its own page in the `services/` folder. Open the relevant file and edit the text inside the `<article>` or main content `<div>`. The structure is:
- `services/website-design.html`
- `services/blog-creation.html`
- `services/cv-design.html`
- `services/statistical-analysis.html`

The service overview page `services.html` also contains summaries — edit those separately if needed.

---

## How to Set Up the Contact Form (Formspree)

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Click "New Form" — give it a name like "MPS Contact Form"
3. Copy your form endpoint — it looks like: `https://formspree.io/f/abcdefgh`
4. Open `contact.html` and find this line (around line 100):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
   ```
5. Replace `YOUR_FORM_ID` with your actual ID from Formspree
6. Test the form — submissions will be emailed to the address on your Formspree account

---

## How to Deploy to Netlify

### Option A — Drag and Drop (easiest, no account needed for first deploy)
1. Go to [https://netlify.com](https://netlify.com) and create a free account
2. Click "Add new site" → "Deploy manually"
3. Drag your entire `maluti-peak-solutions` folder into the upload area
4. Netlify gives you a live URL instantly (e.g., `random-name.netlify.app`)
5. You can set a custom domain in Site Settings → Domain Management

### Option B — GitHub + Auto-Deploy (recommended for ongoing updates)
1. Create a free GitHub account at [https://github.com](https://github.com)
2. Create a new repository and upload your project files
3. In Netlify: "Add new site" → "Import from Git" → connect your GitHub repo
4. Every time you push changes to GitHub, Netlify auto-deploys them

### Connecting a Custom Domain
1. In Netlify: Site Settings → Domain Management → Add custom domain
2. Enter your domain (e.g., `malutipeak.co.ls`)
3. Follow Netlify's instructions to update your domain's DNS records with your registrar

---

## Placeholder Content to Replace Before Going Live

Work through this checklist before launching:

### Contact Information
- [ ] Email address — search for `info@malutipeak.co.ls` in all files and replace with your real email
- [ ] Phone number — search for `+266 0000 0000` and replace with your real number
- [ ] Physical address — update "Maseru, Lesotho" if you want to be more specific

### Social Media Links
- [ ] In every page, find the `.footer__social` section and replace `href="#"` with your real social media URLs
- [ ] Same for the contact page social links
- [ ] Update the `aria-label` if you change which platforms you're on

### Logo
- [ ] Save your logo file as `images/logo.png`
- [ ] For best results in the dark navy nav bar, use a version with a transparent background (PNG with transparency)
- [ ] If you have a white-background PNG, it will still work but may look like a white box in the nav

### Hero Section
- [ ] Add a real photo as `images/hero-bg.jpg` (a mountain landscape, office photo, or team photo works well)
- [ ] The gradient overlay will still show on top of it, so don't worry about perfect colour matching

### Team Section (about.html)
- [ ] Replace the 4 placeholder team cards with real names, roles, and short bios

### Portfolio Section (portfolio.html)
- [ ] Replace the 6 placeholder cards with real completed projects
- [ ] Add screenshot images to `images/portfolio/` and reference them in the `<img>` tags

### Formspree Form
- [ ] Replace `YOUR_FORM_ID` in contact.html with your real Formspree endpoint

### Stats Bar (index.html)
- [ ] Update the numbers if you want to show real stats (clients served, projects completed, etc.)

---

## Colour Reference

| Name        | Hex       | Used for                        |
|-------------|-----------|----------------------------------|
| Navy        | `#1A3A6B` | Nav, headings, buttons          |
| Navy Dark   | `#0D1F3C` | Footer, deepest backgrounds     |
| Sky Blue    | `#2D7DD2` | Links, accents, tags            |
| Gold        | `#F5A623` | CTA buttons, highlights         |
| Off-White   | `#F8F9FA` | Page background                 |
| Section Alt | `#EEF2F7` | Alternating section background  |

These match your logo's colour scheme.

---

## Decisions Made

| Decision | Choice | Reason |
|---|---|---|
| Framework | Plain HTML/CSS/JS | Matches your skill level; no build tools or CLI needed |
| Colour palette | Navy + Gold (adapted from your logo) | Your logo is blue-dominant; green/slate would clash |
| Fonts | Poppins (headings) + Inter (body) | Both free on Google Fonts; modern, readable, professional |
| Form handling | Formspree | Free tier, easy setup, no backend needed |
| Deployment | Netlify | Easiest for static sites; drag-and-drop option available |
| Blog approach | Individual HTML files | No frameworks needed; copy-and-edit is straightforward |
| CSS approach | Single stylesheet with CSS variables | Easy to update colours/fonts site-wide in one place |

---

## Tips for Editing

- **Change all colours at once:** Open `css/style.css`, scroll to the `:root` block at the top, and edit the hex values there. Everything updates automatically.
- **Change fonts:** Replace the Google Fonts `<link>` in any HTML file's `<head>` and update `--font-head` / `--font-body` in the CSS `:root` block.
- **Add a page:** Copy any existing HTML file, update the nav `nav__link--active` class to the new page name, and update the content.
- **Test mobile:** In Chrome, press F12 → click the phone icon in the top-left of DevTools → test at 375px (iPhone SE) and 768px (iPad).
