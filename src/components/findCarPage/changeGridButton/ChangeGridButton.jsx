import styles from "./ChangeGridButton.module.scss";
import GridListButtonIcon from "../../../assets/icons/GridListButtonIcon";
import GridButtonIcon from "../../../assets/icons/GridButtonIcon";

export default function ChangeGridButton({ isGrid, toggleGrid }) {
  return (
    <button
      className={styles.changeGridBtn}
      onClick={toggleGrid}
      aria-label="Change list display"
    >
      {isGrid ? <GridListButtonIcon /> : <GridButtonIcon />}
    </button>
  );
}
