import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/data/siteData";
import ContactButtons from "@/components/ContactButtons";
import ServiceCard from "@/components/ServiceCard";

/**
 * Page d'accueil
 *
 * Sections :
 * - Hero avec photo du médecin et CTA
 * - Aperçu des services (3 premiers)
 * - Call-to-action final
 */
export default function HomePage() {
  const { doctor, hero, services } = siteData;

  // Afficher seulement les 3 premiers services sur la page d'accueil
  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* Section Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 sm:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte Hero */}
            <div className="animate-slide-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white rounded-full shadow-md text-sm font-semibold gradient-text mb-4">
                  {doctor.specialty}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {hero.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {hero.subtitle}
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Bienvenue au cabinet du <span className="font-bold gradient-text">{doctor.name}</span>.
                Votre santé est notre priorité.
              </p>

              {/* Boutons CTA */}
              <ContactButtons size="lg" />
            </div>

            {/* Image du médecin */}
            <div className="relative animate-slide-right">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Cercles décoratifs en arrière-plan */}
                <div className="absolute -top-4 -left-4 w-72 h-72 gradient-bg-primary rounded-full opacity-10 blur-3xl animate-pulse-subtle" />
                <div className="absolute -bottom-4 -right-4 w-72 h-72 gradient-bg-secondary rounded-full opacity-10 blur-3xl animate-pulse-subtle" />

                {/* Photo du médecin */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="relative aspect-square">
                    <Image
                      src={doctor.photo}
                      alt={`Photo de ${doctor.name}, ${doctor.specialty}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services (Aperçu) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Titre de section */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des soins médicaux de qualité adaptés à vos besoins
            </p>
          </div>

          {/* Grid des services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Lien vers tous les services */}
          <div className="text-center animate-fade-in">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg-primary text-white font-semibold button-hover shadow-lg"
            >
              Voir tous nos services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-20 gradient-radial text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Prenez rendez-vous dès aujourd'hui
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              et prendre soin de votre santé.
            </p>
            <ContactButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
