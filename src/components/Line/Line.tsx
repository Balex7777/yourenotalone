import { ForwardedRef, forwardRef } from "react";
import styles from "./Line.module.css";
import { motion } from "framer-motion";

interface ILineProps {
  dot: string;
}

export const Line = forwardRef(
  ({ dot }: ILineProps, ref: ForwardedRef<HTMLHRElement>) => {
    return (
      <>
        {dot != "dot" ? (
          <hr ref={ref} className={styles.hr} />
        ) : (
          <hr ref={ref} className={styles.hr + " " + styles.dot} />
        )}
      </>
    );
  }
);

export const MLine = motion(Line);
