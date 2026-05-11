/* Floating launcher — "Open at 100% (actual size)"
   Drops a small pill button in the bottom-right of a one-pager preview.
   When clicked, opens the same file in a new tab with #actual, which
   disables the responsive scale so the page renders at true 816×1056.
   Also hidden automatically when we're ALREADY in actual-size mode
   (hash === '#actual') or when printing. */

(function () {
  const isActual = window.location.hash === '#actual';

  // Inject actual-size override once
  if (isActual) {
    const s = document.createElement('style');
    s.textContent = `
      @media (max-width: 900px) {
        .stage { transform: none !important; }
      }
      body { overflow: auto; align-items: flex-start !important; }
    `;
    document.head.appendChild(s);
    return; // no launcher in actual-size mode
  }

  // Don't show launcher inside an iframe (preview pane / index page)
  // unless the page is top-level
  // actually: show always when not #actual — iframe viewers may want to pop out

  const btn = document.createElement('a');
  btn.href = window.location.pathname + '#actual';
  btn.target = '_blank';
  btn.rel = 'noopener';
  btn.setAttribute('aria-label', 'Open at actual size in new tab');
  btn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h6v6"/>
      <path d="M10 14 21 3"/>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
    <span>Open at 100%</span>
  `;
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '18px',
    right: '18px',
    zIndex: '99999',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '9px 14px 9px 12px',
    background: '#EA2DD2',
    color: '#fff',
    fontFamily: 'var(--font-body), system-ui, sans-serif',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: '999px',
    boxShadow: '0 8px 24px rgba(234, 45, 210, 0.45), 0 2px 6px rgba(0,0,0,0.35)',
    border: '1px solid rgba(255, 161, 243, 0.5)',
    transition: 'transform 120ms ease, box-shadow 120ms ease, background 120ms ease',
  });
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-1px)';
    btn.style.background = '#FF4DEA';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
    btn.style.background = '#EA2DD2';
  });

  // Hide on print
  const media = document.createElement('style');
  media.textContent = `@media print { [data-actual-size-launcher] { display: none !important; } }`;
  document.head.appendChild(media);
  btn.setAttribute('data-actual-size-launcher', '');

  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(btn);
  });
  if (document.readyState !== 'loading') document.body.appendChild(btn);
})();
