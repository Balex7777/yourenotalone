import Author from "../Author/Author";
import Line from "../Line/Line";
import Pin from "../Pin/Pin";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <h2 className={styles.title}>О НАС</h2>
      <div className={styles.flexBox} style={{ margin: "-22px 0 50px" }}>
        <Line dot={""} />
        <div className={styles.hiddenHr} style={{ minWidth: 170 }}></div>
      </div>
      <div className={styles.inner}>
        <Pin
          link="src/img/pins/download_image_1716228810755-no-bg-preview.png"
          num={3}
          alt="plant"
        />
        <Pin
          link="src/img/pins/image-no-bg-preview5.png"
          num={4}
          alt="dragonfly"
        />
        <p>
          В современном мире сфера психологической помощи переживает
          существенные изменения и трансформации, в частности за счет развития
          технологий. Виртуальная психологическая помощь, или удаленная
          психологическая поддержка, становится все более востребованной и
          доступной для людей по всему миру.{" "}
        </p>
        <p>
          Мы, студентки 1-го курса Московского Городского Педагогического
          Института, заинтересовались данной темой и решили создать сайт, где
          будут отражены определенные детали, способные помочь человеку, который
          находится в поисках психологической помощи.
        </p>
        <p>
          Наш проект «Навигатор психологической помощи Москвы» направлен на
          исследование и продвижение концепции виртуальной психологической
          помощи, а также на создание платформы, где люди , не покидая удобств
          своего дома или офиса, могут получить информацию о сайтах, на которых
          представлены соответствующие психологические источники, их плюсы и
          минусы
        </p>
        <div className={styles.authors}>
          <Author
            link="src/img/photo_2024-05-19_20-43-08.jpg"
            author="Комлева Виктория Андреевна, студентка 1-го курса МГПУ"
          />
          <Author
            link="src/img/photo_2024-05-17_12-39-35.jpg"
            author="Янкова Екатерина Сергеевна, студентка 1-го курса МГПУ"
          />
          <Author
            link="src/img/photo_2024-05-19_00-11-52.jpg"
            author="Саймакова Алёна Сергеевна, студентка 1-го курса МГПУ"
          />
        </div>
      </div>
    </section>
  );
}
