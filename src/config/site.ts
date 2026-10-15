export const siteConfig = {
  name: "Saribao",
  description: "Une solution simple pour organiser votre commerce de charbon.",
  appIcon: "/logos/charbon.png",
  apk: {
    href: "/saribao.apk",
    publicFile: "saribao.apk",
  },
  screenshots: [
    {
      src: "/images/saribao-accueil.jpg",
      alt: "Écran d’accueil de Saribao avec le stock, les ventes du jour et les dernières ventes.",
      label: "Accueil",
    },
    {
      src: "/images/saribao-stock.jpg",
      alt: "Écran Stock de Saribao avec les mouvements d’arrivage et de vente.",
      label: "Stock",
    },
    {
      src: "/images/saribao-ventes.jpg",
      alt: "Écran Ventes de Saribao avec les sacs vendus et les montants associés.",
      label: "Ventes",
    },
    {
      src: "/images/saribao-clients.jpg",
      alt: "Écran Clients de Saribao avec les fiches et soldes des clients.",
      label: "Clients",
    },
    {
      src: "/images/saribao-rapports.jpg",
      alt: "Écran Rapports de Saribao avec les indicateurs de ventes et d’achats.",
      label: "Rapports",
    },
  ],
  navigation: [
    { href: "#accueil", label: "Accueil" },
    { href: "#fonctionnalites", label: "Fonctionnalités" },
    { href: "#demonstration", label: "Démonstration" },
    { href: "#faq", label: "FAQ" },
  ],
} as const;
