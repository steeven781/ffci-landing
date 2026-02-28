# FFCI Guatemala – Landing Page Specification

Viewport Base: 1920 x 1080
Design Height: 1920 x 10849
Style: Corporate, modern, elegant, Christian leadership brand
Design Tool: Adobe XD
Implementation Target: TailwindCSS + React (or Next.js)

---

# 1. Design System

## 🎨 Color Palette (From XD)

Primary Blue Light: #5087C7
Primary Blue: #0D3B66
Primary Dark Navy: #08284F
Darkest Navy: #041F3A
Accent Gold: #CBAC58
Soft Gray Blue: #8D99AE
Light Gray: #F6F7F3
Mid Gray: #777777
Border Gray: #CFCFCF
Footer Navy: #0B2F57

---

## 🔤 Typography

### Headings (Elegant Serif)

Font Family: Playfair Display

- H1 Hero: 105px / #FFFFFF
- H1 Section: 93px / #08284F
- Large Heading: 70px (white / navy variations)

### Body / UI Text

Font Family: Raleway

- Body Large: 35px
- Body Medium: 30px
- Small UI: 20px
- SemiBold Buttons: 25px

---

# 2. Layout System

- Max content width: 1706px
- Centered layout
- Large rounded sections: border-radius 58px
- Section vertical padding: 120px+
- Responsive breakpoints:
  - Desktop: 1920
  - Tablet: 1024
  - Mobile: 768

---

# 3. Page Structure

## 3.1 Floating Header

- Height: 115px
- Background: white
- Border-radius: 58px
- Margin-top: 22px
- Max width: 1706px
- Centered
- Shadow subtle
- Logo left
- Nav center
- CTA right (bold)

Tailwind Concept:

- flex
- items-center
- justify-between
- rounded-[58px]
- shadow-xl

---

## 3.2 Hero Section

Background: Dark Navy (#0D3B66)
Pattern overlay subtle lines
Huge H1 105px white serif
Subtext centered max-width 1000px
CTA rounded pill button (blue gradient)

CTA:

- bg-[#5087C7]
- rounded-full
- px-10 py-4
- text-white

Trust logos row at bottom (grayscale)

---

## 3.3 About Section

Left: Rounded image
Right: Heading + checklist items
Checklist icons blue
Typography navy
Background white

Stats bar:

- Rounded container
- Border light blue
- 4 columns
- Big numbers serif
- Small labels gray

---

## 3.4 Services Section

Background: #5087C7
Large rounded top corners
Heading white
3 cards floating overlapping section

Cards:

- bg-white
- rounded-3xl
- shadow-lg
- p-10
- icon top center
- title navy
- body gray

---

## 3.5 History Section

Dark navy background
Rounded section container
Accordion style left text
Right image rounded
Accordion item open background lighter blue
Chevron icon

---

## 3.6 Team Section

Grid 3 columns
Rounded grayscale portraits
Name bold navy
Role smaller gray
Centered layout

---

## 3.7 Testimonials Section

Background: light blue
Rounded top corners
Left heading white serif
Right CTA buttons dark navy
Cards:

- bg-white
- rounded-2xl
- p-8
- shadow-md

---

## 3.8 Footer

Light gray background
3 columns
Logo + CTA left
Navigation center
Social right
Bottom bar with copyright

---

# 4. Component Strategy

Reusable components:

- <Container />
- <SectionRounded />
- <ButtonPrimary />
- <Card />
- <Accordion />
- <StatCard />
- <TeamCard />
- <TestimonialCard />

---

# 5. Tailwind Config Required

Extend theme:

- Custom colors
- Font families
- Custom border radius 58px
- Max width 1706px

---

# 6. Performance Considerations

- Use next/image if using Next.js
- Lazy load team section
- Optimize hero background
- Use SVG icons
- Preload Playfair Display

---

# 7. Animation Suggestions

- Fade up on scroll
- Hover lift cards
- Smooth accordion expand
- Button hover gradient shift

---

# 8. Accessibility

- Contrast check for blue backgrounds
- Proper heading structure
- aria-expanded for accordion
- alt tags required
