import { FC } from "react";
import { Poppins } from "next/font/google";
import styles from "./Footer.module.scss";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${poppins.className}`}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          <span className={styles.accent}>&lt;</span>
          {" "}Built with passion by Matteo Guidetti {" "}
          <span className={styles.accent}>/&gt;</span>
        </p>
        <p className={styles.year}>&copy; {currentYear} All rights reserved.</p>
      </div>
      <div className={styles.links}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
        <span className={styles.divider}>|</span>
        <a
          href="https://linkedin.com"
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
