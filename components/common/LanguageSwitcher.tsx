import { FC } from "react";
import { useRouter } from "next/router";
import styles from "./LanguageSwitcher.module.scss";

const languages = [
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
];

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ variant = "desktop" }) => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const handleLanguageChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className={`${styles.switcher} ${styles[variant]}`}>
      {languages.map((lang, index) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`${styles.button} ${locale === lang.code ? styles.active : ""}`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
