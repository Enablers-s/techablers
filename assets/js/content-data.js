// =========================================================
// Techablers site content. Everything a non-developer may want to edit lives here.
// NOTE: portfolio projects, testimonials and stats are SAMPLE placeholders.
// Replace them with real work and real numbers before going live.
// =========================================================
window.TX_SITE = {
  name: 'Techablers',
  email: 'hello@techablers.com',
  phone: '+971 00 000 0000',
  phoneHref: '+971000000000',
  whatsapp: 'https://wa.me/971000000000',
  location: 'Dubai, United Arab Emirates',
  // Optional: a form backend URL (e.g. Formspree / Getform / your API) that accepts JSON POSTs.
  // Leave empty and the contact form + AI brief fall back to opening a pre-filled email.
  formEndpoint: '',
  hours: 'Sun–Thu, 9am–6pm GST',
  social: {
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/'
  },
  // Founding-client offer: ends at the end of the current month
  offer: { spots: 5, discount: '50%' },
  stats: { projects: 120, clients: 80, years: 6, satisfaction: 98, team: 25, countries: 8, rating: '4.9' }
};

// Category-level copy used by the service detail page
window.TX_SERVICE_COPY = {
  'website-development': {
    about: 'We design and build fast, search-friendly websites that look like your brand and turn visitors into enquiries. Every build is hand-coded or properly themed, never a stock template with your logo dropped in.',
    included: ['Custom design in Figma', 'Mobile-first, fully responsive build', 'CMS or editor so you can update content', 'Contact forms connected to your inbox or CRM', 'SEO basics: meta tags, schema, sitemap', 'Analytics and Search Console setup', '90+ Lighthouse performance target', '30 days of post-launch support']
  },
  'software-development': {
    about: 'Custom software shaped around how your business actually runs. We map your workflows first, then build a secure, maintainable system your team will want to use.',
    included: ['Discovery workshop and requirements spec', 'System architecture and database design', 'Role-based access and authentication', 'Admin dashboard and reporting', 'Third-party API integrations', 'Automated tests on critical paths', 'Cloud deployment and CI/CD', 'Full documentation and handover']
  },
  'mobile-app-development': {
    about: 'Native and cross-platform apps for iOS and Android, from first wireframe to App Store approval. We build the backend and APIs too, so the whole product works together.',
    included: ['UX flows and high-fidelity UI design', 'iOS and Android builds', 'Backend API and admin panel', 'Push notifications', 'Analytics and crash reporting', 'App Store and Play Store submission', 'Beta testing with real devices', '30 days of post-launch support']
  },
  'ai-solutions': {
    about: 'Practical AI that does real work: chatbots trained on your content, automations that remove manual steps, and models that make sense of your data. We start from the business outcome, not the hype.',
    included: ['Use-case discovery and feasibility check', 'Data preparation and evaluation set', 'LLM / model integration', 'Retrieval (RAG) over your documents', 'Guardrails, logging and cost controls', 'Integration with your existing tools', 'Usage dashboard', 'Team training and handover']
  },
  'design-services': {
    about: 'Brand and product design that makes you look established from day one. We create identities, interfaces and design systems your developers can build from without guesswork.',
    included: ['Research and moodboards', 'Multiple initial concepts', 'Revision rounds until approved', 'Design system / component library', 'Developer-ready Figma files', 'Brand or UI guidelines document', 'All source files handed over', 'Export in every format you need']
  },
  'cloud-devops': {
    about: 'Reliable infrastructure that scales without surprises on your bill. We set up, migrate and automate cloud environments so releases are routine instead of risky.',
    included: ['Infrastructure audit', 'Infrastructure as code (Terraform)', 'CI/CD pipelines', 'Containerisation where it helps', 'Monitoring, logging and alerts', 'Backups and disaster recovery', 'Cost optimisation review', 'Runbooks and documentation']
  },
  'qa-testing': {
    about: 'Independent testing that catches problems before your customers do. Manual, automated, performance and accessibility testing, with clear reports your developers can act on.',
    included: ['Test strategy and plan', 'Test cases mapped to requirements', 'Cross-browser and device testing', 'Automated regression suite', 'Bug reports with steps and evidence', 'Retesting of fixes', 'Release sign-off report', 'Recommendations for next steps']
  },
  'cybersecurity': {
    about: 'Find and fix security gaps before attackers do. We test, harden and document your systems, and explain the findings in plain language.',
    included: ['Scoping and rules of engagement', 'Automated and manual testing', 'Risk-rated findings report', 'Remediation guidance', 'Retest after fixes', 'Executive summary', 'Compliance mapping where relevant', 'Follow-up consultation call']
  },
  'data-analytics': {
    about: 'Turn scattered data into decisions. We build pipelines, warehouses and dashboards that give your team one trusted view of the numbers.',
    included: ['Data source audit', 'Pipeline / ETL development', 'Warehouse modelling', 'Interactive dashboards', 'Data quality checks', 'Access controls', 'Scheduled reports', 'Training for your team']
  },
  'it-consulting': {
    about: 'Senior technical guidance without a full-time hire. We help you choose the right technology, plan the roadmap and avoid expensive mistakes.',
    included: ['Stakeholder interviews', 'Current-state assessment', 'Options analysis with costs', 'Recommended roadmap', 'Vendor and tool selection', 'Risk register', 'Presentation to leadership', 'Follow-up support']
  },
  'support-maintenance': {
    about: 'Keep your website or software secure, fast and up to date. A reserved block of hours each month with a team that already knows your codebase.',
    included: ['Reserved monthly hours', 'Security patches and updates', 'Uptime monitoring', 'Bug fixes and small features', 'Monthly report', 'Priority response times', 'Backup checks', 'Unused hours roll over one month']
  },
  'blockchain-web3': {
    about: 'Secure smart contracts and decentralised apps built with safety first. We design, test and audit on-chain logic before anything goes live.',
    included: ['Token / protocol design review', 'Smart contract development', 'Unit and fuzz testing', 'Internal security review', 'Wallet and dApp front end', 'Testnet deployment', 'Mainnet launch support', 'Technical documentation']
  },
  'iot-solutions': {
    about: 'Connected devices, firmware and dashboards that work reliably in the field. We cover the whole stack from sensor to cloud.',
    included: ['Hardware and connectivity review', 'Firmware development', 'Secure device provisioning', 'Cloud ingestion pipeline', 'Real-time dashboard', 'Alerts and automation rules', 'Over-the-air update support', 'Field testing support']
  }
};

// SAMPLE portfolio entries — replace with your real projects
window.TX_PORTFOLIO = [
  { cat: 'Software Development', icon: 'code-slash', title: 'Ledgerly — Invoicing SaaS', excerpt: 'Multi-tenant invoicing and payments platform with recurring billing, VAT handling and a client self-service portal.', stack: ['ASP.NET Core', 'PostgreSQL', 'Stripe'], client: 'Sample client (FinTech)', date: 'Sep 2026', featured: true },
  { cat: 'Website Development', icon: 'globe', title: 'Oudhouse — Fragrance E-Commerce', excerpt: 'Premium online store with bundles, gift wrapping, Arabic/English localisation and same-day delivery slots.', stack: ['Next.js', 'Shopify API', 'Tailwind'], client: 'Sample client (Retail)', date: 'Aug 2026', featured: true },
  { cat: 'AI Solutions', icon: 'robot', title: 'Nova — AI Support Assistant', excerpt: 'Retrieval-based support agent that answers from the help centre, escalates to humans and logs every conversation.', stack: ['LLM API', 'RAG', 'pgvector'], client: 'Sample client (SaaS)', date: 'Jul 2026', featured: true },
  { cat: 'Mobile Application Development', icon: 'phone', title: 'FitLoop — Fitness Booking App', excerpt: 'Class booking app for a gym chain with memberships, waitlists, QR check-in and in-app payments.', stack: ['Flutter', 'Firebase', 'Stripe'], client: 'Sample client (Wellness)', date: 'Jun 2026', featured: true },
  { cat: 'Website Development', icon: 'globe', title: 'Atlas Legal — Corporate Website', excerpt: 'Law firm website with practice-area pages, lawyer profiles, consultation booking and a multilingual blog.', stack: ['WordPress', 'PHP', 'Calendly'], client: 'Sample client', date: 'May 2026' },
  { cat: 'Software Development', icon: 'code-slash', title: 'Keystone — Property Management', excerpt: 'Internal dashboard tracking units, leases, maintenance tickets and rent collection across several buildings.', stack: ['React', 'Node.js', 'PostgreSQL'], client: 'Sample client', date: 'Apr 2026' },
  { cat: 'Software Development', icon: 'code-slash', title: 'CareSlot — Clinic Scheduling', excerpt: 'Appointment system for a multi-branch clinic with SMS reminders, doctor rotas and patient history.', stack: ['ASP.NET Core', 'SQL Server', 'Twilio'], client: 'Sample client', date: 'Mar 2026' },
  { cat: 'Mobile Application Development', icon: 'phone', title: 'Dabba — Food Ordering App', excerpt: 'Ordering app for a restaurant group with live order tracking, loyalty points and a kitchen display screen.', stack: ['React Native', 'Node.js', 'Redis'], client: 'Sample client', date: 'Feb 2026' },
  { cat: 'Blockchain & Web3', icon: 'currency-bitcoin', title: 'Mintwell — NFT Ticketing', excerpt: 'Event ticketing on-chain with transfer rules, royalty splits and a wallet-free claim flow for first-time users.', stack: ['Solidity', 'Hardhat', 'wagmi'], client: 'Sample client', date: 'Jan 2026' },
  { cat: 'Cloud & DevOps', icon: 'cloud', title: 'Freightline — Cloud Migration', excerpt: 'Moved a legacy on-premise logistics system to AWS with infrastructure as code and zero-downtime cutover.', stack: ['AWS ECS', 'Terraform', 'Aurora'], client: 'Sample client', date: 'Dec 2025' },
  { cat: 'Data & Analytics', icon: 'bar-chart-line', title: 'Pulse — Sales BI Dashboard', excerpt: 'Unified sales dashboard pulling CRM, e-commerce and ad data into one warehouse with daily refresh.', stack: ['dbt', 'BigQuery', 'Looker Studio'], client: 'Sample client', date: 'Nov 2025' },
  { cat: 'Design Services', icon: 'palette', title: 'Sable — Brand Identity', excerpt: 'Logo, colour system, typography and UI kit for a B2B startup, plus a pitch deck template.', stack: ['Figma', 'Illustrator'], client: 'Sample client', date: 'Oct 2025' },
  { cat: 'Software Development', icon: 'code-slash', title: 'Learnly — Training Platform', excerpt: 'White-label LMS with video courses, quizzes, certificates and a manager dashboard for corporate teams.', stack: ['Laravel', 'MySQL', 'Vimeo API'], client: 'Sample client', date: 'Sep 2025' },
  { cat: 'Cybersecurity', icon: 'shield-lock', title: 'Bastion — Security Audit', excerpt: 'Web application penetration test and cloud configuration review ahead of a public launch, with full retest.', stack: ['Burp Suite', 'OWASP ZAP'], client: 'Sample client', date: 'Aug 2025' }
];

// SAMPLE testimonials — replace with real client quotes
window.TX_TESTIMONIALS = [
  { text: 'They delivered our store ahead of schedule and the code was clean enough that our in-house developer could pick it up on day one.', name: 'Client Name', role: 'Founder, Retail Brand', initials: 'CN' },
  { text: 'The app launched with a strong rating and we have barely had a support ticket since. Communication was clear every week.', name: 'Client Name', role: 'COO, Wellness Company', initials: 'CN' },
  { text: 'Brand, website and chatbot in six weeks. Our enquiry rate went up noticeably and we finally have a site we are proud of.', name: 'Client Name', role: 'Managing Director, Agency', initials: 'CN' }
];

window.TX_BLOG = [
  {
    slug: 'what-custom-software-costs', tag: 'Pricing', date: 'Oct 02, 2026', author: 'Techablers Team',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=60',
    title: 'What Custom Software Really Costs: A Straight Breakdown',
    excerpt: 'Price ranges, what drives them up, and how to avoid paying for features you do not need.',
    body: `<p>"How much will it cost?" is the first question every client asks, and the honest answer is: it depends on scope. That is not a dodge. Here is what actually moves the number.</p>
<h2>The four biggest cost drivers</h2>
<ul><li><strong>Number of user roles.</strong> Every extra role (admin, staff, customer, partner) multiplies screens and permissions.</li><li><strong>Integrations.</strong> Payments, CRMs, ERPs and government APIs each add design, build and testing time.</li><li><strong>Data complexity.</strong> Reporting, imports and migrations are often underestimated.</li><li><strong>Quality bar.</strong> Automated tests, accessibility and security reviews cost more up front and much less later.</li></ul>
<h2>How to keep the budget under control</h2>
<p>Start with the smallest version that solves the core problem. Write down what you will <em>not</em> build in phase one. Ask for an itemised quote so you can see where the money goes and cut line items rather than quality.</p>
<blockquote>A fixed, itemised quote you approve before work starts is the best protection against scope creep.</blockquote>
<p>Want a number for your idea? <a href="contact.html">Tell us about it</a> and we will send an itemised estimate.</p>`
  },
  {
    slug: 'ai-agents-for-business', tag: 'AI', date: 'Sep 18, 2026', author: 'Techablers Team',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=60',
    title: 'AI Agents for Business: Where They Help and Where They Don\'t',
    excerpt: 'Agents can book, draft, triage and update systems on their own. Here is how to pick a first use case that pays off.',
    body: `<p>AI agents are software that can take actions, not just answer questions. They read an inbox, update a CRM, draft a reply and ask a human only when unsure.</p>
<h2>Good first use cases</h2>
<ul><li>Triage of support tickets and enquiries</li><li>Drafting quotes or proposals from a template</li><li>Pulling data from documents into a system</li><li>Internal Q&amp;A over policies and manuals</li></ul>
<h2>Where to be careful</h2>
<p>Anything irreversible, such as payments, deletions or legal commitments, should keep a human approval step. Log every action the agent takes so you can audit it.</p>
<p>The best results come from narrow, well-defined jobs with clear success measures. <a href="get-started.html">Start an AI brief</a> to explore yours.</p>`
  },
  {
    slug: 'it-consulting-when-you-need-it', tag: 'Consulting', date: 'Sep 05, 2026', author: 'Techablers Team',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=60',
    title: 'When Does a Growing Business Need an IT Consultant?',
    excerpt: 'Signs it is time to bring in outside technical leadership, and what a good engagement looks like.',
    body: `<p>You do not need to be an enterprise to benefit from senior technical advice. Often the right two weeks of consulting saves months of rework.</p>
<h2>Signs it is time</h2>
<ul><li>You are about to choose a major system (ERP, CRM, platform) and nobody on the team has done it before</li><li>Your software costs keep rising but nobody can explain why</li><li>A vendor quote seems high and you cannot judge it</li><li>Security or compliance questions are coming from clients</li></ul>
<h2>What you should get</h2>
<p>A clear assessment, options with costs, a recommended roadmap and someone to answer follow-up questions. If the deliverable is a 90-page report nobody reads, it was not worth it.</p>`
  },
  {
    slug: 'cybersecurity-small-business', tag: 'Security', date: 'Aug 21, 2026', author: 'Techablers Team',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=60',
    title: 'Cybersecurity Basics Every Small Business Should Have',
    excerpt: 'A short, practical checklist for teams of 5 to 200 people who do not have a security department.',
    body: `<p>Most attacks on small businesses are not sophisticated. They exploit weak passwords, missing updates and staff who have not been told what phishing looks like.</p>
<h2>The essentials</h2>
<ol><li>Multi-factor authentication on email and every admin account</li><li>A password manager for the whole team</li><li>Automatic updates on laptops, phones and servers</li><li>Daily backups, with a restore test every quarter</li><li>A 30-minute phishing awareness session twice a year</li></ol>
<p>Do these five things and you are ahead of most companies your size. For anything customer-facing, add a yearly penetration test.</p>`
  },
  {
    slug: 'ecommerce-platform-vs-custom', tag: 'E-Commerce', date: 'Aug 08, 2026', author: 'Techablers Team',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=60',
    title: 'E-Commerce: Platform or Custom Build?',
    excerpt: 'Shopify, WooCommerce or fully custom? The answer depends on volume, margins and how unusual your catalogue is.',
    body: `<p>For most new stores, a platform like Shopify is the right start: fast to launch, reliable and cheap to run.</p>
<h2>When a custom build makes sense</h2>
<ul><li>Complex pricing, bundles or B2B rules the platform cannot express</li><li>Deep integration with your own ERP or warehouse</li><li>Transaction fees have become a large cost at your volume</li><li>The shopping experience itself is your competitive edge</li></ul>
<p>A common middle path is headless: keep the platform for checkout and inventory, and build a custom front end on top.</p>`
  },
  {
    slug: 'saas-mvp-guide', tag: 'SaaS', date: 'Jul 24, 2026', author: 'Techablers Team',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=60',
    title: 'Building a SaaS MVP: Launch Lean, Learn Fast',
    excerpt: 'Most MVPs fail because they build too much. Here is what to include in version one and what to leave out.',
    body: `<p>A minimum viable product is the smallest thing that delivers real value to a real customer and teaches you something.</p>
<h2>Include on day one</h2>
<ul><li>Sign-up, login and password reset</li><li>Billing, so you can charge from the start</li><li>The one core feature that solves the pain</li><li>A basic admin view of users and key numbers</li><li>Analytics, so you can measure what people do</li></ul>
<h2>Leave for later</h2>
<p>Teams and roles, public API, integrations and a mobile app can all wait until paying customers ask for them.</p>
<p>A well-scoped MVP usually takes 8 to 16 weeks. <a href="contact.html">Book a discovery call</a> and we will help you cut it down to the essentials.</p>`
  }
];
