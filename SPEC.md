# Sri Visweswara Exports - Website Specification

## 1. Project Overview

- **Project Name**: Sri Visweswara Exports Website
- **Type**: Single-page corporate website
- **Core Functionality**: Showcase export business for rice, dals, and flours to Kuwait, Qatar, and USA
- **Target Users**: International buyers, importers, distributors

---

## 2. UI/UX Specification

### Layout Structure

**Sections (in order):**
1. **Navigation Bar** - Fixed top, transparent on hero, solid on scroll
2. **Hero Section** - Full viewport height with animated background
3. **About Section** - Company introduction with stats
4. **Products Section** - Grid display of product categories
5. **Export Destinations** - Map/visual showing countries
6. **Why Choose Us** - Features/benefits
7. **Contact Section** - Contact form and details
8. **Footer** - Links, social, copyright

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary Green: `#1a5f2a` (deep forest green)
- Secondary Green: `#2d8a4e` (vibrant green)
- Accent Gold: `#d4af37` (metallic gold)
- Light Gold: `#f4e4bc` (soft cream gold)
- Dark: `#0d2818` (very dark green)
- Light: `#f9f7f2` (warm off-white)
- Text Dark: `#1a1a1a`
- Text Light: `#ffffff`

**Typography:**
- Headings: `Playfair Display` (serif, elegant)
- Body: `DM Sans` (modern sans-serif)
- Accent: `Cormorant Garamond` (for quotes/highlights)

**Font Sizes:**
- H1: 4rem (desktop), 2.5rem (mobile)
- H2: 3rem (desktop), 2rem (mobile)
- H3: 1.75rem
- Body: 1.1rem
- Small: 0.9rem

**Spacing System:**
- Section padding: 100px vertical (desktop), 60px (mobile)
- Container max-width: 1200px
- Grid gap: 30px
- Element spacing: 20px

**Visual Effects:**
- Box shadows: `0 10px 40px rgba(26, 95, 42, 0.15)`
- Border radius: 12px for cards, 50px for buttons
- Glassmorphism on nav: `backdrop-filter: blur(10px)`

### Components

**Navigation:**
- Logo (text-based with icon)
- Menu items: Home, About, Products, Export To, Contact
- CTA button: "Get Quote"
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Animated grain/rice background pattern
- Main headline with typewriter effect
- Subheadline
- Two CTA buttons: "Explore Products" (primary), "Contact Us" (outline)
- Floating product images with parallax

**Product Cards:**
- Image container with hover zoom
- Category title
- Product list
- "Know More" link
- Hover: lift effect + gold border glow

**Stats Counter:**
- Animated number count-up
- Icon
- Label
- Countries served: 3+
- Years experience: 15+
- Products: 20+

**Export Map:**
- Stylized world map
- Highlighted countries (India)
- Pulse animation on markers

**Contact Form:**
- Fields: Name, Email, Phone, Product Interest (dropdown), Message
- Submit button with loading state
- Form validation

**Animations:**
- Page load: staggered fade-in from bottom
- Scroll: elements animate in when visible
- Hover: scale(1.03) + shadow increase
- Buttons: ripple effect on click
- Numbers: count-up animation

---

## 3. Functionality Specification

### Core Features

1. **Smooth Scroll Navigation** - Click nav items to scroll to sections
2. **Sticky Navigation** - Nav becomes solid on scroll past hero
3. **Mobile Menu** - Hamburger toggle with animated drawer
4. **Product Category Expansion** - Click to see product details
5. **Contact Form** - Client-side validation, success message
6. **Scroll Animations** - Intersection Observer for reveal effects
7. **Counter Animation** - Numbers count up when in view

### User Interactions

- Nav links → smooth scroll to section
- Product cards → hover effects, click expands details
- Contact form → validation, submit shows success
- Mobile menu → toggle open/close
- CTA buttons → scroll to contact section

### Data Handling

- Form data: console.log for demo (no backend)
- No persistent storage needed

---

## 4. Acceptance Criteria

- [ ] Page loads with smooth entrance animations
- [ ] Navigation is fixed and changes style on scroll
- [ ] All 3 export destinations are visually highlighted
- [ ] All product categories are displayed with hover effects
- [ ] Contact form validates and shows success message
- [ ] Site is fully responsive across all breakpoints
- [ ] Green and gold color theme is consistently applied
- [ ] Animations are smooth (60fps) and not distracting
- [ ] All text is readable and accessible
- [ ] No console errors on page load