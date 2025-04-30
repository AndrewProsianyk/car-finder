import { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import BurgerIcon from "../../assets/icons/BurgerIcon";
import HeaderNavigation from "../headerNavigation/HeaderNavigation";

export default function BurgerMenu({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.burgerToggleBtn}
        aria-label="Open or close burger menu"
      >
        <BurgerIcon />
        <span className={styles.burgerLogo}>Finder</span>
      </button>
      {isOpen && (
        <div className={styles.navMenu}>
          <HeaderNavigation navItems={navItems} variant={"mobile"} />
        </div>
      )}
    </div>
  );
}
