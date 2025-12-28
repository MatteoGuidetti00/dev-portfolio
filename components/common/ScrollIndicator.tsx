import { FC, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import styles from "./ScrollIndicator.module.scss";

const ScrollIndicator: FC = () => {
  const { t } = useTranslation("common");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out after scrolling 150px
      setIsVisible(window.scrollY < 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.indicator} ${isVisible ? styles.visible : ""}`}
      onClick={handleClick}
      aria-label={t("scrollDown", "Scroll down")}
    >
      <span className={styles.text}>{t("scrollDown", "Scroll")}</span>
      <div className={styles.chevronContainer}>
        <svg
          className={styles.chevron}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <svg
          className={`${styles.chevron} ${styles.chevronGhost}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <span className={styles.line} />
    </button>
  );
};

export default ScrollIndicator;
