import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Navigation from "@/components/common/Navigation";
import MobileNavFab from "@/components/common/MobileNavFab";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contacts from "@/components/sections/Contacts";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const { t } = useTranslation("metadata");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#100c1c" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("ogDescription")} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://matteoguidetti.dev" />
        <meta property="og:site_name" content="Matteo Guidetti Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("title")} />
        <meta name="twitter:description" content={t("ogDescription")} />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Additional SEO */}
        <meta name="author" content="Matteo Guidetti" />
        <meta name="keywords" content={t("keywords")} />
        <link rel="canonical" href="https://matteoguidetti.dev" />
      </Head>
      <LanguageSwitcher variant="desktop" />
      <Navigation />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <Footer />
      <BackToTop />
      <MobileNavFab />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "common",
      "hero",
      "about",
      "skills",
      "experience",
      "projects",
      "contacts",
      "cv",
      "metadata",
    ])),
  },
});
