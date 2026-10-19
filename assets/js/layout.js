/* =========================================================
   Techablers — shared layout + site-wide behaviours
   Usage in every page:
     <body data-page="services">
       <script src="assets/js/layout.js"></script>   (renders header in place)
       ... page content ...
       <script>TX.footer()</script>                   (renders footer in place)
   ========================================================= */
(function () {
  var S = window.TX_SITE || {};
  var page = document.body.getAttribute('data-page') || '';
  var markId = 0;

  function brandMark(cls) {
    var id = 'txg' + (++markId);
    return '<svg class="' + (cls || 'brand-mark') + '" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8c5a"/><stop offset=".55" stop-color="#ff5c28"/><stop offset="1" stop-color="#e0431a"/></linearGradient></defs>' +
      '<rect x="2" y="2" width="28" height="28" rx="8" stroke="url(#' + id + ')" stroke-width="3"/>' +
      '<path d="M10 10h12M16 10v12" stroke="url(#' + id + ')" stroke-width="3.2" stroke-linecap="round"/></svg>';
  }
  function brand() { return '<a class="brand" href="index.html" aria-label="Techablers home">' + brandMark() + '<span class="brand-name">Tech<b>ablers</b></span></a>'; }

  var nav = [
    ['services', 'services.html', 'Services'],
    ['portfolio', 'portfolio.html', 'Portfolio'],
    ['about', 'about.html', 'About'],
    ['blog', 'blog.html', 'Blog'],
    ['contact', 'contact.html', 'Contact']
  ];

  var header =
    '<div id="txOfferBar" class="tx-offer-bar" role="region" aria-label="Limited-time offer"><div class="tx-offer-inner">' +
      '<span class="tx-offer-badge"><i class="bi bi-stars"></i> Founding Client</span>' +
      '<span class="tx-offer-text"><strong>' + (S.offer ? S.offer.discount : '50%') + ' off your first project</strong>. Only ' + (S.offer ? S.offer.spots : 5) + ' spots this month. Pay nothing until you approve the demo.</span>' +
      '<span class="tx-offer-timer" data-countdown aria-hidden="true"></span>' +
      '<a href="get-started.html" class="tx-offer-cta">Claim your spot <i class="bi bi-arrow-right"></i></a>' +
      '<button type="button" class="tx-offer-close" id="txOfferClose" aria-label="Dismiss offer">&times;</button>' +
    '</div></div>' +
    '<div class="page-loader" id="pageLoader" aria-hidden="true"><div class="page-loader-bar"></div></div>' +
    '<nav class="tx-navbar navbar navbar-expand-lg" id="mainNavbar"><div class="container">' +
      brand().replace('class="brand"', 'class="brand navbar-brand"') +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-list" style="font-size:1.5rem;color:#f1f5f9;"></i></button>' +
      '<div class="collapse navbar-collapse" id="mainNav">' +
        '<ul class="navbar-nav mx-auto gap-1">' +
          nav.map(function (n) { return '<li class="nav-item"><a class="nav-link' + (page === n[0] ? ' active' : '') + '" href="' + n[1] + '">' + n[2] + '</a></li>'; }).join('') +
          '<li class="nav-item"><a class="nav-link nav-ai' + (page === 'get-started' ? ' active' : '') + '" href="get-started.html"><i class="bi bi-robot me-1"></i>AI Brief</a></li>' +
        '</ul>' +
        '<ul class="navbar-nav nav-right align-items-lg-center gap-2">' +
          '<li class="nav-item"><a class="nav-link' + (page === 'login' ? ' active' : '') + '" href="login.html">Sign In</a></li>' +
          '<li class="nav-item"><a class="btn-nav-cta" href="register.html">Get Started <i class="bi bi-arrow-right ms-1"></i></a></li>' +
        '</ul>' +
      '</div>' +
    '</div></nav>';

  document.currentScript.insertAdjacentHTML('beforebegin', header);

  var svcLinks = [
    ['website-development', 'Website Development'], ['software-development', 'Software Development'],
    ['mobile-app-development', 'Mobile Apps'], ['ai-solutions', 'AI Solutions'],
    ['design-services', 'Design'], ['qa-testing', 'QA Testing']
  ];

  function footer() {
    var s = S.social || {};
    var html =
      '<footer class="tx-footer"><div class="container"><div class="row g-5">' +
        '<div class="col-lg-4">' + brand() +
          '<p class="footer-description">Techablers builds high-performance software, websites, apps and AI solutions. From first idea to launch and long-term support, we are the technology partner that helps businesses grow.</p>' +
          '<div class="footer-social">' +
            '<a href="' + s.linkedin + '" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>' +
            '<a href="' + s.facebook + '" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook"><i class="bi bi-facebook"></i></a>' +
            '<a href="' + s.instagram + '" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram"><i class="bi bi-instagram"></i></a>' +
            '<a href="' + S.whatsapp + '" target="_blank" rel="noopener" class="social-icon" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>' +
          '</div></div>' +
        '<div class="col-sm-6 col-lg-2"><p class="footer-heading">Services</p><ul class="footer-links">' +
          svcLinks.map(function (l) { return '<li><a href="services.html#' + l[0] + '">' + l[1] + '</a></li>'; }).join('') +
        '</ul></div>' +
        '<div class="col-sm-6 col-lg-2"><p class="footer-heading">Company</p><ul class="footer-links">' +
          [['about.html', 'About Us'], ['process.html', 'How We Work'], ['pricing.html', 'Pricing'], ['faq.html', 'FAQ'], ['careers.html', 'Careers'], ['portfolio.html', 'Portfolio'], ['blog.html', 'Blog'], ['contact.html', 'Contact'], ['privacy.html', 'Privacy Policy'], ['terms.html', 'Terms of Service'], ['refunds.html', 'Returns &amp; Refunds']]
            .map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + '</a></li>'; }).join('') +
        '</ul></div>' +
        '<div class="col-lg-4"><p class="footer-heading">Start a Project</p>' +
          '<p class="footer-description mb-3">Ready to bring your idea to life? Get a free, no-obligation quote from our team within 120 minutes.</p>' +
          '<a class="btn-tx-primary d-inline-flex" href="contact.html">Get a Free Quote <i class="bi bi-arrow-right ms-1"></i></a>' +
          '<div class="footer-contact mt-3"><a href="mailto:' + S.email + '"><i class="bi bi-envelope me-1"></i> ' + S.email + '</a></div>' +
          '<div class="footer-contact"><a href="tel:' + S.phoneHref + '"><i class="bi bi-telephone me-1"></i> ' + S.phone + '</a></div>' +
          '<div class="footer-contact"><a href="' + S.whatsapp + '" target="_blank" rel="noopener" style="color:#25d366"><i class="bi bi-whatsapp me-1"></i> WhatsApp us</a></div>' +
        '</div>' +
      '</div>' +
      '<hr class="footer-divider" />' +
      '<div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">' +
        '<p>&copy; ' + new Date().getFullYear() + ' Techablers. All rights reserved.</p>' +
        '<div class="footer-legal d-flex gap-3"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms of Service</a><a href="refunds.html">Refunds</a></div>' +
      '</div></div></footer>' +
      '<div class="floating-cta"><a class="floating-cta-btn" title="Get a free quote" href="contact.html"><span class="floating-cta-pulse"></span><i class="bi bi-chat-dots-fill"></i><span>Get a Free Quote</span></a></div>' +
      '<div class="tx-toast" id="txToast" role="status"></div>';
    document.currentScript.insertAdjacentHTML('beforebegin', html);
  }

  // ---------- helpers exposed to pages ----------
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function toast(text) {
    var t = document.getElementById('txToast'); if (!t) return;
    t.textContent = text; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('show'); }, 2000);
  }
  function deadline() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth() + 1, 0, 23, 59, 59); }
  function param(name) { return new URLSearchParams(location.search).get(name); }

  window.TX = { footer: footer, esc: esc, toast: toast, deadline: deadline, param: param, brandMark: brandMark };

  // ---------- behaviours (after DOM is ready) ----------
  function init() {
    // 1. Page loader
    var loader = document.getElementById('pageLoader');
    var bar = loader.querySelector('.page-loader-bar');
    requestAnimationFrame(function () { bar.style.width = '70%'; });
    function done() { loader.classList.add('is-done'); }
    if (document.readyState === 'complete') setTimeout(done, 150); else window.addEventListener('load', done);
    setTimeout(done, 4000);

    // 2. Offer bar dismiss + all countdowns
    var offer = document.getElementById('txOfferBar');
    try { if (sessionStorage.getItem('txOfferDismissed') === '1') offer.remove(); } catch (e) {}
    var close = document.getElementById('txOfferClose');
    if (close) close.addEventListener('click', function () { try { sessionStorage.setItem('txOfferDismissed', '1'); } catch (e) {} offer.remove(); });
    var end = deadline().getTime();
    function tick() {
      var diff = end - Date.now();
      var txt = diff <= 0 ? 'Ending soon' : 'Ends in ' + Math.floor(diff / 864e5) + 'd ' + Math.floor(diff % 864e5 / 36e5) + 'h ' + Math.floor(diff % 36e5 / 6e4) + 'm';
      document.querySelectorAll('[data-countdown]').forEach(function (el) { el.textContent = txt; });
    }
    tick(); setInterval(tick, 30000);
    document.querySelectorAll('[data-offer-end]').forEach(function (el) { el.textContent = deadline().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); });

    // 3. AOS
    if (window.AOS) AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 40 });

    // 4. Navbar scrolled state + scroll indicator
    var navbar = document.getElementById('mainNavbar');
    var ind = document.querySelector('.scroll-indicator');
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
      if (ind) ind.classList.toggle('is-hidden', window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // 5. Counters: .stat-number[data-count]
    var counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          var el = e.target, target = parseFloat(el.dataset.count), start = performance.now(), dur = 1600;
          var numEl = el.querySelector('.num') || el;
          (function step(now) {
            var p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
            numEl.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(step);
          })(start);
        });
      }, { threshold: .4 });
      counters.forEach(function (c) { io.observe(c); });
    } else counters.forEach(function (c) { (c.querySelector('.num') || c).textContent = c.dataset.count; });

    // 6. Button ripple
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.btn-tx-primary, .btn-tx-white');
      if (!btn) return;
      var r = btn.getBoundingClientRect(), size = Math.max(r.width, r.height);
      var span = document.createElement('span');
      span.className = 'btn-ripple';
      span.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - r.left - size / 2) + 'px;top:' + (e.clientY - r.top - size / 2) + 'px';
      btn.appendChild(span);
      setTimeout(function () { span.remove(); }, 650);
    });

    // 7. Magnetic buttons (mouse only)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.querySelectorAll('.btn-magnetic').forEach(function (b) {
        b.addEventListener('mousemove', function (e) {
          var r = b.getBoundingClientRect();
          b.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * .18 + 'px,' + (e.clientY - r.top - r.height / 2) * .25 + 'px)';
        });
        b.addEventListener('mouseleave', function () { b.style.transform = ''; });
      });
    }

    // 8. Close mobile menu after tapping a link
    document.querySelectorAll('#mainNav a').forEach(function (a) {
      a.addEventListener('click', function () {
        var c = document.getElementById('mainNav');
        if (c.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(c).hide();
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
