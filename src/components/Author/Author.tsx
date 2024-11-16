import Line from "../Line/Line";
import styles from "./Author.module.css";

interface IAuthorProps {
  link: string;
  author: string;
}

export default function Author({ link, author }: IAuthorProps) {
  return (
    <div className={styles.author}>
      <img className={styles.photo} src={link} alt={author}></img>
      <p className={styles.description}>{author}</p>
      <Line dot="dot" />
    </div>
  );
}
