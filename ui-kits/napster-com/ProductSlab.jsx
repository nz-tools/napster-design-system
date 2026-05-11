/* ProductSlab — the tall rounded product cards from napster.com home.
   Each is ~16:9, full-bleed image, with text block in top-left corner. */
function ProductSlab({ eyebrow, title, body, cta, image, align = 'left' }) {
  return (
    <section style={{ padding: '8px 8px', background: '#000' }}>
      <div style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        aspectRatio: '16 / 9',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 560,
      }}>
        {/* Text protection gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: align === 'left'
            ? 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)'
            : 'linear-gradient(270deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          top: 56, bottom: 56,
          left: align === 'left' ? 56 : 'auto',
          right: align === 'right' ? 56 : 'auto',
          maxWidth: 520,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        }}>
          <p className="eyebrow" style={{ marginBottom: 20, color: '#fff', opacity: 0.9 }}>{eyebrow}</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 48, fontWeight: 600, lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: 0, color: '#fff',
          }}>{title}</h2>
          <p style={{
            marginTop: 20, fontSize: 17, lineHeight: 1.5,
            color: 'rgba(255,255,255,0.82)',
            fontFamily: 'var(--font-body)',
          }}>{body}</p>
          <div style={{ marginTop: 32 }}>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600,
              padding: '12px 20px', borderRadius: 10,
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}>
              {cta} <span style={{ color: 'var(--pink-bright)' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ProductSlab = ProductSlab;
