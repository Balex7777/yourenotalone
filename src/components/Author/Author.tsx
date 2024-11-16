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
      <hr className={styles.dot} />
    </div>
  );
}
