import { siteData } from "@/data/siteData";

interface GoogleMapProps {
  height?: string;
  rounded?: boolean;
}

/**
 * Composant GoogleMap - Carte Google Maps intégrée
 *
 * Utilise mapEmbedUrl depuis siteData.ts
 * Responsive et accessible
 */
export default function GoogleMap({
  height = "450px",
  rounded = true,
}: GoogleMapProps) {
  const { mapEmbedUrl } = siteData.location;

  return (
    <div
      className={`
        w-full overflow-hidden
        ${rounded ? "rounded-xl" : ""}
        shadow-lg
      `}
      style={{ height }}
    >
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Carte de localisation du cabinet médical - ${siteData.location.address}`}
        aria-label={`Plan d'accès au cabinet situé à ${siteData.location.address}`}
        className="w-full h-full"
      />
    </div>
  );
}
