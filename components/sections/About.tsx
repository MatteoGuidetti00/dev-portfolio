import { FC } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import SectionTitle from "@/components/common/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./About.module.scss";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const About: FC = () => {
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } =
    useScrollAnimation<HTMLDivElement>({ delay: 100 });

  return (
    <section id="about" className={`${styles.about} ${poppins.className}`}>
      <SectionTitle>about</SectionTitle>
      <div className={styles.content}>
        <div
          ref={imageRef}
          className={`${styles.imageWrapper} ${imageVisible ? "is-visible" : ""}`}
        >
          <Image
            className={styles.image}
            src="https://i.ibb.co/jZ7g4Jb/goku-learning-react-2-transformed.jpg"
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
            I&apos;m a passionate{" "}
            <span className={styles.highlight}>Full-Stack Developer</span> based
            in Italy, with a strong focus on creating elegant, performant, and
            user-centric web applications.
          </p>
          <p className={styles.bio}>
            With experience spanning both{" "}
            <span className={styles.highlight}>frontend</span> and{" "}
            <span className={styles.highlight}>backend</span> technologies, I
            love turning complex problems into simple, beautiful solutions. I
            believe in writing clean, maintainable code and staying curious
            about emerging technologies.
          </p>
          <p className={styles.bio}>
            When I&apos;m not coding, you&apos;ll find me exploring new
            frameworks, contributing to open-source projects, or experimenting
            with creative animations and UI patterns.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Technologies</div>
            </div>
          </div>
          <a href="/cv.pdf" download className={styles.button}>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
