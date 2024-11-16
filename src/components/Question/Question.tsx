import { useState } from "react";
import Line from "../Line/Line";
import styles from "./Question.module.css";
import { motion } from "framer-motion";

interface IQuestionProps {
  title: string;
  text: string;
}

const variants = {
  open: { height: 180, opacity: 1 },
  closed: { height: 70, opacity: 1 },
};

export default function Question({ title, text }: IQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={false}
        transition={{
          duration: 0.1,
        }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={styles.question}
      >
        <button
          className={styles.button}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {title}
        </button>
        <svg
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9393 21.0743C11.5251 21.6601 12.4749 21.6601 13.0607 21.0743L22.6066 11.5283C23.1924 10.9426 23.1924 9.99281 22.6066 9.40702C22.0208 8.82124 21.0711 8.82124 20.4853 9.40702L12 17.8923L3.51472 9.40702C2.92893 8.82124 1.97919 8.82124 1.3934 9.40702C0.807611 9.99281 0.807611 10.9426 1.3934 11.5283L10.9393 21.0743ZM10.5 0L10.5 20.0136H13.5L13.5 0L10.5 0Z"
            fill="#424530"
          />
        </svg>
        <p className={styles.text}>{text}</p>
      </motion.div>
      <Line dot="dot" />
    </>
  );
}