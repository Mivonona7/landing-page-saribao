"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Command,
  Layers3,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: WandSparkles,
    number: "01",
    title: "Les idées prennent forme",
    description:
      "Passez de la première intuition à un projet clair, sans vous perdre dans les détails.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Tout reste à sa place",
    description:
      "Retrouvez vos notes, vos inspirations et vos prochaines étapes dans un seul espace.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Le mouvement est naturel",
    description:
      "Avancez à votre rythme avec une expérience simple, pensée pour garder l’élan.",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav className="site-nav">
        <a aria-label="Luma, accueil" className="brand" href="#">
          <span className="brand-mark">
            <Command size={17} strokeWidth={2.5} />
          </span>
          <span>luma<span className="brand-period">.</span></span>
        </a>

        <div className="nav-links">
          <a href="#approche">Notre approche</a>
          <a href="#avantages">Avantages</a>
        </div>

        <a className="nav-cta" href="#contact">
          Découvrir <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero">
        <div aria-hidden="true" className="hero-orbit hero-orbit-one" />
        <div aria-hidden="true" className="hero-orbit hero-orbit-two" />
        <div className="hero-copy">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <span className="eyebrow-dot" />
            FAITES DE LA PLACE AUX POSSIBLES
          </motion.div>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.08, ease: easeOut }}
          >
            Vos idées méritent
            <br />
            <span>de devenir</span> quelque chose.
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          >
            Un espace pour clarifier vos pensées, organiser vos projets et
            avancer vers ce qui compte vraiment.
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          >
            <a className="button button-primary" href="#contact">
              Commencer maintenant <ArrowRight size={16} />
            </a>
            <a className="text-link" href="#approche">
              En savoir plus <ArrowDownRight size={16} />
            </a>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            className="social-proof"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div aria-hidden="true" className="avatar-stack">
              <span>A</span>
              <span>M</span>
              <span>S</span>
              <span>+</span>
            </div>
            <p>
              <strong>Une nouvelle façon</strong> de voir grand.
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          className="hero-art"
          initial={{ opacity: 0, y: 32, rotate: 2 }}
          transition={{ duration: 1, delay: 0.25, ease: easeOut }}
        >
          <div aria-hidden="true" className="art-glow" />
          <div className="note-card note-card-back">
            <span className="note-label">INSPIRATION DU JOUR</span>
            <div className="note-lines">
              <span />
              <span />
              <span />
            </div>
            <span className="note-sparkle"><Sparkles size={18} /></span>
          </div>
          <div className="note-card note-card-front">
            <div className="card-topline">
              <span className="card-status"><span /> EN COURS</span>
              <span className="card-menu">···</span>
            </div>
            <h2>Le prochain<br />grand projet.</h2>
            <p>Chaque chose commence par une idée.</p>
            <div className="progress-row">
              <span>En voir le potentiel</span>
              <strong>72%</strong>
            </div>
            <div className="progress-track"><span /></div>
            <div className="card-bottom">
              <div className="mini-avatars"><span>A</span><span>M</span><span>+</span></div>
              <span className="card-date">Mis à jour à l’instant</span>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
            className="floating-chip"
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="chip-icon"><Sparkles size={15} /></span>
            <span>Une idée brillante !</span>
          </motion.div>
          <div aria-hidden="true" className="art-star">✳</div>
        </motion.div>

        <a aria-label="Découvrir la suite" className="scroll-hint" href="#approche">
          <span>FAITES DÉFILER</span><span className="scroll-line" />
        </a>
      </section>

      <section className="intro-section" id="approche">
        <motion.div
          className="intro-inner"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          <span className="section-kicker">MOINS DE BRUIT, PLUS DE SENS</span>
          <h2>
            Le bon départ change
            <br />
            <span>toute la trajectoire.</span>
          </h2>
          <p>
            Les meilleures idées ne demandent pas plus de pression. Elles
            demandent un peu d’espace, de clarté et le courage de commencer.
          </p>
        </motion.div>
      </section>

      <section className="features-section" id="avantages">
        <div className="features-heading">
          <div>
            <span className="section-kicker">UN ESPACE POUR AVANCER</span>
            <h2>Tout commence<br />par une idée.</h2>
          </div>
          <p>Et tout devient possible quand on lui donne la place d’exister.</p>
        </div>
        <div className="feature-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="feature-card"
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: easeOut }}
              >
                <div className="feature-card-top">
                  <span className="feature-icon"><Icon size={20} /></span>
                  <span className="feature-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowUpRight aria-hidden="true" className="feature-arrow" size={18} />
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div aria-hidden="true" className="cta-decoration">✳</div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <span className="section-kicker">LE PREMIER PAS EST À VOUS</span>
          <h2>Et si vous commenciez<br />aujourd’hui ?</h2>
          <p>Votre prochaine grande idée est peut-être plus proche que vous le pensez.</p>
          <a className="button button-light" href="mailto:bonjour@luma.example">
            Parlons de votre projet <ArrowRight size={16} />
          </a>
          <span className="cta-note"><Check size={14} /> Sans pression. Juste une conversation.</span>
        </motion.div>
      </section>

      <footer className="site-footer">
        <a aria-label="Luma, accueil" className="brand footer-brand" href="#">
          <span className="brand-mark"><Command size={16} strokeWidth={2.5} /></span>
          <span>luma<span className="brand-period">.</span></span>
        </a>
        <span>© 2026 Luma Studio. Fait avec intention.</span>
        <a className="footer-top" href="#">Retour en haut <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
