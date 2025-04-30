import clsx from "clsx";
import styles from "./CarTags.module.scss";
import VerificationIcon from "../../assets/icons/VerificationIcon";

export default function CarTags({ condition, verified }) {
  const isVerified = verified ? "Verified" : null;
  const bgColor = condition === "Used" ? "#fc9231" : "#f03d3d";
  return (
    <ul className={styles.tagsWrap}>
      <CarTagItem text={condition} variant="condition" bgColor={bgColor} />
      {isVerified && <CarTagItem text={isVerified} variant="verification" />}
    </ul>
  );
}

function CarTagItem({ text, variant, bgColor }) {
  return (
    <li
      className={clsx(styles.tagItem, styles[variant])}
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      <span className={styles.tagItemText}>{text}</span>
      {variant === "verification" && <VerificationIcon />}
    </li>
  );
}
