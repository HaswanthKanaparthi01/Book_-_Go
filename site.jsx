/* ============================================================
   BOOK & GO — public website
   ============================================================ */
const { useState, useEffect, useRef } = React;

/* ---------------- Nav ---------------- */
function SiteNav({ go, solid }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [solid]);
  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);
  useEffect(() => { setMenuOpen(false); }, [solid]);
  const dark = solid || scrolled;
  const links = [];
  const navBtnColor = dark ? 'var(--ink)' : 'rgba(255,255,255,.95)';
  const runLink = (v) => {
    setMenuOpen(false);
    if (v === 'package#') go('package', { id: 'explorer5' });
    else go(v.split('#')[0], { anchor: v.split('#')[1] });
  };
  return (
    <header className={`site-header${dark ? ' site-header--solid' : ''}`}>
      <div className="wrap site-header__inner">
        <Logo light={!dark} size={35} onClick={() => { setMenuOpen(false); go('home'); }} />
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map(([t, v]) => (
            <button key={t} onClick={() => runLink(v)}
              style={{ fontWeight: 700, fontSize: 15.5, color: navBtnColor, textShadow: dark ? 'none' : '0 1px 12px rgba(0,0,0,.3)' }}>{t}</button>
          ))}
        </nav>
        <div className="nav-actions">
          <button type="button" className="nav-menu-btn" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            style={{ color: navBtnColor }}>
            <Icon name={menuOpen ? 'x' : 'menu'} size={22} color="currentColor" />
          </button>
        </div>
      </div>
      {menuOpen && <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
      <div className={`nav-drawer${menuOpen ? ' nav-drawer--open' : ''}`}>
        {links.map(([t, v]) => (
          <button key={t} type="button" className="nav-drawer__link" onClick={() => runLink(v)}>{t}</button>
        ))}
        
      </div>
    </header>
  );
}

/* ---------------- Footer ---------------- */
function SiteFooter({ go }) {
  return (
    <footer style={{ background: 'var(--ink)', color: '#fff', padding: '72px 0 40px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,.12)' }} className="foot-grid">
          <div>
            <Logo light />
            <p style={{ color: 'rgba(255,255,255,.62)', maxWidth: 320, marginTop: 16, lineHeight: 1.5, fontSize: 15 }}>
              Curated travel experiences designed for explorers.
              Discover new destinations, unique journeys,
              and unforgettable adventures around the world.
            </p>
            <div style={{ marginTop: 8 }}>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)', marginBottom: 6, fontWeight: 700 }}>Official Operator</div>
              <div style={{ color: 'rgba(255,255,255,.9)', fontSize: 15, fontWeight: 700 }}>Utrecht · Cayman Islands · Hyderabad</div>
            </div>
          </div>
          {[].map(([h, items]) => (
            <div key={h}>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>{h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(i => <a key={i} style={{ color: 'rgba(255,255,255,.8)', fontWeight: 600, fontSize: 15 }}>{i}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, color: 'rgba(255,255,255,.5)', fontSize: 14, fontWeight: 600, flexWrap: 'wrap', gap: 12 }} className="foot-bottom">
          <span>© 2026 Book &amp; Go</span>
          <span style={{ display: 'flex', gap: 20 }}><span>Worldwide Destinations</span><span>EN · €</span></span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Home ---------------- */
function Home({ go }) {
  return (
    <div>
      <SiteNav go={go} />

      {/* HERO */}
      <section className="hero">
        <Photo scene="hero" showLabel={false} vignette={false} style={{ position: 'absolute', inset: 0, height: '100%' }} />
        <div className="hero__overlay" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,.60) 0%, rgba(0,0,0,.48) 38%, rgba(0,0,0,.40) 60%, rgba(0,0,0,.65) 100%)'
        }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 90, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 className="display fade-up hero__title" style={{
            color: '#ffffff',
            fontSize: 'clamp(52px, 8.4vw, 118px)',
            margin: '0 0 20px',
            textShadow: '0 2px 24px rgba(0,0,0,.55)',
            maxWidth: 1100
          }}>
            See the world differently.
          </h1>
          <p className="fade-up" style={{
            color: 'rgba(255,255,255,.96)',
            fontSize: 'clamp(17px,1.9vw,23px)',
            fontWeight: 600,
            maxWidth: 770,
            margin: '0 0 30px',
            textShadow: '0 2px 14px rgba(0,0,0,.6)'
          }}>
            Curated travel experiences designed for modern explorers. Discover unique journeys and unforgettable destinations.
          </p>
        </div>
      </section>

      {/* CHOOSE DESTINATION */}
      <section className="section" id="discover">
        <div className="wrap">
          <SectionHead eyebrow="Book & Go travel agency" title="Choose your destination." />
          <div className="dest-grid-2">

            {/* Card 1 — Amsterdam */}
            <button onClick={() => go('package', { id: 'explorer5' })} className="dcard" style={{
              position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden',
              textAlign: 'left', display: 'block', boxShadow: 'var(--shadow-md)',
              background: 'none', padding: 0
            }}>
              <Photo scene="amsterdam" style={{ position: 'absolute', inset: 0, height: '100%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.18) 0%, rgba(0,0,0,0) 36%, rgba(0,0,0,.82) 100%)' }} />
              <div className="dest-card-body" style={{
                position: 'relative', zIndex: 2, minHeight: 460,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: 38, color: '#fff'
              }}>
                <span className="chip" style={{
                  alignSelf: 'flex-start',
                  background: '#ffffff',
                  color: 'var(--ink)',
                  boxShadow: '0 2px 16px rgba(0,0,0,.35)',
                  marginBottom: 'auto',
                  whiteSpace: 'nowrap',
                  fontWeight: 800
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                  Available now
                </span>
                <h3 className="display" style={{ fontSize: 'clamp(40px,5vw,66px)', margin: '0 0 12px' }}>Explore Amsterdam</h3>
                <p style={{ fontWeight: 600, fontSize: 17.5, color: 'rgba(255,255,255,.92)', margin: '0 0 24px', maxWidth: 430, textShadow: '0 2px 14px rgba(0,0,0,.4)' }}>
                  A 10-day signature journey across Europe and the Alps with premium transfers, curated highlights and carefully chosen meals.
                </p>
                <span className="btn btn-green" style={{ alignSelf: 'flex-start' }}>
                  View Package <Icon name="arrow" size={18} color="#04391f" />
                </span>
              </div>
            </button>

            {/* Card 2 — Coming Soon */}
            <div style={{
              position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden',
              minHeight: 360, background: 'var(--ink)', color: '#fff',
              padding: 38, display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
              <div className="eyebrow" style={{ color: 'var(--green)', marginBottom: 18 }}>Coming Soon</div>
              <h3 className="display" style={{ fontSize: 'clamp(34px,4vw,52px)', margin: '0 0 20px' }}>
                More places.<br />More stories.<br />More adventures.
              </h3>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 17, lineHeight: 1.6, maxWidth: 420, margin: 0 }}>
                New travel experiences are currently being prepared and will be available soon.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter go={go} />
    </div>
  );
}

/* ---- section header ---- */
function SectionHead({ eyebrow, title, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 54, flexWrap: 'wrap' }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>
        <h2 className="display" style={{ fontSize: 'clamp(34px,5.2vw,64px)', margin: 0 }}>{title}</h2>
      </div>
      {right}
    </div>
  );
}

/* ---- destination card ---- */
function DestinationCard({ d, go }) {
  return (
    <button onClick={() => go('destination', { id: d.id })} style={{ textAlign: 'left', display: 'block', width: '100%', background: 'none' }} className="dcard">
      <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', height: 230, marginBottom: 14, boxShadow: 'var(--shadow-sm)' }} className="dcard-img">
        <Photo scene={d.scene} label={d.name.toLowerCase()} style={{ height: '100%' }}>
          <span className="chip" style={{ position: 'absolute', top: 12, left: 12, background: '#fff', color: 'var(--ink)', boxShadow: '0 2px 10px rgba(0,0,0,.2)', fontWeight: 800 }}>{d.tag}</span>
        </Photo>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span className="dot" style={{ marginTop: 7 }} />
        <div>
          <h3 className="display" style={{ fontSize: 22, margin: '0 0 4px' }}>{d.name}</h3>
          <p style={{ margin: '0 0 8px', color: 'var(--ink-2)', fontWeight: 500, fontSize: 14.5 }}>{d.blurb}</p>
          <span className="seelink" style={{ fontSize: 15 }}>See details <Icon name="chevron" size={14} color="var(--green)" /></span>
        </div>
      </div>
    </button>
  );
}

/* ---- experience card (editorial) ---- */
function ExperienceCard({ e, go }) {
  return (
    <button onClick={() => go('destination', { id: 'keukenhof' })} style={{ textAlign: 'left', width: '100%' }} className="card dcard">
      <div style={{ borderRadius: 'var(--r-lg) var(--r-lg) 0 0', overflow: 'hidden', height: 250 }} className="dcard-img">
        <Photo scene={e.scene} label={e.name.toLowerCase()} style={{ height: '100%' }}>
          <span className="chip" style={{ position: 'absolute', top: 12, left: 12, background: '#fff', color: 'var(--ink)', boxShadow: '0 2px 10px rgba(0,0,0,.2)', fontWeight: 800 }}>{e.dur}</span>
        </Photo>
      </div>
      <div style={{ padding: '22px 22px 24px' }}>
        <h3 className="display" style={{ fontSize: 26, margin: '0 0 6px' }}>{e.name}</h3>
        <p style={{ margin: '0 0 18px', color: 'var(--ink-2)', fontWeight: 500, fontSize: 15, lineHeight: 1.45 }}>{e.note}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 700, fontSize: 15 }}><span style={{ color: 'var(--ink-3)', fontWeight: 600 }}>from</span> €{e.from}</span>
          <span className="seelink" style={{ fontSize: 15 }}>Explore <Icon name="chevron" size={14} color="var(--green)" /></span>
        </div>
      </div>
    </button>
  );
}

/* ---- package card ---- */
function PackageCard({ p, go }) {
  const accent = p.color === 'yellow' ? 'var(--yellow)' : p.color === 'blue' ? 'var(--blue)' : 'var(--green)';
  return (
    <div className="card" style={{ overflow: 'hidden', position: 'relative', outline: p.featured ? '2.5px solid var(--yellow)' : 'none' }}>
      {p.featured && <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 3 }}><span className="badge" style={{ background: 'var(--yellow)', color: '#4a3a00' }}><Icon name="star" size={13} color="#4a3a00" /> Most Popular</span></div>}
      <div style={{ height: 180, overflow: 'hidden' }}><Photo scene={p.scene} showLabel={false} style={{ height: '100%' }} /></div>
      <div style={{ padding: '24px 24px 26px' }}>
        <div className="eyebrow" style={{ color: accent === 'var(--yellow)' ? '#b08800' : accent, marginBottom: 8 }}>{p.tier}</div>
        <h3 className="display" style={{ fontSize: 27, margin: '0 0 4px' }}>{p.name}</h3>
        <p style={{ margin: '0 0 16px', color: 'var(--ink-3)', fontWeight: 700, fontSize: 14 }}>{p.nights}</p>
        <p style={{ margin: '0 0 18px', color: 'var(--ink-2)', fontWeight: 500, fontSize: 15, lineHeight: 1.5 }}>{p.blurb}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
          {p.highlights.map(h => (
            <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, fontWeight: 600 }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--green-soft)', display: 'grid', placeItems: 'center', flex: 'none' }}><Icon name="check" size={12} color="var(--green-ink)" /></span>{h}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16 }}>
          <div><span style={{ color: 'var(--ink-3)', fontWeight: 600, fontSize: 14 }}>from</span><div className="display" style={{ fontSize: 38 }}>€{p.price}</div></div>
          <span style={{ color: 'var(--ink-3)', fontWeight: 600, fontSize: 13, marginBottom: 6 }}>per person</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => go('package', { id: p.id })} className="btn btn-ghost" style={{ flex: 1 }}>Details</button>
          <button onClick={() => go('booking', { pkg: p.id })} className="btn btn-green" style={{ flex: 1 }}>Book</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SiteNav, SiteFooter, Home, SectionHead, DestinationCard, ExperienceCard, PackageCard });