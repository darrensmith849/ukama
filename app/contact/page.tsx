import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — u-Kama",
  description:
    "Contact u-Kama for architecture, governance, and research inquiries.",
};

export default function Contact() {
  return (
    <>
      <Nav />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.kicker}>Contact</p>
            <h1 className={styles.title}>Serious inquiry and collaboration.</h1>
            <p className={styles.lead}>
              For architecture, governance, or research collaboration regarding
              u-Kama, use the contact channel below.
            </p>

            <div className={styles.actions}>
              <a href="mailto:hello@ukama.org" className={styles.primaryAction}>
                hello@ukama.org
              </a>
              <Link href="/reading" className={styles.secondaryAction}>
                Read Canonical Architecture
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
