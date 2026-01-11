import { siteData } from "@/data/siteData";
import ServiceCard from "@/components/ServiceCard";
import ContactButtons from "@/components/ContactButtons";
import type { Metadata } from "next";

/**
 * Page Services
 *
 * Affiche tous les services médicaux disponibles
 * avec leurs descriptions détaillées
 */

// Métadonnées SEO spécifiques à la page Services
export const metadata: Metadata = {
  title: `Services Médicaux - ${siteData.doctor.name}`,
  description: `Découvrez nos services médicaux : ${siteData.services.map(s => s.title.toLowerCase()).join(', ')}. Soins de qualité par ${siteData.doctor.name}.`,
  keywords: `services médicaux, ${siteData.services.map(s => s.title.toLowerCase()).join(', ')}, soins santé, ${siteData.doctor.specialty}`,
  openGraph: {
    title: `Services Médicaux - ${siteData.doctor.name}`,
    description: `Consultations professionnelles et soins médicaux complets`,
    type: "website",
  },
};

export default function ServicesPage() {
  const { services } = siteData;

  return (
    <>
      {/* Section Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Des soins médicaux complets et professionnels adaptés à tous vos besoins de santé
            </p>
          </div>
        </div>
      </section>

      {/* Section Grid des Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Informations Complémentaires */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Comment ça <span className="gradient-text">fonctionne</span> ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Étape 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Contactez-nous
                </h3>
                <p className="text-gray-600">
                  Appelez-nous ou contactez-nous via WhatsApp pour prendre rendez-vous
                </p>
              </div>

              {/* Étape 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Rendez-vous au cabinet pour votre consultation médicale personnalisée
                </p>
              </div>

              {/* Étape 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Suivi médical
                </h3>
                <p className="text-gray-600">
                  Bénéficiez d'un suivi régulier et personnalisé de votre état de santé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations Pratiques */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
              Informations <span className="gradient-text">pratiques</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Carte 1 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Rendez-vous
                </h3>
                <p className="text-gray-700 mb-4">
                  Nous travaillons sur rendez-vous pour vous garantir un service de qualité et éviter les temps d'attente.
                </p>
                <p className="text-gray-600 text-sm">
                  Prenez rendez-vous par téléphone ou WhatsApp.
                </p>
              </div>

              {/* Carte 2 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-white shadow-md card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Urgences
                </h3>
                <p className="text-gray-700 mb-4">
                  En cas d'urgence médicale, contactez-nous immédiatement par téléphone.
                </p>
                <p className="text-gray-600 text-sm">
                  Nous ferons notre possible pour vous recevoir rapidement.
                </p>
              </div>

              {/* Carte 3 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-white shadow-md card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Documents à apporter
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Carte d'identité</li>
                  <li>• Carte d'assurance maladie (si applicable)</li>
                  <li>• Anciens examens médicaux</li>
                  <li>• Liste de vos médicaments actuels</li>
                </ul>
              </div>

              {/* Carte 4 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-white shadow-md card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Paiement
                </h3>
                <p className="text-gray-700 mb-4">
                  Nous acceptons les paiements en espèces et par mobile money.
                </p>
                <p className="text-gray-600 text-sm">
                  Les tarifs sont communiqués lors de la prise de rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 gradient-radial text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Prêt à prendre soin de votre santé ?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Prenez rendez-vous dès maintenant pour bénéficier de nos services médicaux.
            </p>
            <ContactButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
