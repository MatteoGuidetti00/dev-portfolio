import { FC } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import SectionTitle from "@/components/common/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skillCategories } from "@/data/skills";
import styles from "./Skills.module.scss";

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin"],
});

const Skills: FC = () => {
  const { t } = useTranslation("skills");
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="skills" className={styles.skills}>
      <SectionTitle>{t("sectionTitle")}</SectionTitle>
      <div ref={ref} className={styles.container}>
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.name}
            className={`${styles.category} ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className={`${styles.categoryTitle} ${poppins.className}`}>
              {t(`categories.${category.name}`)}
            </h3>
            <div className={styles.badges}>
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className={styles.badge}
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  <div className={styles.iconWrapper}>
                    {skill.icon && (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className={`${styles.icon} ${skill.invertIcon ? styles.invertIcon : ""}`}
                      />
                    )}
                  </div>
                  <span className={styles.label}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
