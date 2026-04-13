# We Are Auctions Website Design
**Date:** 2026-04-13  
**Status:** Approved  
**Type:** Static Marketing Website

## Overview
A bold and dynamic static website for We Are Auctions (weareauctions.com) - a B2B platform enabling estate agents to run property auctions via their state-of-the-art online auction platform.

## Target Audience
**Primary:** Estate agents (B2B clients)  
Focus on showcasing platform value, ROI, and ease of integration with existing systems.

## Core Value Propositions
1. **Faster property sales** compared to traditional methods
2. **Set and keep your own fees** - complete control over commission structure
3. **Full auction management dashboards** - comprehensive control center
4. **Integration with existing systems** (e.g., Street.co.uk)

## Design Direction
**Style:** Bold & Dynamic  
**Mood:** Energetic, professional, modern - conveying speed, urgency, and technological sophistication

### Color Palette: "Real Estate Meets Tech"
- **Primary:** Rich Navy (#1E40AF) - trust and professionalism
- **Secondary:** Gold/Amber (#F59E0B) - premium feel, call-to-action
- **Accent:** Bright Blue (#3B82F6) - modern energy
- **Supporting:** Warm grey tones
- **Dark:** Near-black (#0F172A)
- **Light:** Off-white (#F8FAFC)

## Site Structure

### Pages (5 core pages)
1. **Home** (`index.html`) - Hero, value props, platform preview
2. **Features** (`features.html`) - Detailed feature showcase
3. **Pricing** (`pricing.html`) - Pricing tiers or contact-based
4. **About** (`about.html`) - Company story, mission, team
5. **Contact** (`contact.html`) - Contact form + details

### File Structure
```
weareauctions.com/
├── index.html          
├── features.html       
├── pricing.html        
├── about.html          
├── contact.html        
├── assets/
│   ├── css/
│   │   └── styles.css  
│   ├── js/
│   │   └── main.js     
│   └── images/         
└── README.md           
```

## Technical Stack

### Core Technologies
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling (via CDN initially)
- **Vanilla JavaScript** - Interactions, animations, form handling
- **Typography:** Inter or Poppins
- **Icons:** Heroicons or Lucide
- **Responsive:** Mobile-first, breakpoints at sm(640px), md(768px), lg(1024px), xl(1280px)

### Contact Form
- HTML5 form with client-side validation
- Structure ready for Resend API integration
- Simple form handling for now, Resend to be added later

## Page Designs

### Navigation (Global)
- Fixed header with navy background (#1E40AF)
- Subtle transparency/blur effect on scroll
- Logo: "WE ARE AUCTIONS" text (placeholder, easy to swap)
- Nav links: Home, Features, Pricing, About, Contact
- CTA Button: "Get Started" (gold/amber gradient)
- Mobile: Hamburger menu with slide-in drawer

### Home Page

**1. Hero Section**
- Full viewport height
- Diagonal gradient overlay (navy → deep blue)
- **Headline:** "Sell Properties Faster. Keep Your Fees."
- **Subheadline:** "The state-of-the-art auction platform built for modern estate agents"
- **CTAs:** 
  - Primary: "Start Free Trial" (gold button)
  - Secondary: "See How It Works" (outline button)
- **Visual:** Dashboard mockup screenshot (angled, with shadow) on right side

**2. Trust Bar**
- Light grey background
- Animated statistics with count-up effect:
  - "500+ Properties Sold"
  - "30 Day Avg. Sale Time"
  - "95% Agent Satisfaction"

**3. Value Propositions (3 cards)**
- Grid layout with hover effects
- Each card includes: icon, title, 2-sentence description
- **Card 1:** Faster Sales - Competitive bidding reduces market time
- **Card 2:** Control Your Fees - Set your own commission structure
- **Card 3:** Full Management - Dashboard for listings, bids, buyers

**4. Platform Preview**
- Dashboard screenshot or carousel
- Section title: "Manage everything from one powerful dashboard"

### Features Page

**Hero:**
- Title: "Everything You Need to Run Successful Property Auctions"
- Supporting copy about comprehensive platform capabilities

**Feature Grid (6-8 cards):**
1. **Faster Sales** - Competitive bidding reduces time on market
2. **Set Your Own Fees** - Complete control over commission structure
3. **Full Auction Management** - Dashboard for listings, bids, buyers
4. **Street.co.uk Integration** - Seamless sync with existing systems
5. **Live Bidding Platform** - Real-time auction experience
6. **Automated Communications** - Email/SMS updates to bidders
7. **Legal Compliance** - Built-in safeguards and documentation
8. **24/7 Access** - Buyers can bid anytime, anywhere

Each feature includes: icon, title, description, optional screenshot

### Pricing Page

- Hero: "Transparent Pricing. No Hidden Fees."
- 2-3 pricing tiers OR "Contact for Pricing" approach
- Options: Starter, Professional, Enterprise
- FAQ section addressing common pricing questions
- Strong CTAs to contact/get started

### About Page

- Company mission and story
- "Why We Built This" section explaining problem/solution
- Team section (placeholders acceptable)
- Stats and achievements
- Company values/culture

### Contact Page

**Split Layout:**
- **Left:** Contact form
  - Fields: Name, Email, Phone, Company Name, Message
  - Client-side validation
  - Submit button with loading state
- **Right:** Contact information
  - Office details (if applicable)
  - Email address
  - Phone number
  - Optional map (can use placeholder)

## Animations & Interactions

### Scroll Animations
- Fade-in/slide-up for sections (Intersection Observer API)
- Smooth scroll on nav link clicks
- Parallax effects (subtle, for hero sections)

### Hero Effects
- Animated gradient background (CSS keyframes)
- Subtle floating/parallax on dashboard mockup

### Button & Card Interactions
- **Buttons:** Slight scale, shadow increase, smooth color transitions
- **Cards:** Lift effect with shadow, border glow on hover
- **Links:** Underline slide-in effect

### Stats Counter
- Count-up animation when section enters viewport
- Animates from 0 to target number

### Mobile Menu
- Smooth slide-in from right
- Backdrop blur overlay
- Menu items stagger-animate in

### Form Interactions
- Real-time validation feedback
- Error messages appear below fields
- Success state after submission
- Loading spinner on submit button

## Performance & Optimization

### Speed
- Target: <2 second page load
- Lazy loading for images below fold
- Optimized asset delivery
- Minification-ready structure
- Defer non-critical JavaScript

### SEO
- Semantic HTML5 structure
- Proper heading hierarchy (H1 → H6)
- Meta tags: title, description, keywords
- Open Graph tags for social sharing
- Alt text for all images
- Structured data (JSON-LD) for organization info

### Accessibility (WCAG AA)
- ARIA labels where needed
- Keyboard navigation support
- Visible focus states
- Color contrast meets standards
- Skip to content link
- Alt text for all images
- Form labels properly associated

## Brand Assets

### Logo
- Text-based placeholder: "WE ARE AUCTIONS"
- Prepared for easy logo swap when available
- SVG format preferred for scalability

### Images
- Stock photography for property/auction scenes
- Dashboard mockups (can use placeholder UI screenshots)
- Team photos (placeholders acceptable)
- All images optimized for web (<200KB each)

### Typography Scale
- H1: 3.5rem (mobile: 2.5rem)
- H2: 2.5rem (mobile: 2rem)
- H3: 2rem (mobile: 1.5rem)
- Body: 1rem (16px base)
- Small: 0.875rem

## Future Enhancements (Post-Launch)
- Resend email integration for contact form
- Case studies/testimonials section
- Blog/resources section
- Video testimonials
- Interactive platform demo
- Live chat widget
- Analytics integration (Google Analytics/Plausible)

## Success Metrics
- Page load speed <2s
- Mobile responsive across all devices
- Contact form conversion rate tracking
- Clear CTAs on every page
- Professional, trustworthy aesthetic

## Implementation Notes
- Build mobile-first, enhance for desktop
- Test on Chrome, Safari, Firefox, Edge
- Validate HTML/CSS
- Test form submission flow
- Check all internal links work
- Verify all images have alt text
- Test keyboard navigation
- Run Lighthouse audit (target: >90 across all metrics)
