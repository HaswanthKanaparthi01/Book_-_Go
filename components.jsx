/* ============================================================
   BOOK & GO — shared components
   ============================================================ */

/* ---- Scene placeholders: each is a layered gradient evoking an
   Amsterdam scene so nothing ever renders broken. Swap for real
   photography by replacing the `bg` with a url(). ---- */
const SCENES = {
  amsterdam: { label: 'amsterdam · canal houses', bg: 'linear-gradient(180deg,#2a4f63 0%,#3f7d86 34%,#7fae9b 56%,#caa45c 74%,#9c7437 100%)', glow: 'radial-gradient(120% 80% at 22% 18%, rgba(255,225,150,.55), transparent 55%)' },
  hero:      { label: 'amsterdam · red light district', bg: 'linear-gradient(160deg,#0a1230 0%,#2a1f56 42%,#7a1f6a 76%,#15296e 100%)', glow: 'radial-gradient(40% 40% at 70% 64%, rgba(255,70,160,.5), transparent 60%), radial-gradient(30% 30% at 24% 40%, rgba(60,150,255,.5), transparent 60%)' },
  canals:    { label: 'hidden canals · dusk',     bg: 'linear-gradient(180deg,#16414f 0%,#236b6f 40%,#3f9a86 60%,#d3a657 82%,#7c5a2e 100%)', glow: 'radial-gradient(90% 70% at 78% 16%, rgba(255,212,138,.6), transparent 50%)' },
  tulips:    { label: 'keukenhof · tulip fields',  bg: 'linear-gradient(180deg,#bfe2ff 0%,#bfe2ff 28%,#e8438a 38%,#ffd60a 50%,#ff7fae 60%,#34b46a 74%,#1c7d44 100%)', glow: 'radial-gradient(80% 50% at 50% 12%, rgba(255,255,255,.5), transparent 60%)' },
  nightlife: { label: 'amsterdam · after dark',    bg: 'linear-gradient(160deg,#0a1230 0%,#2a1f56 42%,#7a1f6a 76%,#15296e 100%)', glow: 'radial-gradient(40% 40% at 70% 64%, rgba(255,70,160,.5), transparent 60%), radial-gradient(30% 30% at 24% 40%, rgba(60,150,255,.5), transparent 60%)' },
  vangogh:   { label: 'van gogh museum',           bg: 'linear-gradient(180deg,#0f3a7a 0%,#1f5aa8 46%,#3f7dc4 64%,#e6b53f 100%)', glow: 'radial-gradient(34% 34% at 74% 30%, rgba(255,221,110,.85), transparent 60%), radial-gradient(50% 40% at 26% 70%, rgba(120,170,235,.5), transparent 60%)' },
  rijks:     { label: 'rijksmuseum',               bg: 'linear-gradient(180deg,#a9d2ff 0%,#a9d2ff 32%,#9a3b2e 44%,#b95a3c 64%,#7e3526 100%)', glow: 'radial-gradient(70% 40% at 50% 14%, rgba(255,255,255,.45), transparent 60%)' },
  annefrank: { label: 'anne frank house',          bg: 'linear-gradient(180deg,#9fc3d6 0%,#9fc3d6 26%,#5d4636 38%,#3c2c20 70%,#2a1f17 100%)', glow: 'radial-gradient(60% 36% at 50% 12%, rgba(255,255,255,.4), transparent 60%)' },
  jordaan:   { label: 'jordaan district',          bg: 'linear-gradient(180deg,#bfe2ff 0%,#bfe2ff 24%,#8a4030 36%,#a85a3e 58%,#2f7d4a 78%,#1f6c3c 100%)', glow: 'radial-gradient(70% 40% at 30% 14%, rgba(255,255,255,.4), transparent 60%)' },
  dam:       { label: 'dam square',                bg: 'linear-gradient(180deg,#9ec9f5 0%,#9ec9f5 38%,#b9b3a6 52%,#8d8676 72%,#5f5a4e 100%)', glow: 'radial-gradient(70% 44% at 60% 16%, rgba(255,255,255,.5), transparent 60%)' },
  giethoorn: { label: 'giethoorn · waterways',     bg: 'linear-gradient(180deg,#bfe6ff 0%,#bfe6ff 24%,#5fa56a 38%,#2f8a86 58%,#1f6f78 78%,#15535c 100%)', glow: 'radial-gradient(70% 40% at 40% 14%, rgba(255,255,255,.45), transparent 60%)' },
  food:      { label: 'dutch food tour',           bg: 'linear-gradient(180deg,#e8c768 0%,#d8a23f 42%,#b66f30 70%,#8a4d24 100%)', glow: 'radial-gradient(60% 50% at 30% 22%, rgba(255,238,180,.6), transparent 60%)' },
  cruise:    { label: 'canal cruise',              bg: 'linear-gradient(180deg,#2b5566 0%,#3f8590 40%,#6fb59c 60%,#cf9f54 100%)', glow: 'radial-gradient(80% 50% at 70% 18%, rgba(255,224,150,.55), transparent 55%)' },
  cycling:   { label: 'cycling routes',            bg: 'linear-gradient(180deg,#bfe2ff 0%,#bfe2ff 26%,#cf5237 40%,#e07a3c 58%,#2f8a5a 78%,#1f6c46 100%)', glow: 'radial-gradient(60% 40% at 66% 16%, rgba(255,255,255,.4), transparent 60%)' },
  sunset:    { label: 'best sunset spots',         bg: 'linear-gradient(180deg,#f7b34a 0%,#ef7d4e 38%,#c64f63 64%,#5b3a76 100%)', glow: 'radial-gradient(46% 46% at 50% 30%, rgba(255,236,170,.85), transparent 60%)' },
  photo:     { label: 'photography tour',          bg: 'linear-gradient(160deg,#3a5a6b 0%,#5f8a8a 44%,#cfa75e 78%,#8a6531 100%)', glow: 'radial-gradient(70% 40% at 30% 16%, rgba(255,230,160,.5), transparent 60%)' },
  museum:    { label: 'museum experiences',        bg: 'linear-gradient(180deg,#c8d6e6 0%,#9aaecb 44%,#6f5a8c 74%,#3f3560 100%)', glow: 'radial-gradient(60% 36% at 50% 14%, rgba(255,255,255,.45), transparent 60%)' },
};

/* Real, permanent Amsterdam photography (verified Wikimedia Commons thumbnails) */
const SCENE_IMG = {
  amsterdam: 'Images/main.jpg',
  hero:      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?fm=jpg&q=80&w=1920&auto=format&fit=crop',
  canals:    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Colorful_canal_houses_at_golden_hour_in_Damrak_avenue_Amsterdam_the_Netherlands.jpg/1280px-Colorful_canal_houses_at_golden_hour_in_Damrak_avenue_Amsterdam_the_Netherlands.jpg',
  tulips:    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Field_of_red_tulips_near_Keukenhof.jpg/1280px-Field_of_red_tulips_near_Keukenhof.jpg',
  nightlife: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amsterdam_by_night_in_snow_evening_-_at_the_street_Kattenburgergracht.jpg/1280px-Amsterdam_by_night_in_snow_evening_-_at_the_street_Kattenburgergracht.jpg',
  vangogh:   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Van_Gogh_Museum_Amsterdam.jpg/1280px-Van_Gogh_Museum_Amsterdam.jpg',
  rijks:     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Amsterdam-Rijksmuseum-Exterior_Restoration.jpg/1280px-Amsterdam-Rijksmuseum-Exterior_Restoration.jpg',
  annefrank: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/AnneFrankHouseAmsterdamtheNetherlands.jpg/1280px-AnneFrankHouseAmsterdamtheNetherlands.jpg',
  jordaan:   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Canal_in_Jordaan%2C_Amsterdam_%289258952020%29.jpg/1280px-Canal_in_Jordaan%2C_Amsterdam_%289258952020%29.jpg',
  dam:       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Palacio_Real%2C_%C3%81msterdam%2C_Pa%C3%ADses_Bajos%2C_2016-05-30%2C_DD_07-09_HDR.jpg/1280px-Palacio_Real%2C_%C3%81msterdam%2C_Pa%C3%ADses_Bajos%2C_2016-05-30%2C_DD_07-09_HDR.jpg',
  giethoorn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Giethoorn_Netherlands_flckr03.jpg/1280px-Giethoorn_Netherlands_flckr03.jpg',
  food:      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Stroopwafels_01.jpg/1280px-Stroopwafels_01.jpg',
  cruise:    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Canal_cruise_boat_in_Amsterdam_%2825672670434%29.jpg/1280px-Canal_cruise_boat_in_Amsterdam_%2825672670434%29.jpg',
  cycling:   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Amsterdam_-_Canal%2C_Bridge_and_Bike.jpg/1280px-Amsterdam_-_Canal%2C_Bridge_and_Bike.jpg',
  sunset:    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Sunset_-_Canal_Jordaan_-_Amsterdam_%2816820751926%29.jpg/1280px-Sunset_-_Canal_Jordaan_-_Amsterdam_%2816820751926%29.jpg',
  photo:     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Good_Morning_Amsterdam_%28155128185%29.jpeg/1280px-Good_Morning_Amsterdam_%28155128185%29.jpeg',
};
SCENE_IMG.museum = SCENE_IMG.rijks;

/* Generic, reliable fallback photo used if a scene/custom image fails to load */
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?fm=jpg&q=80&w=1280&auto=format&fit=crop';

function Photo({ scene = 'amsterdam', img, label, className = '', style = {}, showLabel = false, vignette = true, priority = false, children }) {
  const s = SCENES[scene] || SCENES.amsterdam;
  const primarySrc = img || SCENE_IMG[scene] || SCENE_IMG.amsterdam;
  // stage: 0 = try primary image, 1 = try generic fallback photo, 2 = give up, show gradient
  const [stage, setStage] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => { setStage(0); setLoaded(false); }, [primarySrc]);
  const src = stage === 0 ? primarySrc : stage === 1 ? FALLBACK_IMG : null;
  return (
    <div
      className={`photo ${vignette ? 'photo-vignette' : ''} ${className}`}
      style={{ background: stage === 2 ? s.bg : 'var(--skeleton, #e7e7e7)', ...style }}
    >
      {src && stage !== 2
        ? <img
            key={src}
            src={src}
            alt={label || s.label}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            onError={() => setStage(st => st + 1)}
            onLoad={() => setLoaded(true)}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
              opacity: loaded ? 1 : 0,
              transition: 'opacity .35s ease'
            }}
          />
        : <><div className="photo-grain" />{s.glow && <div className="photo-glow" style={{ background: s.glow }} />}</>}
      {showLabel && <span className="photo-tag">◦ {label || s.label}</span>}
      {children}
    </div>
  );
}

/* ---- Logo ---- */
function Logo({ light = false, size = 22, onClick }) {
  const ink = light ? '#fff' : 'var(--ink)';
  return (
    <button className="logo-btn" onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'none' }}>
      <span style={{ width: size, height: size, borderRadius: 7, background: 'var(--green)', display: 'grid', placeItems: 'center', flex: 'none', boxShadow: '0 2px 8px rgba(0,196,106,.4)' }}>
        <span style={{ width: size * 0.34, height: size * 0.34, borderRadius: 3, background: '#04391f' }} />
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: size * 0.92, letterSpacing: '-0.03em', color: ink, lineHeight: 1 }}>
        Book&nbsp;&amp;&nbsp;Go
      </span>
    </button>
  );
}

/* ---- Icon: tiny inline set (simple geometry only) ---- */
function Icon({ name, size = 18, stroke = 2, color = 'currentColor' }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    chevron: <path d="m9 6 6 6-6 6" />,
    check: <path d="M20 6 9 17l-5-5" />,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    users: <><circle cx="9" cy="8" r="3.5" /><path d="M2 21a7 7 0 0 1 14 0" /><path d="M17 5a3.5 3.5 0 0 1 0 7M22 21a7 7 0 0 0-5-6.7" /></>,
    pin: <><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
    star: <path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.5 6.8 19l1-5.8L3.6 9.1l5.8-.8Z" />,
    bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
    sparkle: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6" /><path d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" /></>,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    feed: <><path d="M4 4a16 16 0 0 1 16 16" /><path d="M4 11a9 9 0 0 1 9 9" /><circle cx="5" cy="19" r="1.6" fill={color} /></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="2.5" /><circle cx="8.5" cy="8.5" r="1.8" /><path d="m21 16-5-5L5 21" /></>,
    queue: <><rect x="3" y="4" width="18" height="5" rx="1.5" /><rect x="3" y="12" width="18" height="5" rx="1.5" /></>,
    send: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />,
    chart: <><path d="M3 3v18h18" /><path d="M7 14l3-4 3 3 4-6" /></>,
    pulse: <path d="M3 12h4l2-7 4 14 2-7h6" />,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></>,
    trend: <><path d="M3 17 9 11l4 4 8-8" /><path d="M15 7h6v6" /></>,
    play: <path d="M6 4v16l13-8Z" fill={color} stroke="none" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    filter: <path d="M3 5h18l-7 8v6l-4-2v-4Z" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill={color} stroke="none" /></>,
    plane: <path d="M21 3 11 13M21 3l-7 18-4-8-8-4Z" />,
    passport: <><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="9" r="2.6" /><path d="M8.5 16.5h7M12 11.6V13" /></>,
    utensils: <><path d="M6 2v8a2 2 0 0 0 4 0V2M8 10v12" /><path d="M17 2c-1.5 1.6-2.2 3.6-2.2 6.4 0 2 1 3.6 2.2 4.1V22" /></>,
    home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10" /></>,
    camera: <><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13.5" r="3.5" /></>,
  };
  return <svg {...p}>{paths[name] || null}</svg>;
}


/* ---- Contact Us form (frontend-only) ---- */
function ContactForm({ title = 'Contact Us', subtitle, dark = false, prefillMessage = '' }) {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', message: prefillMessage });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (prefillMessage) setForm(f => ({ ...f, message: prefillMessage }));
  }, [prefillMessage]);

  const update = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // Frontend-only for now — no email service / API call yet.
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const fieldStyle = dark ? {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 'var(--r-sm)',
    border: '1.5px solid rgba(255,255,255,.16)',
    fontSize: 14,
    fontFamily: 'var(--font-text)',
    boxSizing: 'border-box',
    background: 'rgba(255,255,255,.05)',
    color: '#fff'
  } : {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 'var(--r-sm)',
    border: '1.5px solid var(--line)',
    fontSize: 14.5,
    fontFamily: 'var(--font-text)',
    boxSizing: 'border-box',
    background: '#fff'
  };
  const errorFieldStyle = { ...fieldStyle, border: '1.5px solid #e14d4d' };
  const labelStyle = dark
    ? { display: 'block', fontSize: 12.5, fontWeight: 700, color: 'rgba(255,255,255,.55)', marginBottom: 5 }
    : { display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--ink-3)', marginBottom: 6 };
  const errorTextStyle = { color: dark ? '#ff8a8a' : '#e14d4d', fontSize: 12, fontWeight: 600, marginTop: 4 };

  const formBody = submitted ? (
    <div style={{
      background: dark ? 'rgba(0,196,106,.12)' : 'var(--green-soft)',
      border: '1.5px solid var(--green)',
      borderRadius: 'var(--r-md)',
      padding: dark ? '14px 16px' : '18px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
      <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--green)', display: 'grid', placeItems: 'center', flex: 'none' }}>
        <Icon name="check" size={14} color="#04391f" />
      </span>
      <span style={{ fontWeight: 700, fontSize: 14, color: dark ? '#fff' : 'var(--ink)' }}>Thank you, we'll contact you soon.</span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className={dark ? 'contact-form--dark' : ''} style={{ display: 'grid', gap: dark ? 12 : 18, marginTop: subtitle ? 0 : (dark ? 4 : 22) }} noValidate>
      <div>
        <label style={labelStyle}>Name *</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          placeholder="Your full name"
          style={errors.name ? errorFieldStyle : fieldStyle}
        />
        {errors.name && <div style={errorTextStyle}>{errors.name}</div>}
      </div>

      <div>
        <label style={labelStyle}>Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="you@example.com"
          style={errors.email ? errorFieldStyle : fieldStyle}
        />
        {errors.email && <div style={errorTextStyle}>{errors.email}</div>}
      </div>

      <div>
        <label style={labelStyle}>Phone Number</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="+31 6 12 34 56 78"
          style={fieldStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us about your trip..."
          rows={dark ? 3 : 4}
          style={{ ...(errors.message ? errorFieldStyle : fieldStyle), resize: 'vertical', fontFamily: 'var(--font-text)' }}
        />
        {errors.message && <div style={errorTextStyle}>{errors.message}</div>}
      </div>

      <button type="submit" className="btn btn-green" style={{ width: '100%', justifyContent: 'center', padding: dark ? '11px 18px' : undefined }}>
        Submit <Icon name="arrow" size={15} color="#04391f" />
      </button>
    </form>
  );

  if (dark) {
    return (
      <div>
        {title && <h3 className="display" style={{ fontSize: 21, margin: '0 0 4px', color: '#fff' }}>{title}</h3>}
        {subtitle && <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 13.5, margin: '0 0 14px' }}>{subtitle}</p>}
        {formBody}
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 28 }}>
      <h3 className="display" style={{ fontSize: 26, margin: '0 0 4px' }}>{title}</h3>
      {subtitle && <p style={{ color: 'var(--ink-2)', fontSize: 14.5, margin: '0 0 22px' }}>{subtitle}</p>}
      {formBody}
    </div>
  );
}

Object.assign(window, { SCENES, Photo, Logo, Icon, ContactForm });