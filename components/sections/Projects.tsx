import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/common/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getProjects } from "@/data/projects";
import styles from "./Projects.module.scss";

const Projects: FC = () => {
  const { t } = useTranslation("projects");
  const { locale } = useRouter();
  const projects = getProjects(locale || "en");
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle>{t("sectionTitle")}</SectionTitle>
      <div ref={ref} className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
