import { WorkExperience, Education } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: "job-3",
    company: "BDX SRL",
    position: "Full-Stack Developer",
    period: "2024 - Present",
    description:
      "Full-stack development on a large-scale Corporate Banking platform for Crédit Agricole Italia, working within an extensive development team. Operating under strict security protocols and high code quality standards, delivering enterprise-grade financial solutions.",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot"],
  },
  {
    id: "job-2",
    company: "T&O Consulting SRL",
    position: "Full-Stack Developer",
    period: "2022 - 2024",
    description:
      "Transitioned into full-stack development within the finance and banking sector. Built Home Banking platforms, foreign exchange systems, and long-term enterprise projects. Collaborated with medium-sized teams on mission-critical applications for major financial institutions.",
    technologies: ["Angular", "RxJS", "Java", "Spring Boot", "TypeScript"],
  },
  {
    id: "job-1",
    company: "Ferraguti Engineering SAS",
    position: "Junior Front-End Developer",
    period: "2020 - 2022",
    description:
      "Designed and developed SPFx web applications using React and TypeScript. Built automated workflows with Power Automate and Power Apps. Provided SharePoint Online consulting for leading multinational companies across retail, pharmaceutical, fashion, and consulting sectors. Mentored team members on development technologies and best practices.",
    technologies: ["React", "TypeScript", "SPFx", "Power Automate", "Power Apps", "SharePoint"],
  },
];

export const education: Education[] = [
  {
    id: "edu-2",
    school: "UNIMORE - University of Modena and Reggio Emilia",
    degree: "Computer Science",
    period: "2018 - 2019",
    description:
      "Completed one year before pursuing professional growth in the field, gaining hands-on experience in real-world projects.",
  },
  {
    id: "edu-1",
    school: "ITIS Leonardo Da Vinci - Technical Institute",
    degree: "Technical Diploma in Computer Science",
    period: "Carpi (MO)",
    description:
      "Technical high school diploma specializing in computer science, software development, and IT fundamentals.",
  },
];
