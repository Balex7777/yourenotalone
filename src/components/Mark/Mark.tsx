import { ForwardedRef, forwardRef } from "react";
import { sourceMark } from "../../data/sources";
import styles from "./Mark.module.css";
import { motion } from "framer-motion";

interface IMarkProps {
  mark: sourceMark;
  type: string;
}

export const Mark = forwardRef(
  ({ mark, type }: IMarkProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <div className={styles.mark}>
          {type === "plus" ? (
            <svg
              style={{ position: "absolute", top: 5, width: 21 }}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10.5"
                x2="10.5"
                y2="21"
                stroke="#424530"
                stroke-width="3"
              />
              <line
                y1="10.5"
                x2="21"
                y2="10.5"
                stroke="#424530"
                stroke-width="3"
              />
            </svg>
          ) : (
            <svg
              style={{ position: "absolute", top: 5, width: 21 }}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="10.5"
                x2="21"
                y2="10.5"
                stroke="#424530"
                stroke-width="3"
              />
            </svg>
          )}
          <p className={styles.text}>{mark.text}</p>
        </div>
        <ul>
          {mark.list && mark.list.map((el, i) => <li key={i}>{el.point}</li>)}
        </ul>
      </div>
    );
  }
);

export const MMark = motion(Mark);
