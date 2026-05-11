function Nav({ page, setPage }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'business', label: 'For Business' },
    { id: 'developers', label: 'For Developers' },
    { id: 'learn', label: 'Learn' },
    { id: 'view', label: 'The View' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 20,
      display: 'flex', alignItems: 'center',
      padding: '18px 40px',
      backdropFilter: 'blur(24px) saturate(1.3)',
      WebkitBackdropFilter: 'blur(24px) saturate(1.3)',
      background: 'rgba(0,0,0,0.55)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}
         style={{ display: 'flex', alignItems: 'center', marginRight: 40, textDecoration: 'none' }}>
        <img src="../../assets/logos/horizontal/horizontal-white.svg"
             alt="Napster" style={{ height: 22 }} />
      </a>
      <ul style={{
        display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0,
        flex: 1, alignItems: 'center',
      }}>
        {items.map(it => (
          <li key={it.id}>
            <a href="#"
               onClick={(e) => { e.preventDefault(); setPage(it.id); }}
               style={{
                 color: page === it.id ? '#fff' : 'rgba(255,255,255,0.65)',
                 textDecoration: 'none',
                 fontFamily: 'var(--font-body)',
                 fontSize: 14, fontWeight: 500,
                 letterSpacing: '-0.01em',
                 transition: 'color 120ms ease',
               }}>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn btn-secondary" style={{ padding: '11px 16px', fontSize: 13 }}>Sign in</button>
        <button className="btn btn-primary" style={{ padding: '11px 18px', fontSize: 13 }}>Get Started Now</button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
