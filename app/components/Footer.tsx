import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.mark}>u-Kama</div>
        <p className={styles.line}>
          Ecological economic architecture.
        </p>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} u-Kama. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
