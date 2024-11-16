import Line from "../Line/Line";
import Slider from "../Slider/Slider";
import styles from "./SliderSection.module.css";

export default function SliderSection() {
  return (
    <section>
      <h2 className={styles.title}>советы, которые могут вам помочь</h2>
      <div className={styles.flexBox}>
        <Line dot="" />
        <div className={styles.hiddenHr}></div>
      </div>
      <div className={styles.inner}>
        <Slider />
      </div>
    </section>
  );
}
