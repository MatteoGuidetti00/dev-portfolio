import { projects as enProjects } from "./en";
import { projects as itProjects } from "./it";
import type { Project } from "@/types";

export type Locale = "en" | "it";

const projectsData: Record<Locale, Project[]> = {
  en: enProjects,
  it: itProjects,
};

export const getProjects = (locale: string): Project[] =>
  projectsData[locale as Locale] || projectsData.en;
