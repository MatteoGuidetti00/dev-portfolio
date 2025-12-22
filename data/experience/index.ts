import {
  workExperience as enWorkExperience,
  education as enEducation,
} from "./en";
import {
  workExperience as itWorkExperience,
  education as itEducation,
} from "./it";
import type { WorkExperience, Education } from "@/types";

export type Locale = "en" | "it";

interface ExperienceData {
  workExperience: WorkExperience[];
  education: Education[];
}

const experienceData: Record<Locale, ExperienceData> = {
  en: { workExperience: enWorkExperience, education: enEducation },
  it: { workExperience: itWorkExperience, education: itEducation },
};

export const getExperience = (locale: string): ExperienceData =>
  experienceData[locale as Locale] || experienceData.en;

export const getWorkExperience = (locale: string): WorkExperience[] =>
  getExperience(locale).workExperience;

export const getEducation = (locale: string): Education[] =>
  getExperience(locale).education;
