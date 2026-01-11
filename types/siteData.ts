/**
 * Types pour la configuration du site médical
 * Ces types assurent la cohérence des données dans siteData.ts
 */

export interface DoctorInfo {
  name: string;
  specialty: string;
  photo: string; // Chemin vers l'image dans /public
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
}

export interface LocationInfo {
  address: string;
  mapEmbedUrl: string; // URL iframe Google Maps
  hours: string;
}

export interface SEOInfo {
  title: string;
  description: string;
  keywords: string;
}

export interface ThemeColors {
  primaryColor: string;   // Couleur principale (hex)
  secondaryColor: string; // Couleur secondaire (hex)
  accentColor: string;    // Couleur d'accent (hex)
}

export interface AboutInfo {
  bio: string;
  credentials: string[];
  experience: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string; // Nom de l'icône Lucide React
}

export interface HeroSection {
  title: string;
  subtitle: string;
  cta: string; // Texte du bouton call-to-action
}

/**
 * Interface principale pour toutes les données du site
 */
export interface SiteData {
  doctor: DoctorInfo;
  contact: ContactInfo;
  location: LocationInfo;
  seo: SEOInfo;
  theme: ThemeColors;
  about: AboutInfo;
  services: Service[];
  hero: HeroSection;
}
