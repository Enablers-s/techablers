// Managed-IT package cards, shared by services.html and pricing.html
window.TX_PACKAGES = function (firstHref) {
  var pkgs = [
    { tier: 'Startup', name: 'Launchpad', desc: 'Your on-demand tech team for early-stage companies that need to move fast without hiring.',
      features: ['Website or MVP app, built & hosted', 'Domain, business email & cloud setup', 'Ongoing maintenance & updates', '20 support hours / month', 'Essential security & backups', 'Monthly progress report'],
      cta: ['Get Started', firstHref || 'get-started.html', 'btn-tx-ghost'] },
    { tier: 'SME', name: 'Growth', featured: true, desc: 'A full IT department without the headcount, for growing businesses scaling their operations.',
      features: ['Everything in Startup, plus:', 'Dedicated project manager', 'Custom software & integrations', 'Advanced security & monitoring', '60 priority support hours / month', 'Quarterly technology strategy'],
      cta: ['Talk to Us', 'contact.html', 'btn-tx-primary'] },
    { tier: 'Enterprise', name: 'Partner', desc: 'Your end-to-end technology partner: a dedicated team owning your entire stack.',
      features: ['Everything in Growth, plus:', 'Dedicated engineering team', 'Custom enterprise software', 'Cloud architecture & DevOps', '24/7 support & SLA', 'Compliance (SOC 2, GDPR) & account manager'],
      cta: ['Contact Sales', 'contact.html', 'btn-tx-ghost'] }
  ];
  return pkgs.map(function (p, i) {
    return '<div class="col-lg-4" data-aos="fade-up" data-aos-delay="' + i * 100 + '"><div class="pkg-card' + (p.featured ? ' pkg-card-featured' : '') + '">' +
      '<div class="pkg-tier">' + p.tier + '</div><div class="pkg-name">' + p.name + '</div><div class="pkg-price">Custom</div>' +
      '<p class="pkg-desc">' + p.desc + '</p><ul class="pkg-features">' +
      p.features.map(function (f) { return '<li><i class="bi bi-check-lg"></i>' + TX.esc(f) + '</li>'; }).join('') +
      '</ul><a class="' + p.cta[2] + ' w-100 justify-content-center" href="' + p.cta[1] + '">' + p.cta[0] + '</a></div></div>';
  }).join('');
};
