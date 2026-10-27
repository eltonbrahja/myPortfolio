export const getProjects = (t) => [
  {
    title: t('portfolio.projects')[0].title,
    images: ["/palazzodana-1.webp", "/palazzodana-2.webp", "/palazzodana-3.webp", "/palazzodana-4.webp"],
    tags: t('portfolio.projects')[0].tags || ["100% Mobile & Veloce", "Prenotazioni Dirette", "Design Immersivo"],
    description: t('portfolio.projects')[0].description,
    link: "https://palazzodana.com",
    linkText: t('portfolio.projects')[0].linkText
  },
  {
    title: t('portfolio.projects')[1].title,
    images: ["/prenotazione/prenotazione1.png", "/prenotazione/prenotazione2.png", "/prenotazione/prenotazione3.png", "/prenotazione/prenotazione4.png"],
    tags: t('portfolio.projects')[1].tags || ["Prenotazioni Online H24", "Sincronizzazione Calendario", "Zero Canoni Mensili"],
    description: t('portfolio.projects')[1].description,
    internalLink: "/portfolio/custom-booking",
    linkText: t('portfolio.projects')[1].linkText
  },
  {
    title: t('portfolio.projects')[2].title,
    images: ["/danubia-1.webp", "/danubia-2.webp", "/danubia-3.webp", "/danubia-4.webp"],
    tags: t('portfolio.projects')[2].tags || ["Conforme GDPR Sanità", "Multilingua IT / PT-BR", "Prenotazione Sedute"],
    description: t('portfolio.projects')[2].description,
    link: "https://www.danubiamacario.com",
    linkText: t('portfolio.projects')[2].linkText,
    blogLink: "/blog/sito-web-psicologi-pazienti-giusti",
    blogLinkText: t('portfolio.psychologyDeepDive')
  },
  {
    title: t('portfolio.projects')[3].title,
    images: ["/alessandra-1.webp", "/alessandra-2.webp"],
    tags: t('portfolio.projects')[3].tags || ["Gestione Agenda Clinica", "Acquisizione Contatti", "100% Mobile Ready"],
    description: t('portfolio.projects')[3].description,
    link: "https://www.alessandra-marascio-psicologa.it/",
    linkText: t('portfolio.projects')[3].linkText,
    blogLink: "/blog/sito-web-psicologi-pazienti-giusti",
    blogLinkText: t('portfolio.psychologyDeepDive')
  },
  {
    title: t('portfolio.projects')[4].title,
    image: "/mioSito.webp",
    tags: t('portfolio.projects')[4].tags || ["Caricamento < 1s", "Ottimizzato SEO", "Design Su Misura"],
    description: t('portfolio.projects')[4].description,
    link: "#",
    linkText: t('portfolio.projects')[4].linkText
  }
];
