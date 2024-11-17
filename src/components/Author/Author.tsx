import { motion } from "framer-motion";
import { Line } from "../Line/Line";
import styles from "./Author.module.css";
import { ForwardedRef, forwardRef } from "react";

interface IAuthorProps {
  link: string;
  author: string;
}

export const Author = forwardRef(
  ({ link, author }: IAuthorProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles.author} ref={ref}>
        <img className={styles.photo} src={link} alt={author}></img>
        <p className={styles.description}>{author}</p>
        <Line dot="dot" />
      </div>
    );
  }
);

export const MAuthor = motion(Author);
