import { FC } from "react";
import { Poppins } from "next/font/google";
import SectionTitle from "@/components/common/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { workExperience, education } from "@/data/experience";
import styles from "./Experience.module.scss";

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin"],
});

const Experience: FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section id="experience" className={styles.experience}>
      <SectionTitle>experience</SectionTitle>
      <div ref={ref} className={styles.container}>
        {/* Work Experience */}
        <div className={styles.subsection}>
          <h3 className={`${styles.subsectionTitle} ${poppins.className}`}>
            Work Experience
          </h3>
          <div className={styles.timeline}>
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className={`${styles.timelineItem} ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>{job.period}</span>
                  <h4 className={`${styles.position} ${poppins.className}`}>
                    {job.position}
                  </h4>
                  <p className={styles.company}>{job.company}</p>
                  <p className={styles.description}>{job.description}</p>
                  {job.technologies && (
                    <div className={styles.technologies}>
                      {job.technologies.map((tech) => (
                        <span key={tech} className={styles.tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={styles.subsection}>
          <h3 className={`${styles.subsectionTitle} ${poppins.className}`}>
            Education
          </h3>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`${styles.timelineItem} ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${(workExperience.length + index) * 0.15}s` }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>{edu.period}</span>
                  <h4 className={`${styles.position} ${poppins.className}`}>
                    {edu.degree}
                  </h4>
                  <p className={styles.company}>{edu.school}</p>
                  {edu.description && (
                    <p className={styles.description}>{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
