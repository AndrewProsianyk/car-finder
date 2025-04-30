import { useState } from "react";
import styles from "./Accordeon.module.scss";
import SelectArrowDownIcon from "../../assets/icons/SelectArrowDownIcon";
import clsx from "clsx";

export default function Accordeon({ title, children, theme = "dark" }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <div
      className={clsx(styles.accordeon, {
        [styles.dark]: isDark,
        [styles.light]: !isDark,
      })}
    >
      <div className={styles.titleWrap} onClick={() => setIsOpen(!isOpen)}>
        <h3
          className={clsx(styles.title, {
            [styles.titleDark]: isDark,
            [styles.titleLight]: !isDark,
          })}
        >
          {title}
        </h3>
        <span className={clsx(styles.iconWrap, { [styles.rotate]: isOpen })}>
          <SelectArrowDownIcon color={isDark ? "#fff" : "#333D4C"} />
        </span>
      </div>

      <div
        className={clsx(styles.content, {
          [styles.contentOpen]: isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
}
