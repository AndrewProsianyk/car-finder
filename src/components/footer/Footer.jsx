import styles from "./Footer.module.scss";

import Container from "../container/Container";
import { featuresIcons } from "../../assets/icons/features/featuresIcons";
import FeaturesList from "../featuresList/FeaturesList";
import FooterLinksList from "../footerLinksList/FooterLinksList";
import StoreButtons from "../storeButtons/StoreButtons";
import FooterAppLinks from "../footerAppLinks/FooterAppLinks";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";
import Copyright from "../copyright/Copyright";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";

const featuresData = [
  {
    icon: <featuresIcons.CopyIcon color="#E0E5EB" />,
    text: "Over 1 million listings",
  },
  {
    icon: <featuresIcons.DocumentSearchIcon color="#E0E5EB" />,
    text: "Personalized search",
  },
  {
    icon: <featuresIcons.CarIcon color="#E0E5EB" />,
    text: "Online car appraisal",
  },
  {
    icon: <featuresIcons.LightBulbIcon color="#E0E5EB" />,
    text: "Non-stop innovation",
  },
];

const footerLinksListsData = [
  {
    title: "Buying & selling",
    links: [
      {
        link: "Find a car",
        href: "/find",
      },
      {
        link: "Sell your car",
        href: "/sell",
      },
      {
        link: "Car dealers",
        href: "/dealers",
      },
      {
        link: "Compare cars",
        href: "/comparing",
      },
      {
        link: "Online car appraisal",
        href: "/appraisal",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        link: "About Finder",
        href: "/about",
      },
      {
        link: "Contact us",
        href: "/contact",
      },
      {
        link: "FAQs & support",
        href: "/support",
      },
      {
        link: "Mobile app",
        href: "/mobile-app",
      },
      {
        link: "Blog & news",
        href: "/news",
      },
    ],
  },
  {
    title: "Profile",
    links: [
      {
        link: "My account",
        href: "/account",
      },
      {
        link: "Wishlist",
        href: "/wishlist",
      },
      {
        link: "Car dealers",
        href: "/dealers",
      },
      {
        link: "My listings",
        href: "/my-listings",
      },
      {
        link: "Add listings",
        href: "/add-listings",
      },
    ],
  },
];

export default function Footer() {
  const isMobile = useCheckScreenWidth();

  return (
    <footer className={styles.footer}>
      <Container>
        <FeaturesList data={featuresData} variant="row" />
        <div className={styles.line}></div>
        <div
          style={
            !isMobile
              ? { display: "flex", justifyContent: "space-between" }
              : {}
          }
        >
          <FooterLinksList data={footerLinksListsData} />
          <FooterAppLinks />
        </div>
        <div
          style={
            !isMobile
              ? {
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }
              : { display: "flex", flexDirection: "column", gap: "24px" }
          }
        >
          <SocialMediaLinks />
          <Copyright />
        </div>
      </Container>
    </footer>
  );
}
