import CrossIcon from "../../../assets/icons/CrossIcon";
import styles from "./CloseFiltersButton.module.scss";

export default function CloseFiltersButton({ onClose }) {
  return (
    <button className={styles.closeFiltersBtn} onClick={() => onClose()}>
      <CrossIcon />
    </button>
  );
}
