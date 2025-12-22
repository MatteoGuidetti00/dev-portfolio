import { FC } from "react";
import { useTranslation } from "next-i18next";
import { Poppins } from "next/font/google";
import styles from "./Footer.module.scss";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const Footer: FC = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${poppins.className}`}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          <span className={styles.accent}>&lt;</span>
          {" "}{t("footer.builtWith")}{" "}
          <span className={styles.accent}>/&gt;</span>
        </p>
        <p className={styles.year}>&copy; {currentYear} {t("footer.rights")}</p>
      </div>
      <div className={styles.links}>
        <a
          href="https://github.com/MatteoGuidetti00"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
        <span className={styles.divider}>|</span>
        <a
          href="https://www.linkedin.com/in/matteo-guidetti-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
