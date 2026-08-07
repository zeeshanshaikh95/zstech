/**
 * ZS TECH — single source of truth for site content.
 * Served by the Express API at GET /api/data and imported directly by the
 * frontend as an offline fallback (Vite bundles it at build time).
 */

export const services = [
  {
    id: 'custom-websites',
    num: '01',
    title: 'Custom Websites',
    description:
      'Bespoke sites tailored to your brand and goals — designed to stand out, built to convert visitors into customers.',
    tags: ['Branding', 'UI/UX', 'Copy'],
    icon: 'code',
  },
  {
    id: 'modern-responsive',
    num: '02',
    title: 'Modern & Responsive',
    description:
      'Pixel-perfect on every device — phone, tablet, desktop. Fluid layouts and smooth interactions everywhere.',
    tags: ['Mobile-first', 'Animations', '3D'],
    icon: 'devices',
  },
  {
    id: 'built-to-grow',
    num: '03',
    title: 'Built to Grow',
    description:
      'SEO-friendly, fast and scalable from day one. A site that works hard so your business keeps compounding.',
    tags: ['SEO', 'Speed', 'Analytics'],
    icon: 'growth',
  },
];

export const projects = [
  {
    id: 'hh',
    slug: 'health-harvest',
    tag: 'Dietitian Website',
    name: 'Health Harvest',
    year: '2025',
    owner: 'Afreen Mohsin Khan',
    description:
      'A warm, conversion-driven platform for dietitian Afreen Mohsin Khan — meal plans, consultation booking and client success stories.',
    summary:
      'A warm, conversion-driven platform for dietitian Afreen Mohsin Khan — turning healthy habits into booked consultations.',
    tagline: 'EAT WELL · LIVE WELL',
    art: 'art-hh',
    features: [
      { icon: '📅', title: 'Online Booking', detail: 'Consultations booked in 3 taps — no phone tag.' },
      { icon: '🥗', title: 'Meal Plan Gallery', detail: 'Seasonal plans presented with mouth-watering visuals.' },
      { icon: '💬', title: 'Client Stories', detail: 'Before/after journeys that build instant trust.' },
      { icon: '⚡', title: 'WhatsApp Integration', detail: 'One-click WhatsApp chat for quick questions.' },
    ],
    outcomes: [
      ['2.4x', 'More Leads'],
      ['-38%', 'Bounce Rate'],
      ['3s', 'Avg. Load Time'],
    ],
  },
  {
    id: 'ep',
    slug: 'employee-portfolio',
    tag: 'Employee Portfolios',
    name: 'Portfolio For Employees',
    year: '2025',
    description:
      'Polished, profile-first portfolios that turn employee bios into personal brands recruiters actually remember.',
    summary:
      'Profile-first portfolios that turn an employee bio into a personal brand recruiters remember.',
    tagline: 'STAND OUT · GET NOTICED',
    art: 'art-ep',
    features: [
      { icon: '🪪', title: 'Profile Cards', detail: 'Clean, animated profiles with skill bars and roles.' },
      { icon: '🎯', title: 'Personal Branding', detail: 'Every page tells one clear, memorable story.' },
      { icon: '📱', title: 'Mobile Perfect', detail: 'Looks stunning on the recruiter’s phone.' },
      { icon: '🔍', title: 'SEO Ready', detail: 'Findable on Google when it matters most.' },
    ],
    outcomes: [
      ['3x', 'More Profile Views'],
      ['+70%', 'DMs Received'],
      ['100%', 'Custom Design'],
    ],
  },
  {
    id: 'ba',
    slug: 'blossom-ac-services',
    tag: 'AC Service Website',
    name: 'Blossom AC Services',
    year: '2025',
    description:
      'A service-first site for AC repair & maintenance — instant booking, service packages and 24/7 support.',
    summary:
      'A service-first site for AC repair & maintenance — instant booking, transparent packages, 24/7 support.',
    tagline: 'COOL AIR · HAPPY CUSTOMERS',
    art: 'art-ba',
    features: [
      { icon: '🧊', title: 'Instant Booking', detail: 'Schedule a service visit in under a minute.' },
      { icon: '📦', title: 'Service Packages', detail: 'Clear pricing tiers — no hidden charges, ever.' },
      { icon: '🕐', title: '24/7 Support', detail: 'Emergency repairs handled around the clock.' },
      { icon: '📍', title: 'Service Areas', detail: 'Coverage maps for quick, local dispatch.' },
    ],
    outcomes: [
      ['+120%', 'Service Bookings'],
      ['5★', 'Avg. Rating'],
      ['24/7', 'Support Hours'],
    ],
  },
];

export const processSteps = [
  { num: '01', kick: 'Discovery', title: 'We Listen', detail: 'Your goals, audience and brand — we dig deep to understand what success looks like for you.' },
  { num: '02', kick: 'Design', title: 'We Design', detail: 'Custom wireframes and visuals crafted around your brand — not a template in sight.' },
  { num: '03', kick: 'Develop', title: 'We Build', detail: 'Clean, fast, SEO-ready code with buttery animations and mobile-first precision.' },
  { num: '04', kick: 'Launch', title: 'We Grow', detail: 'Launch, measure, refine. We stay on board to help your site keep performing.' },
];

export const stats = [
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Happy Clients' },
  { value: 99, suffix: '%', label: 'Uptime Rate' },
  { value: 2, suffix: '', label: 'Cities · Hyd & Mumbai' },
];

export const testimonials = [
  { initials: 'AM', gradient: 'linear-gradient(135deg,#16a34a,#4ade80)', name: 'Afreen Mohsin Khan', role: 'Owner · Health Harvest', text: 'ZS Tech understood exactly what my patients needed. Bookings went up within the first month — the site just feels like me.' },
  { initials: 'AK', gradient: 'linear-gradient(135deg,#8b5cf6,#6366f1)', name: 'Anwar K.', role: 'Owner · Blossom AC Services', text: 'People now book AC service visits from their phones at midnight. The booking system paid for itself in weeks.' },
  { initials: 'ZS', gradient: 'linear-gradient(135deg,#38bdf8,#818cf8)', name: 'Shaikh Zeeshan', role: 'Developer · ZS TECH', text: 'Every portfolio we ship turns a plain bio into a personal brand. Recruiters notice — and that was the whole point.' },
  { initials: 'SR', gradient: 'linear-gradient(135deg,#ec4899,#f472b6)', name: 'Salwa M.', role: 'Startup Founder · Hyderabad', text: 'We went from an idea to a live, gorgeous website in under three weeks. Communication was insanely clear the whole way.' },
  { initials: 'MA', gradient: 'linear-gradient(135deg,#f59e0b,#fbbf24)', name: 'Mehmood A.', role: 'Small Business · Mumbai', text: 'Finally a website that doesn’t look like every other template online. Customers literally compliment the design.' },
];

export const faq = [
  { q: 'How long does a project take?', a: 'Most websites ship in 2–4 weeks depending on scope. We share a clear timeline before we start, and keep you updated at every step — no black boxes, ever.' },
  { q: 'Do you use templates?', a: 'Never. Every site is designed and coded from scratch around your brand. Templates are how websites end up looking identical — we exist to make yours unforgettable.' },
  { q: 'Will my website work on mobile?', a: 'Absolutely. Every build is mobile-first, so it looks sharp and loads fast on phones, tablets and desktops alike.' },
  { q: 'What if I need changes after launch?', a: 'We stay with you after launch with support and maintenance plans. You can request tweaks anytime, and we\'ll handle them fast.' },
];

export const marqueeItems = [
  'WE BUILD', 'WEBSITES', 'THAT WORK', '⚡',
  'CUSTOM WEBSITES', 'MODERN & RESPONSIVE', 'BUILT TO GROW',
  'SEO-FRIENDLY', 'FAST', 'SCALABLE',
];

export const altMarqueeItems = [
  'Web Design', 'Development', 'SEO', 'Performance', 'UI/UX', 'Branding', 'Support',
];

export const typewriterWords = [
  'custom websites', 'modern designs', 'powerful performance', 'growth-ready brands',
];

export const contact = {
  email: 'zstech103@gmail.com',
  phone: '+919869706422',
  phoneRaw: '+919869706422',
  whatsapp: 'https://wa.me/919869706422',
  instagram: 'https://instagram.com/zstech10',
  instagramHandle: '@zstech10',
  cities: 'Hyderabad · Mumbai',
};

export const heroStats = [
  { value: '99%', label: 'Uptime' },
  { value: '20+', label: 'Projects' },
  { value: '15+', label: 'Clients' },
  { value: '2', label: 'Cities' },
];

export default {
  services,
  projects,
  processSteps,
  stats,
  testimonials,
  faq,
  marqueeItems,
  altMarqueeItems,
  typewriterWords,
  contact,
  heroStats,
};
