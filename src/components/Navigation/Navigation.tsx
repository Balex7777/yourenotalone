import Line from "../Line/Line";
import Pin from "../Pin/Pin";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <section>
      <h1 className={styles.title}>НАВИГАТОР ПСИХОЛОГИЧЕСКОЙ ПОМОЩИ МОСКВЫ</h1>
      <div className={styles.flexBox} style={{ marginTop: -32 }}>
        <Line dot={""} />
        <div className={styles.hiddenHr}></div>
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
          <div
            className={styles.flexBox}
            style={{ marginTop: -23, padding: "0 20px" }}
          >
            <Line dot={""} />
            <div
              className={styles.hiddenHr}
              style={{ minWidth: 270, backgroundColor: "white" }}
            ></div>
          </div>
          <nav>
            <li>
              <p className={styles.counter}>01</p>
              <hr className={styles.navHr} />
              <a href="#about-us" title="О нас">
                О нас
              </a>
            </li>
            <li>
              <p className={styles.counter}>02</p>
              <hr className={styles.navHr} />
              <a
                href="#psychology"
                title="Что такое психология и что она изучает"
              >
                Что такое психология и что она изучает
              </a>
            </li>
            <li>
              <p className={styles.counter}>03</p>
              <hr className={styles.navHr} />
              <a
                href="#questions"
                title="С какими вопросами можно обратиться к психологу"
              >
                С какими вопросами можно обратиться к психологу
              </a>
            </li>
            <li>
              <p className={styles.counter}>04</p>
              <hr className={styles.navHr} />
              <a href="#source" title="Источники психологической помощи">
                Источники психологической помощи
              </a>
            </li>
          </nav>
        </div>
        <img src="src/img/image4.png" className={styles.photo} alt="cat"></img>
      </div>
    </section>
  );
}
