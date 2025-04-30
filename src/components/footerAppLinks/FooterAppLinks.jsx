import StoreButtons from "../storeButtons/StoreButtons";
import styles from "./FooterAppLinks.module.scss";

export default function FooterAppLinks() {
  return (
    <div className={styles.appLinksWrap}>
      <h3 className={styles.title}>Download our app</h3>
      <p className={styles.text}>
        Download Finder App and join the community of car enthusiasts.
      </p>
      <StoreButtons />
    </div>
  );
}
