import Image from "next/image";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  FileText,
  HardDrive,
  History,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Users,
  WifiOff,
} from "lucide-react";
import { Brand } from "@/components/Brand";
import { CurrentYear } from "@/components/CurrentYear";
import { DemoGallery } from "@/components/DemoGallery";
import { DownloadCount, DownloadLink } from "@/components/DownloadTracker";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

const benefits = [
  { icon: WifiOff, title: "Travaillez hors ligne" },
  { icon: Package, title: "Suivez votre stock" },
  { icon: ShoppingCart, title: "Notez vos ventes" },
  { icon: Search, title: "Retrouvez vos informations" },
];

const features = [
  {
    icon: Package,
    title: "Gestion du stock",
    description:
      "Enregistrez les sacs reçus et consultez les mouvements ainsi que le stock disponible.",
  },
  {
    icon: ShoppingCart,
    title: "Enregistrement des ventes",
    description:
      "Consignez les ventes par sac et retrouvez les montants et détails associés aux opérations.",
  },
  {
    icon: Users,
    title: "Gestion des clients",
    description:
      "Retrouvez les fiches clients et les informations de vente affichées dans l’application.",
  },
  {
    icon: History,
    title: "Historique des opérations",
    description:
      "Consultez les mouvements de stock et les opérations enregistrés dans Saribao.",
  },
  {
    icon: FileText,
    title: "Rapports d’activité",
    description:
      "Consultez les indicateurs présentés dans l’application pour les périodes disponibles.",
  },
  {
    icon: WifiOff,
    title: "Fonctionnement hors ligne",
    description:
      "Les opérations prises en charge localement restent consultables sans connexion Internet.",
  },
];

const faqs = [
  {
    question: "Saribao fonctionne-t-elle sans Internet ?",
    answer:
      "Oui. Saribao est conçue pour fonctionner hors ligne : les opérations locales prises en charge sont enregistrées sur le téléphone. Une connexion n’est pas nécessaire pour ces fonctions.",
  },
  {
    question: "Sur quel appareil puis-je installer Saribao ?",
    answer:
      "Saribao est destinée aux appareils Android compatibles. La compatibilité dépend de la version de l’application et de celle d’Android installée sur votre appareil.",
  },
  {
    question: "Mes données sont-elles enregistrées en ligne ?",
    answer:
      "Les données gérées localement sont conservées sur l’appareil. Cela ne signifie pas qu’une copie de sauvegarde en ligne existe.",
  },
  {
    question: "Comment télécharger l’application ?",
    answer:
      "Lorsque le fichier APK est disponible, téléchargez-le depuis cette page, ouvrez-le sur votre appareil Android compatible et suivez les instructions affichées.",
  },
  {
    question: "L’application est-elle gratuite ?",
    answer:
      "Le prix ou le modèle économique de Saribao n’a pas été communiqué. Renseignez-vous auprès de l’éditeur avant toute utilisation commerciale.",
  },
  {
    question: "Que faire si je perds mon téléphone ?",
    answer:
      "La récupération des données dépend des fonctions de sauvegarde disponibles. Vérifiez les possibilités de sauvegarde avant de changer ou de réinitialiser votre appareil. Une copie locale ne remplace pas une sauvegarde.",
  },
];

export default function Home() {
  const apkPath = join(process.cwd(), "public", siteConfig.apk.publicFile);
  const apkAvailable = existsSync(apkPath);
  const apkSize = apkAvailable
    ? Math.ceil(statSync(apkPath).size / (1024 * 1024))
    : null;

  return (
    <>
      <Navbar />
      <main>
        <section aria-labelledby="hero-title" className="hero-section" id="accueil">
          <div aria-hidden="true" className="hero-orb hero-orb-one" />
          <div aria-hidden="true" className="hero-orb hero-orb-two" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-badge">
                <span className="status-dot" />
                APPLICATION ANDROID <span aria-hidden="true">·</span> FONCTIONNE HORS LIGNE
              </span>
              <h1 id="hero-title">
                Gérez votre commerce de charbon, <span>simplement.</span>
              </h1>
              <p className="hero-description">
                Saribao vous aide à suivre vos stocks, enregistrer vos ventes et
                mieux organiser votre activité. Vos données sont conservées sur
                votre appareil pour vous permettre de travailler même sans
                connexion Internet.
              </p>
              <div className="hero-actions">
                {apkAvailable ? (
                  <DownloadLink className="button button-primary" href={siteConfig.apk.href}>
                    Télécharger pour Android
                    <ArrowDownToLine aria-hidden="true" size={17} />
                  </DownloadLink>
                ) : (
                  <a className="button button-primary" href="#telechargement">
                    Voir le téléchargement
                    <ArrowDownToLine aria-hidden="true" size={17} />
                  </a>
                )}
                <a className="button button-secondary" href="#demonstration">
                  Découvrir la démonstration <ArrowRight aria-hidden="true" size={16} />
                </a>
              </div>
              <ul aria-label="À retenir" className="trust-list">
                <li><WifiOff aria-hidden="true" size={16} /> Fonctionne hors ligne</li>
                <li><HardDrive aria-hidden="true" size={16} /> Données locales</li>
                <li><Check aria-hidden="true" size={16} /> Simple à prendre en main</li>
              </ul>
            </div>
            <div className="hero-visual">
              <div aria-hidden="true" className="hero-visual-ring" />
              <div className="hero-phone">
                <span aria-hidden="true" className="hero-phone-camera" />
                <Image
                  alt="Capture réelle de l’écran d’accueil Saribao sur Android."
                  className="hero-phone-screen"
                  height={1600}
                  priority
                  sizes="(max-width: 700px) 56vw, 300px"
                  src="/images/saribao-accueil.jpg"
                  width={720}
                />
              </div>
              <div className="hero-note hero-note-stock">
                <span className="hero-note-icon"><Package size={17} /></span>
                <span><strong>Votre stock</strong><small>Suivi au même endroit</small></span>
              </div>
              <div className="hero-note hero-note-sales">
                <span className="hero-note-icon hero-note-icon-green"><ShoppingCart size={17} /></span>
                <span><strong>Vos ventes</strong><small>Enregistrées simplement</small></span>
              </div>
              <span aria-hidden="true" className="hero-sparkle">✳</span>
            </div>
          </div>
          <a className="hero-scroll" href="#avantages">
            <span>Découvrir Saribao</span><span aria-hidden="true" />
          </a>
        </section>

        <section aria-label="Les avantages de Saribao" className="benefits-section" id="avantages">
          <div className="benefits-inner">
            {benefits.map(({ icon: Icon, title }) => (
              <div className="benefit-item" key={title}>
                <span className="benefit-icon"><Icon aria-hidden="true" size={19} /></span>
                <span>{title}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="everyday-title" className="everyday-section">
          <div className="section-container everyday-inner">
            <div className="everyday-intro">
              <span className="section-eyebrow">UNE ORGANISATION PLUS CLAIRE</span>
              <h2 id="everyday-title">Une gestion plus simple au quotidien.</h2>
              <p>
                Quand les informations sont éparpillées, il peut être difficile
                de suivre chaque mouvement. Saribao rassemble les opérations
                essentielles de votre commerce dans une seule application.
              </p>
            </div>
            <div className="comparison-grid">
              <article className="comparison-card comparison-before">
                <span className="comparison-label">SANS OUTIL CENTRALISÉ</span>
                <h3>Les informations se dispersent.</h3>
                <ul>
                  <li><Clock3 aria-hidden="true" size={17} /> Le stock restant est difficile à vérifier.</li>
                  <li><ShoppingCart aria-hidden="true" size={17} /> Certaines ventes peuvent être oubliées.</li>
                  <li><FileText aria-hidden="true" size={17} /> Les notes peuvent rester dans plusieurs cahiers.</li>
                </ul>
              </article>
              <article className="comparison-card comparison-after">
                <span className="comparison-label">AVEC SARIBAO</span>
                <h3>Les opérations prennent leur place.</h3>
                <ul>
                  <li><Package aria-hidden="true" size={17} /> Notez les arrivages et suivez le stock.</li>
                  <li><ShoppingCart aria-hidden="true" size={17} /> Enregistrez vos ventes par sac.</li>
                  <li><History aria-hidden="true" size={17} /> Consultez les opérations conservées sur le téléphone.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="features-title" className="features-section" id="fonctionnalites">
          <div className="section-container">
            <SectionHeading
              centered
              description="Les écrans présentés dans Saribao réunissent les outils essentiels au suivi quotidien de votre activité."
              eyebrow="LES OUTILS ESSENTIELS"
              id="features-title"
              title="Tout ce qu’il faut, au même endroit."
            />
            <div className="features-grid" id="features-cards">
              {features.map(({ description, icon: Icon, title }, index) => (
                <article className="feature-card" key={title}>
                  <div className="feature-card-top">
                    <span className="feature-icon"><Icon aria-hidden="true" size={21} /></span>
                    <span className="feature-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="demo-title" className="demo-section" id="demonstration">
          <div className="section-container demo-inner">
            <div className="demo-copy">
              <span className="section-eyebrow">UNE VRAIE DÉMONSTRATION</span>
              <h2 id="demo-title">Découvrez Saribao en images.</h2>
              <p>
                Explorez des captures réelles de l’interface et découvrez
                comment Saribao accompagne la gestion quotidienne de votre
                commerce.
              </p>
              <div className="demo-facts">
                <span><Check aria-hidden="true" size={16} /> Captures de l’application Android</span>
                <span><Smartphone aria-hidden="true" size={16} /> Interface pensée pour le téléphone</span>
              </div>
              <p className="demo-disclaimer">
                Les valeurs visibles dans les captures servent uniquement
                d’exemple et ne représentent pas les données d’un utilisateur.
              </p>
            </div>
            <DemoGallery />
          </div>
        </section>

        <section aria-labelledby="offline-title" className="offline-section">
          <div aria-hidden="true" className="offline-decoration offline-decoration-one" />
          <div aria-hidden="true" className="offline-decoration offline-decoration-two" />
          <div className="section-container offline-inner">
            <div className="offline-copy">
              <span className="section-eyebrow">PENSÉE POUR LES CONNEXIONS LIMITÉES</span>
              <h2 id="offline-title">Votre commerce, même sans connexion.</h2>
              <p>
                Saribao est conçue pour enregistrer et consulter localement les
                données de gestion prises en charge par l’application. Vous
                pouvez ainsi travailler dans les endroits où la connexion
                Internet est limitée ou indisponible.
              </p>
              <ul className="offline-points">
                <li><Check aria-hidden="true" size={17} /> Les données locales restent sur l’appareil.</li>
                <li><Check aria-hidden="true" size={17} /> Les opérations compatibles restent accessibles hors ligne.</li>
                <li><Check aria-hidden="true" size={17} /> La gestion quotidienne ne dépend pas d’une connexion permanente.</li>
              </ul>
              <p className="offline-warning">
                Le stockage local n’est pas une sauvegarde : la perte, la panne
                ou la réinitialisation du téléphone peut entraîner la perte des
                données.
              </p>
            </div>
            <div aria-hidden="true" className="offline-visual">
              <div className="offline-device">
                <div className="offline-device-top"><span /><span /></div>
                <div className="offline-device-content">
                  <Image
                    alt=""
                    className="offline-app-icon"
                    height={80}
                    src={siteConfig.appIcon}
                    width={80}
                  />
                  <span className="offline-app-name">Saribao</span>
                  <span className="offline-app-caption">Vos opérations, sur votre téléphone.</span>
                  <span className="offline-status"><WifiOff size={15} /> Hors ligne</span>
                </div>
                <span className="offline-device-home" />
              </div>
              <span className="offline-check"><ShieldCheck size={22} /></span>
            </div>
          </div>
        </section>

        <section aria-labelledby="download-title" className="download-section" id="telechargement">
          <div className="section-container download-inner">
            <div className="download-copy">
              <span className="section-eyebrow">APPLICATION ANDROID</span>
              <h2 id="download-title">Prêt à découvrir Saribao ?</h2>
              <p>
                {apkAvailable
                  ? "Téléchargez l’application Android et découvrez une nouvelle façon d’organiser votre commerce de charbon."
                  : "Le fichier d’installation n’est pas encore disponible. Revenez bientôt pour télécharger l’application Android."}
              </p>
              {apkAvailable ? (
                <DownloadLink className="button button-download" href={siteConfig.apk.href}>
                  <ArrowDownToLine aria-hidden="true" size={18} />
                  Télécharger l’APK Android
                </DownloadLink>
              ) : (
                <p className="download-unavailable" role="status">
                  Application bientôt disponible au téléchargement
                </p>
              )}
              {apkAvailable ? <DownloadCount /> : null}
              <span className="download-platform">
                <Smartphone aria-hidden="true" size={15} />
                Android · Installation manuelle de l’APK
                {apkSize ? <span>· environ {apkSize} Mo</span> : null}
              </span>
              <a className="download-demo-link" href="#demonstration">
                Revoir la démonstration <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
            <div className="install-guide">
              <span className="install-guide-label">INSTALLATION EN 3 ÉTAPES</span>
              <ol>
                <li><span>1</span><p>Téléchargez le fichier APK sur votre appareil Android.</p></li>
                <li><span>2</span><p>Ouvrez le fichier téléchargé sur un appareil compatible.</p></li>
                <li><span>3</span><p>Si Android le demande, autorisez l’installation pour ce fichier puis suivez les instructions affichées.</p></li>
              </ol>
              <p className="install-note">
                N’activez les autorisations que pour une source et un fichier
                auxquels vous faites confiance.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="faq-section" id="faq">
          <div className="section-container faq-inner">
            <div className="faq-heading">
              <span className="section-eyebrow">DES RÉPONSES CLAIRES</span>
              <h2 id="faq-title">Questions fréquentes.</h2>
              <p>Les informations utiles avant de découvrir l’application.</p>
            </div>
            <div className="faq-list">
              {faqs.map(({ answer, question }) => (
                <details className="faq-item" key={question}>
                  <summary>{question}<span aria-hidden="true" className="faq-plus" /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="section-container footer-inner">
          <div className="footer-brand-block">
            <Brand footer />
            <p>{siteConfig.description}</p>
          </div>
          <div className="footer-links">
            <span className="footer-links-title">Explorer</span>
            <a href="#fonctionnalites">Fonctionnalités</a>
            <a href="#demonstration">Démonstration</a>
            <a href="#telechargement">Téléchargement</a>
          </div>
          <div className="footer-links">
            <span className="footer-links-title">Informations</span>
            <a href="#faq">Questions fréquentes</a>
            <a href="/confidentialite">Confidentialité</a>
          </div>
          <div className="footer-bottom">
            <span>© <CurrentYear /> Saribao. Tous droits réservés.</span>
            <a href="#accueil">Retour en haut <ArrowUpRight aria-hidden="true" size={14} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
