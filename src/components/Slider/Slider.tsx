import { Carousel, ConfigProvider } from "antd";
import styles from "./Slider.module.css";
import slide1 from "../../assets/download_image_1714643894809.png";
import slide2 from "../../assets/download_image_1714643122790.png";
import slide3 from "../../assets/photo_2024-04-03_21-25-34.jpg";
import slide4 from "../../assets/download_image_1714644000945.png";
import slide5 from "../../assets/photo_2024-04-03_21-25-41.jpg";

export default function Slider() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 50,
            dotOffset: -30,
          },
        },
      }}
    >
      <Carousel
        dots={{
          className: styles.customDots,
        }}
        className={styles.slider}
        arrows
        draggable={true}
        infinite={true}
        prevArrow={
          <svg
            width="26"
            height="46"
            viewBox="0 0 26 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.972696 20.8787C-0.198877 22.0503 -0.198877 23.9497 0.972696 25.1213L20.0646 44.2132C21.2362 45.3848 23.1356 45.3848 24.3072 44.2132C25.4788 43.0416 25.4788 41.1421 24.3072 39.9706L7.33666 23L24.3072 6.02944C25.4788 4.85786 25.4788 2.95837 24.3072 1.7868C23.1356 0.615223 21.2362 0.615223 20.0646 1.7868L0.972696 20.8787ZM3.09412 20H3.09402L3.09402 26H3.09412L3.09412 20Z"
              fill="#424530"
            />
          </svg>
        }
        nextArrow={
          <svg
            width="26"
            height="46"
            viewBox="0 0 26 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.1214 25.1213C26.293 23.9497 26.293 22.0503 25.1214 20.8787L6.02954 1.7868C4.85796 0.615223 2.95847 0.615223 1.7869 1.7868C0.615324 2.95837 0.615324 4.85786 1.7869 6.02944L18.7575 23L1.7869 39.9706C0.615324 41.1421 0.615324 43.0416 1.7869 44.2132C2.95847 45.3848 4.85796 45.3848 6.02954 44.2132L25.1214 25.1213ZM23 26H23.0001V20H23V26Z"
              fill="#424530"
            />
          </svg>
        }
      >
        <img src={slide1} alt="slide1" className={styles.slide}></img>
        <img src={slide2} alt="slide2" className={styles.slide}></img>
        <img src={slide3} alt="slide3" className={styles.slide}></img>
        <img src={slide4} alt="slide4" className={styles.slide}></img>
        <img src={slide5} alt="slide5" className={styles.slide}></img>
      </Carousel>
    </ConfigProvider>
  );
}
