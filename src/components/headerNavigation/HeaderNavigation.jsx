import clsx from "clsx";
import NavItem from "../navItem/NavItem";
import styles from "./HeaderNavigation.module.scss";

export default function HeaderNavigation({ navItems, variant = "desktop" }) {
  return (
    <nav className={clsx(styles.navWrapper, styles[variant])}>
      <ul className={clsx(styles.navList, styles[variant])}>
        {navItems.map((item, idx) => (
          <NavItem key={idx} item={item} />
        ))}
      </ul>
    </nav>
  );
}
