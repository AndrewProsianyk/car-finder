import PlusIcon from "../../assets/icons/PlusIcon";
import UserIcon from "../../assets/icons/UserIcon";
import SunIcon from "../../assets/icons/SunIcon";

import Button from "../button/Button";
import Container from "../container/Container";

import styles from "./Header.module.scss";
import HeaderNavigation from "../headerNavigation/HeaderNavigation";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import HeaderLogo from "../headerLogo/HeaderLogo";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Cars",
    href: "/find",
  },

  {
    label: "Online appraisal",
    href: "/appraisal",
  },
  {
    label: "Dealers",
    href: "/dealers",
  },
  {
    label: "Contact",
    href: "/contacts",
  },
];

export default function Header() {
  const isMobile = useCheckScreenWidth();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          {isMobile ? (
            <BurgerMenu navItems={navItems} />
          ) : (
            <>
              <HeaderLogo />
              <HeaderNavigation navItems={navItems} />
            </>
          )}

          <div className={styles.headerTools}>
            <button
              className={styles.themeToggleBtn}
              aria-label="Change page theme"
            >
              <SunIcon />
            </button>
            <Link to="/profile" aria-label="User profile">
              <UserIcon />
            </Link>
            <Button iconLeft={<PlusIcon />}>Sell Car</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
