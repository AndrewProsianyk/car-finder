import { useEffect, useState } from "react";
import styles from "./GoToTopButton.module.scss";
import SelectArrowDownIcon from "../../../assets/icons/SelectArrowDownIcon";

export default function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      className={styles.goToTop}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <div className={styles.iconWrap}>
        <SelectArrowDownIcon color="#fff" />
      </div>
    </button>
  );
}
