import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.text} style={{ fontWeight: 900 }}>
            Контакты:
          </p>
          <a className={styles.link} href="mailto:komlevava103@mgpu.ru">
            komlevava103@mgpu.ru{" "}
          </a>
          <a className={styles.link} href="mailto:komlevava103@mgpu.ru">
            yankovaes213@mgpu.ru{" "}
          </a>
          <a className={styles.link} href="mailto:komlevava103@mgpu.ru">
            SaimakovaAS824@mgpu.ru
          </a>{" "}
        </div>
        <p>© МГПУ, 2024. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      </div>
    </footer>
  );
}
