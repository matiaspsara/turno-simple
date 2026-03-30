# Design System: La Vanguardia del Barrio

## 1. Overview & Creative North Star
**Creative North Star: "The Urban Curator"**
This design system is an homage to the classic Buenos Aires barbershop, reimagined through a lens of high-end editorial digital design. It rejects the "template" aesthetic in favor of a layout that feels like a premium lifestyle magazine.

We break the rigid digital grid through **Intentional Asymmetry**. Large, expressive serif headings should overlap container boundaries, and images should sit slightly off-center to create a sense of movement and "Porteño" flair. We avoid the clinical feel of standard UI by using a warm, paper-like foundation and deep, organic greens that evoke the leather and woodwork of a legendary Palermo barbería.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the "Barrio" but elevated for the "City."

### The Palette
- **Primary (`#1b3a2d`):** A deep, intellectual bottle green. Used for high-impact brand moments and main structural containers.
- **Surface/Background (`#fff9ee`):** A warm, unbleached cream that provides a sophisticated, non-glare reading experience.
- **Tertiary/Accent (`#c0392b`):** A brick-red vermillion. To be used sparingly—like a signature on a painting—for primary CTAs and critical alerts.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined through background color shifts.
- A `surface-container-low` (`#fbf3e1`) section should sit directly against a `surface` background to define a zone.
- Use the **Signature Texture**: Apply a subtle noise overlay (2% opacity) or a very soft gradient from `primary` to `primary-container` on hero sections to give the digital interface a tactile, "physical" soul.

### Glass & Gradient
To maintain a premium feel, use **Glassmorphism** for floating navigation bars or overlay modals. Use a semi-transparent `surface` color with a `backdrop-blur` of 12px to allow the deep greens of the background to bleed through, creating an integrated, high-end depth.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to balance heritage with modernity.

- **Display & Headlines (Newsreader):** An expressive serif. This is our "Classic" soul. Use `display-lg` for hero statements with tight letter-spacing. Don't be afraid to let headers hang over the edge of a card.
- **Body & UI (Manrope):** A clean, geometric sans-serif. This is our "Modern" reliability. It ensures high legibility on mobile devices even at small scales.

| Role | Font | Size | Usage |
| :--- | :--- | :--- | :--- |
| **Display LG** | Newsreader | 3.5rem | High-impact marketing hooks |
| **Headline MD** | Newsreader | 1.75rem | Section titles (e.g., "Nuestros Servicios") |
| **Title MD** | Manrope | 1.125rem | Card headers and navigation |
| **Body LG** | Manrope | 1rem | Main descriptive text |
| **Label MD** | Manrope | 0.75rem | Metadata and micro-copy |

---

## 4. Elevation & Depth: Tonal Layering
We move away from the "shadow-heavy" look of 2010s Material Design. Depth in this system is achieved through **Tonal Layering**.

- **The Layering Principle:** Stack `surface-container-lowest` (`#ffffff`) cards on a `surface-container-low` (`#fbf3e1`) background. This creates a natural, soft "lift" without the "dirty" look of heavy shadows.
- **Ambient Shadows:** If an element must float (e.g., a "Turnos" FAB), use a large 32px blur with a 5% opacity shadow tinted with `on-surface` (`#1f1b11`).
- **The Ghost Border:** If a boundary is strictly required for accessibility, use `outline-variant` at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components & UI Elements

### Buttons
- **Primary:** Filled `primary` color with `on-primary` (white) text.
- **Secondary:** `surface-container-highest` background with `on-surface` text.
- **Interaction:** All buttons must have a minimum height of **48px** for mobile accessibility.
- **Shape:** Use `rounded-md` (0.75rem) for a friendly yet structured look.

### Input Fields
- **Style:** Understated. Use a `surface-container-highest` background rather than an outlined box.
- **States:** On focus, transition the background to `surface-bright` and add a 2px `primary` bottom-bar only. This mimics high-end stationery.

### Cards & Lists (The Barber's Menu)
- **Forbid Dividers:** Do not use horizontal lines between list items. Use **Spacing Scale 4** (1rem) of vertical white space or a subtle background toggle between items.
- **Nesting:** Service cards should use `rounded-lg` (1rem) to feel like premium invitations.

### Custom Component: "The Signature Chip"
For barbershop tags (e.g., "Corte de Autor", "Barba Tradicional"), use a `tertiary-container` background with `on-tertiary-fixed-variant` text. These should feel like small wax seals or vintage stamps.

---

## 6. Do’s and Don’ts

### ✅ Do
- Use **Rioplatense Spanish**: "Reservá tu turno" instead of "Reserva tu turno."
- Embrace **White Space**: Let the `surface` color breathe. It represents the "luxury of time" found in a premium barbershop.
- Use **Overlapping Elements**: Position a barber's portrait so it slightly breaks the top edge of its container.

### ❌ Don’t
- **No Pure Blacks:** Use `primary-fixed-variant` or `on-surface` for text. Pure black (#000) is too harsh for the "warm cream" palette.
- **No Sharp Corners:** Avoid 0px radius. Everything should feel hand-finished and approachable.
- **No Standard Grids:** Avoid perfectly centered, symmetrical layouts. Shift columns slightly (e.g., 45%/55% split) to maintain the editorial vibe.

---

## 7. Spacing & Touch Targets
- **Base Unit:** 4px (0.25rem).
- **Standard Padding:** Use `spacing-6` (1.5rem) for card gutters to ensure the UI doesn't feel cramped.
- **Mobile First:** Every interactive element (Buttons, Chips, Inputs) must respect the **48px minimum hit area** to accommodate the "manly hands" of our demographic.

---
*Director's Final Note: This system is not a set of constraints; it is a philosophy. Treat every screen like a page in a coffee-table book. If it looks like a generic app, you've added too many lines. Take them away and let the color and type do the work.*