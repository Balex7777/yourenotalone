import styles from "./Line.module.css";

interface ILineProps {
  dot: string;
}

export default function Line({ dot }: ILineProps) {
  return (
    <>
      {dot != "dot" ? (
        <hr className={styles.hr} />
      ) : (
        <hr className={styles.hr + " " + styles.dot} />
      )}
    </>
  );
}
