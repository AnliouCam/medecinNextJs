import * as LucideIcons from "lucide-react";
import type { Service } from "@/types/siteData";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

/**
 * Composant ServiceCard - Card pour afficher un service médical
 *
 * Affiche une icône Lucide, un titre et une description
 * Design moderne avec gradient et animations
 */
export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const { title, description, icon } = service;

  // Convertir le nom de l'icône en PascalCase pour Lucide React
  // Ex: "stethoscope" -> "Stethoscope", "heart-pulse" -> "HeartPulse"
  const iconName = icon
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  // Récupérer l'icône dynamiquement depuis lucide-react
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Circle;

  return (
    <div
      className="
        card-hover
        bg-white
        rounded-xl
        p-6
        shadow-md
        border border-gray-100
        animate-fade-in
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Icône avec gradient background */}
      <div
        className="
          w-14 h-14
          rounded-lg
          gradient-bg-primary
          flex items-center justify-center
          mb-4
          shadow-md
        "
      >
        <IconComponent className="text-white" size={28} strokeWidth={2} />
      </div>

      {/* Titre */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
