function Hero({ eyebrow, headline, gradientWord, sub, ctaPrimary, ctaSecondary, showFooterLinks = true, bgImage }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: 720,
      padding: '140px 40px 80px',
      textAlign: 'center',
      overflow: 'hidden',
      background: '#000',
    }}>
      {/* Background photography — full-bleed, cinematic */}
      {bgImage && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.9,
        }} />
      )}
      {/* Protection gradient — black from edges, softer toward center */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          radial-gradient(70% 55% at 50% 60%, transparent 0%, rgba(0,0,0,0.75) 100%),
          linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 35%, rgba(0,0,0,0.85) 100%)
        `,
        pointerEvents: 'none',
      }} />
      {/* Pink atmospheric wash */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(800px 500px at 50% 70%, rgba(190,54,157,0.18), transparent 60%)',
        pointerEvents: 'none', mixBlendMode: 'screen',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1000, margin: '0 auto' }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>{eyebrow}</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 72, fontWeight: 600, lineHeight: 1.05,
          letterSpacing: '-0.02em',
          margin: 0,
          color: '#fff',
        }}>
          {headline}{' '}
          {gradientWord && <span className="gradient-word">{gradientWord}</span>}
        </h1>
        {sub && (
          <p style={{
            marginTop: 24, fontSize: 17,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 620, margin: '24px auto 0',
            lineHeight: 1.5,
            fontFamily: 'var(--font-body)',
          }}>{sub}</p>
        )}
        <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button className="btn btn-primary">{ctaPrimary}</button>
          <button className="btn btn-secondary">{ctaSecondary}</button>
        </div>
        {showFooterLinks && (
          <div style={{ marginTop: 48, display: 'flex', gap: 36, justifyContent: 'center' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 8 }}>For Business <span style={{ color: 'var(--pink-bright)' }}>→</span></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 8 }}>For Developers <span style={{ color: 'var(--pink-bright)' }}>→</span></a>
          </div>
        )}
      </div>
    </section>
  );
}

window.Hero = Hero;
