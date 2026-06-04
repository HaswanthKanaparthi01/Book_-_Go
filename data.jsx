/* ============================================================
   BOOK & GO — data
   ============================================================ */

const DESTINATIONS = [
  { id: 'canals',    scene: 'canals',    name: 'Amsterdam Canals',  tag: 'UNESCO Heritage',  blurb: '17th-century waterways & gabled houses', from: 39 },
  { id: 'vangogh',   scene: 'vangogh',   name: 'Van Gogh Museum',   tag: 'Art & Culture',    blurb: 'The world’s largest Van Gogh collection', from: 24 },
  { id: 'rijks',     scene: 'rijks',     name: 'Rijksmuseum',       tag: 'Art & Culture',    blurb: 'Dutch masters & the Night Watch', from: 25 },
  { id: 'annefrank', scene: 'annefrank', name: 'Anne Frank House',  tag: 'History',          blurb: 'The secret annex, preserved', from: 18 },
  { id: 'jordaan',   scene: 'jordaan',   name: 'Jordaan District',  tag: 'Neighbourhood',    blurb: 'Boutiques, brown cafés & courtyards', from: 0 },
  { id: 'dam',       scene: 'dam',       name: 'Dam Square',        tag: 'Landmark',         blurb: 'The beating heart of the old city', from: 0 },
  { id: 'keukenhof', scene: 'tulips',    name: 'Keukenhof',         tag: 'Seasonal',         blurb: '7 million tulips, one spring garden', from: 32 },
  { id: 'giethoorn', scene: 'giethoorn', name: 'Giethoorn',         tag: 'Day Trip',         blurb: 'The village with no roads', from: 64 },
];

const EXPERIENCES = [
  { id: 'cruise',    scene: 'cruise',    name: 'Canal Cruises',         note: 'Glide past the Golden Bend at golden hour', dur: '75 min', from: 29 },
  { id: 'tulip',     scene: 'tulips',    name: 'Tulip Season',          note: 'Keukenhof & the bulb fields of Lisse', dur: 'Full day', from: 68 },
  { id: 'food',      scene: 'food',      name: 'Dutch Food Tours',      note: 'Stroopwafels, herring, aged Gouda & jenever', dur: '3 hrs', from: 54 },
  { id: 'nightlife', scene: 'nightlife', name: 'Nightlife Experiences', note: 'Jordaan jazz to Noord warehouse clubs', dur: 'Evening', from: 45 },
  { id: 'museum',    scene: 'museum',    name: 'Museum Experiences',    note: 'Skip-the-line across the Museumplein', dur: 'Flexible', from: 39 },
  { id: 'photo',     scene: 'photo',     name: 'Photography Tours',     note: 'A local photographer finds your best light', dur: '2 hrs', from: 79 },
];

const PACKAGES = [
  {
    id: 'escape3', name: '3-Day Amsterdam Escape', nights: '3 days · 2 nights', price: 549, tier: 'Essential',
    color: 'green', scene: 'canals',
    blurb: 'The icons, done beautifully — canals, masters & a long weekend that feels twice as long.',
    highlights: ['Canal-side boutique hotel', 'Private 75-min canal cruise', 'Skip-the-line Van Gogh Museum', 'Guided old-city walk'],
    includes: ['2 nights central 4★ stay', 'Daily breakfast', 'Private canal cruise', 'All museum entries', 'Airport transfers', '24/7 local concierge'],
    itinerary: [
      { d: 'Day 1', t: 'Arrival & the Golden Bend', scene: 'canals', items: ['Private transfer to your canal-side hotel', 'Welcome cruise along the Herengracht', 'Dinner in the Nine Streets'] },
      { d: 'Day 2', t: 'Masters & the Museumplein', scene: 'vangogh', items: ['Skip-the-line Van Gogh Museum', 'Lunch at the Rijksmuseum garden', 'Free afternoon in the Jordaan'] },
      { d: 'Day 3', t: 'Markets & farewell', scene: 'jordaan', items: ['Albert Cuyp market stroll', 'Stroopwafel tasting', 'Departure transfer'] },
    ],
  },
  {
    id: 'explorer5', name: '5-Day Amsterdam Explorer', nights: '5 days · 4 nights', price: 989, tier: 'Most Popular',
    color: 'yellow', scene: 'tulips', featured: true,
    blurb: 'City classics plus the countryside — tulip fields, Giethoorn’s waterways and time to wander.',
    highlights: ['Keukenhof & tulip fields', 'Giethoorn day trip', 'Dutch food tour', 'Free curated days'],
    includes: ['4 nights central 4★ stay', 'Daily breakfast', 'Keukenhof + bulb fields', 'Giethoorn whisper-boat day', 'Dutch food tour', 'All museum entries', 'Airport transfers', '24/7 local concierge'],
    itinerary: [
      { d: 'Day 1', t: 'Arrival & canals', scene: 'canals', items: ['Private transfer & check-in', 'Evening canal cruise', 'Dinner in De Pijp'] },
      { d: 'Day 2', t: 'Art & icons', scene: 'rijks', items: ['Rijksmuseum highlights', 'Van Gogh Museum', 'Jordaan café crawl'] },
      { d: 'Day 3', t: 'Keukenhof & tulips', scene: 'tulips', items: ['Keukenhof gardens', 'Bulb fields of Lisse', 'Photo stop at the windmills'] },
      { d: 'Day 4', t: 'Giethoorn day trip', scene: 'giethoorn', items: ['Whisper-boat through the village', 'Lakeside lunch', 'Return at golden hour'] },
      { d: 'Day 5', t: 'Flavours & farewell', scene: 'food', items: ['Dutch food tour', 'Last canal-side coffee', 'Departure transfer'] },
    ],
  },
  {
    id: 'premium7', name: '7-Day Premium Amsterdam', nights: '7 days · 6 nights', price: 1690, tier: 'Premium',
    color: 'blue', scene: 'nightlife',
    blurb: 'The unhurried version — private guides, a photographer, nightlife and a canal-house suite.',
    highlights: ['Canal-house suite', 'Private photographer day', 'Curated nightlife evening', 'Everything in Explorer, slower'],
    includes: ['6 nights canal-house suite', 'Daily breakfast', 'Private city guide (2 days)', 'Photography tour', 'Keukenhof & Giethoorn', 'Curated nightlife evening', 'Private transfers throughout', '24/7 local concierge'],
    itinerary: [
      { d: 'Day 1', t: 'Arrival in style', scene: 'canals', items: ['Private transfer to canal-house suite', 'Champagne welcome cruise'] },
      { d: 'Day 2', t: 'The masters, privately', scene: 'vangogh', items: ['Private-guide Van Gogh & Rijksmuseum', 'Lunch on the Museumplein'] },
      { d: 'Day 3', t: 'Tulips & windmills', scene: 'tulips', items: ['Keukenhof at opening', 'Zaanse Schans windmills'] },
      { d: 'Day 4', t: 'Giethoorn & the lakes', scene: 'giethoorn', items: ['Private whisper-boat', 'Lakeside long lunch'] },
      { d: 'Day 5', t: 'Through a lens', scene: 'photo', items: ['Private photographer half-day', 'Free afternoon'] },
      { d: 'Day 6', t: 'Flavours & nightlife', scene: 'food', items: ['Dutch food tour', 'Curated nightlife evening'] },
      { d: 'Day 7', t: 'A slow farewell', scene: 'jordaan', items: ['Jordaan morning', 'Departure transfer'] },
    ],
  },
];

/* Keukenhof destination detail content */
const KEUKENHOF = {
  scene: 'tulips', name: 'Keukenhof', region: 'Lisse · 40 min from Amsterdam', season: 'Open 20 Mar – 11 May',
  overview: 'For eight weeks each spring, a quiet corner of Lisse becomes the most photographed garden on earth. Seven million bulbs — tulips, daffodils and hyacinths — are hand-planted across 32 hectares of shaded avenues, mirror ponds and pavilions. Beyond the gates, the bulb fields stretch to the horizon in ribbons of colour.',
  highlights: [
    { t: 'Seven million bulbs', s: 'Hand-planted by 40 gardeners every autumn', scene: 'tulips' },
    { t: 'The bulb fields', s: 'Ride out into the candy-striped fields of Lisse', scene: 'cycling' },
    { t: 'Windmill viewpoint', s: 'Climb for the postcard shot over the rows', scene: 'photo' },
    { t: 'Flower parade', s: 'Catch the Bloemencorso if you time it right', scene: 'tulips' },
  ],
  tips: [
    'Arrive at opening (08:00) or after 16:00 to beat the coach crowds.',
    'Peak bloom is mid-April, but early & late weeks are far quieter.',
    'Book a combination ticket with shuttle — parking fills by mid-morning.',
    'Bring layers: spring on the fields can be bright and cold at once.',
  ],
  itinerary: [
    { time: '08:00', t: 'Gates open', s: 'Walk the empty avenues before the coaches arrive' },
    { time: '10:00', t: 'Pavilions', s: 'Oranje Nassau & the lily showcase' },
    { time: '12:00', t: 'Bulb-field ride', s: 'Rent a bike and head into the colour' },
    { time: '14:00', t: 'Windmill viewpoint', s: 'The classic shot over the rows' },
    { time: '15:30', t: 'Shuttle back', s: 'Return to Amsterdam by golden hour' },
  ],
  related: ['cruise', 'photo', 'food'],
};

/* Package brochure detail: inclusions / exclusions per package */
const PACKAGE_DETAILS = {
  escape3: {
    hotel: { name: 'Canal House Boutique Hotel', rating: 4, area: 'The Nine Streets · Centrum', room: 'Deluxe Canal-View Room', nights: '2 nights', amenities: ['Free Wi-Fi', 'Daily breakfast', 'Bikes included', 'Canal views', '24h reception', 'Air conditioning'] },
    departures: [
      { date: 'Fri 13 Mar 2026', twin: 549, single: 739, status: 'Available' },
      { date: 'Fri 03 Apr 2026', twin: 579, single: 769, status: 'Filling fast' },
      { date: 'Fri 24 Apr 2026', twin: 599, single: 799, status: 'Available' },
      { date: 'Fri 15 May 2026', twin: 559, single: 749, status: 'Available' },
    ],
    inclusions: ['Hotel accommodation · 2 nights 4★', 'Airport transfers', 'Daily breakfast', 'Private 75-min canal cruise', 'Attraction tickets (Van Gogh Museum)', 'Guided old-city walking tour', '24/7 local concierge'],
    exclusions: ['International flights', 'Personal expenses', 'Lunch & dinner', 'Optional activities', 'Additional shopping', 'Tips & gratuities', 'Travel insurance'],
    exp: ['cruise', 'museum', 'food'],
  },
  explorer5: {
    hotel: { name: 'Grachtengordel Canal Hotel', rating: 4, area: 'Jordaan · Centrum', room: 'Superior Canal Room', nights: '4 nights', amenities: ['Free Wi-Fi', 'Daily breakfast', 'Bikes included', 'Canal views', 'Concierge desk', 'Fitness room'] },
    departures: [
      { date: 'Wed 12 Jun 2026', twin: 989, single: 1290, status: 'Available' },
      { date: 'Wed 19 Jun 2026', twin: 1049, single: 1350, status: 'Filling fast' },
      { date: 'Wed 26 Jun 2026', twin: 1089, single: 1390, status: 'Available' },
      { date: 'Wed 03 Jul 2026', twin: 999, single: 1299, status: 'Available' },
    ],
    inclusions: ['Hotel accommodation · 4 nights 4★', 'Airport transfers', 'Daily breakfast', 'All attraction tickets', 'Keukenhof + bulb fields entry', 'Giethoorn whisper-boat day trip', 'Dutch food tour', 'Guided tours throughout', '24/7 local concierge'],
    exclusions: ['International flights', 'Personal expenses', 'Lunch & dinner (except food tour)', 'Optional activities', 'Additional shopping', 'Tips & gratuities', 'Travel insurance'],
    exp: ['cruise', 'tulip', 'food', 'museum'],
  },
  premium7: {
    hotel: { name: 'Golden Bend Suite Collection', rating: 5, area: 'Golden Bend · Grachtengordel', room: 'Premier Canal-House Suite', nights: '6 nights', amenities: ['Free Wi-Fi', 'À la carte breakfast', 'Private transfers', 'Butler service', 'Canal-house suite', 'Spa & wellness access'] },
    departures: [
      { date: 'Mon 13 Jun 2026', twin: 1690, single: 2190, status: 'Available' },
      { date: 'Mon 20 Jun 2026', twin: 1790, single: 2290, status: 'Limited' },
      { date: 'Mon 27 Jun 2026', twin: 1850, single: 2350, status: 'Available' },
      { date: 'Mon 04 Jul 2026', twin: 1720, single: 2220, status: 'Available' },
    ],
    inclusions: ['International flights', 'Canal-house suite · 6 nights', 'Private airport transfers', 'Daily breakfast', 'All attraction tickets', 'Private guided tours (2 days)', 'Keukenhof & Giethoorn', 'Private photography tour', 'Curated nightlife evening', 'Travel insurance', 'Visa assistance', '24/7 local concierge'],
    exclusions: ['Personal expenses', 'Lunch & dinner', 'Additional shopping', 'Tips & gratuities', 'Extra transportation'],
    exp: ['cruise', 'photo', 'nightlife', 'food', 'museum'],
  },
};

const CANCELLATION = [
  { when: '30+ days before departure', fee: 'Free cancellation — full refund', tone: 'good' },
  { when: '15 – 29 days before', fee: '25% of package value', tone: 'mid' },
  { when: '7 – 14 days before', fee: '50% of package value', tone: 'mid' },
  { when: 'Under 7 days / no-show', fee: 'Non-refundable', tone: 'bad' },
];

const TERMS = [
  'Package pricing is subject to availability at the time of booking.',
  'Attraction schedules and opening hours may change without notice.',
  'Seasonal availability applies — e.g. Keukenhof opens spring only.',
  'Valid travel documents are required for all travellers.',
  'A cancellation policy applies; see booking terms for full details.',
  'Visa approval is subject to embassy regulations and timelines.',
];

const COMING_SOON = ['Paris', 'Switzerland', 'Japan', 'Iceland', 'Scotland', 'Northern Lights'];

Object.assign(window, { DESTINATIONS, EXPERIENCES, PACKAGES, KEUKENHOF, PACKAGE_DETAILS, CANCELLATION, TERMS, COMING_SOON });
