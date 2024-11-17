import styles from "./Questions.module.css";
import { MQuestion } from "../Question/Question";
import Pin from "../Pin/Pin";
import { Line } from "../Line/Line";
import { motion } from "framer-motion";
import { leftToRight, rightToLeft } from "../../scripts/animations";

export default function Questions() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visiable"
      viewport={{ amount: 0.3, once: true }}
      id="questions"
    >
      <h2 className={styles.title}>
        С КАКИМИ ВОПРОСАМИ МОЖНО ОБРАТИТЬСЯ К ПСИХОЛОГУ
      </h2>
      <div className={styles.flexBox} style={{}}>
        <Line dot="" />
        <div className={styles.hiddenHr + " " + styles.questionsB}></div>
      </div>
      <div className={styles.inner}>
        <Pin link="src/img/pins/image-no-bg-preview10.png" alt="cat" num={6} />
        <motion.p custom={1} variants={leftToRight}>
          Обращение к психологу является важным и целесообразным шагом для
          поддержания психического здоровья и благополучия. Психологическое
          консультирование и терапия играют существенную роль в решении широкого
          спектра психологических проблем и эмоциональных трудностей.
        </motion.p>
        <div className={styles.questions}>
          <div>
            <MQuestion
              custom={2}
              variants={leftToRight}
              title="ЭМОЦИОНАЛЬНОЕ БЛАГОПОЛУЧИЕ"
              text="Работа над эмоциональным состоянием, управление стрессом,
                тревогой, депрессией, повышение самооценки и самосознания."
            />
            <MQuestion
              custom={3}
              variants={leftToRight}
              title="Межличностные отношения"
              text="Улучшение коммуникации, разрешение конфликтов, укрепление
                отношений, работа над социальными навыками, управление гневом и
                агрессией."
            />
            <MQuestion
              custom={4}
              variants={leftToRight}
              title="Саморазвитие"
              text="Работа над личным ростом, самоопределением, достижением целей,
                улучшение мотивации, развитие навыков принятия решений."
            />
            <MQuestion
              custom={5}
              variants={leftToRight}
              title="Семейные вопросы"
              text="Работа над отношениями в семье, совместное воспитание детей,
                предотвращение развода, проблемы родительства, детские травмы."
            />
            <MQuestion
              custom={6}
              variants={leftToRight}
              title="Здоровый образ жизни"
              text="Помощь в установлении здоровых привычек, управление весом,
                улучшение физического и психического благополучия."
            />
            <motion.div
              className={styles.note}
              custom={7}
              variants={leftToRight}
            >
              <span className={styles.exclamationMark}>!</span>
              <p className={styles.noteText}>
                Психолог — не врач, поэтому не ставит диагнозы, он смотрит на
                проблему со стороны и замечает нюансы, которые давно не видит
                сам человек, пребывая внутри конфликтной ситуации или проблемы.
              </p>
              <Pin
                link="src/img/pins/download_image_1714635988610-transformed.png"
                alt="bow"
                num={7}
              />
            </motion.div>
          </div>
          <motion.img
            custom={2}
            variants={rightToLeft}
            src="src/img/Rectangle18.png"
            className={styles.photo}
          ></motion.img>
        </div>
      </div>
    </motion.section>
  );
}
