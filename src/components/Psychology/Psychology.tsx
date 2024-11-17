import { motion } from "framer-motion";
import { Line } from "../Line/Line";
import { Pin } from "../Pin/Pin";
import styles from "./Psychology.module.css";
import { leftToRight, rightToLeft } from "../../scripts/animations";
import photo1 from "../../assets/pins/download_image_1716228878524-no-bg-preview.png";
import photo2 from "../../assets/Rectangle17.png";

export default function Psychology() {
  const isMobile = window.innerWidth <= 768 || window.innerHeight <= 600;

  return (
    <motion.section
      initial="hidden"
      whileInView="visiable"
      viewport={{ amount: isMobile ? 0.2 : 0.3, once: true }}
      id="psychology"
    >
      <h2 className={styles.title}>ЧТО ТАКОЕ ПСИХОЛОГИЯ И ЧТО ОНА ИЗУЧАЕТ</h2>
      <div className={styles.flexBox}>
        <Line dot={""} />
      </div>
      <div className={styles.inner}>
        <Pin link={photo1} num={5} alt="lamp" />

        <div className={styles.psychology}>
          <motion.img
            custom={1}
            variants={leftToRight}
            src={photo2}
            alt="psychology"
            className={styles.photo}
          ></motion.img>
          <div>
            <motion.p custom={1} variants={rightToLeft}>
              <b>Психология</b> — это наука, которая изучает психику человека на
              основе взаимодействия людей с окружающей средой.{" "}
            </motion.p>
            <motion.p custom={2} variants={rightToLeft}>
              В поле внимания психологии попадают межличностные отношения,
              реакции на те или иные события в жизни индивида или группы людей,
              последствия взаимодействия с объектами окружающей среды и т.д.
              Говоря простыми словами, психология изучает все, что заставляет
              человека мыслить и испытывать эмоции.
            </motion.p>
            <motion.p custom={3} variants={rightToLeft}>
              В настоящее время психология — многоотраслевая наука, которая
              включает в себя общие фундаментальные и прикладные направления.
              Это означает, что психология строится на общих принципах и
              понятиях, но внутри каждого направления есть свои особенности,
              требующие дополнительного изучения.
            </motion.p>
            <motion.p custom={4} variants={rightToLeft}>
              Объектом психологии выступает сам человек во всем разнообразии его
              взаимодействий с внешней средой. Сам по себе человек является
              объектом изучения других наук, например, анатомии. Однако объект
              изучения психологии сильно отличается от объекта анатомии. Поэтому
              важно подчеркнуть роль психических явлений в определении объекта.
              Взаимоотношения людей в группах, поведение, деятельность — это все
              можно отнести к психическим явлениям и, соответственно, к объекту
              изучения психологии.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
