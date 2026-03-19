import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          u-Kama
        </Link>
        <div className={styles.links}>
          <Link href="/reading" className={styles.link}>
            Reading
          </Link>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
