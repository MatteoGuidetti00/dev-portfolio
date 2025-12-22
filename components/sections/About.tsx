import { FC, useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Poppins } from "next/font/google";
import SectionTitle from "@/components/common/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./About.module.scss";

const CVPreviewModal = dynamic(
  () => import("@/components/cv/CVPreviewModal"),
  { ssr: false }
);

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const About: FC = () => {
  const { t } = useTranslation("about");
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } =
    useScrollAnimation<HTMLDivElement>({ delay: 100 });

  return (
    <section id="about" className={`${styles.about} ${poppins.className}`}>
      <SectionTitle>{t("sectionTitle")}</SectionTitle>
      <div className={styles.content}>
        <div
          ref={imageRef}
          className={`${styles.imageWrapper} ${imageVisible ? "is-visible" : ""}`}
        >
          <Image
            className={styles.image}
            src="/images/me.jpeg"
            alt="Matteo Guidetti"
            width={280}
            height={280}
            quality={90}
          />
        </div>
        <div
          ref={textRef}
          className={`${styles.textContent} ${textVisible ? "is-visible" : ""}`}
        >
          <p className={styles.bio}>
            <Trans
              i18nKey="paragraph1"
              ns="about"
              components={{ highlight: <span className={styles.highlight} /> }}
            />
          </p>
          <p className={styles.bio}>
            <Trans
              i18nKey="paragraph2"
              ns="about"
              components={{ highlight: <span className={styles.highlight} /> }}
            />
          </p>
          <p className={styles.bio}>
            {t("paragraph3")}
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>{t("stats.years")}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>{t("stats.projects")}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>{t("stats.technologies")}</div>
            </div>
          </div>
          <button
            className={styles.button}
            onClick={() => setIsCVModalOpen(true)}
          >
            {t("downloadCV")}
          </button>
        </div>
      </div>
      <CVPreviewModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </section>
  );
};

export default About;
