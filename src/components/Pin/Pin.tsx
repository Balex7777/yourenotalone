import styles from "./Pin.module.css";

interface IPinProps {
  link: string;
  num: number;
  alt: string;
}

export default function Pin({ link, num, alt }: IPinProps) {
  return (
    <img
      src={link}
      className={`${styles.pin} ${styles[`p${num}`]}`}
      alt={alt}
    />
  );
}
