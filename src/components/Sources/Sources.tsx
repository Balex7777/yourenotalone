import Source from "../Source/Source";
import styles from "./Sources.module.css";
import { sources } from "../../data/sources";
import Line from "../Line/Line";

export default function Sources() {
  return (
    <section id="source">
      <h2 className={styles.title}>Источники психологической помощи</h2>
      <div className={styles.flexBox}>
        <Line dot="" />
        <div className={styles.hiddenHr}></div>
      </div>
      <div className={styles.inner}>
        {sources.map((source, i) => (
          <Source source={source} key={i} />
        ))}
      </div>
    </section>
  );
}
