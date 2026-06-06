export const getProjects = (t) => [
  {
    title: t('portfolio.projects')[0].title,
    images: ["/palazzodana-1.webp", "/palazzodana-2.webp", "/palazzodana-3.webp", "/palazzodana-4.webp"],
    tags: ["REACT VITE", "GSAP ANIMATIONS", "CUSTOM BOOKING"],
    description: t('portfolio.projects')[0].description,
    link: "https://palazzodana.com",
    linkText: t('portfolio.projects')[0].linkText
  },
  {
    title: t('portfolio.projects')[1].title,
    images: ["/prenotazione/prenotazione1.png", "/prenotazione/prenotazione2.png", "/prenotazione/prenotazione3.png", "/prenotazione/prenotazione4.png"],
    tags: ["REACT VITE", "NODE.JS", "CUSTOM BOOKING"],
    description: t('portfolio.projects')[1].description,
    internalLink: "/portfolio/custom-booking",
    linkText: t('portfolio.projects')[1].linkText
  },
  {
    title: t('portfolio.projects')[2].title,
    images: ["/danubia-1.webp", "/danubia-2.webp", "/danubia-3.webp", "/danubia-4.webp"],
    tags: ["WORDPRESS", "MULTILINGUA IT/PT-BR"],
    description: t('portfolio.projects')[2].description,
    link: "https://www.danubiamacario.com",
    linkText: t('portfolio.projects')[2].linkText
  },
  {
    title: t('portfolio.projects')[3].title,
    images: ["/alessandra-1.webp", "/alessandra-2.webp"],
    tags: ["WORDPRESS", "LATEPOINT BOOKING"],
    description: t('portfolio.projects')[3].description,
    link: "https://www.alessandra-marascio-psicologa.it/",
    linkText: t('portfolio.projects')[3].linkText
  },
  {
    title: t('portfolio.projects')[4].title,
    image: "/mioSito.webp",
    tags: ["REACT VITE", "FRAMER MOTION", "VANILLA CSS"],
    description: t('portfolio.projects')[4].description,
    link: "#",
    linkText: t('portfolio.projects')[4].linkText
  }
];
