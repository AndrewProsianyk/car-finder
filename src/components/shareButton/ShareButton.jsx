import ShareIcon from "../../assets/icons/ShareIcon";
import styles from "./ShareButton.module.scss";

export default function ShareButton() {
  return (
    <button className={styles.shareButtoon} aria-label="Share">
      <ShareIcon />
    </button>
  );
}
