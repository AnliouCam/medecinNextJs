/**
 * Constantes globales du projet
 * Ces valeurs NE doivent PAS être modifiées par les clients
 * Elles définissent le comportement technique du site
 */

// =====================================================
// ANIMATIONS - Durées et easings
// =====================================================
export const ANIMATIONS = {
  // Durées (en millisecondes)
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },

  // Easing functions (courbes de transition)
  easing: {
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    ease: "ease-in-out",
  },

  // Délais pour animations en cascade
  stagger: 100, // Délai entre chaque élément (ms)
} as const;

// =====================================================
// BREAKPOINTS - Responsive design
// =====================================================
export const BREAKPOINTS = {
  mobile: 640,   // sm
  tablet: 768,   // md
  desktop: 1024, // lg
  wide: 1280,    // xl
} as const;

// =====================================================
// NAVIGATION
// =====================================================
export const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

// =====================================================
// ICÔNES LUCIDE - Mapping des noms
// =====================================================
export const ICON_NAMES = {
  // Services médicaux
  stethoscope: "Stethoscope",
  heartPulse: "HeartPulse",
  clipboardList: "ClipboardList",
  activity: "Activity",
  users: "Users",
  lightbulb: "Lightbulb",
  syringe: "Syringe",
  pill: "Pill",

  // Contact
  phone: "Phone",
  mail: "Mail",
  mapPin: "MapPin",
  clock: "Clock",

  // Navigation
  menu: "Menu",
  x: "X",
  chevronDown: "ChevronDown",
  chevronRight: "ChevronRight",

  // Social
  facebook: "Facebook",
  twitter: "Twitter",
  instagram: "Instagram",
  linkedin: "Linkedin",
} as const;

// =====================================================
// STYLES - Classes Tailwind réutilisables
// =====================================================
export const STYLES = {
  // Conteneur principal
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",

  // Sections
  section: "py-12 sm:py-16 lg:py-20",
  sectionTitle: "text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12",

  // Boutons
  buttonPrimary:
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg",
  buttonSecondary:
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2",

  // Cards
  card: "rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",

  // Gradients (utilisent les couleurs du theme)
  gradientBg: "bg-gradient-to-br",
  gradientText: "bg-gradient-to-r bg-clip-text text-transparent",
} as const;

// =====================================================
// SEO - Métadonnées par défaut (fallback)
// =====================================================
export const DEFAULT_SEO = {
  siteName: "Cabinet Médical",
  locale: "fr_FR",
  type: "website",
} as const;

// =====================================================
// MESSAGES - Textes système (non personnalisables)
// =====================================================
export const MESSAGES = {
  loading: "Chargement...",
  error: "Une erreur s'est produite",
  noData: "Aucune donnée disponible",

  // Messages d'accessibilité
  a11y: {
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    callDoctor: "Appeler le médecin",
    whatsappDoctor: "Contacter via WhatsApp",
    emailDoctor: "Envoyer un email",
  },
} as const;

// =====================================================
// CONFIGURATION - Paramètres techniques
// =====================================================
export const CONFIG = {
  // Next.js Image optimization
  imageQuality: 85,
  imagePriority: true, // Pour les images hero

  // Formats d'image supportés
  imageFormats: ["jpg", "jpeg", "png", "webp"],

  // Taille maximale des images (pour validation)
  maxImageSize: 5 * 1024 * 1024, // 5 MB
} as const;
