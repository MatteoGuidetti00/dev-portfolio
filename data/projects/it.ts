import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "corporate-banking",
    title: "Corporate Banking Platform",
    description:
      "Piattaforma di Corporate Banking su larga scala per Crédit Agricole Italia, con gestione conti aziendali, operazioni di pagamento, servizi di tesoreria e moduli di conformità normativa. Sviluppo full-stack in corso all'interno di un ampio team distribuito, seguendo rigidi protocolli di sicurezza e standard qualitativi enterprise-grade.",
    image: "/images/projects/corporate.png",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "Oracle"],
    featured: true,
    projectType: "professional",
    company: "BDX SRL",
  },
  {
    id: "itaca",
    title: "Itaca",
    description:
        "Piattaforma enterprise full-stack per Crédit Agricole Italia, con gestione tassi finanziari, anagrafica clienti, operazioni di trade e dashboard KPI in tempo reale. Integrata con sistemi bancari legacy tramite servizi SOAP, con controllo accessi basato su ruoli e autenticazione centralizzata.",
    image: "/images/projects/itaca.jpg",
    technologies: ["Angular", "TypeScript", "Spring Boot", "Java", "Bootstrap", "SOAP"],
    featured: true,
    projectType: "professional",
    company: "T&O Consulting SRL",
  },
  {
    id: "cambianonline",
    title: "CambianOnline",
    description:
      "Applicazione mobile di Home Banking completa per Banca di Cambiano, con gestione conti, bonifici, controllo carte, investimenti e uno store digitale per prodotti bancari. Sviluppata con focus su sicurezza, user experience e conformità alle normative bancarie.",
    image: "/images/projects/cambianonline_2.jpeg",
    technologies: ["Angular", "TypeScript", "RxJS", "Java", "Spring Boot"],
    appStoreUrl: "https://apps.apple.com/it/app/cambianonline/id1630337668",
    featured: true,
    projectType: "professional",
    company: "T&O Consulting SRL",
  },
  {
    id: "spfx-solutions",
    title: "SPFx Enterprise Solutions",
    description:
      "Raccolta di soluzioni SharePoint Framework personalizzate sviluppate per importanti multinazionali nei settori retail, farmaceutico, fashion e consulting. Realizzazione di widget interattivi, web part dashboard e applicazioni intranet per migliorare la collaborazione e la produttività aziendale in ambienti Microsoft 365.",
    image: "/images/projects/sharepoint.webp",
    technologies: ["React", "TypeScript", "SPFx", "SharePoint", "Microsoft 365"],
    featured: true,
    projectType: "professional",
    company: "Ferraguti Engineering SAS",
  },
];
