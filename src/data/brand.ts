/**
 * Form & Feeling by Nicole Harker
 * Brand Assets & Copy
 * 
 * This file centralizes all brand voice elements to ensure consistency
 * across the website and marketing materials.
 */

// ============================================================================
// BRAND IDENTITY
// ============================================================================

export const BRAND = {
  name: 'FORM & FEELING',
  tagline: 'Personal spaces, thoughtfully refined',
  descriptor: 'Interiors by Nicole Harker',
  founder: 'Nicole Harker',
} as const;

/**
 * Tagline Rationale (for reference):
 * - Personal → client-centered, individual, human
 * - Thoughtfully → consulting, guidance, intention
 * - Refined → elevated, clean, best-version outcome
 * 
 * "Elegant without being precious and clear without being literal."
 */

// ============================================================================
// BRAND STATEMENTS
// ============================================================================

export const BRAND_STATEMENT = {
  full: `Form & Feeling is an interior design consulting studio centered on helping clients uncover the most elevated version of their space—and themselves within it. Through thoughtful guidance, creative direction, and intentional design frameworks, we balance clean structure with personal expression. Our approach empowers clients to make confident decisions, shaping homes that feel authentic, refined, and deeply personal.`,
  
  short: `Form & Feeling offers interior design consulting grounded in clarity, creativity, and connection—guiding clients toward spaces that feel personal, intentional, and elevated.`,
  
  bio: `Form & Feeling is an interior design consulting studio founded by Nicole Harker. Through thoughtful guidance and intentional design frameworks, we help clients uncover the most elevated version of their space—balancing clean structure with personal expression to shape homes that feel authentic, refined, and deeply personal.`,
  
  philosophy: `Good design should feel like clarity, not complexity.`,
} as const;

// ============================================================================
// BRAND KEYWORDS
// ============================================================================

export const BRAND_KEYWORDS = [
  'curated',
  'intentional',
  'refined',
  'personal',
  'empowering',
  'structured',
  'warm',
  'confident',
  'cohesive',
  'timeless',
] as const;

// ============================================================================
// CTA LABELS (Brand Voice Approved)
// ============================================================================

export const CTA_LABELS = {
  primary: [
    'Begin the Conversation',
    'Start Your Consultation',
    'Schedule a Consultation',
    'Let\'s Talk',
    'Get in Touch',
    'Explore Services',
  ],
  secondary: [
    'Learn More',
    'View Services',
    'Read Our Approach',
    'See Our Work',
  ],
} as const;

// ============================================================================
// SOCIAL & CONTACT ASSETS
// ============================================================================

export const INSTAGRAM_BIO = `Interior Design Consulting
Personal spaces, thoughtfully refined.
Strategy · Direction · Empowerment`;

export const EMAIL_SIGNATURE = `Nicole Harker
Founder, Form & Feeling
Interior Design Consulting

nicole_harker@yahoo.com`;

// ============================================================================
// CONTENT BLOCKS
// ============================================================================

export const HOMEPAGE_INTRO = `Form & Feeling offers interior design consulting grounded in clarity, creativity, and connection—guiding clients toward spaces that feel personal, intentional, and elevated.`;

export const SERVICES_INTRO = `Form & Feeling offers design consulting—not full-service execution. We provide the expertise, direction, and frameworks you need to make empowered decisions, whether you're working with contractors, shopping for furnishings, or simply trying to see your space with fresh eyes.`;

export const ABOUT_FORM_FEELING = [
  `Form & Feeling was founded on a simple belief: you shouldn't need to hand over your home to get great design. Many people know what they like but struggle to articulate it, organize it, or trust their instincts. That's where we come in.`,
  
  `We work at the intersection of structure and personal expression—helping you see your space clearly, make decisions confidently, and move forward without second-guessing. Our role is to guide, not to take over.`,
  
  `The name says it all: Form is the structure, the layout, the bones of a space. Feeling is the warmth, the personality, the sense that a room is unmistakably yours. Good design holds both.`,
];

export const ABOUT_NICOLE = `Nicole Harker is the founder and principal consultant at Form & Feeling. With a background in interior design and a deep appreciation for how spaces shape our daily lives, Nicole helps clients cut through the noise and find their design footing. Her approach is collaborative, calm, and refreshingly practical—focused on empowering you to make decisions you'll love living with.`;

// ============================================================================
// SERVICES CONTENT
// ============================================================================

export const CONSULTING_SERVICES = [
  'Space planning and layout optimization',
  'Design direction and concept development',
  'Finish, material, and color guidance',
  'Furniture and decor recommendations',
  'Styling and visual cohesion',
  'Decision support and design clarity',
] as const;

export const WHO_THIS_IS_FOR = [
  'You know what you like, but need help pulling it together',
  'You want professional guidance without a full-service commitment',
  'You\'re working with contractors and need design direction',
  'You feel overwhelmed by choices and want a clear framework',
  'You\'re ready to invest in your space, but want to do it right',
  'You value thoughtful design that feels personal, not prescribed',
] as const;

export const PROCESS_STEPS = [
  {
    name: 'Discovery',
    description: 'We begin by understanding your space, your lifestyle, and your vision. This is where we listen.',
  },
  {
    name: 'Direction',
    description: 'We develop a clear design direction—a cohesive framework that guides every decision.',
  },
  {
    name: 'Refinement',
    description: 'We refine the details together, curating recommendations and solving challenges as they arise.',
  },
  {
    name: 'Empowerment',
    description: 'You move forward with confidence, equipped with the clarity and tools to bring your vision to life.',
  },
] as const;

export const SERVICE_PACKAGES = [
  {
    name: 'The Consult',
    description: 'A focused session to address a specific design challenge, answer questions, and provide actionable direction. Ideal for those who need clarity on a single room or decision.',
    ideal: 'One room or specific challenge',
  },
  {
    name: 'The Refine',
    description: 'A deeper engagement for clients ready to transform a space with intention. Includes comprehensive design direction, curated recommendations, and ongoing guidance.',
    ideal: 'Full room transformation',
  },
  {
    name: 'The Align',
    description: 'Our most comprehensive consulting package, designed for clients working on multiple spaces or a whole-home vision. Strategic direction and cohesive design thinking throughout.',
    ideal: 'Multiple rooms or whole-home',
  },
] as const;

// ============================================================================
// LANGUAGE GUARDRAILS
// ============================================================================

/**
 * AVOID_LANGUAGE
 * 
 * These terms imply full-service execution, procurement, or project management.
 * Form & Feeling is a consulting studio—we guide and advise, we don't execute.
 * Use this list to audit copy and ensure positioning remains clear.
 */
export const AVOID_LANGUAGE = [
  'procure',
  'procurement',
  'install',
  'installation',
  'project management',
  'manage your project',
  'handle everything',
  'full-service',
  'turnkey',
  'end-to-end execution',
  'we take care of everything',
  'ordering',
  'delivery coordination',
] as const;

// ============================================================================
// SEO METADATA
// ============================================================================

export const SEO = {
  home: {
    title: 'Form & Feeling | Interior Design Consulting by Nicole Harker',
    description: 'Personal spaces, thoughtfully refined. Design consulting that empowers confident decisions—strategic guidance, curated direction, and clarity for your home.',
  },
  services: {
    title: 'Services | Form & Feeling',
    description: 'Interior design consulting: space planning, design direction, finish selection, and decision support. Guidance that empowers, not overwhelms.',
  },
  portfolio: {
    title: 'Design Direction | Form & Feeling',
    description: 'Selected consulting work and design direction by Form & Feeling. See how strategic guidance transforms spaces.',
  },
  about: {
    title: 'About | Form & Feeling',
    description: 'Meet Nicole Harker and discover the philosophy behind Form & Feeling. Design consulting rooted in clarity, warmth, and empowerment.',
  },
  contact: {
    title: 'Contact | Form & Feeling',
    description: 'Begin the conversation. Reach out to discuss how Form & Feeling can guide your next design project.',
  },
} as const;
