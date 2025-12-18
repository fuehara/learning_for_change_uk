# Learning for Change - Institutional Website

A modern, professional, and fully static website for Learning for Change, an educational organization providing English and Digital Skills training for adults.

## 🌟 Overview

**Tagline:** Skills for today, opportunities for tomorrow.

**Mission:** To provide inclusive and accessible education in English and Digital Skills for adults in the UK and globally.

## 📁 Project Structure

```
learning_for_change_uk/
├── index.html              # Home page
├── about.html              # About us page
├── courses.html            # Course catalog
├── partnerships.html       # Partnership opportunities
├── impact.html             # Impact and success stories
├── get-involved.html       # Volunteer and donation information
├── contact.html            # Contact form and information
├── login.html              # Login page (placeholder)
├── register.html           # Registration page (placeholder)
├── dashboard.html          # Student dashboard (placeholder)
├── checkout.html           # Payment checkout (placeholder)
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet with all styles
│   ├── js/
│   │   └── main.js         # JavaScript for interactivity
│   └── images/
│       └── logo.png        # Organization logo
└── README.md               # This file
```

## 🎨 Design Features

### Color Palette

**Primary Colors:**
- Coral: #F76250, #FA7268, #F77565
- Teal: #05ABA9, #9CE5DE

**Secondary Colors:**
- #047C7A, #7BD7D6, #F98E7E, #FFC466
- #2C3540 (Dark), #F5F4F2 (Light)
- #0E7C79, #FF8A73

### Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Sticky header navigation
- ✅ Smooth scroll animations
- ✅ WhatsApp floating button
- ✅ Form validation
- ✅ Accessible (WCAG AA compliant)
- ✅ SEO optimized
- ✅ Fast loading (no dependencies)

## 🚀 Deployment

### Requirements

This is a **100% static website** that requires:
- No server-side processing
- No Node.js runtime
- No build process
- Just a web server (Apache, Nginx, or any static hosting)

### Hosting Options

#### 1. Shared Hosting (cPanel / GoDaddy)

1. Upload all files to `/public_html` directory
2. Ensure `index.html` is in the root
3. Set proper file permissions (644 for files, 755 for directories)
4. Access via your domain

#### 2. GitHub Pages

1. Push repository to GitHub
2. Go to Settings > Pages
3. Select branch and root folder
4. Save and access via provided URL

#### 3. Netlify / Vercel

1. Connect your repository
2. No build command needed
3. Publish directory: `/` (root)
4. Deploy

#### 4. Traditional Web Server

**Apache (.htaccess):**
```apache
# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location ~* \.(css|js|png|jpg|jpeg|gif|ico)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 📝 Customization

### Update WhatsApp Number

Replace `XXXXXXXXXXX` in all HTML files with your actual WhatsApp number:

```html
<a href="https://wa.me/XXXXXXXXXXX?text=Hello,%20I'd%20like%20to%20know%20more%20about%20the%20courses.">
```

### Update Contact Information

Edit the footer section in all HTML files:
- Email: info@learningforchange.org
- Phone: +44 (0) 20 XXXX XXXX
- Address: Update with actual location

### Add Your Logo

Replace `assets/images/logo.png` with your actual logo file. Recommended size: 200x60px (transparent PNG).

### Modify Colors

Edit `assets/css/main.css` and update the CSS variables in the `:root` selector:

```css
:root {
  --primary-coral: #F76250;
  --primary-teal: #05ABA9;
  /* ... other colors ... */
}
```

## 🔮 Future Enhancements

The following pages are prepared for future integration:

### 1. Authentication System
- `login.html` - User login
- `register.html` - New user registration
- Backend: Firebase Auth, Auth0, or custom solution

### 2. Learning Management System (LMS)
- `dashboard.html` - Student portal
- Features: Course access, progress tracking, certificates
- Backend: Moodle, Canvas, or custom LMS

### 3. Payment Processing
- `checkout.html` - Secure payments
- Integration: Stripe, PayPal, or Square
- Features: Multiple payment methods, invoicing

### 4. Additional Features to Consider
- Blog/News section
- Event calendar
- Online course delivery platform
- Student forum/community
- Multi-language support
- Advanced analytics

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks or libraries
- **No build tools** - Direct deployment

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Responsive text sizing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Copyright © 2024 Learning for Change. All rights reserved.

## 📞 Support

For questions or support:
- Email: info@learningforchange.org
- Phone: +44 (0) 20 XXXX XXXX
- Website: www.learningforchange.org

---

**Built with ❤️ for Learning for Change**
