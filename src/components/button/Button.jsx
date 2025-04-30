import styles from "./Button.module.scss";
import clsx from "clsx";

export default function Button({
  variant = "default",
  children,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  ariaLabel,
}) {
  return (
    <button
      className={clsx(styles.button, styles[variant], {
        [styles.hasIconLeft]: !!iconLeft,
        [styles.hasIconRight]: !!iconRight,
      })}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
}
