// Profile types
export interface Profile {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
  summary: string;
}

// Skills types
export interface Skill {
  name: string;
  icon?: string;
  invertIcon?: boolean;
}

export interface SkillCategory {
  name: string;
  icon?: string;
  skills: Skill[];
}

// Experience types
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

// Projects types
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";

// Navigation types
export interface NavItem {
  label: string;
  href: string;
}

// Animation types
export type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade";
