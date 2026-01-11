import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteData } from "@/data/siteData";
import ContactButtons from "@/components/ContactButtons";
import type { Metadata } from "next";

/**
 * Page À propos
 *
 * Sections :
 * - Présentation du médecin
 * - Diplômes et formations
 * - Expérience
 * - Call-to-action
 */

// Métadonnées SEO spécifiques à la page À propos
export const metadata: Metadata = {
  title: `À propos de ${siteData.doctor.name} - ${siteData.doctor.specialty}`,
  description: `Découvrez le parcours professionnel de ${siteData.doctor.name}, ${siteData.doctor.specialty} avec ${siteData.about.experience}. Diplômes, formations et approche médicale.`,
  keywords: `${siteData.doctor.name}, biographie médecin, parcours médical, diplômes, ${siteData.doctor.specialty}, expérience médicale`,
  openGraph: {
    title: `À propos de ${siteData.doctor.name}`,
    description: `${siteData.doctor.specialty} - ${siteData.about.experience}`,
    type: "profile",
  },
};

export default function AboutPage() {
  const { doctor, about } = siteData;

  return (
    <>
      {/* Section Hero À propos */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              À propos de <span className="gradient-text">{doctor.name}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {doctor.specialty}
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              {about.experience}
            </p>
          </div>
        </div>
      </section>

      {/* Section Biographie */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Photo du médecin */}
              <div className="lg:col-span-1 animate-slide-left">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white relative">
                  <Image
                    src={doctor.photo}
                    alt={`Portrait professionnel de ${doctor.name}, ${doctor.specialty}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    quality={85}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Biographie */}
              <div className="lg:col-span-2 animate-slide-right">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Présentation
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {about.bio}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Diplômes et Formations */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Diplômes et <span className="gradient-text">Formations</span>
            </h2>

            <div className="space-y-4">
              {about.credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md card-hover"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg gradient-bg-primary flex items-center justify-center">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 font-medium leading-relaxed">
                      {credential}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Philosophie / Valeurs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Notre <span className="gradient-text">Philosophie</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Valeur 1 */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md card-hover">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Écoute
                </h3>
                <p className="text-gray-600">
                  Chaque patient est unique. Nous prenons le temps de comprendre vos besoins.
                </p>
              </div>

              {/* Valeur 2 */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-white shadow-md card-hover">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg-secondary flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Des soins médicaux de qualité avec des équipements modernes.
                </p>
              </div>

              {/* Valeur 3 */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white shadow-md card-hover">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Disponibilité
                </h3>
                <p className="text-gray-600">
                  Nous sommes là pour vous accompagner à chaque étape de votre parcours de santé.
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
              Prenons soin de votre santé ensemble
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Contactez-nous pour prendre rendez-vous ou pour toute question.
            </p>
            <ContactButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
