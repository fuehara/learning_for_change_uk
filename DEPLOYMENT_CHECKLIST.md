# Deployment Checklist for Learning for Change Website

## ✅ Pre-Deployment Tasks

### 1. Logo Setup
- [x] Logo file exists: `logo.jpeg` (56KB)
- [ ] Verify logo displays correctly on all pages
- [ ] Create favicon.ico from logo (optional but recommended)
- [ ] Test logo on different screen sizes

### 2. Contact Information
Update the following in ALL HTML files:

- [ ] **WhatsApp Number**: Replace `XXXXXXXXXXX` with actual number
  - Search for: `wa.me/XXXXXXXXXXX`
  - Files: All .html files (11 files total)

- [ ] **Email Address**: Verify or update
  - Current: info@learningforchange.org
  - Location: Footer and contact page

- [ ] **Phone Number**: Replace placeholder
  - Current: +44 (0) 20 XXXX XXXX
  - Location: Footer and contact page

- [ ] **Physical Address**: Update with actual location
  - Current: London, United Kingdom
  - Location: Footer and contact page

### 3. Content Review
- [ ] Review all course descriptions for accuracy
- [ ] Verify statistics on impact page (learners, employment rate, etc.)
- [ ] Check all internal links work correctly
- [ ] Proofread all content for typos
- [ ] Ensure brand voice is consistent

### 4. SEO Optimization
- [ ] Review meta descriptions on all pages
- [ ] Verify page titles are descriptive
- [ ] Add Google Analytics code (if needed)
- [ ] Create sitemap.xml
- [ ] Create robots.txt

### 5. Testing

#### Browser Testing
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS)

#### Responsive Testing
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1200px+)
- [ ] Large screens (1920px+)

#### Functionality Testing
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Contact form validation works
- [ ] WhatsApp button opens correctly
- [ ] Smooth scroll animations work
- [ ] All images load properly

#### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text
- [ ] Forms have proper labels

### 6. Performance Optimization
- [ ] Optimize logo file size (if needed)
- [ ] Enable gzip compression on server
- [ ] Set up browser caching
- [ ] Test page load speed (aim for <3 seconds)
- [ ] Verify mobile performance

## 🚀 Deployment Steps

### Option 1: Shared Hosting (cPanel/GoDaddy)

1. [ ] Log into your hosting control panel
2. [ ] Navigate to File Manager
3. [ ] Go to `/public_html` directory
4. [ ] Upload all files maintaining folder structure:
   ```
   /public_html/
   ├── index.html
   ├── about.html
   ├── courses.html
   ├── partnerships.html
   ├── impact.html
   ├── get-involved.html
   ├── contact.html
   ├── login.html
   ├── register.html
   ├── dashboard.html
   ├── checkout.html
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   └── images/
   └── README.md
   ```
5. [ ] Set file permissions (644 for files, 755 for folders)
6. [ ] Test website at your domain
7. [ ] Verify all pages load correctly

### Option 2: GitHub Pages

1. [ ] Push all files to GitHub repository
2. [ ] Go to repository Settings
3. [ ] Navigate to Pages section
4. [ ] Select branch (usually `main`)
5. [ ] Select root folder
6. [ ] Save and wait for deployment
7. [ ] Test at provided GitHub Pages URL

### Option 3: Netlify

1. [ ] Create Netlify account
2. [ ] Click "New site from Git"
3. [ ] Connect your repository
4. [ ] Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. [ ] Deploy site
6. [ ] Set up custom domain (optional)

## 📋 Post-Deployment Tasks

### Immediate
- [ ] Test all pages on live site
- [ ] Verify contact form submissions
- [ ] Test WhatsApp button
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate is active (https://)

### Within 24 Hours
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test from different devices/browsers
- [ ] Monitor for any errors

### Within 1 Week
- [ ] Set up email forwarding (if needed)
- [ ] Configure backup system
- [ ] Set up monitoring/uptime alerts
- [ ] Create social media links
- [ ] Announce website launch

## 🔧 Common Issues & Solutions

### Logo Not Displaying
- Check file path is correct: `assets/images/logo.jpeg`
- Verify file permissions (644)
- Clear browser cache
- Check file actually uploaded

### Contact Form Not Working
- Forms are frontend-only (no backend yet)
- Shows success message but doesn't send email
- To enable: Add backend service (FormSpree, Netlify Forms, etc.)

### Mobile Menu Not Opening
- Check JavaScript file loaded: `assets/js/main.js`
- Verify no JavaScript errors in console
- Test on actual mobile device

### WhatsApp Button Not Working
- Verify phone number format: `https://wa.me/447XXXXXXXXX`
- Remove spaces and special characters from number
- Test on mobile device with WhatsApp installed

## 📞 Support Contacts

**Technical Issues:**
- Check README.md for documentation
- Review browser console for errors
- Test in incognito/private mode

**Content Updates:**
- Edit HTML files directly
- Re-upload changed files
- Clear cache to see changes

## 🎯 Future Enhancements Roadmap

### Phase 1 (Immediate - Next 3 Months)
- [ ] Implement contact form backend
- [ ] Add Google Analytics
- [ ] Create blog section
- [ ] Add more course details

### Phase 2 (3-6 Months)
- [ ] Implement user authentication (login/register)
- [ ] Build student dashboard
- [ ] Add online course enrollment
- [ ] Integrate payment gateway

### Phase 3 (6-12 Months)
- [ ] Full LMS integration
- [ ] Mobile app development
- [ ] Advanced analytics
- [ ] Multi-language support

---

**Last Updated:** December 2024
**Version:** 1.0
**Status:** Ready for Deployment
