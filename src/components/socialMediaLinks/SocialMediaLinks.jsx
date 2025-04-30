import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/icons/social-media-links/FacebookIcon";
import InstagramIcon from "../../assets/icons/social-media-links/InstagramIcon";
import XIcon from "../../assets/icons/social-media-links/XIcon";
import styles from "./SocialMediaLinks.module.scss";

const socialMediaIconsData = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/",
    ariaLabel: "Go to Instagram",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/",
    ariaLabel: "Go to Facebook",
  },
  {
    icon: <XIcon />,
    href: "https://x.com/",
    ariaLabel: "Go to X(twitter)",
  },
];

export default function SocialMediaLinks() {
  return (
    <ul className={styles.linksWrap}>
      {socialMediaIconsData.map((item, idx) => (
        <SocialMediaLink
          key={idx}
          icon={item.icon}
          href={item.href}
          ariaLabel={item.ariaLabel}
        />
      ))}
    </ul>
  );
}

function SocialMediaLink({ icon, href, ariaLabel }) {
  return (
    <li className={styles.iconButton}>
      <Link to={href} aria-label={ariaLabel}>
        {icon}
      </Link>
    </li>
  );
}
