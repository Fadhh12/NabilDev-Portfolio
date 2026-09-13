# FINAL PROMPT - Redesign Portfolio Berdasarkan Referensi (Lengkap + Detail)

**Ini adalah PROMPT MASTER yang paling lengkap dan akurat.**

Copy-paste **PERSIS** salah satu bagian di bawah sesuai section yang mau di-redesign.

---

# ═══════════════════════════════════════════════════════════════════════════════
# PROMPT 1: REDESIGN HERO SECTION
# ═══════════════════════════════════════════════════════════════════════════════

Copas persis ini ke chat Claude di Antigravity:

```
Gunakan chrome-devtools MCP untuk redesign HERO section portfolio aku berdasarkan template referensi.

INSTRUKSI STEP-BY-STEP (IKUTI URUTAN INI DENGAN TELITI):

═══════════════════════════════════════════════════════════════════

FASE 1: INSPECT WEBSITE REFERENSI - HERO SECTION
URL target: https://portfoliofy.io/preview/creative-artsy

Section HERO adalah bagian paling atas dengan:
- Text "Oh, hello! You found me!"
- Nama heading "ROBIN"
- Text "Product Designer, Chicago, IL"
- Background image
- Button "Contact me"
- Navigation links di atas

1. Buka URL itu pakai browser + chrome-devtools
2. INSPECT elemen container utama HERO — catat:
   - Tag HTML (div, section, etc)
   - Computed styles: width, height, display, flex-direction, justify-content, align-items
   - background: background-color, background-image, background-size, background-position, background-attachment
   - padding: padding-top, padding-bottom, padding-left, padding-right
   - margin: margin-top, margin-bottom
   - position: static, relative, absolute?
   - min-height atau height value

3. INSPECT heading "ROBIN" dan text di sekitarnya — catat SEMUA:
   - font-family (exact name)
   - font-size (px value)
   - font-weight
   - line-height
   - color (hex code)
   - letter-spacing
   - text-transform (uppercase, lowercase, none)
   - text-align
   - margin: margin-top, margin-bottom, margin-left, margin-right
   - padding
   - font-style (normal, italic)

4. INSPECT subtext "Product Designer, Chicago, IL" — catat:
   - font-family
   - font-size
   - color (hex)
   - font-weight
   - line-height
   - opacity (jika ada)
   - margin-top, margin-bottom
   - text-align

5. INSPECT button "Contact me" (jika ada) — catat:
   - background-color (hex)
   - color (text color, hex)
   - padding: padding-top, padding-bottom, padding-left, padding-right
   - border: border-style, border-width, border-color
   - border-radius
   - font-size
   - font-weight
   - font-family
   - cursor: pointer?
   - hover state: background-color on hover, color on hover, transform?
   - transition: transition-property, transition-duration, transition-timing-function

6. INSPECT text "Sweat the details" atau tagline apapun — catat:
   - font-family, font-size, color, font-weight
   - font-style (italic?)
   - text-transform
   - margin, padding

7. CEK ANIMASI:
   - Hover ke elemen (text, button, heading), lihat transition/animation di Chrome DevTools
   - Catat animation-name, animation-duration, animation-delay, animation-timing-function
   - Scroll halaman, lihat ada animation trigger? Catat detail-nya
   - Ada fade-in saat load? Ada parallax effect?

8. AMBIL SCREENSHOT dari Chrome DevTools showing:
   - Computed styles panel untuk setiap elemen
   - HTML structure
   - Animation timeline (jika ada)

═══════════════════════════════════════════════════════════════════

FASE 2: APPLY KE PORTFOLIO AKU - FILE HERO.TSX

Target file: src/components/Hero.tsx

1. Buka file Hero.tsx
2. Update setiap elemen dengan styling yang sudah dicatat:
   - Update className jika pakai CSS modules/Tailwind
   - Atau update inline styles
   - Atau update CSS file yang corresponding

3. UNTUK SETIAP ELEMEN:
   
   ✅ Container Hero:
      - Set width, height, min-height sesuai yang dicatat
      - Set display, flex-direction, justify-content, align-items
      - Set background (color atau image URL) exact sama referensi
      - Set padding top/bottom/left/right PERSIS
      - Set margin PERSIS
      - Set position jika ada
   
   ✅ Heading "ROBIN" atau main heading:
      - Update font-family ke exact font yang dipakai referensi
      - Update font-size, font-weight, line-height PERSIS (exact px value)
      - Update color ke exact hex code
      - Update letter-spacing PERSIS
      - Update text-transform (uppercase? lowercase?)
      - Update text-align (center? left? right?)
      - Update margin/padding PERSIS
      - Update font-style jika italic
   
   ✅ Subtext/Deskripsi "Product Designer...":
      - Update font-family, font-size, font-weight
      - Update color PERSIS (hex code)
      - Update line-height
      - Update opacity jika ada transparency
      - Update margin/padding PERSIS
      - Update text-align
   
   ✅ Button:
      - Update background-color (exact hex)
      - Update text color (exact hex)
      - Update padding (top, bottom, left, right - exact values)
      - Update border-radius (exact px)
      - Update font-size, font-weight, font-family
      - Update border (style, width, color jika ada)
      - Update hover state styling (background on hover, color on hover, transform?)
      - Update transition property dan duration PERSIS
   
   ✅ Tagline/Sweat the details:
      - Update semua font properties sesuai dicatat
      - Update color, text-transform, font-style

4. ANIMASI (jika ada di referensi):
   - Kalau ada animation, implementasikan di CSS atau JS
   - Kalau ada scroll trigger, gunakan IntersectionObserver atau Framer Motion
   - Catat animation-duration, animation-delay, easing function
   - Jangan skip ini — animasi adalah bagian penting dari design

5. SAVE file setelah update

═══════════════════════════════════════════════════════════════════

FASE 3: VERIFIKASI HASIL

1. Buka browser local kamu (localhost:3000 atau port project)
2. Lihat section HERO
3. BANDINGKAN dengan website referensi:
   - Visual styling sama persis? ✅
   - Font sama? Ukuran sama? ✅
   - Spacing (padding/margin) sama? ✅
   - Button styling dan hover match? ✅
   - Warna exact hex match? ✅
   - Animasi jalan dan smooth? ✅

4. JIKA ADA YANG BEDA:
   - Tangkap screenshot dari Chrome DevTools apa yang beda
   - Kasih tau aku value CSS yang perlu diperbaiki
   - Aku akan update lagi sampai persis match

═══════════════════════════════════════════════════════════════════

OUTPUT YANG DIHARAPKAN:
✅ File Hero.tsx sudah di-update dengan styling from referensi
✅ Visual match 98%+ dengan template referensi
✅ Animasi (jika ada) sudah diimplementasi dan smooth
✅ Code clean, readable, dan maintainable
✅ Nggak ada HTML structure yang berubah — cuma styling values
✅ All CSS values dari chrome-devtools, bukan nebak

═══════════════════════════════════════════════════════════════════

READY? Mulai dari FASE 1 sekarang. Inspect dengan teliti, dokumentasikan exact values.
```

---

# ═══════════════════════════════════════════════════════════════════════════════
# PROMPT 2: REDESIGN PROJECTS/FEATURED WORKS SECTION
# ═══════════════════════════════════════════════════════════════════════════════

Copas persis ini:

```
Gunakan chrome-devtools MCP untuk redesign PROJECTS section portfolio aku berdasarkan template referensi.

INSTRUKSI STEP-BY-STEP (IKUTI URUTAN):

═══════════════════════════════════════════════════════════════════

FASE 1: INSPECT WEBSITE REFERENSI - PROJECTS SECTION
URL target: https://portfoliofy.io/preview/creative-artsy

Section PROJECTS/FEATURED WORKS berisi:
- Heading "FEATURED WORKS" atau "explore my work!"
- Project cards (4 cards: Wayline, Tandem, Forge, Volt)
- Setiap card punya: image, title, date, description, tags/categories

1. Buka URL, scroll ke section PROJECTS
2. INSPECT container section — catat:
   - Computed styles: padding-top, padding-bottom, padding-left, padding-right
   - margin: margin-top, margin-bottom
   - background-color
   - display, flex-direction
   - width, max-width
   - gap antara cards (jika flex/grid)

3. INSPECT heading "FEATURED WORKS" — catat:
   - font-family, font-size, font-weight, line-height
   - color (hex)
   - letter-spacing, text-transform
   - margin: margin-bottom, margin-top
   - text-align
   - font-style

4. INSPECT project card container — catat:
   - display (grid, flex, block?)
   - grid-template-columns (jika grid) atau flex-wrap
   - gap antara cards (exact px value)
   - padding: individual padding di dalam card
   - margin: margin antara cards
   - background: background-color, background-image
   - border: border-width, border-style, border-color
   - border-radius (exact px)
   - box-shadow (jika ada: shadow color, blur, offset)
   - overflow: hidden, visible?

5. INSPECT card image — catat:
   - width, height, atau aspect-ratio
   - object-fit: cover, contain, fill?
   - object-position: center, top, bottom?
   - border-radius
   - display: block, flex?

6. INSPECT card title (Wayline, Tandem, etc) — catat:
   - font-family, font-size, font-weight, color (hex)
   - line-height, letter-spacing
   - margin: margin-top, margin-bottom, margin-left, margin-right
   - font-style
   - text-transform

7. INSPECT card meta data (date, category tags) — catat:
   - font-family, font-size, color (hex)
   - font-weight, opacity
   - margin, padding
   - background-color (jika ada background pada tags)
   - border-radius (jika ada)
   - display (flex, inline-block, etc)
   - gap antara tags

8. INSPECT card description text — catat:
   - font-family, font-size, color
   - line-height
   - font-weight
   - margin-top, margin-bottom
   - text-align (left, center?)

9. CEK HOVER EFFECTS:
   - Hover ke card, lihat ada transform/scale/opacity change?
   - Ada shadow change on hover?
   - Ada image zoom/pan effect?
   - Catat transition properties
   - Catat transform values (scale, translateY, etc)

10. CEK ANIMASI:
    - Scroll trigger animation saat cards masuk viewport?
    - Fade-in, slide-in animation?
    - Catat animation-name, duration, delay, timing-function

═══════════════════════════════════════════════════════════════════

FASE 2: APPLY KE PORTFOLIO AKU - FILE PROJECTS.TSX

Target file: src/components/Projects.tsx

1. Buka file Projects.tsx
2. Update layout styling:
   - Set container padding/margin sesuai dicatat
   - Set display type (grid atau flex) dengan exact gap value

3. UNTUK SETIAP ELEMEN:
   
   ✅ Section Container:
      - Update padding top/bottom/left/right PERSIS
      - Update background-color jika ada
      - Update display, flex-direction, gap
   
   ✅ Heading "FEATURED WORKS":
      - Update font-family, font-size, font-weight
      - Update color (hex)
      - Update line-height, letter-spacing
      - Update text-transform
      - Update margin-bottom PERSIS (spacing ke cards)
      - Update text-align
   
   ✅ Card Container (grid/flex):
      - Update display type
      - Update grid-template-columns jika grid (exact: repeat(2, 1fr), etc)
      - Update gap (exact px value)
      - Update padding/margin PERSIS
   
   ✅ Individual Card:
      - Update background-color (hex)
      - Update padding (top, bottom, left, right - exact values)
      - Update margin jika ada
      - Update border-radius (exact px)
      - Update border dan box-shadow jika ada
      - Update overflow properties
   
   ✅ Card Image:
      - Update width, height, aspect-ratio
      - Update object-fit (cover, contain?)
      - Update object-position
      - Update border-radius
   
   ✅ Card Title:
      - Update font-family, font-size, font-weight
      - Update color (hex)
      - Update line-height, letter-spacing
      - Update margin (top, bottom, left, right)
      - Update text-transform
   
   ✅ Card Meta (Date, Category):
      - Update font-size, color
      - Update font-weight, opacity
      - Update display, gap antara tags
      - Update padding/margin PERSIS
      - Update background-color dan border-radius jika ada
   
   ✅ Card Description:
      - Update font-family, font-size, color
      - Update line-height
      - Update margin-top, margin-bottom
      - Update font-weight
   
   ✅ Hover Effects:
      - Update transition: transition-property, transition-duration
      - Update transform on hover (scale, translateY, etc)
      - Update shadow change on hover
      - Update opacity change jika ada

4. ANIMASI:
   - Implement scroll trigger animation jika ada
   - Set animation-duration, animation-delay, easing PERSIS
   - Test animation smooth saat scroll

5. RESPONSIVE (if exists in referensi):
   - Cek apakah ada @media breakpoint
   - Document grid-template-columns di mobile/tablet
   - Update CSS media queries accordingly

6. SAVE file

═══════════════════════════════════════════════════════════════════

FASE 3: VERIFIKASI HASIL

1. Buka browser local
2. Scroll ke section PROJECTS
3. BANDINGKAN dengan referensi:
   - Layout (grid columns, gap) sama? ✅
   - Card styling (border, shadow, padding) match? ✅
   - Image aspect ratio dan object-fit sama? ✅
   - Text styling (font, size, color) exact match? ✅
   - Hover effect smooth dan persis? ✅
   - Animation smooth jika ada? ✅
   - Spacing (margins, gaps) exact? ✅

4. JIKA BEDA, identify dan fix

═══════════════════════════════════════════════════════════════════

OUTPUT:
✅ Projects.tsx dengan styling exact dari referensi
✅ Card layout, spacing, typography match 98%+
✅ Hover & animation smooth dan accurate
✅ Responsive layout jika ada

Ready? Begin FASE 1 now. Inspect teliti.
```

---

# ═══════════════════════════════════════════════════════════════════════════════
# PROMPT 3: REDESIGN ABOUT SECTION
# ═══════════════════════════════════════════════════════════════════════════════

Copas persis:

```
Gunakan chrome-devtools MCP untuk redesign ABOUT section portfolio aku berdasarkan template referensi.

INSTRUKSI STEP-BY-STEP:

═══════════════════════════════════════════════════════════════════

FASE 1: INSPECT WEBSITE REFERENSI - ABOUT SECTION
URL target: https://portfoliofy.io/preview/creative-artsy

Section ABOUT/About me berisi:
- Heading "about me!"
- Body text dengan emoji
- Image (workspace photo)
- Skills list dengan emoji (Interaction Design ✨🎨, Prototyping 🎨🧩, User Research 🧩👀, Motion Design 👀💡)

1. Scroll ke section ABOUT di halaman referensi
2. INSPECT section container — catat:
   - padding: padding-top, padding-bottom, padding-left, padding-right (exact px)
   - margin: margin-top, margin-bottom
   - background-color
   - display, flex-direction (row, column?)
   - justify-content, align-items
   - width, max-width
   - gap (jika flex)

3. INSPECT heading "about me!" — catat:
   - font-family, font-size, font-weight, line-height
   - color (hex)
   - letter-spacing, text-transform
   - margin-bottom (spacing ke content below)
   - text-align (left, center?)

4. INSPECT body text — catat:
   - font-family, font-size, font-weight, color (hex)
   - line-height
   - margin: margin-bottom, margin-top
   - text-align
   - max-width (jika ada, untuk text readability)
   - font-style

5. INSPECT image — catat:
   - width, height (jika fixed) atau aspect-ratio
   - border-radius
   - object-fit: cover, contain?
   - object-position
   - margin atau display positioning
   - box-shadow jika ada

6. INSPECT skills/expertise list — catat:
   - Container display (flex, grid, column?)
   - flex-direction (row, column, wrap?)
   - gap antara skill items
   - padding di container
   - margin

7. INSPECT skill item — catat:
   - padding (exact values)
   - margin
   - background-color (jika ada background)
   - border atau border-radius
   - display (inline-block, flex?)
   - font-family, font-size, color
   - font-weight
   - line-height

8. CEK ANIMATION:
   - Ada fade-in saat load? Slide-in?
   - Ada hover effect pada skill items?
   - Catat animation properties: name, duration, delay, timing-function

═══════════════════════════════════════════════════════════════════

FASE 2: APPLY KE PORTFOLIO AKU - FILE ABOUT.TSX

Target file: src/components/About.tsx

1. Buka About.tsx
2. Update setiap elemen:
   
   ✅ Section Container:
      - Update padding top/bottom/left/right PERSIS
      - Update display, flex-direction
      - Update gap jika flex
      - Update background-color jika ada
   
   ✅ Heading:
      - Update font-family, font-size, font-weight
      - Update color (hex)
      - Update line-height, letter-spacing
      - Update margin-bottom (spacing ke content)
      - Update text-align
   
   ✅ Body Text:
      - Update font-family, font-size, color
      - Update line-height
      - Update margin (top, bottom)
      - Update text-align
      - Update max-width jika ada (for readability)
      - Update font-style jika italic
   
   ✅ Image:
      - Update width, height, aspect-ratio
      - Update border-radius (exact px)
      - Update object-fit (cover, contain?)
      - Update object-position
      - Update margin/padding positioning
      - Update box-shadow jika ada
   
   ✅ Skills Container:
      - Update display type (flex, grid)
      - Update flex-direction (row, column, wrap?)
      - Update gap (exact px)
      - Update padding PERSIS
      - Update margin
   
   ✅ Skill Item:
      - Update padding top/bottom/left/right
      - Update margin
      - Update background-color (hex) jika ada
      - Update border-radius, border
      - Update font-family, font-size
      - Update color (hex)
      - Update font-weight
      - Update display jika ada

3. ANIMASI:
   - Implement fade-in atau slide-in jika ada
   - Update animation-duration, timing-function
   - Test smooth saat halaman load

4. SAVE

═══════════════════════════════════════════════════════════════════

FASE 3: VERIFIKASI

1. Buka browser, scroll ke ABOUT
2. BANDINGKAN:
   - Layout (flex direction, gap) match? ✅
   - Text styling (font, size, color) exact? ✅
   - Image aspect ratio dan border-radius match? ✅
   - Skills container layout persis? ✅
   - Spacing/padding semua exact? ✅
   - Animation smooth? ✅

═══════════════════════════════════════════════════════════════════

OUTPUT:
✅ About.tsx dengan styling 100% match referensi
✅ Typography, layout, spacing exact
✅ Animation smooth jika ada

Ready? Start FASE 1 now.
```

---

# ═══════════════════════════════════════════════════════════════════════════════
# PROMPT 4: REDESIGN CONTACT SECTION
# ═══════════════════════════════════════════════════════════════════════════════

Copas persis:

```
Gunakan chrome-devtools MCP untuk redesign CONTACT section portfolio aku berdasarkan template referensi.

INSTRUKSI STEP-BY-STEP:

═══════════════════════════════════════════════════════════════════

FASE 1: INSPECT WEBSITE REFERENSI - CONTACT SECTION
URL target: https://portfoliofy.io/preview/creative-artsy

Section CONTACT/Let's talk berisi:
- Heading "Let's talk" atau "let's make something together"
- Profile image
- Profile name "Robin Vale"
- Description/status text
- Call-to-action button "CONTACT" atau link

1. Scroll ke section CONTACT (biasanya paling bawah sebelum footer)
2. INSPECT section container — catat:
   - padding: top, bottom, left, right (exact px)
   - margin: top, bottom
   - background-color, background-image
   - display, flex-direction
   - justify-content, align-items
   - text-align
   - width, max-width

3. INSPECT heading — catat:
   - font-family, font-size, font-weight
   - color (hex)
   - line-height, letter-spacing
   - margin-bottom
   - text-align
   - text-transform, font-style

4. INSPECT profile image — catat:
   - width, height (jika fixed) atau aspect-ratio
   - border-radius (circular? rounded?)
   - object-fit
   - margin atau positioning
   - box-shadow jika ada
   - border jika ada

5. INSPECT profile name — catat:
   - font-family, font-size, font-weight
   - color (hex)
   - line-height
   - margin (top, bottom)
   - text-align

6. INSPECT description/status text — catat:
   - font-family, font-size, color (hex)
   - line-height
   - font-weight
   - margin (top, bottom)
   - text-align
   - max-width (jika ada, untuk readability)
   - opacity jika ada transparency

7. INSPECT button/CTA — catat:
   - background-color (hex)
   - color (text color, hex)
   - padding: top, bottom, left, right (exact)
   - border-radius
   - font-family, font-size, font-weight
   - border jika ada
   - cursor: pointer?
   - hover state: background change? color change? transform?
   - transition properties
   - text-transform, text-decoration

8. CEK ANIMASI:
   - Scroll trigger animation?
   - Hover effects smooth?
   - Any fade-in, slide-in saat load?
   - Catat animation details

═══════════════════════════════════════════════════════════════════

FASE 2: APPLY KE PORTFOLIO AKU - FILE CONTACT.TSX

Target file: src/components/Contact.tsx

1. Buka Contact.tsx
2. Update styling:
   
   ✅ Section Container:
      - Update padding top/bottom/left/right PERSIS
      - Update margin
      - Update background-color
      - Update display, flex-direction
      - Update text-align (center? left?)
      - Update justify-content, align-items
   
   ✅ Heading:
      - Update font-family, font-size, font-weight
      - Update color (hex)
      - Update line-height, letter-spacing
      - Update text-transform
      - Update margin-bottom
      - Update text-align
   
   ✅ Profile Image:
      - Update width, height, aspect-ratio
      - Update border-radius (exact px atau 50% untuk circle?)
      - Update object-fit
      - Update margin
      - Update box-shadow jika ada
      - Update border jika ada
   
   ✅ Profile Name:
      - Update font-family, font-size, font-weight
      - Update color (hex)
      - Update line-height
      - Update margin (top, bottom)
      - Update text-align
   
   ✅ Description:
      - Update font-family, font-size, color
      - Update line-height
      - Update font-weight
      - Update margin (top, bottom)
      - Update text-align
      - Update max-width jika ada
      - Update opacity jika ada
   
   ✅ Button/CTA:
      - Update background-color (hex)
      - Update text color (hex)
      - Update padding (top, bottom, left, right - exact)
      - Update border-radius
      - Update font-family, font-size, font-weight
      - Update border (if any)
      - Update text-transform, text-decoration
      - Update hover state (background change, color change, transform?)
      - Update transition properties

3. ANIMASI:
   - Implement animation jika ada
   - Test smooth

4. SAVE

═══════════════════════════════════════════════════════════════════

FASE 3: VERIFIKASI

1. Scroll ke CONTACT section
2. BANDINGKAN:
   - Layout (text-align, flex direction) match? ✅
   - Image size, border-radius match? ✅
   - Text styling exact? ✅
   - Button styling dan hover match? ✅
   - Spacing all exact? ✅

═══════════════════════════════════════════════════════════════════

OUTPUT:
✅ Contact.tsx dengan styling exact from referensi
✅ All typography, layout, spacing match
✅ Button interaction smooth

Ready? Begin FASE 1.
```

---

# ═══════════════════════════════════════════════════════════════════════════════
# PROMPT 5: REDESIGN NAVBAR/HEADER SECTION
# ═══════════════════════════════════════════════════════════════════════════════

Copas persis:

```
Gunakan chrome-devtools MCP untuk redesign NAVBAR/HEADER portfolio aku berdasarkan template referensi.

INSTRUKSI STEP-BY-STEP:

═══════════════════════════════════════════════════════════════════

FASE 1: INSPECT WEBSITE REFERENSI - NAVBAR/HEADER
URL target: https://portfoliofy.io/preview/creative-artsy

NAVBAR/HEADER berisi:
- Navigation links (Home, About, Case Study, Playground)
- Logo/brand name (optional)
- Mungkin ada hamburger menu untuk mobile

1. Lihat bagian paling atas halaman
2. INSPECT header container — catat:
   - padding: top, bottom, left, right (exact px)
   - margin (jika ada)
   - background-color
   - position: sticky, fixed, static?
   - height (jika fixed)
   - display: flex, grid?
   - justify-content (space-between? center? flex-start?)
   - align-items
   - z-index (jika sticky/fixed)
   - border-bottom (jika ada divider line)
   - width, max-width

3. INSPECT nav container — catat:
   - display: flex, grid?
   - flex-direction: row, column?
   - gap antara links (exact px)
   - padding (jika ada padding di nav container)
   - align-items

4. INSPECT individual nav link — catat:
   - font-family, font-size, font-weight
   - color (hex) — normal state
   - text-decoration: none, underline?
   - letter-spacing
   - text-transform (uppercase, lowercase, none?)
   - padding: top, bottom, left, right (jika ada padding di link)
   - line-height
   - cursor: pointer?

5. INSPECT hover state — catat:
   - color change on hover (hex code)
   - background-color change? (jika ada)
   - text-decoration change? (underline appear?)
   - border-bottom appear?
   - opacity change?
   - transform (scale, translateY?)
   - transition properties: property, duration, timing-function

6. INSPECT active link state (current page) — catat:
   - color (hex) — different dari normal?
   - text-decoration (underline, highlight?)
   - border-bottom (jika ada active indicator)
   - background-color?
   - font-weight change?

7. INSPECT logo/brand name — catat:
   - font-family, font-size, font-weight
   - color (hex)
   - line-height
   - margin-right (spacing antara logo dan nav)

8. CEK ANIMATION/TRANSITION:
   - Hover transition smooth? Catat duration dan timing-function
   - Sticky header animation on scroll?
   - Mobile menu animation? (if exists)

═══════════════════════════════════════════════════════════════════

FASE 2: APPLY KE PORTFOLIO AKU - FILE NAV.TSX atau HEADER.TSX

Target file: src/components/Nav.tsx OR src/components/Header.tsx

1. Buka file Nav.tsx atau Header.tsx
2. Update styling:
   
   ✅ Header Container:
      - Update padding top/bottom/left/right PERSIS
      - Update background-color
      - Update position (sticky? fixed? static?)
      - Update height jika fixed
      - Update display, justify-content, align-items
      - Update z-index jika sticky/fixed
      - Update border-bottom jika ada divider
      - Update width, max-width
   
   ✅ Nav Container:
      - Update display (flex, grid)
      - Update flex-direction (row, column?)
      - Update gap (exact px antara links)
      - Update padding PERSIS
      - Update align-items
   
   ✅ Individual Link:
      - Update font-family, font-size, font-weight
      - Update color (hex) — normal state
      - Update text-decoration (none, underline?)
      - Update text-transform
      - Update padding (top, bottom, left, right - exact)
      - Update line-height
      - Update letter-spacing
   
   ✅ Link Hover State:
      - Update color on hover (hex)
      - Update background-color on hover (jika ada)
      - Update text-decoration on hover (underline appear?)
      - Update border-bottom on hover (jika ada)
      - Update opacity on hover (jika any transparency)
      - Update transform on hover (scale, translateY?)
      - Update transition: transition-property, transition-duration, transition-timing-function
   
   ✅ Active Link State:
      - Update color for active link (hex) — if different
      - Update text-decoration (underline, highlight?)
      - Update border-bottom style jika active indicator
      - Update background-color jika different
      - Update font-weight jika change
   
   ✅ Logo/Brand:
      - Update font-family, font-size, font-weight
      - Update color (hex)
      - Update margin-right (spacing ke nav)
      - Update line-height

3. ANIMATION:
   - Implement transition on hover (smooth)
   - Test sticky/fixed behavior on scroll
   - Test mobile menu animation jika ada

4. RESPONSIVE (if applicable):
   - Check media queries
   - Mobile nav (hamburger menu?) styling
   - Update breakpoints accordingly

5. SAVE

═══════════════════════════════════════════════════════════════════

FASE 3: VERIFIKASI

1. Lihat header/navbar di browser
2. BANDINGKAN dengan referensi:
   - Layout (flex spacing, align) match? ✅
   - Link styling (font, color, size) exact? ✅
   - Hover effect smooth dan match? ✅
   - Active link state correct? ✅
   - Sticky/fixed behavior (jika ada) work? ✅
   - Spacing all exact? ✅

═══════════════════════════════════════════════════════════════════

OUTPUT:
✅ Nav.tsx atau Header.tsx dengan styling exact
✅ Typography, hover states, active states match
✅ Transition smooth
✅ Responsive (if needed)

Ready? Begin FASE 1 now. Inspect teliti dari atas halaman.
```

---

# ═══════════════════════════════════════════════════════════════════════════════
# PANDUAN PENGGUNAAN
# ═══════════════════════════════════════════════════════════════════════════════

## Urutan Rekomendasi Redesign:

1. **PROMPT 5 (NAVBAR)** → Paling visible, high impact
2. **PROMPT 1 (HERO)** → Main section, most important
3. **PROMPT 2 (PROJECTS)** → Core portfolio showcase
4. **PROMPT 3 (ABOUT)** → Supporting info
5. **PROMPT 4 (CONTACT)** → CTA section

## Cara Pakai:

1. **Pilih section mana yang mau di-redesign duluan** (misal: HERO)
2. **Copy PROMPT 1 persis** — jangan edit, jangan potong
3. **Paste ke chat Claude di Antigravity**
4. **Tunggu Claude selesai** — dia akan:
   - Inspect website referensi pakai chrome-devtools
   - Dokumentasikan exact CSS values
   - Update file component kamu (Hero.tsx)
   - Save file
5. **Lihat hasil di browser local** — bandingkan dengan referensi
6. **Jika match, next section** → Repeat dengan PROMPT 2, 3, 4, 5

## Tips Sukses:

- ✅ **Satu section per prompt** — jangan gabung, fokus satu satu
- ✅ **Copy-paste PERSIS** — jangan edit prompt, supaya Claude paham dengan jelas
- ✅ **Tunggu sampe file ter-save** — jangan langsung buka file sebelum Claude selesai
- ✅ **Test di browser local** — screenshot dan bandingkan dengan referensi
- ✅ **Kalau ada yg beda**, bilang ke Claude: "Check lagi CSS property X, value-nya harusnya Y dari chrome-devtools"

## Expected Timeline:

- Per section: 2-5 menit tergantung kompleksitas
- Kalau ada 5 section: ~15-25 menit total (dijalankan sequentially)
- Quality: 95%+ visual match dengan template referensi

---

## READY TO START?

Pick PROMPT 1, 2, 3, 4, atau 5 sesuai section yang mau redesign, copy-paste persis, dan let Claude do the magic! 🚀

Good luck! 🎉
```

---

Sudah jadi! **File final yang paling lengkap dan akurat** — semuanya dalam satu file markdown. 

**Yang ada di dalamnya:**
- ✅ 5 prompt konkret (HERO, PROJECTS, ABOUT, CONTACT, NAVBAR)
- ✅ Setiap prompt punya struktur LEVEL 3 (FASE 1, 2, 3 yang super detail)
- ✅ Kurung siku sudah diisi dengan section name & file yang tepat
- ✅ Panduan urutan & tips penggunaan
- ✅ Semuanya siap copy-paste langsung

Tinggal pilih section mana, copy-paste persis, dan jalankan! 🎉
