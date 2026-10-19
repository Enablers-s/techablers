# Techablers website

Static multi-page site (HTML + Bootstrap 5.3 + AOS). No build step: open `index.html` in a browser, or upload the whole folder to any static host (Vercel, Netlify, cPanel, S3).

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| Services (80 services, 13 categories) | `services.html` |
| Service detail (one template for every service) | `service.html?s=<slug>` |
| Portfolio (filterable) | `portfolio.html` |
| About | `about.html` |
| Blog / article | `blog.html`, `post.html?p=<slug>` |
| Contact | `contact.html` |
| AI brief chat | `get-started.html` |
| How we work / Pricing / FAQ / Careers | `process.html`, `pricing.html`, `faq.html`, `careers.html` |
| Legal | `privacy.html`, `terms.html`, `refunds.html` |
| Sign in / Register / Reset | `login.html`, `register.html`, `forgot-password.html` |

## Where to edit
- **`assets/js/content-data.js`**: email, phone, location, social links, stats, portfolio, testimonials, blog posts, per-category service copy, `formEndpoint`.
- **`assets/js/services-data.js`**: the service catalogue.
- **`assets/js/layout.js`**: the navbar, offer bar, footer and floating button shared by every page.
- **`assets/css/style.css`**: all styling (colours are CSS variables at the top).

## Before going live
1. Replace the **sample** portfolio projects, testimonials and stats in `content-data.js` with real ones.
2. Put in your real email, phone and WhatsApp number.
3. Set `formEndpoint` (e.g. a Formspree URL) so the contact form and AI brief send leads directly. Until then they open a pre-filled email.
4. Have a lawyer review the legal pages (they're templates).
5. Sign-in and register are front-end only; connect them to a real auth backend when the client portal exists.
