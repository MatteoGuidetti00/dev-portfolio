import { FC, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Navigation.module.scss";

const navigationKeys = ["home", "about", "skills", "experience", "projects", "contacts"];

const Navigation: FC = () => {
  const { t } = useTranslation("common");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />
      <ul className={styles.list}>
        {navigationKeys.map((key, index) => (
          <li key={index} className={styles.item}>
            <a href={`#${key}`} className={styles.link}>
              <span className={styles.slash}>/</span>
              <span className={styles.label}>{t(`nav.${key}`)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
