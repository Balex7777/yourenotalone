import { motion } from "framer-motion";
import { source } from "../../data/sources";
import { MLine } from "../Line/Line";
import { MMark } from "../Mark/Mark";
import styles from "./Source.module.css";
import { downToUp, leftToRight, rightToLeft } from "../../scripts/animations";
import { MPin } from "../Pin/Pin";

interface ISourceProps {
  source: source;
  index: number;
}

export default function Source({ source, index }: ISourceProps) {
  const isMobile = window.innerWidth <= 768;
  return (
    <motion.div
      initial="hidden"
      whileInView="visiable"
      viewport={{ amount: isMobile ? 0.1 : 0.5, once: true }}
    >
      <article className={styles.article}>
        <div className={styles.half}>
          <motion.h3
            custom={1}
            variants={leftToRight}
            style={{
              fontSize: source.fontSize,
              lineHeight: source.fontHeight + "px",
              marginBottom: source.fontMargin,
              fontWeight: 600,
            }}
          >
            {source.title}
          </motion.h3>
          <MLine custom={1} variants={leftToRight} dot="dot" />
          {source.info && (
            <motion.div
              custom={2}
              variants={leftToRight}
              className={styles.info}
            >
              <svg
                className={styles.infoIcon}
                width="27"
                height="27"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.62 6.64C13.62 6.96 13.5133 7.22667 13.3 7.44C13.0867 7.65333 12.82 7.76 12.5 7.76C12.2067 7.76 11.96 7.65333 11.76 7.44C11.5733 7.22667 11.48 6.96 11.48 6.64C11.48 6.32 11.58 6.05333 11.78 5.84C11.98 5.62667 12.22 5.52 12.5 5.52C12.82 5.52 13.0867 5.62667 13.3 5.84C13.5133 6.05333 13.62 6.32 13.62 6.64ZM14.56 19.88H10.82V19.22C11.3667 19.22 11.72 19.14 11.88 18.98C12.0133 18.86 12.08 18.64 12.08 18.32V12.56C12.08 12.2667 12.02 12.0667 11.9 11.96C11.7533 11.84 11.4 11.78 10.84 11.78L10.76 11.34L13.3 10.38V18.32C13.3 18.6933 13.36 18.9267 13.48 19.02C13.6533 19.1533 14.0133 19.22 14.56 19.22V19.88Z"
                  fill="#424530"
                />
                <path
                  d="M13.3 7.44L13.6536 7.79355L13.6536 7.79355L13.3 7.44ZM11.76 7.44L11.3837 7.76925L11.3894 7.77571L11.3952 7.78197L11.76 7.44ZM11.78 5.84L11.4152 5.49803L11.4152 5.49803L11.78 5.84ZM13.3 5.84L13.6536 5.48645L13.6536 5.48645L13.3 5.84ZM14.56 19.88V20.38H15.06V19.88H14.56ZM10.82 19.88H10.32V20.38H10.82V19.88ZM10.82 19.22V18.72H10.32V19.22H10.82ZM11.88 18.98L11.5455 18.6084L11.5357 18.6171L11.5264 18.6264L11.88 18.98ZM11.9 11.96L12.2322 11.5863L12.2245 11.5795L12.2166 11.573L11.9 11.96ZM10.84 11.78L10.3481 11.8694L10.4227 12.28H10.84V11.78ZM10.76 11.34L10.5832 10.8723L10.1935 11.0196L10.2681 11.4294L10.76 11.34ZM13.3 10.38H13.8V9.6565L13.1232 9.91229L13.3 10.38ZM13.48 19.02L13.173 19.4147L13.1751 19.4163L13.48 19.02ZM14.56 19.22H15.06V18.72H14.56V19.22ZM13.12 6.64C13.12 6.83632 13.0599 6.97301 12.9464 7.08645L13.6536 7.79355C13.9668 7.48032 14.12 7.08368 14.12 6.64H13.12ZM12.9464 7.08645C12.833 7.19988 12.6963 7.26 12.5 7.26V8.26C12.9437 8.26 13.3403 8.10678 13.6536 7.79355L12.9464 7.08645ZM12.5 7.26C12.3444 7.26 12.2299 7.21018 12.1248 7.09803L11.3952 7.78197C11.6901 8.09649 12.069 8.26 12.5 8.26V7.26ZM12.1363 7.11075C12.0397 7.00038 11.98 6.85557 11.98 6.64H10.98C10.98 7.06443 11.107 7.45295 11.3837 7.76925L12.1363 7.11075ZM11.98 6.64C11.98 6.43398 12.0402 6.29353 12.1448 6.18197L11.4152 5.49803C11.1198 5.81314 10.98 6.20602 10.98 6.64H11.98ZM12.1448 6.18197C12.255 6.06442 12.365 6.02 12.5 6.02V5.02C12.075 5.02 11.705 5.18891 11.4152 5.49803L12.1448 6.18197ZM12.5 6.02C12.6963 6.02 12.833 6.08012 12.9464 6.19355L13.6536 5.48645C13.3403 5.17321 12.9437 5.02 12.5 5.02V6.02ZM12.9464 6.19355C13.0599 6.30699 13.12 6.44368 13.12 6.64H14.12C14.12 6.19632 13.9668 5.79968 13.6536 5.48645L12.9464 6.19355ZM14.56 19.38H10.82V20.38H14.56V19.38ZM11.32 19.88V19.22H10.32V19.88H11.32ZM10.82 19.72C11.1137 19.72 11.3792 19.6989 11.6054 19.6477C11.8239 19.5982 12.0579 19.5092 12.2336 19.3336L11.5264 18.6264C11.5421 18.6108 11.5195 18.6418 11.3846 18.6723C11.2575 18.7011 11.0729 18.72 10.82 18.72V19.72ZM12.2145 19.3516C12.5112 19.0846 12.58 18.6782 12.58 18.32H11.58C11.58 18.4486 11.5662 18.5314 11.5515 18.58C11.5373 18.6269 11.5278 18.6243 11.5455 18.6084L12.2145 19.3516ZM12.58 18.32V12.56H11.58V18.32H12.58ZM12.58 12.56C12.58 12.2329 12.5197 11.8419 12.2322 11.5863L11.5678 12.3337C11.5406 12.3095 11.5449 12.2963 11.5561 12.3337C11.5677 12.3725 11.58 12.444 11.58 12.56H12.58ZM12.2166 11.573C12.0394 11.428 11.8071 11.3657 11.6087 11.3321C11.3935 11.2955 11.1343 11.28 10.84 11.28V12.28C11.1057 12.28 11.3031 12.2945 11.4413 12.3179C11.5962 12.3443 11.6139 12.372 11.5834 12.347L12.2166 11.573ZM11.3319 11.6906L11.2519 11.2506L10.2681 11.4294L10.3481 11.8694L11.3319 11.6906ZM10.9368 11.8077L13.4768 10.8477L13.1232 9.91229L10.5832 10.8723L10.9368 11.8077ZM12.8 10.38V18.32H13.8V10.38H12.8ZM12.8 18.32C12.8 18.5284 12.8162 18.7263 12.8608 18.8995C12.9033 19.0649 12.9877 19.2705 13.173 19.4147L13.787 18.6253C13.8523 18.6762 13.8467 18.7184 13.8292 18.6505C13.8138 18.5903 13.8 18.485 13.8 18.32H12.8ZM13.1751 19.4163C13.3533 19.5534 13.5771 19.6224 13.789 19.6616C14.0098 19.7025 14.2695 19.72 14.56 19.72V18.72C14.3038 18.72 14.1102 18.7041 13.971 18.6784C13.8229 18.6509 13.78 18.62 13.7849 18.6237L13.1751 19.4163ZM14.06 19.22V19.88H15.06V19.22H14.06Z"
                  fill="#424530"
                />
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="11.5"
                  stroke="#424530"
                  stroke-width="2"
                />
              </svg>
              <p className={styles.infoText}>{source.info}</p>
            </motion.div>
          )}
          <motion.span
            custom={2}
            variants={leftToRight}
            className={styles.bold}
          >
            Кто создал:
          </motion.span>
          <motion.p custom={2} variants={leftToRight} className={styles.text}>
            {source.creator}
          </motion.p>
          <motion.span
            custom={3}
            variants={leftToRight}
            className={styles.bold}
          >
            Кто может обратиться:
          </motion.span>
          <motion.p custom={3} variants={leftToRight} className={styles.text}>
            {source.target}
          </motion.p>
          <motion.a
            custom={4}
            variants={leftToRight}
            href={source.link}
            target="_blank"
            className={styles.link}
          >
            перейти на сайт
          </motion.a>
          <MPin
            custom={5}
            variants={leftToRight}
            link={`src/${source.img}`}
            num={8}
            alt="plant"
          />
        </div>
        <div className={styles.half}>
          {source.pluses.map((plus, i) => (
            <MMark
              custom={i + 1}
              variants={rightToLeft}
              mark={plus}
              type="plus"
              key={i}
            />
          ))}
          <div className={styles.space}></div>
          {source.minuses.map((minus, i) => (
            <MMark
              custom={i + source.pluses.length + 1}
              variants={rightToLeft}
              mark={minus}
              type="minus"
              key={i}
            />
          ))}
        </div>
      </article>
      {index != 5 ? (
        <motion.hr
          className={styles.hr}
          custom={source.minuses.length + source.pluses.length + 1}
          variants={downToUp}
        />
      ) : (
        <></>
      )}
    </motion.div>
  );
}
