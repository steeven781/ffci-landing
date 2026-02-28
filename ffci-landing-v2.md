# FFCI Guatemala – Multi Page Landing Implementation

Framework: Next.js 14 (App Router)
Styling: TailwindCSS
Animations: Framer Motion
Icons: Lucide
Language: TypeScript
Architecture: Multi-page

---

# 1️⃣ Project Initialization

Create project:

npx create-next-app@latest ffci-landing \
 --ts --tailwind --eslint --app --src-dir --import-alias "@/\*"

cd ffci-landing

Install dependencies:

npm install framer-motion lucide-react

---

# 2️⃣ Folder Structure

src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── servicios/page.tsx
│ ├── cursos/page.tsx
│ ├── casos-exito/page.tsx
│ ├── agenda/page.tsx
│
├── components/
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │
│ ├── sections/
│ │ ├── Hero.tsx
│ │ ├── About.tsx
│ │ ├── Services.tsx
│ │ ├── History.tsx
│ │ ├── Testimonials.tsx
│
├── lib/
│ ├── motion.ts
│
├── styles/
│ ├── globals.css
│
public/
├── assets/
│ ├── logo-ffci.png
│ ├── about-1.png
│ ├── history-1.png

---

# 3️⃣ Tailwind Configuration

Update tailwind.config.ts:

Add custom colors, fonts, radius, container width.

Colors:

navy: #08284F
navy2: #0D3B66
sky: #5087C7
gold: #CBAC58
off: #F6F7F3
grayblue: #8D99AE

Border radius:

58px as rounded-xl2

Max container width:

1706px

---

# 4️⃣ Fonts

Use next/font/google

Playfair Display → headings
Raleway → body

Headings:
Hero H1: 105px
Section H1: 93px
Large: 70px

Body:
35px
30px
20px

---

# 5️⃣ Global Layout (layout.tsx)

- Apply font variables
- Set base font family
- Background white
- Default text color navy
- Wrap children

---

# 6️⃣ Motion Presets

Create lib/motion.ts

Export fadeUp animation:

hidden:
opacity 0
y 20

show:
opacity 1
y 0
duration 0.55
ease easeOut

Use in sections with Framer Motion.

---

# 7️⃣ Floating Header (Reusable Component)

Specifications:

Height: 115px
Border-radius: 58px
Margin-top: 22px
Centered
Shadow soft
White background

Navigation links:
Servicios
Casos de éxito
Cursos
Agenda una cita

CTA highlighted on right

Responsive:
Collapse to mobile menu at 768px

---

# 8️⃣ Home Page Structure (app/page.tsx)

Render:

<Header />
<Hero />
<About />
<Services />
<History />
<Testimonials />
<Footer />

---

# 9️⃣ Section Specifications

## HERO

Background navy2
Centered content
Large serif heading white
Subtext centered max width 1000px
Primary CTA rounded full sky color
Trust logos placeholders

## ABOUT

Left rounded image (about-1.png)
Right content
Checklist items
Stats bar with 4 columns
Rounded container with border

## SERVICES

Background sky
Large rounded top corners
3 white cards floating
Shadow medium
Icons Lucide

## HISTORY

Dark navy section
Accordion left
Rounded image (history-1.png)
Smooth expand animation

## TESTIMONIALS

Light blue background
Rounded corners top
3 cards
Shadow small
CTA buttons

---

# 🔟 Multi Page Routing

Create pages:

/servicios
/cursos
/casos-exito
/agenda

Each page:

- Hero style top section
- Section heading serif
- Consistent container width
- Reuse Header & Footer

Use layout shared components.

---

# 🎨 Design Tokens Summary

Max width: 1706px
Section padding: 120px vertical
Container horizontal padding: 24px
Large border radius: 58px
Cards radius: 24px

---

# 📦 Performance Rules

Use next/image
Lazy load non-critical sections
Preload Playfair font
Use SVG icons
Optimize images

---

# 🧠 Accessibility

Proper heading hierarchy
ARIA for accordion
Alt text for images
High contrast for navy sections

---

# 🚀 Expected Output

Claude should:

1. Generate full Next.js multi-page project
2. Implement responsive layout
3. Implement animation using Framer Motion
4. Use Tailwind utilities only
5. Keep components modular
6. Ensure production-ready structure
7. Avoid inline styles
8. Use reusable container component
9. Implement mobile-first design
10. Add basic SEO meta tags per page

---

End of specification.
