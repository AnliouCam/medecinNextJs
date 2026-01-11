"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

interface ContactButtonsProps {
  variant?: "horizontal" | "vertical";
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * Composant ContactButtons - Boutons WhatsApp et Appeler
 *
 * Utilise les données de contact depuis siteData.ts
 * Design moderne avec gradients et animations
 */
export default function ContactButtons({
  variant = "horizontal",
  showLabels = true,
  size = "md",
}: ContactButtonsProps) {
  const { phone, whatsapp } = siteData.contact;

  // Nettoyer le numéro pour les liens (enlever espaces et caractères spéciaux)
  const cleanPhone = phone.replace(/\s+/g, "");
  const cleanWhatsApp = whatsapp.replace(/\s+/g, "");

  // Tailles des boutons
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Tailles des icônes
  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 24,
  };

  const buttonClass = `
    ${sizeClasses[size]}
    rounded-lg font-semibold
    flex items-center justify-center gap-2
    button-hover
    transition-all duration-300
    shadow-md
  `;

  return (
    <div
      className={`
        flex gap-4
        ${variant === "vertical" ? "flex-col" : "flex-row flex-wrap"}
      `}
    >
      {/* Bouton WhatsApp */}
      <a
        href={`https://wa.me/${cleanWhatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          ${buttonClass}
          bg-[#25D366] text-white
          hover:bg-[#20BA5A]
        `}
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle size={iconSizes[size]} />
        {showLabels && <span>WhatsApp</span>}
      </a>

      {/* Bouton Appeler */}
      <a
        href={`tel:${cleanPhone}`}
        className={`
          ${buttonClass}
          gradient-bg-primary text-white
        `}
        aria-label="Appeler le médecin"
      >
        <Phone size={iconSizes[size]} />
        {showLabels && <span>Appeler</span>}
      </a>
    </div>
  );
}
