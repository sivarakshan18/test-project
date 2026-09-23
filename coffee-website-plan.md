# Brew & Bean — Coffee Website Frontend Plan

## 1. Project Overview

**Project Name:** Brew & Bean

**Project Type:** Frontend-only café website

**Framework:** Next.js with TypeScript

**Styling:** Tailwind CSS

**Icons:** Lucide React

**Backend:** None

**Database:** None

**API:** None

**Data:** Static/mock data stored inside the frontend project

### Goal

Build a clean, responsive and modern coffee shop website that allows visitors to discover the café, browse its menu, learn about the café, and find contact/location information.

The project is intentionally simple so a 4-member team can build it while practicing Git branches, pull requests, merging, and conflict resolution.

---

# 2. Main Features

The website will contain exactly **4 main features**:

1. **Home & Café Landing Page**
2. **Menu & Product Browsing**
3. **About & Gallery**
4. **Contact & Café Information**

Each feature can be developed as an independent feature branch by one team member.

---

# 3. Feature 1 — Home & Café Landing Page

## Purpose

Create the first impression of the café and guide users toward the menu and other sections.

## Route

```text
/
```

## Main Sections

### 3.1 Navigation Bar

Create a responsive navigation bar containing:

- Brew & Bean logo/name
- Home link
- Menu link
- About link
- Gallery link
- Contact link
- Mobile hamburger menu

### 3.2 Hero Section

Display:

- Large heading: `Fresh Coffee. Good Moments.`
- Short café description
- Primary CTA: `Explore Menu`
- Secondary CTA: `Learn More`
- Coffee/café hero image

Example content:

> Your cozy place for fresh coffee, conversations and good food.

### 3.3 Popular Items

Show 3 or 4 popular products using reusable cards.

Example:

- Cappuccino — ₹149
- Latte — ₹159
- Matcha Latte — ₹169
- Croissant — ₹99

Each card should contain:

- Image
- Product name
- Short description
- Price
- Optional `View Menu` button

### 3.4 Café Highlights

Show small information cards such as:

- Freshly brewed daily
- Cozy workspace
- Free Wi-Fi
- Fresh bakery items

### 3.5 Footer Preview

The footer should contain:

- Café name
- Short description
- Navigation links
- Social links
- Copyright text

## Components

```text
components/
├── Navbar.tsx
├── Hero.tsx
├── PopularItems.tsx
├── ProductCard.tsx
└── Footer.tsx
```

## Acceptance Criteria

- Home page loads without errors.
- Navigation links work.
- Hero section is responsive.
- Popular products are displayed from static data.
- CTA buttons navigate correctly.
- Desktop and mobile layouts are supported.

## Suggested Git Branch

```text
feature/home
```

---

# 4. Feature 2 — Menu & Product Browsing

## Purpose

Allow visitors to browse the café's coffee, tea, snacks, and desserts.

## Route

```text
/menu
```

## Main Sections

### 4.1 Menu Header

Display:

- Page title: `Our Menu`
- Short description
- Decorative coffee image

### 4.2 Category Filter

Create frontend-only category filtering.

Categories:

```text
All
Coffee
Tea
Snacks
Desserts
```

When the user clicks a category, only matching products should be displayed.

### 4.3 Product Grid

Use reusable product cards.

Each card contains:

- Product image
- Product name
- Description
- Price
- Category
- `Add to Order` button

The `Add to Order` button does not require a backend. It can display a simple client-side message such as:

```text
Added to your order ☕
```

### 4.4 Example Product Data

```ts
const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk foam",
    price: 149,
    category: "Coffee",
  },
  {
    id: 2,
    name: "Latte",
    description: "Smooth espresso with creamy steamed milk",
    price: 159,
    category: "Coffee",
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Creamy matcha with chilled or steamed milk",
    price: 169,
    category: "Tea",
  },
];
```

### 4.5 Empty State

If a category contains no products, display a simple message:

```text
No items available in this category.
```

## Components

```text
components/
├── MenuHeader.tsx
├── CategoryFilter.tsx
├── MenuGrid.tsx
├── MenuCard.tsx
└── OrderToast.tsx
```

## Acceptance Criteria

- `/menu` loads correctly.
- All menu categories are visible.
- Category filtering works on the client side.
- Product cards are reusable.
- Prices are displayed correctly.
- `Add to Order` gives visual feedback.
- Page works on mobile and desktop.

## Suggested Git Branch

```text
feature/menu
```

---

# 5. Feature 3 — About & Gallery

## Purpose

Tell visitors about the café and show the atmosphere through a simple image gallery.

## Routes

```text
/about
/gallery
```

## 5.1 About Page

### About Hero

Display:

- `Our Story`
- Short story about Brew & Bean
- Café image

Example:

> Brew & Bean started with one simple idea: good coffee brings people together.

### 5.2 Café Statistics

Show simple static values:

```text
5+      20+       10K+
Years   Drinks    Happy
        Served    Customers
```

### 5.3 Why Choose Us

Create 3 or 4 cards:

- Fresh ingredients
- Friendly atmosphere
- Quality coffee
- Comfortable workspace

### 5.4 Gallery Page

Create a responsive image grid containing:

- Coffee
- Café interior
- Barista
- Desserts
- Seating area
- Bakery items

Desktop layout can use 3 columns and mobile can use 1 column.

### 5.5 Image Interaction

Optional frontend interaction:

- Clicking an image opens a simple modal.
- Modal shows larger image.
- Close button returns to gallery.

No external image service is required.

## Components

```text
components/
├── StorySection.tsx
├── StatCard.tsx
├── FeatureCard.tsx
├── GalleryGrid.tsx
└── ImageModal.tsx
```

## Acceptance Criteria

- `/about` and `/gallery` work.
- Café story is visible.
- Statistics are displayed clearly.
- Gallery is responsive.
- Images have useful `alt` text.
- Image modal opens and closes correctly if implemented.

## Suggested Git Branch

```text
feature/about-gallery
```

---

# 6. Feature 4 — Contact & Café Information

## Purpose

Give visitors the practical information needed to visit the café.

## Route

```text
/contact
```

## Main Sections

### 6.1 Contact Information

Display:

- Address
- Phone number
- Email
- Opening hours

Example:

```text
123 Anna Nagar, Chennai
+91 98765 43210
hello@brewandbean.com
```

### 6.2 Opening Hours

```text
Monday - Friday    8:00 AM - 10:00 PM
Saturday - Sunday  9:00 AM - 11:00 PM
```

### 6.3 Contact Form

Create a frontend-only form with:

- Name
- Email
- Message
- Submit button

No backend submission is required.

On submit, show:

```text
Thanks! Your message has been received.
```

The form should include basic client-side validation:

- Name is required.
- Valid email format is required.
- Message is required.

### 6.4 Location Section

Add a static map placeholder or a simple styled location card.

Example:

```text
┌──────────────────────────┐
│                          │
│       Café Location      │
│       Anna Nagar         │
│                          │
└──────────────────────────┘
```

A real map integration is not required.

## Components

```text
components/
├── ContactInfo.tsx
├── OpeningHours.tsx
├── ContactForm.tsx
└── LocationCard.tsx
```

## Acceptance Criteria

- `/contact` loads correctly.
- Contact information is clearly displayed.
- Opening hours are readable.
- Form validates required fields.
- Form shows success feedback without requiring a backend.
- Layout is responsive.

## Suggested Git Branch

```text
feature/contact
```

---

# 7. Shared UI Requirements

All four features should use a consistent design system.

## Colors

Suggested palette:

```text
Coffee Brown:  #6F4E37
Cream:         #FFF8F0
Dark Brown:    #2E2118
Light Brown:   #C8A27A
White:         #FFFFFF
```

## Typography

Use a clean modern font combination.

Suggested:

- Heading font: Playfair Display
- Body font: Inter

## Common Components

```text
components/
├── Navbar.tsx
├── Footer.tsx
├── Button.tsx
├── SectionTitle.tsx
├── ProductCard.tsx
└── Container.tsx
```

These shared components should be reused instead of duplicating code across pages.

---

# 8. Recommended Project Structure

```text
brew-and-bean/
│
├── app/
│   ├── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── MenuCard.tsx
│   ├── CategoryFilter.tsx
│   ├── GalleryGrid.tsx
│   ├── ImageModal.tsx
│   ├── ContactForm.tsx
│   └── Button.tsx
│
├── data/
│   └── menu.ts
│
├── public/
│   └── images/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```


