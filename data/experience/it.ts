import { WorkExperience, Education } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: "job-3",
    company: "BDX SRL",
    position: "Full-Stack Developer",
    period: "2024 - Presente",
    description:
      "Sviluppo full-stack su una piattaforma di Corporate Banking su larga scala per Crédit Agricole Italia, all'interno di un team di sviluppo esteso. Lavoro nel rispetto di rigidi protocolli di sicurezza e standard elevati di qualità del codice, sviluppando soluzioni finanziarie enterprise-grade.",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot"],
  },
  {
    id: "job-2",
    company: "T&O Consulting SRL",
    position: "Full-Stack Developer",
    period: "2022 - 2024",
    description:
      "Transizione verso lo sviluppo full-stack nel settore finance e banking. Sviluppo di piattaforme di Home Banking, sistemi di cambio valute estere e progetti enterprise a lungo termine. Collaborazione con team di medie dimensioni su applicazioni mission-critical per importanti istituzioni finanziarie.",
    technologies: ["Angular", "RxJS", "Java", "Spring Boot", "TypeScript"],
  },
  {
    id: "job-1",
    company: "Ferraguti Engineering SAS",
    position: "Junior Front-End Developer",
    period: "2020 - 2022",
    description:
      "Progettazione e sviluppo di web application SPFx con React e TypeScript. Creazione di workflow automatizzati con Power Automate e Power Apps. Consulenza SharePoint Online per importanti multinazionali nei settori retail, farmaceutico, fashion e consulting. Formazione del team sulle tecnologie e best practice di sviluppo.",
    technologies: ["React", "TypeScript", "SPFx", "Power Automate", "Power Apps", "SharePoint"],
  },
];

export const education: Education[] = [
  {
    id: "edu-2",
    school: "UNIMORE - Università di Modena e Reggio Emilia",
    degree: "Scienze Informatiche",
    period: "2018 - 2019",
    description:
      "Completato un anno prima di scegliere di crescere professionalmente nel settore, acquisendo esperienza pratica in progetti reali.",
  },
  {
    id: "edu-1",
    school: "ITIS Leonardo Da Vinci",
    degree: "Perito Informatico",
    period: "Carpi (MO)",
    description:
      "Diploma tecnico con specializzazione in informatica, sviluppo software e fondamenti IT.",
  },
];
