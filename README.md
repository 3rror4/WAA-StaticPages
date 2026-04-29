# We Are Auctions Website

A beautiful, modern static website for We Are Auctions - the state-of-the-art auction platform built for estate agents.

## Overview

This website showcases the We Are Auctions platform, enabling estate agents to run property auctions online with full control over fees and complete auction management capabilities.

## Features

- **5 Core Pages**: Home, Features, Pricing, About, Contact
- **Modern Design**: Bold & dynamic style with navy and gold color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and interactive elements
- **Contact Form**: Ready for Resend API integration
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No framework dependencies
- **Google Fonts** - Inter font family

## Getting Started

### Prerequisites

No build tools required! This is a static website that runs directly in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your browser

That's it! No installation or build process needed.

### Local Development

To run locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Project Structure

```
WAA/
├── index.html          # Home page
├── features.html       # Features page
├── pricing.html        # Pricing page
├── about.html          # About Us page
├── contact.html        # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css  # Custom styles
│   ├── js/
│   │   └── main.js     # JavaScript functionality
│   └── images/         # Images and assets
├── docs/
│   └── plans/          # Design documentation
└── README.md           # This file
```

## Color Palette

- **Primary Navy**: #1E40AF
- **Dark Navy**: #1E3A8A
- **Gold Primary**: #F59E0B
- **Gold Light**: #FCD34D
- **Blue Accent**: #3B82F6
- **Dark Text**: #0F172A
- **Light Text**: #F8FAFC

## Key Features

### Navigation
- Fixed header with scroll effect
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Animations
- Scroll-triggered fade-in animations
- Counter animations for statistics
- Hover effects on cards and buttons

### Contact Form
- Client-side validation
- Error messaging
- Ready for Resend API integration
- Loading states

### SEO & Accessibility
- Semantic HTML5 structure
- ARIA labels
- Keyboard navigation
- Alt text for images
- Meta tags for social sharing

## Integrating Resend

The contact form is structured to work with Resend for email delivery. To integrate:

1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key
3. Create a serverless function (e.g., Netlify/Vercel function) or simple API endpoint
4. Update the form submission handler in `assets/js/main.js` (see TODO comments)

Example serverless function structure:

```javascript
// api/contact.js (Vercel/Netlify)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  try {
    await resend.emails.send({
      from: 'contact@weareauctions.com',
      to: 'info@weareauctions.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

## Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Build settings: None needed (static site)
3. Publish directory: `/` (root)
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Framework preset: Other
3. Build command: None
4. Output directory: `/`
5. Deploy!

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and root folder
4. Save and deploy!

## Customization

### Changing Colors

Update CSS variables in `assets/css/styles.css`:

```css
:root {
  --navy-primary: #1E40AF;
  --gold-primary: #F59E0B;
  /* ... etc */
}
```

### Adding Your Logo

Replace the text logo in the navigation with your image:

```html
<a href="index.html" class="logo">
  <img src="assets/images/logo.png" alt="We Are Auctions" style="height: 40px;">
</a>
```

### Updating Images

Replace placeholder images with your own:
- Dashboard screenshots
- Team photos
- Property images

Images are currently using Unsplash placeholders.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Target page load: <2 seconds
- Lazy loading for below-fold images
- Optimized assets
- Minimal dependencies

## License

Copyright © 2026 We Are Auctions. All rights reserved.

## Support

For questions or issues with the website:
- Email: info@weareauctions.com
- Phone: +44 20 1234 5678

---

Built with ❤️ for modern estate agents
