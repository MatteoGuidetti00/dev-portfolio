// Skills types
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon?: string;
  skills: Skill[];
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
