# Mohamed Abd Elmoniem — Junior Data Analyst Portfolio

A high-performance, responsive personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, configured as a 100% static application for deployment on **GitHub Pages**.

---

## Features

- **Static Architecture:** Pre-rendered HTML export (`output: 'export'`) with zero server overhead.
- **Data-as-Code:** All projects, skills, education, and settings are managed via clean JSON files in `data/`.
- **Pre-rendered Case Studies:** Individual project detail pages (`/projects/[slug]/`) statically generated at build time via `generateStaticParams()`.
- **Modern Responsive Design:** Custom theme featuring dark/light mode toggle with `localStorage` persistence, custom teal (`#2ec4a6`) and amber (`#f5b94a`) accents, and responsive mobile navigation.
- **Dynamic Micro-Animations:** SVG bar chart growth animation and smooth rise effects.
- **Serverless Contact Form:** Client-side validation, anti-spam honeypot, configurable external form submission (Web3Forms / Formspree), and automatic `mailto:` client fallback.
- **Continuous Deployment:** Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys directly to GitHub Pages on every push to `main`.

---

## Project Structure

```text
├── .github/workflows/deploy.yml  # GitHub Actions CI/CD deployment workflow
├── app/                          # Next.js App Router
│   ├── globals.css               # Design system tokens and animations
│   ├── layout.tsx                # Base HTML layout and theme initialization
│   ├── not-found.tsx             # 404 page (exported to out/404.html)
│   ├── page.tsx                  # Portfolio homepage
│   └── projects/[slug]/page.tsx  # Dynamic case study route with generateStaticParams()
├── components/                   # Reusable UI components
│   ├── ContactForm.tsx           # Contact form with serverless/mailto handling
│   ├── Navbar.tsx                # Responsive navigation with mobile menu
│   └── ThemeToggle.tsx           # Dark/light theme switcher
├── data/                         # Portfolio content data store
│   ├── certifications.json       # Certification records
│   ├── education.json            # University degree & education records
│   ├── experience.json           # Work experience history
│   ├── projects.json             # Case study projects and metadata
│   ├── settings.json             # Social links, email, and asset paths
│   └── skills.json               # Categorized technical competencies
├── lib/                          # Utility functions and data layer
│   └── data.ts                   # Static data getters and base path helper
├── public/                       # Static web assets
│   ├── documents/                # CV PDF downloads
│   ├── images/                   # Profile avatar and project screenshots
│   ├── favicon.svg               # Brand icon
│   └── robots.txt                # Search engine crawler rules
├── next.config.js                # Static export & repository base path configuration
└── package.json                  # Dependencies and build scripts
```

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build and Test Static Export Locally
```bash
npm run build
```
This generates the production static export into the `out/` directory. You can preview the production build locally with any static file server:
```bash
npx serve out
```

---

## Updating Portfolio Content

All content is managed through local JSON files in the `data/` folder:

- **Projects:** Add or edit case studies in `data/projects.json`. To feature a project on the homepage, set `"featured": true`. Ensure `"published": true`.
- **Skills:** Manage competencies and categories in `data/skills.json`.
- **Experience:** Add internships or work history in `data/experience.json`.
- **Education:** Update university details in `data/education.json`.
- **Certifications:** Add certificates to `data/certifications.json`.
- **Settings:** Update your email, LinkedIn URL, GitHub URL, and other contact links in `data/settings.json`.

---

## Adding Images and Documents

Static media should be placed inside the `public/` directory:

1. **Resume / CV:**
   - Place your resume PDF in `public/documents/cv.pdf`.
   - In `data/settings.json`, set `"cvUrl": "/documents/cv.pdf"`.
2. **Profile Avatar:**
   - Place your picture in `public/images/avatar.jpg`.
   - In `data/settings.json`, set `"profileImage": "/images/avatar.jpg"`.
   - *Note: If left empty, the site automatically renders the signature animated SVG data chart.*
3. **Project Screenshots:**
   - Place images in `public/images/projects/<filename>.webp` (or `.jpg`, `.png`).
   - In `data/projects.json`, set `"image": "/images/projects/<filename>.webp"`.

---

## Configuring the Contact Form

The contact form in `components/ContactForm.tsx` works out of the box with an intelligent fallback system:

### Option A: Web3Forms (Recommended, Free & Instant)
1. Get a free access key from [Web3Forms](https://web3forms.com/) (delivered to your email instantly).
2. Add an environment variable in GitHub repository secrets or your local `.env.local`:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```

### Option B: Formspree
1. Create a form at [Formspree](https://formspree.io/).
2. Add your form ID:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your-form-id
   ```

### Option C: Default Mailto Fallback (Zero Setup)
If no third-party service is configured, clicking "Send message" validates the form and automatically opens the visitor's default email client pre-filled with the subject, message, and sender details directed to `mohamedshaeen680@gmail.com`.

---

## Deploying to GitHub Pages

### 1. Push to GitHub
Commit your project files to your GitHub repository on the `main` branch:
```bash
git add .
git commit -m "Configure static portfolio for GitHub Pages"
git push origin main
```

### 2. Enable GitHub Pages via GitHub Actions
1. Go to your repository on GitHub.
2. Navigate to **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. The deployment workflow `.github/workflows/deploy.yml` will run automatically.

### 3. Subpath Handling
`next.config.js` automatically derives the repository subpath when running in GitHub Actions:
- If deployed to `https://USERNAME.github.io/REPOSITORY/`, the subpath is automatically configured.
- If deployed as a custom domain or user page (`https://USERNAME.github.io`), it serves cleanly from the root `/`.

---

## Backend Changes & Decommissioned Features

In accordance with GitHub Pages static hosting requirements:
- **Admin Dashboard (`/admin`):** Decommissioned. Content is updated via Git ("Data-as-Code") instead of an in-browser CMS.
- **Backend Authentication & JWT:** Removed to eliminate security risks and server requirements.
- **Node.js API Routes (`/api/*`):** Replaced with static data generation and serverless contact delivery.
- **Server Disk Uploads (`/uploads`):** Replaced by standard static assets in `public/`.
- **Prisma ORM:** Removed unused legacy PostgreSQL dependencies (`@prisma/client`, `prisma`).
