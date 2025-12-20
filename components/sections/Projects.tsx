import { FC } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/common/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projects";
import styles from "./Projects.module.scss";

const Projects: FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle>projects</SectionTitle>
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
