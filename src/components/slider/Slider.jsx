import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";

export default function Slider({ data, cardWidth, children }) {
  const [totalDataItems, setTotalDataItems] = useState(0);

  useEffect(() => {
    if (!data) return;
    setTotalDataItems(data.length);
  });

  return (
    <div className={styles.sliderWrapper}>
      {data?.map((item, idx) => {
        return (
          <div
            key={idx}
            className={styles.sliderCard}
            style={{ width: cardWidth }}
          >
            {children(item)}
          </div>
        );
      })}
    </div>
  );
}
