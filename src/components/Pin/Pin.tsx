import { ForwardedRef, forwardRef } from "react";
import styles from "./Pin.module.css";
import { motion } from "framer-motion";

interface IPinProps {
  link: string;
  num: number;
  alt: string;
}

export const Pin = forwardRef(
  ({ link, num, alt }: IPinProps, ref: ForwardedRef<HTMLImageElement>) => {
    return (
      <img
        ref={ref}
        src={link}
        className={`${styles.pin} ${styles[`p${num}`]}`}
        alt={alt}
      />
    );
  }
);

export const MPin = motion(Pin);
