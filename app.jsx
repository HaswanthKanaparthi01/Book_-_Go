/* ============================================================
   BOOK & GO — app root: router + toasts
   ============================================================ */
const { useState: useStateR, useEffect: useEffectR, useCallback } = React;

function ToastHost({ toasts }) {
  return (
    <div className="toast-wrap">
      {toasts.map(t => (
        <div key={t.id} className="toast"><span className="tk"><Icon name="check" size={13} color="#04391f" /></span>{t.msg}</div>
      ))}
    </div>
  );
}

/* Booking flow */
function Booking({ go, params, toast }) {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({ travelers: 1, name: '', email: '', rooms: 'twin', requests: '' });
  
  const pkgId = params.pkg || 'explorer5';
  const pkg = PACKAGE_DETAILS[pkgId];
  const departure = params.departure || 'Not selected';
  
  const updateField = (field, val) => setFormData(f => ({ ...f, [field]: val }));
  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      toast('Please fill in all required fields');
      return;
    }
    setStep(3);
    setTimeout(() => toast('Booking confirmed! Check your email for details.'), 300);
  };
  
  const packageInfo = PACKAGES.find(p => p.id === pkgId);
  const basePrice = packageInfo?.price || 999;
  const total = basePrice * formData.travelers;
  
  return (
    <div>
      <SiteNav go={go} />
      <section className="booking-page" style={{ minHeight: '100vh', padding: '120px 0 80px', background: 'var(--paper)' }}>
        <div className="wrap layout-booking" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 48, alignItems: 'start' }}>
          {/* Main Form */}
          <div>
            <button onClick={() => go('package', { id: pkgId })} className="btn btn-ghost btn-sm" style={{ marginBottom: 24, animation: 'fadeUp .4s ease-out' }}>
              <span style={{ transform: 'scaleX(-1)', display: 'inline-flex' }}><Icon name="arrow" size={15} /></span> Back to Package
            </button>
            
            {step === 1 && (
              <div style={{ animation: 'fadeUp .5s ease-out' }}>
                <h1 className="display" style={{ fontSize: 'clamp(48px, 8vw, 86px)', margin: '0 0 8px' }}>Complete Your Booking</h1>
                <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 48, marginTop: 16 }}>Step 1 of 2 — Traveler Information</p>
                
                <div style={{ display: 'grid', gap: 24 }}>
                  {/* Travelers */}
                  <div className="field">
                    <label>Number of Travelers</label>
                    <select value={formData.travelers} onChange={(e) => updateField('travelers', parseInt(e.target.value))} className="input" style={{ appearance: 'none', paddingRight: 32, cursor: 'pointer' }}>
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4+ Travelers</option>
                    </select>
                  </div>
                  
                  {/* Name */}
                  <div className="field">
                    <label>Full Name *</label>
                    <input type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="John Doe" className="input" />
                  </div>
                  
                  {/* Email */}
                  <div className="field">
                    <label>Email Address *</label>
                    <input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="john@example.com" className="input" />
                  </div>
                  
                  {/* Room Type */}
                  <div className="field">
                    <label>Room Preference</label>
                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      {['twin', 'single'].map(type => (
                        <button key={type} onClick={() => updateField('rooms', type)} style={{
                          padding: 14, borderRadius: 'var(--r-sm)', border: formData.rooms === type ? '2px solid var(--green)' : '1.5px solid var(--line-2)',
                          background: formData.rooms === type ? 'var(--green-soft)' : '#fff', fontWeight: 700, fontSize: 14, textTransform: 'capitalize',
                          transition: 'all .2s ease', cursor: 'pointer'
                        }}>
                          {type === 'twin' ? '👥 Twin' : '🛏️ Single'}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Special Requests */}
                  <div className="field">
                    <label>Special Requests (Optional)</label>
                    <textarea value={formData.requests} onChange={(e) => updateField('requests', e.target.value)} placeholder="e.g., high floor, early check-in..." className="input" style={{ minHeight: 100, fontFamily: 'inherit', resize: 'none' }} />
                  </div>
                  
                  <button onClick={() => setStep(2)} className="btn btn-green btn-lg" style={{ marginTop: 16, width: '100%' }}>
                    Review & Confirm
                    <Icon name="arrow" size={16} color="#04391f" />
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div style={{ animation: 'fadeUp .5s ease-out' }}>
                <h1 className="display" style={{ fontSize: 'clamp(48px, 8vw, 86px)', margin: '0 0 8px' }}>Review Your Booking</h1>
                <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 48, marginTop: 16 }}>Step 2 of 2 — Confirmation</p>
                
                <div style={{ background: '#fff', border: '1.5px solid var(--line)', borderRadius: 'var(--r-md)', padding: 28, marginBottom: 28 }}>
                  <div style={{ display: 'grid', gap: 20 }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>Booking Details</div>
                      <div style={{ fontSize: 18, fontWeight: 700 }}>{packageInfo?.name}</div>
                      <div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 4 }}>📅 Departure: {departure}</div>
                    </div>
                    <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ color: 'var(--ink-2)' }}>{formData.travelers} traveler{formData.travelers > 1 ? 's' : ''}</span>
                        <span style={{ fontWeight: 700 }}>€{basePrice} each</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ color: 'var(--ink-2)' }}>{formData.rooms} room</span>
                        <span style={{ fontWeight: 700 }}>Included</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, paddingTop: 12, borderTop: '1.5px solid var(--line)' }}>
                        <span>Total Price</span>
                        <span style={{ color: 'var(--green)' }}>€{total}</span>
                      </div>
                    </div>
                    <div style={{ background: 'var(--yellow-soft)', padding: 14, borderRadius: 'var(--r-sm)', fontSize: 13, color: 'var(--status-pending)' }}>
                      ✓ Name: {formData.name} | Email: {formData.email}
                    </div>
                  </div>
                </div>
                
                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <button onClick={() => setStep(1)} className="btn btn-ghost btn-lg" style={{ width: '100%' }}>
                    ← Back
                  </button>
                  <button onClick={handleSubmit} className="btn btn-green btn-lg" style={{ width: '100%' }}>
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div style={{ animation: 'fadeUp .5s ease-out', textAlign: 'center', paddingTop: 60 }}>
                <div style={{ fontSize: 64, marginBottom: 24 }}>✓</div>
                <h1 className="display" style={{ fontSize: 'clamp(48px, 8vw, 86px)', margin: '0 0 20px' }}>Booking Confirmed!</h1>
                <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 500, lineHeight: 1.6, marginBottom: 40 }}>
                  Thank you, {formData.name}. A confirmation email has been sent to {formData.email}. Our team will be in touch within 24 hours.
                </p>
                <button onClick={() => go('home')} className="btn btn-green btn-lg">
                  ← Back to Home
                </button>
              </div>
            )}
          </div>
          
          {/* Sidebar Summary */}
          <div className="booking-summary" style={{ position: 'sticky', top: 140 }}>
            <div style={{ background: '#fff', border: '1.5px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 20, animation: 'fadeUp .6s ease-out' }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 12 }}>Booking Summary</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{packageInfo?.name}</div>
              <div style={{ background: 'var(--green-soft)', padding: 12, borderRadius: 'var(--r-sm)', marginBottom: 16, fontSize: 14, fontWeight: 700 }}>
                📅 {departure}
              </div>
              <div style={{ display: 'grid', gap: 8, fontSize: 14, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-2)' }}>
                  <span>Travelers:</span>
                  <span style={{ fontWeight: 700 }}>{formData.travelers}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-2)', textTransform: 'capitalize' }}>
                  <span>Room:</span>
                  <span style={{ fontWeight: 700 }}>{formData.rooms}</span>
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 12 }}>TOTAL PRICE</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--green)', marginBottom: 20 }}>€{total}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                ✓ All meals included<br />
                ✓ Airport transfers<br />
                ✓ 24/7 concierge support
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter go={go} />
    </div>
  );
}

/* Destination detail */
function DestinationDetail({ go, params }) {
  const destId = params.id || 'canals';
  const dest = DESTINATIONS.find(d => d.id === destId) || DESTINATIONS[0];
  const scene = SCENES[dest.scene] || SCENES.amsterdam;
  
  return (
    <div>
      <SiteNav go={go} />
      
      {/* Hero */}
      <div className="dest-hero" style={{ height: '60vh', position: 'relative', minHeight: 400, animation: 'fadeUp .6s ease-out' }}>
        <Photo scene={dest.scene} style={{ height: '100%' }} />
      </div>
      
      <section style={{ padding: '80px 0', background: 'var(--paper)' }}>
        <div className="wrap">
          <button onClick={() => go('home', { anchor: 'discover' })} className="btn btn-ghost btn-sm" style={{ marginBottom: 40, animation: 'fadeUp .4s ease-out' }}>
            <span style={{ transform: 'scaleX(-1)', display: 'inline-flex' }}><Icon name="arrow" size={15} /></span> Back to Destinations
          </button>
          
          <div style={{ maxWidth: 800 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, animation: 'fadeUp .5s ease-out' }}>
              <span className="badge" style={{ background: 'var(--yellow-soft)', color: 'var(--status-pending)' }}>{dest.tag}</span>
            </div>
            
            <h1 className="display" style={{ fontSize: 'clamp(48px, 8vw, 86px)', margin: '0 0 20px', animation: 'fadeUp .6s ease-out' }}>
              {dest.name}
            </h1>
            
            <p style={{ fontSize: 20, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: 40, animation: 'fadeUp .7s ease-out' }}>
              {dest.blurb}
            </p>
            
            {/* Highlights */}
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 60, animation: 'fadeUp .8s ease-out' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <div className="dot" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Highlight {i}</div>
                    <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>Discover unique experiences and hidden gems</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="cta-row" style={{ display: 'flex', gap: 12, animation: 'fadeUp .9s ease-out' }}>
              <button onClick={() => go('package', { id: 'explorer5' })} className="btn btn-green btn-lg">
                Explore Packages
                <Icon name="arrow" size={16} color="#04391f" />
              </button>
              <button onClick={() => go('home', { anchor: 'hero' })} className="btn btn-ghost btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <SiteFooter go={go} />
    </div>
  );
}

function App() {
  const [route, setRoute] = useStateR({ view: 'home', params: {} });
  const [toasts, setToasts] = useStateR([]);

  const toast = useCallback(msg => {
    const id = Date.now() + Math.random();
    setToasts(t => [...t, { id, msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  }, []);

  const go = useCallback((view, params = {}) => {
    setRoute({ view, params });
    if (params.anchor) {
      setTimeout(() => {
        const el = document.getElementById(params.anchor);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const { view, params } = route;
  return (
    <>
      {view === 'home' && <Home go={go} />}
      {view === 'destination' && <DestinationDetail go={go} params={params} />}
      {view === 'package' && <PackageDetail go={go} params={params} />}
      {view === 'booking' && <Booking go={go} params={params} toast={toast} />}
      <ToastHost toasts={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
