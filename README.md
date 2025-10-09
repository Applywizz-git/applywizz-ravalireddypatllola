# Ravali Reddy Patllola - Portfolio Website

A stunning, modern portfolio website showcasing my experience as a Java Developer with 4+ years of expertise in building scalable web applications, microservices, and cloud-native solutions.

## 🚀 Live Demo

Visit the live site: [Your deployed URL]

## 🎨 Features

- **Cinematic Loading Animation** - Silver letter fade-in/out sequence
- **Responsive Design** - Fully optimized for all devices
- **Dark/Light Theme** - Seamless theme switching
- **Smooth Animations** - Powered by Framer Motion and AOS.js
- **Interactive Projects Carousel** - Swiper.js with 3D coverflow effect
- **Vertical Timeline** - Alternating experience cards
- **Contact Form** - With confetti celebration on submit
- **Scroll-to-Top FAB** - Smooth navigation experience
- **SEO Optimized** - Semantic HTML and meta tags
- **Accessible** - Keyboard navigation and ARIA labels

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library

### Animations & Interactions
- **Framer Motion** - Advanced animations
- **AOS.js** - Scroll animations
- **Swiper.js** - Touch slider/carousel
- **React Type Animation** - Typewriter effects
- **Canvas Confetti** - Celebration effects

### Utilities
- **React Router** - Client-side routing
- **React Query** - Data fetching
- **Sonner** - Toast notifications
- **Lucide React** - Icon library

## 📁 Project Structure

```
├── public/
│   └── assets/
│       └── Ravali_Reddy_Patllola_Resume.pdf
├── src/
│   ├── assets/
│   │   ├── profile-photo.jpg
│   │   └── hero-bg.jpg
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Skills.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## 🎨 Color Palette

The design uses a carefully selected color scheme:

- **Deep Charcoal** `#0B0F19` - Background
- **Soft Off-White** `#F8F8F5` - Text/Background
- **Vibrant Teal** `#14B8A6` - Primary accent
- **Electric Violet** `#7C3AED` - Secondary accent
- **Muted Gray** `#6B7280` - Subtext
- **Bright Coral** `#EF4444` - Highlight/CTA

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### Update Personal Information

All content is centralized in the component files. Update the following:

#### 1. Header & Hero (`src/components/Header.tsx`, `src/components/Hero.tsx`)
- Name, title, location
- Email, phone, LinkedIn
- Typewriter text sequences
- CTA button links

#### 2. About Section (`src/components/About.tsx`)
- Professional summary
- Stats counters

#### 3. Experience (`src/components/Experience.tsx`)
- Job titles, companies, dates
- Achievement bullet points

#### 4. Projects (`src/components/Projects.tsx`)
- Project titles, descriptions
- Technologies used
- Key features

#### 5. Skills (`src/components/Skills.tsx`)
- Skill categories and items

#### 6. Certifications (`src/components/Certifications.tsx`)
- Certificate titles and providers

#### 7. Education (`src/components/Education.tsx`)
- Degrees, institutions, dates

#### 8. Contact (`src/components/Contact.tsx`)
- Contact information
- Social links

### Replace Assets

#### Profile Photo
Replace `src/assets/profile-photo.jpg` with your photo

#### Hero Background
Replace `src/assets/hero-bg.jpg` with your preferred background

#### Resume PDF
Add your resume to `public/assets/Ravali_Reddy_Patllola_Resume.pdf`

### Modify Theme

Edit `src/index.css` and `tailwind.config.ts` to change:
- Color palette (HSL values)
- Border radius
- Animations
- Gradients and shadows

## 📄 Site Sections

1. **Header** - Sticky navigation with glass morphism effect
2. **Hero** - Split layout with typewriter headline and profile photo
3. **About** - Professional summary with animated stats
4. **Experience** - Vertical timeline with alternating cards
5. **Projects** - 3D carousel with parallax background
6. **Skills** - Categorized skill grids with hover effects
7. **Certifications** - Animated certification cards
8. **Education** - Educational background cards
9. **Contact** - Form with confetti + social sidebar
10. **Footer** - Social icons and scroll-to-top FAB

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy via GitHub Pages

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Ravali Reddy Patllola**

- Email: ravalip0411@gmail.com
- Phone: +1 (845) 330-9937
- LinkedIn: [linkedin.com/in/ravali-reddyp](https://www.linkedin.com/in/ravali-reddyp/)
- Location: Poughkeepsie, NY

---

⭐️ If you like this project, please give it a star on GitHub!
