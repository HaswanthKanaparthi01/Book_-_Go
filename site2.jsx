/* ---------------- Package Detail / Explore Europe ---------------- */
function PackageDetail({ go, params }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Preload the hero image immediately on mount so the browser starts
  // fetching it before React even finishes rendering — fastest possible LCP.
  useEffect(() => {
    const href = 'Images/main.jpg';
    if (document.querySelector(`link[rel="preload"][href="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = href;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    return () => { link.remove(); };
  }, []);

  const [selectedPkg, setSelectedPkg] = useState(null);
  const [tab, setTab] = useState('overview');
  const [selectedDates, setSelectedDates] = useState(null);
  const [customDateInput, setCustomDateInput] = useState('');
  const [contactPrefill, setContactPrefill] = useState('');

  const selected = selectedPkg;
  const det = selected ? (PACKAGE_DETAILS[selected.id] || PACKAGE_DETAILS.explorer5) : null;

  const getAccent = (p) => {
    if (!p) return 'var(--green)';
    return p.color === 'yellow' ? 'var(--yellow)' : p.color === 'blue' ? 'var(--blue)' : 'var(--green)';
  };

  const getAccentInk = (accent) => {
    return accent === 'var(--yellow)' ? '#b08800' : accent;
  };

  const accent = getAccent(selected);
  const accentInk = getAccentInk(accent);

  const TABS = [
    ['overview', 'Overview'],
    ['itinerary', 'Itinerary'],
    ['hotel', 'Hotel Info'],
    ['incl', 'Inclusions & Exclusions'],
    ['cost', 'Departure & Cost'],
    ['cancel', 'Cancellation']
  ];

  return (
    <div>
      <SiteNav go={go} />

      {/* HERO */}
      <section className="package-hero">
        <Photo
          scene="amsterdam"
          img="Images/main.jpg"
          showLabel={false}
          vignette={false}
          priority
          style={{ position: 'absolute', inset: 0, height: '100%' }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,.34) 0%, rgba(0,0,0,0) 42%, rgba(0,0,0,.62) 100%)'
          }}
        />

        <button
          onClick={() => go('home', { anchor: 'discover' })}
          className="btn btn-sm package-hero__back"
        >
          <span style={{ transform: 'scaleX(-1)', display: 'inline-flex' }}>
            <Icon name="arrow" size={15} color="var(--ink)" />
          </span>
          Back to package
        </button>

        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingBottom: 54 }}>
          <span
            className="chip"
            style={{
              background: 'rgba(255,255,255,.94)',
              boxShadow: 'none',
              marginBottom: 16
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--green)'
              }}
            />
            Available now
          </span>

          <h1
            className="display"
            style={{
              color: '#fbfbf6',
              fontSize: 'clamp(48px,15vw,126px)',
              margin: '0 0 10px'
            }}
          >
            Explore Europe
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,.92)',
              fontWeight: 700,
              fontSize: 20,
              margin: 0,
              maxWidth: 640,
              lineHeight: 1.45
            }}
          >
            A 10-day signature journey across Europe and the Alps with premium transfers, curated highlights, private guiding and select meals.
          </p>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="section" id="amsterdam-packages">
        <div className="wrap">
          <SectionHead
            eyebrow="Europe tour package"
            title="Explore Europe"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 28,
              alignItems: 'start'
            }}
            className="pkg-compare-grid"
          >
            {/* Package card */}
            <div>
            {PACKAGES.map(pkg => {
              const pkgAccent = getAccent(pkg);
              const pkgAccentInk = getAccentInk(pkgAccent);

              return (
                <div
                  key={pkg.id}
                  className="card"
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                    outline: pkg.featured ? '2.5px solid var(--yellow)' : 'none'
                  }}
                >
                  {pkg.featured && (
                    <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 3 }}>
                      <span
                        className="badge"
                        style={{
                          background: 'var(--yellow)',
                          color: '#4a3a00'
                        }}
                      >
                        <Icon name="star" size={13} color="#4a3a00" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div style={{ height: 210, overflow: 'hidden' }}>
                    <Photo scene={pkg.scene} showLabel={false} style={{ height: '100%' }} />
                  </div>

                  <div style={{ padding: '26px 26px 28px' }}>
                    <div
                      className="eyebrow"
                      style={{
                        color: pkgAccent === 'var(--yellow)' ? '#b08800' : pkgAccent,
                        marginBottom: 8
                      }}
                    >
                      {pkg.tier}
                    </div>

                    <h3
                      className="display"
                      style={{
                        fontSize: 31,
                        margin: '0 0 6px'
                      }}
                    >
                      {pkg.name}
                    </h3>

                    <p
                      style={{
                        margin: '0 0 18px',
                        color: 'var(--ink-3)',
                        fontWeight: 700,
                        fontSize: 14
                      }}
                    >
                      {pkg.nights}
                    </p>

                    <p
                      style={{
                        margin: '0 0 20px',
                        color: 'var(--ink-2)',
                        fontWeight: 500,
                        fontSize: 15,
                        lineHeight: 1.5
                      }}
                    >
                      {pkg.blurb}
                    </p>

                    <div style={{ marginBottom: 22 }}>
                      <div className="eyebrow" style={{ marginBottom: 12 }}>
                        Covers
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                        {pkg.highlights.map(h => (
                          <div
                            key={h}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              fontSize: 14.5,
                              fontWeight: 600
                            }}
                          >
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                background: 'var(--green-soft)',
                                display: 'grid',
                                placeItems: 'center',
                                flex: 'none'
                              }}
                            >
                              <Icon name="check" size={12} color="var(--green-ink)" />
                            </span>
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        marginBottom: 18
                      }}
                    >
                      <div>
                        <span
                          style={{
                            color: 'var(--ink-3)',
                            fontWeight: 600,
                            fontSize: 14
                          }}
                        >
                          from
                        </span>

                        <div className="display" style={{ fontSize: 40 }}>
                          €{pkg.price}
                        </div>
                      </div>

                      <span
                        style={{
                          color: 'var(--ink-3)',
                          fontWeight: 600,
                          fontSize: 13,
                          marginBottom: 6
                        }}
                      >
                        per person
                      </span>
                    </div>

                    {pkg.groupNote && (
                      <div style={{ fontSize: 12.5, color: 'var(--ink-3)', fontWeight: 600, marginTop: -8, marginBottom: 14 }}>
                        {pkg.groupNote}
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: 10 }}>
                      <button
                        onClick={() => {
                          setSelectedPkg(pkg);
                          setTab('overview');
                          setTimeout(() => {
                            const el = document.getElementById('package-detail-panel');
                            if (el) {
                              window.scrollTo({
                                top: el.getBoundingClientRect().top + window.scrollY - 96,
                                behavior: 'smooth'
                              });
                            }
                          }, 60);
                        }}
                        className="btn btn-ghost"
                        style={{ flex: 1 }}
                      >
                        Details
                      </button>

                      
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Comparison table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '18px 22px 14px', borderBottom: '1px solid var(--line)' }}>
                <div className="eyebrow" style={{ marginBottom: 4 }}>Why Book & Go?</div>
                <div style={{ fontWeight: 800, fontSize: 17 }}>See how we compare</div>
              </div>

              {/* Column headers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', borderBottom: '2px solid var(--line)' }}>
                <div style={{ padding: '10px 14px', fontSize: 12, fontWeight: 700, color: 'var(--ink-3)' }}></div>
                {[
                  { label: 'Book & Go', highlight: true },
                  { label: 'Thomas Cook', highlight: false }
                ].map(col => (
                  <div key={col.label} style={{
                    padding: '10px 8px',
                    textAlign: 'center',
                    background: col.highlight ? 'var(--green-soft)' : 'transparent',
                    borderLeft: col.highlight ? '2px solid var(--green)' : '1px solid var(--line)',
                    fontSize: 12.5,
                    fontWeight: 800,
                    color: col.highlight ? 'var(--green-ink)' : 'var(--ink-3)'
                  }}>
                    {col.label}
                    {col.highlight && <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--green)', marginTop: 2 }}>★ Best Choice</div>}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {[
                { feature: 'Price',          us: '€1,990 / ₹1.99L',          tc: '₹2.99L' },
                { feature: 'Meals',          us: 'All 3 meals, vegetarian',   tc: 'Limited coverage' },
                { feature: 'Photographer',   us: 'Included',                  tc: '—' },
                { feature: 'Accommodation',  us: 'Hotels, Villas & Cabins',   tc: 'Standard hotels' },
                { feature: 'Visa assistance',us: 'Fully included',            tc: 'Additional charges' },
                { feature: 'Group size',     us: 'Min 10 people',             tc: 'Large fixed groups' },
                { feature: 'Duration',       us: '10 days / 9 nights',        tc: '11 days' },
                { feature: 'Flights',        us: 'Round-trip economy included',tc: 'Round-trip included' }
              ].map((row, i) => (
                <div key={row.feature} style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 1fr',
                  borderBottom: i < 7 ? '1px solid var(--line)' : 'none',
                  background: i % 2 === 1 ? 'rgba(0,0,0,.015)' : 'transparent'
                }}>
                  <div style={{ padding: '10px 14px', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-2)' }}>
                    {row.feature}
                  </div>
                  <div style={{
                    padding: '10px 8px', fontSize: 12, fontWeight: 700,
                    color: 'var(--green-ink)', background: 'var(--green-soft)',
                    borderLeft: '2px solid var(--green)', textAlign: 'center'
                  }}>
                    ✓ {row.us}
                  </div>
                  <div style={{ padding: '10px 8px', fontSize: 12, color: 'var(--ink-3)', textAlign: 'center', borderLeft: '1px solid var(--line)' }}>
                    {row.tc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SELECTED PACKAGE DETAILS */}
      {selected && det && (
        <section
          id="package-detail-panel"
          style={{
            background: 'var(--paper)',
            padding: '74px 0 96px'
          }}
        >
          <div className="wrap">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.7fr 1fr',
                gap: 56,
                alignItems: 'start'
              }}
              className="grid-2 detail-layout"
            >
              <div className="detail-main">
                <div style={{ marginBottom: 30 }}>
                  <button
                    onClick={() => setSelectedPkg(null)}
                    className="btn btn-ghost btn-sm"
                    style={{ marginBottom: 22 }}
                  >
                    Close Details
                  </button>

                  <div className="eyebrow" style={{ marginBottom: 12 }}>
                    Package details
                  </div>

                  <h2
                    className="display"
                    style={{
                      fontSize: 'clamp(42px,13.1vw,76px)',
                      margin: '0 0 10px'
                    }}
                  >
                    {selected.name}
                  </h2>

                  <p
                    style={{
                      color: 'var(--ink-2)',
                      fontWeight: 700,
                      fontSize: 18,
                      margin: 0
                    }}
                  >
                    {selected.nights} · Starting from €{selected.price} per person
                  </p>
                </div>

                {/* tabs */}
                <div
                  className="no-scrollbar"
                  style={{
                    display: 'flex',
                    gap: 2,
                    overflowX: 'auto',
                    background: '#fff',
                    borderRadius: 'var(--r-lg)',
                    boxShadow: 'inset 0 0 0 1.5px var(--line)',
                    marginBottom: 34
                  }}
                >
                  {TABS.map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => setTab(id)}
                      style={{
                        padding: '18px 16px',
                        fontWeight: 800,
                        fontSize: 14.5,
                        whiteSpace: 'nowrap',
                        color: tab === id ? 'var(--ink)' : 'var(--ink-3)',
                        borderBottom: tab === id ? '3px solid ' + accent : '3px solid transparent',
                        marginBottom: -1
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* overview tab */}
                {tab === 'overview' && (
                  <>
                    <div className="eyebrow" style={{ marginBottom: 14 }}>
                      Package overview
                    </div>

                    <p
                      style={{
                        fontSize: 'clamp(20px,2.4vw,27px)',
                        fontWeight: 500,
                        lineHeight: 1.45,
                        margin: '0 0 34px'
                      }}
                    >
                      {selected.blurb}
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,1fr)',
                        gap: 12,
                        marginBottom: 40
                      }}
                      className="grid-3"
                    >
                      {[
                        ['clock', selected.nights],
                        ['pin', 'Amsterdam, Netherlands'],
                        ['star', selected.tier]
                      ].map(([ic, t]) => (
                        <div
                          key={t}
                          className="card"
                          style={{
                            padding: '16px 18px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                          }}
                        >
                          <Icon name={ic} size={18} color={accentInk} />
                          <span style={{ fontWeight: 700, fontSize: 14 }}>
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>

                    <h3 className="display" style={{ fontSize: 30, margin: '0 0 20px' }}>
                      What this package covers
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {selected.highlights.map(h => (
                        <div
                          key={h}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            fontSize: 16,
                            fontWeight: 600
                          }}
                        >
                          <span
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              background: 'var(--green-soft)',
                              display: 'grid',
                              placeItems: 'center',
                              flex: 'none'
                            }}
                          >
                            <Icon name="check" size={13} color="var(--green-ink)" />
                          </span>
                          {h}
                        </div>
                      ))}
                    </div>

                    <h3 className="display" style={{ fontSize: 30, margin: '44px 0 8px' }}>
                      Experiences included
                    </h3>

                    <p
                      style={{
                        color: 'var(--ink-2)',
                        fontWeight: 500,
                        fontSize: 15.5,
                        margin: '0 0 22px'
                      }}
                    >
                      Highlights from Day 2 to Day 9 of your journey.
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2,1fr)',
                        gap: 16
                      }}
                      className="grid-2"
                    >
                      {selected.itinerary
                        .filter(it => {
                          const dayNum = parseInt(it.d.replace(/\D/g, ''), 10);
                          return dayNum >= 2 && dayNum <= 9;
                        })
                        .map(it => (
                          <div key={it.d} className="card media-row" style={{ overflow: 'hidden', display: 'flex' }}>
                            <div className="media-row__thumb" style={{ width: 96, flex: 'none' }}>
                              <Photo scene={it.scene} img={it.img} style={{ height: '100%' }} />
                            </div>

                            <div style={{ padding: '14px 16px' }}>
                              <h3 className="display" style={{ fontSize: 18, margin: '0 0 4px' }}>
                                {it.t}
                              </h3>

                              <p
                                style={{
                                  margin: 0,
                                  color: 'var(--ink-2)',
                                  fontWeight: 500,
                                  fontSize: 13.5,
                                  lineHeight: 1.4
                                }}
                              >
                                {it.items[0]}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Premium Amenities */}
                    <div className="eyebrow" style={{ marginTop: 48, marginBottom: 10 }}>Premium Amenities</div>
                    <h3 className="display" style={{ fontSize: 28, margin: '0 0 22px' }}>
                      All-inclusive. No surprises.
                    </h3>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,1fr)',
                        gap: 16
                      }}
                      className="grid-3"
                    >
                      {[
                        { icon: 'passport', title: 'Visa & Schengen Fees', note: 'Schengen documentation, consular appointments, photo fees & priority scheduling included.' },
                        { icon: 'plane', title: 'To and Fro Flights', note: 'Round-trip premium flights with gourmet in-flight catering and seamless transit comfort.' },
                        { icon: 'utensils', title: 'Fine Vegetarian Dining', note: "100% pure vegetarian. Fully loaded breakfast, chef's choice lunch stops & custom-timed alpine meals." },
                        { icon: 'home', title: 'Luxury Alpine Stays', note: 'Boutique canal-side houses in Amsterdam and stunning mountain resorts in the Swiss Alps.' },
                        { icon: 'camera', title: 'Dedicated Photographer', note: 'Stunning cinematic vertical reels, high-definition portraits & prompt daily visual updates throughout the trip.' }
                      ].map(a => (
                        <div key={a.title} className="card" style={{ padding: 22 }}>
                          <span style={{
                            width: 44, height: 44, borderRadius: '50%',
                            background: 'var(--green-soft)', display: 'grid', placeItems: 'center',
                            marginBottom: 14
                          }}>
                            <Icon name={a.icon} size={20} color="var(--green-ink)" />
                          </span>
                          <h3 className="display" style={{ fontSize: 17, margin: '0 0 6px' }}>{a.title}</h3>
                          <p style={{ margin: 0, color: 'var(--ink-2)', fontWeight: 500, fontSize: 13.5, lineHeight: 1.5 }}>
                            {a.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* itinerary tab */}
                {tab === 'itinerary' && (
                  <>
                    <h3 className="display" style={{ fontSize: 32, margin: '0 0 24px' }}>
                      Day by day
                    </h3>

                    <div style={{ position: 'relative', paddingLeft: 30 }}>
                      <div
                        style={{
                          position: 'absolute',
                          left: 6,
                          top: 8,
                          bottom: 30,
                          width: 2,
                          background: 'var(--line-2)'
                        }}
                      />

                      {selected.itinerary.map((it, i) => (
                        <div key={i} style={{ position: 'relative', paddingBottom: 22 }}>
                          <span
                            style={{
                              position: 'absolute',
                              left: -30,
                              top: 4,
                              width: 14,
                              height: 14,
                              borderRadius: '50%',
                              background: accent,
                              boxShadow: '0 0 0 4px #fff, 0 0 0 6px var(--line)'
                            }}
                          />

                          <div className="card itinerary-card" style={{ overflow: 'hidden' }}>
                            <div className="itinerary-card__inner">
                              <div className="itinerary-card__thumb">
                                <Photo scene={it.scene} img={it.img} style={{ height: '100%' }} />
                              </div>
                              <div style={{ padding: '16px 20px' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 14, color: accentInk }}>
                                    {it.d}
                                  </span>
                                  <h3 className="display" style={{ fontSize: 20, margin: 0 }}>
                                    {it.t}
                                  </h3>
                                </div>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, color: 'var(--ink-2)', fontWeight: 500, fontSize: 14.5, lineHeight: 1.6 }}>
                                  {it.items.map(x => (
                                    <li key={x}>{x}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* hotel tab */}
                {tab === 'hotel' && (
                  <>
                    <h3 className="display" style={{ fontSize: 32, margin: '0 0 20px' }}>
                      Where you’ll stay
                    </h3>

                    <div className="card" style={{ overflow: 'hidden' }}>
                      <div style={{ height: 240 }}>
                        <Photo scene="canals" style={{ height: '100%' }} />
                      </div>

                      <div style={{ padding: '24px 26px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 6,
                            flexWrap: 'wrap'
                          }}
                        >
                          <h3 className="display" style={{ fontSize: 24, margin: 0 }}>
                            {det.hotel.name}
                          </h3>

                          <span style={{ color: '#f5b301', fontSize: 16, letterSpacing: 2 }}>
                            {'★'.repeat(det.hotel.rating)}
                          </span>
                        </div>

                        <p
                          style={{
                            margin: '0 0 20px',
                            color: 'var(--ink-2)',
                            fontWeight: 600,
                            fontSize: 15,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                          }}
                        >
                          <Icon name="pin" size={16} color={accentInk} />
                          {det.hotel.area} · {det.hotel.room} · {det.hotel.nights}
                        </p>

                        <div className="eyebrow" style={{ marginBottom: 14 }}>
                          Hotel amenities
                        </div>

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 12
                          }}
                          className="grid-2"
                        >
                          {det.hotel.amenities.map(a => (
                            <div
                              key={a}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                fontSize: 14.5,
                                fontWeight: 600
                              }}
                            >
                              <span
                                style={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: '50%',
                                  background: 'var(--green-soft)',
                                  display: 'grid',
                                  placeItems: 'center',
                                  flex: 'none'
                                }}
                              >
                                <Icon name="check" size={13} color="var(--green-ink)" />
                              </span>
                              {a}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* inclusions tab */}
                {tab === 'incl' && (
                  <>
                    <h3 className="display" style={{ fontSize: 32, margin: '0 0 8px' }}>
                      Inclusions &amp; exclusions
                    </h3>

                    <p
                      style={{
                        color: 'var(--ink-2)',
                        fontWeight: 500,
                        fontSize: 15.5,
                        margin: '0 0 24px'
                      }}
                    >
                      Everything clearly shown before enquiry.
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 16
                      }}
                      className="grid-2"
                    >
                      <div
                        style={{
                          background: 'var(--green-soft)',
                          borderRadius: 'var(--r-lg)',
                          padding: '24px 26px'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 16
                          }}
                        >
                          <span
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: '50%',
                              background: 'var(--green)',
                              display: 'grid',
                              placeItems: 'center'
                            }}
                          >
                            <Icon name="check" size={17} color="#04391f" />
                          </span>

                          <h3 className="display" style={{ fontSize: 25, margin: 0 }}>
                            Inclusions
                          </h3>
                        </div>

                        {det.inclusions.map(x => (
                          <p
                            key={x}
                            style={{
                              margin: '10px 0',
                              fontWeight: 600,
                              color: 'var(--green-ink)',
                              lineHeight: 1.45
                            }}
                          >
                            ✓ {x}
                          </p>
                        ))}
                      </div>

                      <div
                        style={{
                          background: '#fff',
                          borderRadius: 'var(--r-lg)',
                          padding: '24px 26px',
                          boxShadow: 'inset 0 0 0 1.5px var(--line)'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 16
                          }}
                        >
                          <span
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: '50%',
                              background: '#fbe4e0',
                              display: 'grid',
                              placeItems: 'center'
                            }}
                          >
                            <Icon name="x" size={17} color="#c0392b" />
                          </span>

                          <h3 className="display" style={{ fontSize: 25, margin: 0 }}>
                            Exclusions
                          </h3>
                        </div>

                        {det.exclusions.map(x => (
                          <p
                            key={x}
                            style={{
                              margin: '10px 0',
                              fontWeight: 600,
                              color: 'var(--ink-2)',
                              lineHeight: 1.45
                            }}
                          >
                            ✕ {x}
                          </p>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* cost tab */}
                {tab === 'cost' && (
                  <>
                    <h3 className="display" style={{ fontSize: 32, margin: '0 0 8px' }}>
                      Departure &amp; cost
                    </h3>

                    <p
                      style={{
                        color: 'var(--ink-2)',
                        fontWeight: 500,
                        fontSize: 15.5,
                        margin: '0 0 24px'
                      }}
                    >
                      Get in touch and we'll confirm a departure date that works for your group.
                    </p>

                    <div className="card" style={{ padding: 28 }}>
                      <div style={{ color: 'var(--ink-3)', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                        Starting from
                      </div>
                      <div className="display" style={{ fontSize: 40, marginBottom: 6 }}>
                        €{selected.price} <span style={{ fontSize: 16, color: 'var(--ink-3)', fontWeight: 600 }}>per person</span>
                      </div>
                      {selected.groupNote && (
                        <div style={{ color: 'var(--ink-2)', fontWeight: 600, fontSize: 14 }}>
                          {selected.groupNote}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setContactPrefill(`I'd like to enquire about a departure date for ${selected.name}.`);
                        const scrollToForm = (attempt = 0) => {
                          const el = document.getElementById('contact-us-form');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          } else if (attempt < 5) {
                            setTimeout(() => scrollToForm(attempt + 1), 100);
                          }
                        };
                        scrollToForm();
                      }}
                      className="btn btn-green btn-lg"
                      style={{ marginTop: 24 }}
                    >
                      Enquire about a departure
                      <Icon name="arrow" size={18} color="#04391f" />
                    </button>
                  </>
                )}

                {/* cancellation tab */}
                {tab === 'cancel' && (
                  <>
                    <h3 className="display" style={{ fontSize: 32, margin: '0 0 8px' }}>
                      Cancellation policy
                    </h3>

                    <p
                      style={{
                        color: 'var(--ink-2)',
                        fontWeight: 500,
                        fontSize: 15.5,
                        margin: '0 0 24px'
                      }}
                    >
                      Cancel free of charge up to 30 days before departure.
                    </p>

                    <div className="card" style={{ overflow: 'hidden', marginBottom: 44 }}>
                      {CANCELLATION.map((c, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 14,
                            padding: '16px 22px',
                            borderBottom: i < CANCELLATION.length - 1 ? '1px solid var(--line)' : 'none'
                          }}
                        >
                          <span style={{ fontWeight: 700, fontSize: 15 }}>
                            {c.when}
                          </span>

                          <span
                            className="badge"
                            style={{
                              whiteSpace: 'nowrap',
                              background:
                                c.tone === 'good'
                                  ? 'var(--green-soft)'
                                  : c.tone === 'bad'
                                  ? '#fbe4e0'
                                  : 'var(--status-pending-bg)',
                              color:
                                c.tone === 'good'
                                  ? 'var(--green-ink)'
                                  : c.tone === 'bad'
                                  ? '#c0392b'
                                  : 'var(--status-pending)'
                            }}
                          >
                            {c.fee}
                          </span>
                        </div>
                      ))}
                    </div>

                    <h3 className="display" style={{ fontSize: 28, margin: '0 0 18px' }}>
                      Terms &amp; conditions
                    </h3>

                    <div
                      className="card"
                      style={{
                        padding: '8px 26px',
                        boxShadow: 'inset 0 0 0 1.5px var(--line)'
                      }}
                    >
                      {TERMS.map((t, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            gap: 14,
                            alignItems: 'flex-start',
                            padding: '15px 0',
                            borderBottom: i < TERMS.length - 1 ? '1px solid var(--line)' : 'none'
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 900,
                              fontSize: 15,
                              color: 'var(--ink-3)',
                              minWidth: 24
                            }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>

                          <p
                            style={{
                              margin: 0,
                              fontSize: 15,
                              fontWeight: 500,
                              color: 'var(--ink-2)',
                              lineHeight: 1.5
                            }}
                          >
                            {t}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* side rail */}
              <aside style={{ position: 'sticky', top: 110 }} className="detail-rail">
                <div className="card" style={{ padding: 26, boxShadow: 'var(--shadow-md)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 8,
                      marginBottom: 2
                    }}
                  >
                    <span style={{ color: 'var(--ink-3)', fontWeight: 600 }}>
                      from
                    </span>

                    <span className="display" style={{ fontSize: 46 }}>
                      €{selected.price}
                    </span>
                  </div>

                  <p
                    style={{
                      margin: '0 0 6px',
                      color: 'var(--ink-3)',
                      fontWeight: 600,
                      fontSize: 14
                    }}
                  >
                    per person · {selected.nights}
                  </p>

                  {selected.groupNote && (
                    <p
                      style={{
                        margin: '0 0 20px',
                        color: 'var(--ink-3)',
                        fontWeight: 600,
                        fontSize: 12.5
                      }}
                    >
                      {selected.groupNote}
                    </p>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                      marginBottom: 20
                    }}
                  >
                    {selected.highlights.map(h => (
                      <div
                        key={h}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontSize: 14.5,
                          fontWeight: 600
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: accent,
                            flex: 'none'
                          }}
                        />
                        {h}
                      </div>
                    ))}
                  </div>

                  {!selectedDates ? (
                    <>
                      <div className="eyebrow" style={{ marginBottom: 16, marginTop: 24 }}>
                        Select Your Departure Date
                      </div>

                      {/* Custom date input */}
                      <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--ink-3)', marginBottom: 8 }}>
                          Enter Custom Date
                        </label>
                        <input
                          type="date"
                          value={customDateInput}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setCustomDateInput(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: 'var(--r-md)',
                            border: '1.5px solid var(--line)',
                            fontSize: 14,
                            fontFamily: 'var(--font-text)',
                            boxSizing: 'border-box',
                            marginBottom: 10
                          }}
                        />
                        <button
                          type="button"
                          disabled={!customDateInput}
                          className="btn btn-primary btn-sm"
                          style={{ width: '100%', opacity: customDateInput ? 1 : 0.5 }}
                          onClick={() => {
                            if (!customDateInput) return;
                            const date = new Date(customDateInput + 'T00:00:00');
                            setSelectedDates({
                              date: date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }),
                              twin: selected.price,
                              single: Math.round(selected.price * 1.3),
                              status: 'Custom'
                            });
                          }}
                        >
                          Confirm Date
                        </button>
                      </div>

                    </>
                  ) : (
                    <>
                      <div className="eyebrow" style={{ marginBottom: 12, marginTop: 24, color: 'var(--green)' }}>
                        ✓ Dates Selected
                      </div>
                      <div style={{ background: 'var(--green-soft)', borderRadius: 'var(--r-md)', padding: '12px 14px', marginBottom: 16, fontSize: 14, fontWeight: 600, color: 'var(--green-ink)' }}>
                        {selectedDates.date}<br />€{selectedDates.twin} per person
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                        <button
                          onClick={() => go('booking', { pkg: selected.id, departure: selectedDates.date })}
                          className="btn btn-green"
                          style={{ width: '100%' }}
                        >
                          Proceed to Book
                          <Icon name="arrow" size={16} color="#04391f" style={{ marginLeft: 8 }} />
                        </button>
                        <button
                          onClick={() => setSelectedDates(null)}
                          className="btn btn-ghost"
                          style={{ width: '100%' }}
                        >
                          Change Dates
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      <SiteFooter go={go} prefillMessage={contactPrefill} />
    </div>
  );
}

Object.assign(window, { PackageDetail });