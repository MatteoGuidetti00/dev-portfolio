import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring drag-and-drop interfaces, real-time updates, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates marketing copy, blog posts, and social media content using advanced language models.",
    technologies: ["React", "Python", "OpenAI", "FastAPI"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-4",
    title: "Real-time Analytics Dashboard",
    description:
      "A comprehensive analytics platform with interactive charts, custom report generation, and real-time data visualization.",
    technologies: ["Angular", "D3.js", "Spring Boot", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "project-5",
    title: "Social Media Scheduler",
    description:
      "A scheduling tool for social media managers to plan, schedule, and analyze posts across multiple platforms.",
    technologies: ["Vue.js", "Node.js", "MySQL", "AWS"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Fitness Tracking App",
    description:
      "A mobile-first fitness application with workout tracking, nutrition logging, and progress visualization features.",
    technologies: ["React Native", "GraphQL", "MongoDB", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
];
