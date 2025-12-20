import { WorkExperience, Education } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: "job-3",
    company: "Company Name",
    position: "Senior Full-Stack Developer",
    period: "2023 - Present",
    description:
      "Leading development of web applications using modern technologies. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "job-2",
    company: "Previous Company",
    position: "Full-Stack Developer",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects. Collaborated with cross-functional teams to deliver high-quality solutions.",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
  },
  {
    id: "job-1",
    company: "First Company",
    position: "Junior Developer",
    period: "2019 - 2021",
    description:
      "Started my professional journey building web applications. Learned agile methodologies and software development best practices.",
    technologies: ["JavaScript", "React", "Node.js"],
  },
];

export const education: Education[] = [
  {
    id: "edu-2",
    school: "UNIMORE - Università di Modena e Reggio Emilia",
    degree: "Scienze Informatiche",
    period: "2018 - 2019",
    description:
      "Completed one year before choosing to grow professionally in the field, gaining hands-on experience in real-world projects.",
  },
  {
    id: "edu-1",
    school: "ITIS Leonardo Da Vinci",
    degree: "Perito Informatico",
    period: "Carpi (MO)",
    description:
      "Technical high school diploma with focus on computer science and programming fundamentals.",
  },
];
