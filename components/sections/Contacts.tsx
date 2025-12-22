import { FC, useState, FormEvent } from "react";
import { useTranslation } from "next-i18next";
import { Poppins } from "next/font/google";
import SectionTitle from "@/components/common/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FormStatus } from "@/types";
import styles from "./Contacts.module.scss";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const Contacts: FC = () => {
  const { t } = useTranslation("contacts");
  const [status, setStatus] = useState<FormStatus>("idle");
  const { ref: formRef, isVisible: formVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: socialRef, isVisible: socialVisible } =
    useScrollAnimation<HTMLDivElement>({ delay: 100 });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contacts"
      className={`${styles.contacts} ${poppins.className}`}
    >
      <SectionTitle>{t("sectionTitle")}</SectionTitle>
      <div className={styles.content}>
        <div
          ref={formRef}
          className={`${styles.formWrapper} ${formVisible ? "is-visible" : ""}`}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                {t("form.nameLabel")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.input}
                placeholder={t("form.namePlaceholder")}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                {t("form.emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.input}
                placeholder={t("form.emailPlaceholder")}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                {t("form.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                placeholder={t("form.messagePlaceholder")}
                rows={5}
              />
            </div>
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? t("form.submitting") : t("form.submitButton")}
            </button>
            {status === "success" && (
              <div className={`${styles.statusMessage} ${styles.success}`}>
                {t("form.successMessage")}
              </div>
            )}
            {status === "error" && (
              <div className={`${styles.statusMessage} ${styles.error}`}>
                {t("form.errorMessage")}
              </div>
            )}
          </form>
        </div>
        <div
          ref={socialRef}
          className={`${styles.socialWrapper} ${socialVisible ? "is-visible" : ""}`}
        >
          <h3 className={styles.socialTitle}>{t("social.title")}</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/matteo-guidetti-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              <div className={styles.socialInfo}>
                <span className={styles.socialLabel}>{t("social.linkedin")}</span>
                <span className={styles.socialValue}>Matteo Guidetti</span>
              </div>
            </a>
            <a
              href="https://github.com/MatteoGuidetti00"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div className={styles.socialInfo}>
                <span className={styles.socialLabel}>{t("social.github")}</span>
                <span className={styles.socialValue}>@MatteoGuidetti00</span>
              </div>
            </a>
            <a
              href="mailto:matteo.guidetti2000@gmail.com"
              className={styles.socialLink}
            >
              <svg
                className={styles.socialIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div className={styles.socialInfo}>
                <span className={styles.socialLabel}>{t("social.email")}</span>
                <span className={styles.socialValue}>matteo.guidetti2000@gmail.com</span>
              </div>
            </a>
          </div>
          <div className={styles.location}>
            <svg
              className={styles.locationIcon}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className={styles.socialInfo}>
              <span className={styles.socialLabel}>{t("social.location")}</span>
              <span className={styles.socialValue}>Italy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
