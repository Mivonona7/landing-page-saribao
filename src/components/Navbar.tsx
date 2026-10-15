"use client";

import { useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { Brand } from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav aria-label="Navigation principale" className="navbar">
        <Brand />
        <div className="desktop-nav-links">
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
        <a className="nav-download" href="#telechargement">
          Télécharger l’application <ArrowDownToLine aria-hidden="true" size={16} />
        </a>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen ? (
        <div className="mobile-nav-panel" id="mobile-navigation">
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-nav-download" href="#telechargement" onClick={closeMenu}>
            Télécharger l’application <ArrowDownToLine aria-hidden="true" size={16} />
          </a>
        </div>
      ) : null}
    </header>
  );
}
