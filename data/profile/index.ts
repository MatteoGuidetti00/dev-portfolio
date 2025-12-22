import { profile as enProfile } from "./en";
import { profile as itProfile } from "./it";
import type { Profile } from "@/types";

export type Locale = "en" | "it";

const profileData: Record<Locale, Profile> = {
  en: enProfile,
  it: itProfile,
};

export const getProfile = (locale: string): Profile =>
  profileData[locale as Locale] || profileData.en;
