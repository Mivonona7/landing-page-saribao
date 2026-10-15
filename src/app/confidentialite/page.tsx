import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Brand } from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Confidentialité — Saribao",
  description:
    "Informations à compléter sur le fonctionnement réel de l’application Saribao.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <Brand />
        <div className="privacy-header-actions">
          <ThemeToggle />
          <Link className="privacy-back" href="/#accueil">
            <ArrowLeft aria-hidden="true" size={16} /> Retour à l’accueil
          </Link>
        </div>
      </header>
      <section aria-labelledby="privacy-title" className="privacy-content">
        <span className="privacy-icon"><ShieldCheck aria-hidden="true" size={24} /></span>
        <span className="section-eyebrow">INFORMATIONS LÉGALES</span>
        <h1 id="privacy-title">Confidentialité</h1>
        <p className="privacy-notice">Document en préparation</p>
        <p>
          Les informations relatives à la confidentialité doivent être
          complétées et vérifiées par l’éditeur à partir du fonctionnement réel
          de Saribao avant publication. Cette page ne constitue pas une
          politique de confidentialité.
        </p>
        <p>
          Les captures de l’application indiquent que certaines données sont
          stockées localement sur l’appareil. Cela ne permet pas, à lui seul,
          de décrire toutes les données traitées ni les pratiques de
          confidentialité de l’application.
        </p>
        <Link className="button button-primary" href="/#accueil">
          Retourner sur Saribao <ArrowLeft aria-hidden="true" size={16} />
        </Link>
      </section>
    </main>
  );
}
