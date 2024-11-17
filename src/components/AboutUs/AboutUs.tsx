import { motion } from "framer-motion";
import { MAuthor } from "../Author/Author";
import { Line } from "../Line/Line";
import { Pin } from "../Pin/Pin";
import styles from "./AboutUs.module.css";
import { downToUp, leftToRight } from "../../scripts/animations";
import photo1 from "../../assets/pins/download_image_1716228810755-no-bg-preview.png";
import photo2 from "../../assets/pins/image-no-bg-preview5.png";
import photo3 from "../../assets/photo_2024-05-19_20-43-08.jpg";
import photo4 from "../../assets/photo_2024-05-17_12-39-35.jpg";
import photo5 from "../../assets/photo_2024-05-19_00-11-52.jpg";

export default function AboutUs() {
  const isMobile = window.innerWidth <= 768;

  return (
    <motion.section
      initial="hidden"
      whileInView="visiable"
      viewport={{ amount: isMobile ? 0.1 : 0.4, once: true }}
      id="about-us"
      className={styles.aboutUs}
    >
      <h2 className={styles.title}>О НАС</h2>
      <div className={styles.flexBox} style={{ margin: "-22px 0 50px" }}>
        <Line dot={""} />
      </div>
      <div className={styles.inner}>
        <Pin link={photo1} num={3} alt="plant" />
        <Pin link={photo2} num={4} alt="dragonfly" />
        <motion.p custom={1} variants={leftToRight}>
          В современном мире сфера психологической помощи переживает
          существенные изменения и трансформации, в частности за счет развития
          технологий. Виртуальная психологическая помощь, или удаленная
          психологическая поддержка, становится все более востребованной и
          доступной для людей по всему миру.{" "}
        </motion.p>
        <motion.p custom={2} variants={leftToRight}>
          Мы, студентки 1-го курса Московского Городского Педагогического
          Института, заинтересовались данной темой и решили создать сайт, где
          будут отражены определенные детали, способные помочь человеку, который
          находится в поисках психологической помощи.
        </motion.p>
        <motion.p custom={3} variants={leftToRight}>
          Наш проект «Навигатор психологической помощи Москвы» направлен на
          исследование и продвижение концепции виртуальной психологической
          помощи, а также на создание платформы, где люди , не покидая удобств
          своего дома или офиса, могут получить информацию о сайтах, на которых
          представлены соответствующие психологические источники, их плюсы и
          минусы
        </motion.p>
        <div className={styles.authors}>
          <MAuthor
            custom={4}
            variants={downToUp}
            link={photo3}
            author="Комлева Виктория Андреевна, студентка 1-го курса МГПУ"
          />
          <MAuthor
            custom={5}
            variants={downToUp}
            link={photo4}
            author="Янкова Екатерина Сергеевна, студентка 1-го курса МГПУ"
          />
          <MAuthor
            custom={6}
            variants={downToUp}
            link={photo5}
            author="Саймакова Алёна Сергеевна, студентка 1-го курса МГПУ"
          />
        </div>
      </div>
    </motion.section>
  );
}
