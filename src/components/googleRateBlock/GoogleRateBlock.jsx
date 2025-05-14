import GoogleIcon from "../../assets/icons/GoogleIcon";
import StarIcon from "../../assets/icons/StarIcon";
import styles from "./GoogleRateBlock.module.scss";

const rateItems = [
  {
    icon: <GoogleIcon />,
    text: "Google",
  },
  {
    icon: <StarIcon />,
    text: "4.9",
  },
];

export default function GoogleRateBlock() {
  return (
    <div className={styles.rate}>
      {rateItems.map((item, idx) => {
        return (
          <div className={styles.rateBlock} key={idx}>
            <span className={styles.iconWrap}>{item.icon}</span>
            <span className={styles.rateText}>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}
