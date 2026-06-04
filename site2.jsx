/* ---------------- Package Detail / Explore Amsterdam ---------------- */
function PackageDetail({ go, params }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [selectedPkg, setSelectedPkg] = useState(null);
  const [tab, setTab] = useState('overview');
  const [selectedDates, setSelectedDates] = useState(null);

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
          showLabel={false}
          vignette={false}
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
          Back to trips
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
              fontSize: 'clamp(48px,9vw,126px)',
              margin: '0 0 10px'
            }}
          >
            Explore Amsterdam.
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
            Choose from curated Amsterdam packages with itinerary, inclusions,
            exclusions, hotel details, departure cost and booking support.
          </p>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="section" id="amsterdam-packages">
        <div className="wrap">
          <SectionHead
            eyebrow="Amsterdam travel packages"
            title="Choose your package."
          />

          <div
            className="grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 22
            }}
          >
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

                      <button
                        onClick={() => go('booking', { pkg: pkg.id })}
                        className="btn btn-green"
                        style={{ flex: 1 }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
                      fontSize: 'clamp(42px,6vw,76px)',
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
                      The curated experiences included in this package.
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2,1fr)',
                        gap: 16
                      }}
                      className="grid-2"
                    >
                      {(det.exp || [])
                        .map(id => EXPERIENCES.find(e => e.id === id))
                        .filter(Boolean)
                        .map(e => (
                          <div key={e.id} className="card media-row" style={{ overflow: 'hidden', display: 'flex' }}>
                            <div className="media-row__thumb" style={{ width: 96, flex: 'none' }}>
                              <Photo scene={e.scene} style={{ height: '100%' }} />
                            </div>

                            <div style={{ padding: '14px 16px' }}>
                              <h3 className="display" style={{ fontSize: 18, margin: '0 0 4px' }}>
                                {e.name}
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
                                {e.note}
                              </p>
                            </div>
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
                                <Photo scene={it.scene} style={{ height: '100%' }} />
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
                      Sample departures for prototype enquiry flow.
                    </p>

                    <div className="card depart-table" style={{ overflow: 'hidden' }}>
                      <div className="depart-row depart-row--head">
                        <span>Departure</span>
                        <span>Twin Sharing</span>
                        <span>Single</span>
                        <span>Status</span>
                      </div>

                      {det.departures.map((d, i) => (
                        <div key={d.date} className="depart-row" style={{ borderBottom: i < det.departures.length - 1 ? '1px solid var(--line)' : 'none' }}>
                          <span style={{ fontWeight: 700, fontSize: 14.5 }}>
                            {d.date}
                          </span>

                          <span className="display" style={{ fontSize: 18 }}>
                            €{d.twin}
                          </span>

                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: 15,
                              color: 'var(--ink-2)'
                            }}
                          >
                            €{d.single}
                          </span>

                          <span>
                            <span
                              className="badge"
                              style={{
                                background: d.status === 'Available' ? 'var(--green-soft)' : 'var(--status-pending-bg)',
                                color: d.status === 'Available' ? 'var(--green-ink)' : 'var(--status-pending)'
                              }}
                            >
                              {d.status}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => go('booking', { pkg: selected.id })}
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
                      margin: '0 0 20px',
                      color: 'var(--ink-3)',
                      fontWeight: 600,
                      fontSize: 14
                    }}
                  >
                    per person · {selected.nights}
                  </p>

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
                          onChange={(e) => {
                            if (e.target.value) {
                              const date = new Date(e.target.value);
                              setSelectedDates({
                                date: date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }),
                                twin: selected.price,
                                single: Math.round(selected.price * 1.3),
                                status: 'Custom'
                              });
                            }
                          }}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            borderRadius: 'var(--r-md)',
                            border: '1.5px solid var(--line)',
                            fontSize: 14,
                            fontFamily: 'var(--font-text)',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                        <div style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
                        <span style={{ fontSize: 12, color: 'var(--ink-3)', fontWeight: 600 }}>or</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--line)' }} />
                      </div>

                      {/* Suggested dates */}
                      <div style={{ marginBottom: 12 }}>
                        <div className="eyebrow" style={{ marginBottom: 10, fontSize: 12 }}>
                          Suggested Departures
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {det && det.departures.map(d => (
                          <button
                            key={d.date}
                            onClick={() => setSelectedDates(d)}
                            style={{
                              padding: '12px 14px',
                              borderRadius: 'var(--r-md)',
                              border: '1.5px solid var(--line)',
                              background: '#fff',
                              fontSize: 13,
                              fontWeight: 600,
                              cursor: 'pointer',
                              transition: 'all .2s',
                              textAlign: 'left',
                              color: 'var(--ink)',
                              opacity: d.status === 'Available' ? 1 : 0.5,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                            onMouseEnter={e => {
                              if (d.status === 'Available') {
                                e.currentTarget.style.borderColor = 'var(--green)';
                                e.currentTarget.style.background = 'var(--green-soft)';
                              }
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.borderColor = 'var(--line)';
                              e.currentTarget.style.background = '#fff';
                            }}
                            disabled={d.status !== 'Available'}
                          >
                            <span>{d.date}</span>
                            <span style={{ fontSize: 12, color: d.status === 'Available' ? 'var(--ink-3)' : 'var(--ink-3)', fontWeight: 500 }}>€{d.twin}</span>
                          </button>
                        ))}
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

      <SiteFooter go={go} />
    </div>
  );
}

Object.assign(window, { PackageDetail });