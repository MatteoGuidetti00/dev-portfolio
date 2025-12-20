import { FC, useState, useEffect } from "react";
import styles from "./Navigation.module.scss";

const navigation = ["home", "about", "skills", "experience", "projects", "contacts"];

const Navigation: FC = () => {
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
        {navigation.map((link, index) => (
          <li key={index} className={styles.item}>
            <a href={`#${link}`} className={styles.link}>
              <span className={styles.slash}>/</span>
              <span className={styles.label}>{link}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
