# M.M Design d'intérieur

Luxury interior design website for M.M Design d'intérieur, a Moroccan interior design company.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Multi-language Support**: French (default), English, and Darija (Arabic)
- **Fully Responsive**: Mobile-first design approach
- **SEO Optimized**: Proper meta tags, semantic HTML, optimized headings
- **Premium Design**: Luxury, modern, and industrial design aesthetic
- **WhatsApp Integration**: Floating button and form integration
- **Project Showcase**: Portfolio gallery with filters and before/after slider
- **Contact Form**: Integrated with WhatsApp for lead generation

## 📁 Project Structure

```
mm-design-interieur/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form and map
│   ├── portfolio/      # Portfolio/gallery page
│   ├── services/       # Services page
│   ├── testimonials/   # Testimonials page
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header with language switcher
│   ├── Footer.tsx      # Footer component
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── BeforeAfterSlider.tsx  # Before/after image slider
├── contexts/
│   └── LanguageContext.tsx  # Language context provider
├── lib/
│   └── translations.ts  # Translation data (FR/EN/AR)
└── public/             # Static assets (logo, images)

```

## 🛠️ Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### WhatsApp Integration

Update the WhatsApp number in:
- `components/WhatsAppButton.tsx` - Line with `whatsappNumber`
- `app/contact/page.tsx` - Line with `whatsappNumber`

Replace `212XXXXXXXXX` with your actual WhatsApp number (country code + number without +).

### Google Maps

The contact page includes a Google Maps embed. Update the iframe `src` in `app/contact/page.tsx` with your actual location coordinates.

### Contact Information

Update contact details in `lib/translations.ts`:
- Phone number
- Email address
- Address

## 🎨 Design System

### Colors
- **Primary**: Deep black/charcoal (#1a1a1a)
- **Accent**: Gold (#d4af37) / Orange (#d97706)
- **Secondary**: Soft gray/off-white (#f5f5f5)

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

## 📱 Pages

1. **Home** (`/`) - Hero section, services preview, featured projects, testimonials preview
2. **About** (`/about`) - Company story, vision, and expertise
3. **Services** (`/services`) - Detailed service offerings
4. **Portfolio** (`/portfolio`) - Project gallery with filters and before/after sliders
5. **Testimonials** (`/testimonials`) - Client testimonials
6. **Contact** (`/contact`) - Contact form, information, and Google Maps

## 🌐 Languages

The website supports three languages:
- **French** (default) - `fr`
- **English** - `en`
- **Darija** (Arabic) - `ar`

Language selection is stored in localStorage and persists across sessions.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

The project is ready for Vercel deployment out of the box.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Updates

All content translations are stored in `lib/translations.ts`. Update the translation objects to modify content across all languages.

## 🔍 SEO

- Semantic HTML structure
- Proper heading hierarchy (H1-H3)
- Meta tags in root layout
- Clean, descriptive URLs
- Optimized images with Next.js Image component

## 📸 Images

Currently using Unsplash placeholder images. Replace with actual project images by updating the image URLs in:
- `app/page.tsx` (homepage projects)
- `app/portfolio/page.tsx` (portfolio gallery)
- `app/services/page.tsx` (service images)
- `app/about/page.tsx` (about images)

## 🎯 Key Features

- ✅ Multi-language support (FR/EN/AR)
- ✅ Responsive design (mobile-first)
- ✅ WhatsApp integration
- ✅ Contact form with WhatsApp redirect
- ✅ Portfolio gallery with filters
- ✅ Before/after image slider
- ✅ Google Maps integration
- ✅ SEO optimized
- ✅ Smooth animations and transitions
- ✅ Premium luxury design

## 📄 License

Private project for M.M Design d'intérieur

---

**Built with ❤️ for M.M Design d'intérieur**
