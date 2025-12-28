import React, { FC, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./MobileNavFab.module.scss";

const navigationItems = [
  { key: "home", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" },
  { key: "about", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
  { key: "skills", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
  { key: "experience", icon: "M2 7h20v14H2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" },
  { key: "projects", icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" },
  { key: "contacts", icon: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6" },
];

const MobileNavFab: FC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Track client-side mount for portal
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close menu on route/locale change
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  // Show FAB after initial scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Update active section
      const scrollPosition = scrollY + window.innerHeight / 3;
      const keys = navigationItems.map((item) => item.key);

      for (let i = keys.length - 1; i >= 0; i--) {
        const section = document.getElementById(keys[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(keys[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.container}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavClick = useCallback((key: string) => {
    setIsOpen(false);
    // Small delay to allow menu close animation
    setTimeout(() => {
      const element = document.getElementById(key);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, []);

  const toggleMenu = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  // Backdrop rendered via portal to avoid transform containment issue
  const backdrop = isMounted ? createPortal(
    <div
      className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
      onClick={() => setIsOpen(false)}
    />,
    document.body
  ) : null;

  return (
    <>
      {backdrop}
      <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        {/* Navigation items */}
      <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
        {/* Language Switcher inside menu */}
        <div className={`${styles.langSwitcher} ${isOpen ? styles.langSwitcherVisible : ""}`}>
          <LanguageSwitcher variant="mobile" />
        </div>

        {navigationItems.map((item, index) => (
          <button
            key={item.key}
            className={`${styles.menuItem} ${activeSection === item.key ? styles.active : ""}`}
            style={{ "--index": index } as React.CSSProperties}
            onClick={() => handleNavClick(item.key)}
            aria-label={t(`nav.${item.key}`)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={item.icon} />
            </svg>
            <span className={styles.label}>{t(`nav.${item.key}`)}</span>
          </button>
        ))}
      </nav>

      {/* FAB trigger */}
      <button
        className={`${styles.fab} ${isOpen ? styles.fabOpen : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        <span className={styles.fabInner}>
          <span className={styles.fabIcon}>
            <span className={styles.fabLine} />
            <span className={styles.fabLine} />
            <span className={styles.fabLine} />
          </span>
        </span>
        <span className={styles.fabGlow} />
        <span className={styles.fabRing} />
      </button>
      </div>
    </>
  );
};

export default MobileNavFab;
