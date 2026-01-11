import type { SiteData } from "@/types/siteData";

/**
 * ⭐ FICHIER CLÉ - Configuration du site médical
 *
 * INSTRUCTIONS DE PERSONNALISATION :
 * Pour créer un site pour un nouveau client, modifier UNIQUEMENT ce fichier.
 * Ne jamais toucher au code des composants ou des pages.
 *
 * Temps de personnalisation : ~10 minutes
 */

export const siteData: SiteData = {
  // =====================================================
  // INFORMATIONS DU MÉDECIN
  // =====================================================
  doctor: {
    name: "Dr Jean Kouassi",
    specialty: "Médecin Généraliste",
    photo: "/images/doctors/doctor.jpg", // Ajouter la photo dans /public/images/doctors/
  },

  // =====================================================
  // CONTACT
  // =====================================================
  contact: {
    phone: "+2250700000000",           // Format international
    whatsapp: "+2250700000000",        // Même numéro ou différent
    email: "contact@drkouassi.com",
  },

  // =====================================================
  // LOCALISATION
  // =====================================================
  location: {
    address: "Riviera 3, Abidjan, Côte d'Ivoire",

    // Pour obtenir l'URL Google Maps :
    // 1. Aller sur Google Maps
    // 2. Rechercher l'adresse
    // 3. Cliquer "Partager" > "Intégrer une carte"
    // 4. Copier UNIQUEMENT l'URL qui est entre les guillemets de src="..."
    // Exemple d'iframe : <iframe src="L_URL_ICI" ...></iframe>

    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.602517705436!2d-3.963758355328625!3d5.355678277741995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ece6980b3247%3A0x3ab74f5afde5814!2sRivi%C3%A9ra%203%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1767283751820!5m2!1sfr!2sci",
    
    hours: "Lun-Ven: 8h-18h | Sam: 9h-13h | Dim: Fermé",
  },

  // =====================================================
  // SEO - Métadonnées pour Google
  // =====================================================
  seo: {
    title: "Dr Jean Kouassi - Médecin Généraliste à Abidjan",
    description: "Consultations médicales professionnelles à Cocody, Abidjan. Plus de 10 ans d'expérience. Soins de qualité, prise de rendez-vous rapide.",
    keywords: "médecin, Abidjan, Cocody, consultation médicale, santé, médecin généraliste, soins, urgences",
  },

  // =====================================================
  // THÈME - Couleurs personnalisables
  // =====================================================
  theme: {
    primaryColor: "#3B82F6",      // Bleu (couleur principale)
    secondaryColor: "#10B981",    // Vert/Turquoise (couleur secondaire)
    accentColor: "#8B5CF6",       // Violet (pour les accents)

    // Suggestions de palettes :
    // - Bleu médical classique : #0066CC, #4DA6FF, #0052A3
    // - Bleu-vert apaisant : #3B82F6, #10B981, #8B5CF6 (par défaut)
    // - Vert santé : #059669, #34D399, #10B981
  },

  // =====================================================
  // À PROPOS
  // =====================================================
  about: {
    bio: `Médecin diplômé avec plus de 10 ans d'expérience dans le domaine de la médecine générale. Passionné par le bien-être de mes patients, j'offre des soins médicaux de qualité dans un environnement chaleureux et professionnel.

Mon approche est centrée sur l'écoute, le diagnostic précis et l'accompagnement personnalisé de chaque patient. Je m'engage à vous fournir les meilleurs soins possibles pour votre santé et celle de votre famille.`,

    credentials: [
      "Diplôme de Docteur en Médecine - Université Félix Houphouët-Boigny, Abidjan",
      "Spécialisation en médecine générale - CHU de Cocody",
      "Membre de l'Ordre des Médecins de Côte d'Ivoire",
      "Formation continue en médecine d'urgence",
    ],

    experience: "10+ ans d'expérience",
  },

  // =====================================================
  // SERVICES - Cards avec icônes
  // =====================================================
  services: [
    {
      title: "Consultation générale",
      description: "Examens médicaux complets, diagnostics précis et conseils personnalisés pour maintenir votre santé au quotidien.",
      icon: "stethoscope", // Icône Lucide React
    },
    {
      title: "Suivi médical",
      description: "Accompagnement personnalisé de vos traitements et suivi régulier de votre état de santé pour garantir votre bien-être.",
      icon: "heart-pulse",
    },
    {
      title: "Examens de routine",
      description: "Bilans de santé préventifs, vaccinations, analyses et examens médicaux périodiques pour prévenir les maladies.",
      icon: "clipboard-list",
    },
    {
      title: "Soins d'urgence",
      description: "Prise en charge rapide et professionnelle des urgences médicales, premiers soins et consultations urgentes.",
      icon: "activity",
    },
    {
      title: "Médecine familiale",
      description: "Soins médicaux pour toute la famille, de la pédiatrie aux soins pour adultes et personnes âgées.",
      icon: "users",
    },
    {
      title: "Conseils santé",
      description: "Recommandations personnalisées sur l'hygiène de vie, la nutrition et la prévention des maladies.",
      icon: "lightbulb",
    },
  ],

  // =====================================================
  // SECTION HERO (Page d'accueil)
  // =====================================================
  hero: {
    title: "Votre santé, notre priorité",
    subtitle: "Consultations médicales professionnelles à Abidjan",
    cta: "Prendre rendez-vous",
  },
};
