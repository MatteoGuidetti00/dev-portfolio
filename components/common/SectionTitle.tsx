import { FC } from "react";
import { Poppins } from "next/font/google";
import styles from "./SectionTitle.module.scss";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

interface SectionTitleProps {
  children: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className={`${styles.title} ${poppins.className}`}>
      <span className={styles.slash}>/</span>
      {children}
    </h2>
  );
};

export default SectionTitle;
