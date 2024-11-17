import { motion } from "framer-motion";
import { Line } from "../Line/Line";
import { Pin } from "../Pin/Pin";
import styles from "./Navigation.module.css";
import { leftToRight } from "../../scripts/animations";

export default function Navigation() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visiable"
      viewport={{ amount: 0.4, once: true }}
    >
      <h1 className={styles.title}>НАВИГАТОР ПСИХОЛОГИЧЕСКОЙ ПОМОЩИ МОСКВЫ</h1>
      <div style={{ marginTop: -60 }}>
        <Line dot={""} />
      </div>
      <div className={styles.inner}>
        <Pin
          link="src/img/pins/download_image_1716228728646-no-bg-preview.png"
          num={1}
          alt="lamp"
        />
        <Pin
          link="src/img/pins/download_image_1716228835730-no-bg-preview.png"
          num={2}
          alt="plant in basket"
        />

        <div className={styles.navigationBg}>
          <h2 className={styles.content}>СОДЕРЖАНИЕ</h2>
          <div className={styles.flexBox}>
            <Line dot={""} />
          </div>
          <nav>
            <motion.li custom={1} variants={leftToRight}>
              <p className={styles.counter}>01</p>
              <hr className={styles.navHr} />
              <a href="#about-us" title="О нас">
                О нас
              </a>
            </motion.li>
            <motion.li custom={2} variants={leftToRight}>
              <p className={styles.counter}>02</p>
              <hr className={styles.navHr} />
              <a
                href="#psychology"
                title="Что такое психология и что она изучает"
              >
                Что такое психология и что она изучает
              </a>
            </motion.li>
            <motion.li custom={3} variants={leftToRight}>
              <p className={styles.counter}>03</p>
              <hr className={styles.navHr} />
              <a
                href="#questions"
                title="С какими вопросами можно обратиться к психологу"
              >
                С какими вопросами можно обратиться к психологу
              </a>
            </motion.li>
            <motion.li custom={4} variants={leftToRight}>
              <p className={styles.counter}>04</p>
              <hr className={styles.navHr} />
              <a href="#source" title="Источники психологической помощи">
                Источники психологической помощи
              </a>
            </motion.li>
          </nav>
        </div>
        <img src="src/img/image4.png" className={styles.photo} alt="cat"></img>
      </div>
    </motion.section>
  );
}
