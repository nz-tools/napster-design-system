/* FeatureSection — the "Expertise on demand / A specialist for every moment" pattern.
   Left: heading + 3 short bullets. Right: circular companion image with pink ring. */
function FeatureSection() {
  return (
    <section style={{
      padding: '140px 48px', background: '#000',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 80, maxWidth: 1400, margin: '0 auto',
      alignItems: 'center',
    }}>
      <div>
        <p className="eyebrow" style={{ marginBottom: 20 }}>Expertise on demand</p>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 600,
          lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
        }}>
          A specialist for every <span className="gradient-word">moment.</span>
        </h2>
        <p style={{
          marginTop: 20, fontSize: 19, lineHeight: 1.5,
          color: 'rgba(255,255,255,0.7)',
          fontFamily: 'var(--font-body)',
          maxWidth: 520,
        }}>
          Say goodbye to AI chatbots and hello to a collaborator with video presence and memory.
        </p>
        <ul style={{
          margin: '40px 0 0', padding: 0, listStyle: 'none',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {[
            'Persistent memory that makes every conversation better over time.',
            'The right expert right when you need them.',
            'Turn conversations into drafts, plans, decisions, and outputs you can share, ship, or send.',
          ].map((t, i) => (
            <li key={i} style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17, lineHeight: 1.45,
              color: 'rgba(255,255,255,0.85)',
              paddingLeft: 32, position: 'relative',
            }}>
              <span style={{
                position: 'absolute', left: 0, top: 10,
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--pink-bright)',
                boxShadow: '0 0 16px rgba(234,45,210,0.6)',
              }} />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ position: 'relative', aspectRatio: '1 / 1', width: '100%', maxWidth: 560, justifySelf: 'end' }}>
        <img src="../../imagery/scenes/twin/napster-twin-mayli-ring.avif" alt=""
             style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', animation: 'ring-rotate 40s linear infinite' }} />
        <img src="../../imagery/scenes/twin/napster-twin-mayli-image.avif" alt="Companion"
             style={{
               position: 'absolute', left: '12%', top: '12%', width: '76%', height: '76%',
               borderRadius: '50%', objectFit: 'cover',
               boxShadow: '0 40px 120px rgba(234,45,210,0.25)',
             }} />
        <style>{`@keyframes ring-rotate { from { transform: rotate(0) } to { transform: rotate(360deg) } }`}</style>
      </div>
    </section>
  );
}

window.FeatureSection = FeatureSection;
