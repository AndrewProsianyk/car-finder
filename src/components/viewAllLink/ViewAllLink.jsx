import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight";
import styles from "./ViewAllLink.module.scss";

export default function ViewAllLink() {
  return (
    <Link to="/find" className={styles.sectionLink}>
      <span>View all </span>
      <ArrowRight color="#111827" />
    </Link>
  );
}
