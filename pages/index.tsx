import Head from "next/head";
import Navigation from "@/components/common/Navigation";
import MobileNav from "@/components/common/MobileNav";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contacts from "@/components/sections/Contacts";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matteo Guidetti | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-Stack Developer portfolio of Matteo Guidetti. Specializing in React, Next.js, Node.js, and modern web technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#100c1c" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matteo Guidetti | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Full-Stack Developer portfolio specializing in React, Next.js, Node.js, and modern web technologies."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://matteoguidetti.dev" />
        <meta property="og:site_name" content="Matteo Guidetti Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matteo Guidetti | Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Full-Stack Developer portfolio specializing in React, Next.js, Node.js, and modern web technologies."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Additional SEO */}
        <meta name="author" content="Matteo Guidetti" />
        <meta
          name="keywords"
          content="Full-Stack Developer, React, Next.js, Node.js, TypeScript, Web Developer, Frontend, Backend"
        />
        <link rel="canonical" href="https://matteoguidetti.dev" />
      </Head>
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
      <MobileNav />
    </>
  );
}
