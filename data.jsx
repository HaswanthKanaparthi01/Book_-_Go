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
    id: 'explorer5',
    name: 'Explore Amsterdam',
    nights: '9 nights · 10 days',
    price: 2499,
    tier: 'Signature',
    color: 'yellow',
    scene: 'amsterdam',
    featured: true,
    blurb: 'A 10-day signature journey across Amsterdam, Paris, the Swiss Alps and Innsbruck with premium transfers, curated highlights and selected meals.',
    highlights: ['Arrival & Welcome in Amsterdam', 'Giethoorn whisper-boat village outing', 'Golden Age Amsterdam canal cruise', 'Brussels transit to Paris', 'Paris landmarks and Disneyland magic', 'Mount Titlis, Jungfraujoch and Innsbruck'],
    includes: ['Return flights', 'Airport transfers', '9 nights hotel accommodation', 'Daily breakfast', 'Selected lunches and dinners', 'Guided sightseeing and attraction entry fees', 'Chauffeured transfers across Amsterdam, Paris, Switzerland and Innsbruck', 'Dedicated tour host and local support'],
    itinerary: [
      {
        d: 'Day 01',
        t: 'Arrival & Welcome',
        scene: 'amsterdam',
        img: 'Images/day1.png',
        items: ['Arrive at Amsterdam Airport (AMS) and meet your private tour host', 'Private transfer to your hotel', 'Relax and enjoy a welcome briefing over local Dutch treats', 'Overnight stay in Amsterdam']
      },
      {
        d: 'Day 02',
        t: 'Giethoorn Village Outing',
        scene: 'giethoorn',
        img: 'Images/day2.png',
        items: ['Breakfast at the hotel', 'Travel to Giethoorn, the Venice of the North', 'Private whisper-quiet electric boat ride past thatched cottages and wooden bridges', 'Return to Amsterdam for overnight stay']
      },
      {
        d: 'Day 03',
        t: 'Amsterdam Canals',
        scene: 'canals',
        img: 'Images/day3.png',
        items: ['Breakfast at hotel', 'Discover the Golden Age canal ring and Jordaan architecture', 'Visit legendary museum treasures', 'Sunset cruise as the bridges glow blue', 'Overnight in Amsterdam']
      },
      {
        d: 'Day 04',
        t: 'Transit to Paris via Brussels',
        scene: 'photo',
        img: 'Images/day4.png',
        items: ['Breakfast in Amsterdam', 'Premium chauffeured van transfer through Brussels', 'Scenic stop at Grand Place and Atomium', 'Continue to Paris and check in at your hotel', 'Overnight stay in Paris']
      },
      {
        d: 'Day 05',
        t: 'Paris Iconic Landmarks',
        scene: 'museum',
        img: 'Images/day5.png',
        items: ['Breakfast at hotel', 'Guided visits to the Eiffel Tower, Louvre and Notre-Dame', 'Seine river cruise and Montmartre artist steps', 'Golden-hour viewpoints with photographer documentation', 'Overnight stay in Paris']
      },
      {
        d: 'Day 06',
        t: 'Disneyland Paris Magic',
        scene: 'nightlife',
        img: 'Images/day6.png',
        items: ['Breakfast at hotel', 'Full day at Disneyland Park and Walt Disney Studios', 'Enjoy parades, thrill rides and firework spectacles', 'Return to Paris hotel for overnight stay']
      },
      {
        d: 'Day 07',
        t: 'Zurich & Mount Titlis Summit',
        scene: 'sunset',
        img: 'Images/day7.png',
        items: ['Breakfast in Paris', 'Transfer to Switzerland via Zurich', 'Ride the Rotair cable car to Mt. Titlis', 'Cross the glacier cliff walk and explore ice tunnels', 'Overnight stay in Switzerland']
      },
      {
        d: 'Day 08',
        t: 'Jungfraujoch & Interlaken',
        scene: 'photo',
        img: 'Images/day8.png',
        items: ['Breakfast at hotel', 'Summit the Top of Europe at Jungfraujoch', 'Visit the Sphinx Observatory and Aletsch Glacier', 'Descend to Interlaken and explore lakeside scenery', 'Overnight stay in Switzerland']
      },
      {
        d: 'Day 09',
        t: 'Innsbruck Alpine Valley',
        scene: 'dam',
        img: 'Images/day9.png',
        items: ['Breakfast at hotel', 'Admire the Golden Roof in Innsbruck', 'Ascend the Nordkette cable car for Alpine valley views', 'Enjoy an elegant Austrian dinner in historic squares', 'Overnight stay in Innsbruck']
      },
      {
        d: 'Day 10',
        t: 'Zurich Departure Flight',
        scene: 'amsterdam',
        img: 'Images/day10.png',
        items: ['Breakfast at hotel', 'Final morning of Swiss luxury shopping and lake views', 'Private transfer to Zurich Airport (ZRH)', 'Depart with memories documented forever']
      }
    ]
  }
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
  explorer5: {
    hotel: {
      name: 'Best Western Amstelveen or similar 3★ hotel',
      rating: 3,
      area: 'Amsterdam · Paris · Switzerland · Innsbruck',
      room: 'Standard Twin or Double Room',
      nights: '9 nights',
      amenities: ['Daily breakfast', 'Hot Indian dinner on arrival', 'Free Wi-Fi', 'Private transfers', '24/7 support']
    },
    departures: [
      { date: 'Sat 13 Apr 2026', twin: 2499, single: 3299, status: 'Available' },
      { date: 'Sat 27 Apr 2026', twin: 2499, single: 3299, status: 'Available' },
      { date: 'Sat 11 May 2026', twin: 2499, single: 3299, status: 'Available' },
      { date: 'Sat 25 May 2026', twin: 2499, single: 3299, status: 'Available' }
    ],
    inclusions: [
      'Return flights',
      'Airport transfers',
      '9 nights hotel accommodation',
      'Daily breakfast',
      'Selected lunches and dinners',
      'Guided sightseeing and attraction entry fees',
      'Transfers between Amsterdam, Paris, Switzerland and Innsbruck',
      'Local assistance throughout the tour'
    ],
    exclusions: [
      'Personal expenses',
      'Lunch & dinner where not specified',
      'Optional activities & tickets',
      'Additional shopping',
      'Tips & gratuities',
      'Travel insurance'
    ],
    exp: ['cruise', 'tulip', 'food', 'museum', 'photo']
  }
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
