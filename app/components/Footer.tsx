import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.mark}>u-Kama</span>
        <span className={styles.line}>
          Ecological economic architecture
        </span>
        <span className={styles.copyright}>
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
