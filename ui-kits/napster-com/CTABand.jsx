/* Bottom CTA band with poster image + caption above. */
function CTABand() {
  return (
    <section style={{
      position: 'relative',
      padding: 0,
      background: '#000',
    }}>
      <div style={{
        position: 'relative',
        margin: '8px',
        borderRadius: 24,
        overflow: 'hidden',
        minHeight: 620,
        backgroundImage: `url(../../assets/product/footer-cta.avif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)',
        }} />
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 80,
          textAlign: 'center', color: '#fff',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.02em',
            color: 'rgba(255,255,255,0.7)', margin: '0 0 8px',
          }}>Start free.</p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.02em',
            color: 'rgba(255,255,255,0.7)', margin: '0 0 28px',
          }}>Upgrade when you're ready.</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 96, fontWeight: 600, lineHeight: 1,
            letterSpacing: '-0.02em',
            margin: 0,
          }}>
            Get your <span className="gradient-word">crew.</span>
          </h2>
          <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn btn-primary">Get Started Now</button>
            <button className="btn btn-secondary">Get Napster for Mac</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      h: 'Products',
      links: ['Napster App', 'Napster for Mac', 'Napster View', 'Napster Station', 'Learn: Enterprise', 'Learn: Higher Ed', 'Napster Spaces', 'Napster API'],
    },
    {
      h: 'Solutions',
      links: ['For Enterprise', 'For Developers', 'For Partners', 'Pricing'],
    },
    {
      h: 'Company',
      links: ['About', 'Newsroom', 'Careers', 'Blog', 'Contact Us'],
    },
    {
      h: 'Resources',
      links: ['Security', 'Media Kit', 'Help Center', 'Ethics'],
    },
  ];
  return (
    <footer style={{ padding: '96px 48px 40px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 48, marginBottom: 64 }}>
          <div>
            <img src="../../assets/logos/horizontal/horizontal-white.svg" alt="Napster" style={{ height: 26, marginBottom: 28 }} />
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5,
              color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: 260,
            }}>Sign up to receive the latest product news, stories, and innovations worth your time.</p>
            <div style={{ marginTop: 20, display: 'flex', gap: 8, maxWidth: 300 }}>
              <input placeholder="Email address" style={{
                flex: 1, padding: '11px 14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, color: '#fff',
                fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none',
              }} />
              <button className="btn btn-primary" style={{ padding: '10px 16px', fontSize: 13 }}>Submit</button>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)', margin: '0 0 20px',
              }}>{col.h}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(l => (
                  <li key={l}><a href="#" style={{
                    fontFamily: 'var(--font-body)', fontSize: 14,
                    color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                  }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>© 2026 Napster</p>
          <div style={{ display: 'flex', gap: 28 }}>
            {['Terms of Service', 'Privacy Policy', 'AI Principles', 'Accessibility', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{
                fontFamily: 'var(--font-body)', fontSize: 13,
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
              }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

window.CTABand = CTABand;
window.Footer = Footer;
