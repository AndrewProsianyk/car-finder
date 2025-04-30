import clsx from "clsx";
import styles from "./Container.module.scss";

export default function Container({ children, noPadding = false }) {
  return (
    <div className={clsx(styles.container, noPadding && styles.noPadding)}>
      {children}
    </div>
  );
}
