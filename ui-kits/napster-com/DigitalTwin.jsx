/* DigitalTwin — "Be in two places at once" pattern.
   Right: video poster. Left: eyebrow, title, bullets, CTA. */
function DigitalTwin() {
  return (
    <section style={{ padding: '140px 48px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 80, alignItems: 'center' }}>
        <div>
          <p className="eyebrow" style={{
            marginBottom: 24,
            background: 'linear-gradient(91deg, #DD52CB 0%, #601656 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>Your Digital Twin</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 84, fontWeight: 600, lineHeight: 0.98,
            letterSpacing: '-0.02em', margin: 0,
          }}>
            Be in two<br/><span className="gradient-word">places at once.</span>
          </h2>
          <p style={{
            marginTop: 32, fontSize: 19, lineHeight: 1.5,
            color: 'rgba(255,255,255,0.72)',
            fontFamily: 'var(--font-body)',
            maxWidth: 480,
          }}>
            Turn your expertise into something people can access anytime. Stay focused on what you do best. Your twin handles the rest.
          </p>
          <ul style={{
            margin: '36px 0 0', padding: 0, listStyle: 'none',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            {[
              "Your twin takes the meeting you couldn't make.",
              "Answers the questions you've answered a hundred times.",
              "Knows your voice, your priorities, your limits.",
            ].map((t, i) => (
              <li key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16, lineHeight: 1.45,
                color: 'rgba(255,255,255,0.82)',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <img src="../../imagery/scenes/twin/napster-twin-icon.avif" alt="" style={{ width: 18, height: 18, marginTop: 3, opacity: 0.9, flexShrink: 0 }} />
                {t}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 40 }}>
            <button className="btn btn-primary">Get Napster for Mac</button>
          </div>
        </div>

        <div style={{
          position: 'relative', borderRadius: 20, overflow: 'hidden',
          aspectRatio: '16/10',
          backgroundImage: `url(../../imagery/scenes/twin/napster-twin-poster.avif)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Play-button overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path d="M21 12.134c.667.385.667 1.347 0 1.732L2 24.794c-.667.385-1.5-.096-1.5-.866V1.072c0-.77.833-1.25 1.5-.866L21 12.134z" fill="#fff"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.DigitalTwin = DigitalTwin;
