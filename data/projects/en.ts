import {Project} from "@/types";

export const projects: Project[] = [
  {
    id: "corporate-banking",
    title: "Corporate Banking Platform",
    description:
        "Large-scale Corporate Banking platform for Crédit Agricole Italia, featuring corporate account management, payment operations, treasury services, and regulatory compliance modules. Ongoing full-stack development within a large distributed team, following strict security protocols and enterprise-grade quality standards.",
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
        "Enterprise full-stack platform for Crédit Agricole Italia, featuring financial rate management, client registry, trade operations, and real-time KPI dashboards. Integrated with legacy banking systems via SOAP services, with role-based access control and centralized authentication.",
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
        "Complete Home Banking mobile application for Banca di Cambiano, featuring account management, transfers, card controls, investments, and a digital store for banking products. Developed with a focus on security, user experience, and compliance with banking regulations.",
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
        "Collection of custom SharePoint Framework solutions developed for leading multinational companies across retail, pharmaceutical, fashion, and consulting sectors. Built interactive widgets, dashboard web parts, and intranet applications to enhance corporate collaboration and productivity within Microsoft 365 environments.",
    image: "/images/projects/sharepoint.webp",
    technologies: ["React", "TypeScript", "SPFx", "SharePoint", "Microsoft 365"],
    featured: true,
    projectType: "professional",
    company: "Ferraguti Engineering SAS",
  },
];
