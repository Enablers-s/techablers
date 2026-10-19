// Sends a lead to TX_SITE.formEndpoint (JSON POST) or falls back to a pre-filled email.
// Resolves to 'sent' or 'mailto'.
window.TX_SUBMIT = function (subject, fields) {
  var S = window.TX_SITE || {};
  var lines = Object.keys(fields).map(function (k) { return k + ': ' + fields[k]; });
  if (S.formEndpoint) {
    return fetch(S.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(Object.assign({ _subject: subject }, fields))
    }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return 'sent'; });
  }
  location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  return Promise.resolve('mailto');
};
