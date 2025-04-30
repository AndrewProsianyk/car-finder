import { Link } from "react-router-dom";
import styles from "./NavItem.module.scss";

export default function NavItem({ item }) {
  return (
    <li className={styles.navItem}>
      <Link to={item.href}>{item.label}</Link>
    </li>
  );
}
