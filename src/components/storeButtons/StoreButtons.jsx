import styles from "./StoreButtons.module.scss";
import AppStoreIcon from "../../assets/icons/AppStoreIcon";
import GooglePlayIcon from "../../assets/icons/GooglePlayIcon";
import { Link } from "react-router-dom";

const storeButtonsList = [
  {
    icon: <AppStoreIcon />,
    href: "/appstore",
    text: "App Store",
  },
  {
    icon: <GooglePlayIcon />,
    href: "/playmarket",
    text: "Google Play",
  },
];

export default function StoreButtons() {
  return (
    <div className={styles.buttonsWrap}>
      {storeButtonsList.map((item, idx) => (
        <StoreButton
          key={idx}
          icon={item.icon}
          text={item.text}
          href={item.href}
        />
      ))}
    </div>
  );
}

function StoreButton({ icon, text, href }) {
  return (
    <Link to={href} className={styles.linkButton}>
      {icon} <span>{text}</span>
    </Link>
  );
}
