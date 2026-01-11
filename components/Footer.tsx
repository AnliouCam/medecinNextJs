import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from "@/data/siteData";
import { NAV_ITEMS } from "@/lib/constants";

/**
 * Composant Footer - Pied de page du site
 *
 * Affiche :
 * - Informations du cabinet
 * - Liens de navigation
 * - Coordonnées de contact
 * - Signature développeur
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { doctor, contact, location } = siteData;

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Section principale */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {doctor.name}
            </h3>
            <p className="text-gray-400 mb-4">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">
              Soins médicaux de qualité pour vous et votre famille. Consultations sur rendez-vous.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              {/* Adresse */}
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{location.address}</span>
              </li>

              {/* Téléphone */}
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>

              {/* Horaires */}
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{location.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {doctor.name}
            </p>
            <a
              href="https://wa.me/2250787606430"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 inline-block"
            >
              Développé par <span className="gradient-text font-semibold">Anliou Camara</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
