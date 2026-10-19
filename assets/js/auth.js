// Front-end only auth forms. There is no client-portal backend yet:
// on submit we validate and show a notice. Wire `onAuthSubmit` to your auth API later.
(function () {
  document.querySelectorAll('.pw-toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var input = b.parentNode.querySelector('input');
      var show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      b.innerHTML = '<i class="bi bi-eye' + (show ? '-slash' : '') + '"></i>';
      b.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  });
  var form = document.querySelector('form[data-auth]');
  if (!form) return;
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var err = form.querySelector('.auth-error');
    var bad = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (f) { return !f.checkValidity(); })[0];
    var pw = form.querySelector('#password'), pw2 = form.querySelector('#confirmPassword');
    var msg = bad ? 'Please fill in ' + (bad.dataset.label || 'all required fields') + ' correctly.'
      : (pw && pw.minLength > 0 && pw.value.length < pw.minLength) ? 'Password must be at least ' + pw.minLength + ' characters.'
      : (pw2 && pw2.value !== pw.value) ? 'Passwords do not match.' : '';
    err.textContent = msg; err.style.display = msg ? 'block' : 'none';
    if (msg) return;
    err.style.display = 'block';
    err.style.color = '#fbbf24';
    err.textContent = 'The client portal is coming soon. For now, please contact us at ' + TX_SITE.email + '.';
  });
})();
