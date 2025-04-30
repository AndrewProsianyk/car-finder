import styles from "./HeaderLogo.module.scss";
import LogoIcon from "../../assets/icons/LogoIcon";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Go to home page">
      <LogoIcon />
      <span className={styles.logoTitle}>Finder</span>
    </Link>
  );
}
