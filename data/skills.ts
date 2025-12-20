import { SkillCategory } from "@/types";

const devicon = (name: string, variant: string = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "React", icon: devicon("react") },
      { name: "Vue.js", icon: devicon("vuejs") },
      { name: "Next.js", icon: devicon("nextjs") },
      { name: "Angular", icon: devicon("angular") },
      { name: "Tailwind", icon: devicon("tailwindcss") },
      { name: "Sass", icon: devicon("sass") },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "Java", icon: devicon("java") },
      { name: "Spring", icon: devicon("spring") },
      { name: "GraphQL", icon: devicon("graphql", "plain") },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "MySQL", icon: devicon("mysql") },
      { name: "Oracle", icon: devicon("oracle") },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Jest", icon: devicon("jest", "plain") },
      { name: "Cypress", icon: devicon("cypressio"), invertIcon: true },
      { name: "Playwright", icon: devicon("playwright") },
      { name: "JUnit", icon: devicon("junit", "plain") },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: devicon("docker") },
      { name: "AWS", icon: devicon("amazonwebservices", "plain-wordmark") },
      { name: "Git", icon: devicon("git") },
      { name: "Jenkins", icon: devicon("jenkins") },
    ],
  },
];
