import { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import BurgerIcon from "../../assets/icons/BurgerIcon";
import HeaderNavigation from "../headerNavigation/HeaderNavigation";

export default function BurgerMenu({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.burgerToggleBtn}
          aria-label="Open or close burger menu"
        >
          <BurgerIcon />
        </button>
        <a href="/" className={styles.burgerLogo}>
          Finder
        </a>
      </div>
      {isOpen && (
        <div className={styles.navMenu}>
          <HeaderNavigation navItems={navItems} variant={"mobile"} />
        </div>
      )}
    </div>
  );
}
