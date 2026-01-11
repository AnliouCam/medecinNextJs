"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Stethoscope } from "lucide-react";
import { siteData } from "@/data/siteData";
import { NAV_ITEMS } from "@/lib/constants";

/**
 * Composant Navbar - Navigation principale du site
 *
 * - Navigation desktop (horizontal)
 * - Hamburger menu mobile (responsive)
 * - Indicateur de page active
 * - Design moderne avec gradient
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Navigation principale">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nom du médecin */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            <div className="w-10 h-10 rounded-lg gradient-bg-primary flex items-center justify-center shadow-md">
              <Stethoscope className="text-white" size={24} />
            </div>
            <span className="hidden sm:block gradient-text">
              {siteData.doctor.name}
            </span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    font-medium transition-all duration-300
                    hover:scale-105
                    ${
                      isActive
                        ? "gradient-text font-bold"
                        : "text-gray-700 hover:text-gray-900"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Bouton Hamburger Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-gray-700" />
            ) : (
              <Menu size={28} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Overlay) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40 animate-fade-in"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div
            className="
              fixed top-16 right-0 bottom-0
              w-64 bg-white
              shadow-2xl
              md:hidden z-50
              animate-slide-right
            "
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
                      py-3 px-4 rounded-lg
                      font-medium text-lg
                      transition-all duration-300
                      ${
                        isActive
                          ? "gradient-bg-primary text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
