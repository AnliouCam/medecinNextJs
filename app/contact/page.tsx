import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from "@/data/siteData";
import ContactButtons from "@/components/ContactButtons";
import GoogleMap from "@/components/GoogleMap";
import type { Metadata } from "next";

/**
 * Page Contact + Localisation
 *
 * Sections :
 * - Informations de contact
 * - Carte Google Maps
 * - Horaires d'ouverture
 * - Adresse complète
 */

// Métadonnées SEO spécifiques à la page Contact
export const metadata: Metadata = {
  title: `Contact & Localisation - ${siteData.doctor.name}`,
  description: `Contactez ${siteData.doctor.name} à ${siteData.location.address}. Tél: ${siteData.contact.phone}. ${siteData.location.hours}. Prenez rendez-vous facilement.`,
  keywords: `contact médecin, rendez-vous médical, ${siteData.location.address}, téléphone médecin, localisation cabinet médical, horaires consultation`,
  openGraph: {
    title: `Nous contacter - ${siteData.doctor.name}`,
    description: `${siteData.location.address} - ${siteData.contact.phone}`,
    type: "website",
  },
};

export default function ContactPage() {
  const { contact, location } = siteData;

  return (
    <>
      {/* Section Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Contactez-nous</span>
            </h1>
            <p className="text-xl text-gray-600">
              Nous sommes à votre écoute pour prendre soin de votre santé
            </p>
          </div>
        </div>
      </section>

      {/* Section Informations de Contact */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Colonne Gauche : Informations */}
              <div className="animate-slide-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Nous <span className="gradient-text">contacter</span>
                </h2>

                <div className="space-y-6 mb-10">
                  {/* Téléphone */}
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md card-hover">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-bg-primary flex items-center justify-center">
                        <Phone className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Téléphone
                      </h3>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-green-50 to-white shadow-md card-hover">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-bg-secondary flex items-center justify-center">
                        <Mail className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-lg text-gray-700 hover:text-green-600 transition-colors break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white shadow-md card-hover">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Clock className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Horaires d'ouverture
                      </h3>
                      <p className="text-lg text-gray-700">{location.hours}</p>
                    </div>
                  </div>

                  {/* Adresse */}
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white shadow-md card-hover">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                        <MapPin className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                      <p className="text-lg text-gray-700">{location.address}</p>
                    </div>
                  </div>
                </div>

                {/* Boutons de contact */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">
                    Prendre rendez-vous maintenant
                  </h3>
                  <ContactButtons variant="vertical" size="lg" />
                </div>
              </div>

              {/* Colonne Droite : Carte */}
              <div className="animate-slide-right">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Notre <span className="gradient-text">Localisation</span>
                </h2>
                <GoogleMap height="600px" />
                <p className="mt-4 text-gray-600 text-sm text-center">
                  📍 {location.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Instructions d'accès */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Comment nous <span className="gradient-text">trouver</span> ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Transport */}
              <div className="p-8 rounded-xl bg-white shadow-md card-hover text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  En voiture
                </h3>
                <p className="text-gray-600">
                  Parking disponible à proximité du cabinet médical
                </p>
              </div>

              <div className="p-8 rounded-xl bg-white shadow-md card-hover text-center">
                <div className="text-4xl mb-4">🚌</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Transport en commun
                </h3>
                <p className="text-gray-600">
                  Accessible en taxi ou transport en commun
                </p>
              </div>

              <div className="p-8 rounded-xl bg-white shadow-md card-hover text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Repères
                </h3>
                <p className="text-gray-600">
                  Situé dans le quartier de {location.address.split(',')[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ Contact */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border-2 border-gray-100 card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Comment prendre rendez-vous ?
                </h3>
                <p className="text-gray-600">
                  Contactez-nous par téléphone au {contact.phone} ou via WhatsApp.
                  Nous vous proposerons un créneau adapté à vos disponibilités.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-gray-100 card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Faut-il prendre rendez-vous ?
                </h3>
                <p className="text-gray-600">
                  Oui, nous travaillons sur rendez-vous pour garantir un service de qualité
                  et éviter les temps d'attente. En cas d'urgence, contactez-nous directement.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-gray-100 card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quels sont vos horaires ?
                </h3>
                <p className="text-gray-600">
                  {location.hours}
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
              Une question ? Contactez-nous !
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <ContactButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
