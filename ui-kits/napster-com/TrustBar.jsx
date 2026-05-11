/* TrustBar — horizontally-scrolling customer logo rail */
function TrustBar() {
  return (
    <section style={{ padding: '56px 0 40px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <p style={{
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 13, fontWeight: 500,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        margin: '0 0 32px',
      }}>Trusted by</p>
      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
      }}>
        <div style={{
          display: 'flex', gap: 64, alignItems: 'center',
          animation: 'trust-scroll 32s linear infinite',
          width: 'max-content',
        }}>
          {[...Array(2)].map((_, dup) =>
            ['Microsoft', 'Accenture', 'Lenovo', 'Qualcomm', 'NVIDIA', 'Deloitte', 'Oracle', 'SAP', 'IBM', 'Cisco', 'Dell', 'HP'].map((n, i) => (
              <span key={`${dup}-${i}`} style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: 22,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>{n}</span>
            ))
          )}
        </div>
      </div>
      <style>{`@keyframes trust-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

window.TrustBar = TrustBar;
