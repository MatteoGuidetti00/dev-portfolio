import { FC, forwardRef } from "react";
import { profile } from "@/data/profile";
import { workExperience, education } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import styles from "./CVTemplate.module.scss";

const CVTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div ref={ref} className={styles.cv}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
        <div className={styles.contacts}>
          <span>{profile.email}</span>
          {profile.phone && <span>{profile.phone}</span>}
          <span>{profile.location}</span>
          <span>{profile.linkedin}</span>
          <span>{profile.github}</span>
        </div>
      </header>

      {/* Summary */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Summary</h2>
        <p className={styles.summary}>{profile.summary}</p>
      </section>

      {/* Experience */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        {workExperience.map((job) => (
          <div key={job.id} className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3 className={styles.entryTitle}>{job.position}</h3>
                <p className={styles.entrySubtitle}>{job.company}</p>
              </div>
              <span className={styles.period}>{job.period}</span>
            </div>
            <p className={styles.description}>{job.description}</p>
            {job.technologies && (
              <p className={styles.tech}>
                <strong>Technologies:</strong> {job.technologies.join(", ")}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className={styles.entry}>
            <div className={styles.entryHeader}>
              <div>
                <h3 className={styles.entryTitle}>{edu.degree}</h3>
                <p className={styles.entrySubtitle}>{edu.school}</p>
              </div>
              <span className={styles.period}>{edu.period}</span>
            </div>
            {edu.description && (
              <p className={styles.description}>{edu.description}</p>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skills}>
          {skillCategories.map((category) => (
            <div key={category.name} className={styles.skillCategory}>
              <strong>{category.name}:</strong>{" "}
              {category.skills.map((s) => s.name).join(", ")}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        {featuredProjects.map((project) => (
          <div key={project.id} className={styles.entry}>
            <h3 className={styles.entryTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.tech}>
              <strong>Tech Stack:</strong> {project.technologies.join(", ")}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
});

CVTemplate.displayName = "CVTemplate";

export default CVTemplate;
