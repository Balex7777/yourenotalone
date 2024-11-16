import styles from "./Questions.module.css";
import Question from "../Question/Question";
import Pin from "../Pin/Pin";
import Line from "../Line/Line";

export default function Questions() {
  return (
    <section id="questions">
      <h2 className={styles.title}>
        С КАКИМИ ВОПРОСАМИ МОЖНО ОБРАТИТЬСЯ К ПСИХОЛОГУ
      </h2>
      <div className={styles.flexBox} style={{}}>
        <Line dot="" />
        <div className={styles.hiddenHr + " " + styles.questionsB}></div>
      </div>
      <div className={styles.inner}>
        <Pin link="src/img/pins/image-no-bg-preview10.png" alt="cat" num={6} />
        <p>
          Обращение к психологу является важным и целесообразным шагом для
          поддержания психического здоровья и благополучия. Психологическое
          консультирование и терапия играют существенную роль в решении широкого
          спектра психологических проблем и эмоциональных трудностей.
        </p>
        <div className={styles.questions}>
          <div>
            <Question
              title="ЭМОЦИОНАЛЬНОЕ БЛАГОПОЛУЧИЕ"
              text="Работа над эмоциональным состоянием, управление стрессом,
                тревогой, депрессией, повышение самооценки и самосознания."
            />
            <Question
              title="Межличностные отношения"
              text="Улучшение коммуникации, разрешение конфликтов, укрепление
                отношений, работа над социальными навыками, управление гневом и
                агрессией."
            />
            <Question
              title="Саморазвитие"
              text="Работа над личным ростом, самоопределением, достижением целей,
                улучшение мотивации, развитие навыков принятия решений."
            />
            <Question
              title="Семейные вопросы"
              text="Работа над отношениями в семье, совместное воспитание детей,
                предотвращение развода, проблемы родительства, детские травмы."
            />
            <Question
              title="Здоровый образ жизни"
              text="Помощь в установлении здоровых привычек, управление весом,
                улучшение физического и психического благополучия."
            />
            <div className={styles.note}>
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
            </div>
          </div>
          <img src="src/img/Rectangle18.png" className={styles.photo}></img>
        </div>
      </div>
    </section>
  );
}
