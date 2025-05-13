import { Link } from "react-router-dom";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import Accordeon from "../accordeon/Accordeon";
import styles from "./FooterLinksList.module.scss";

export default function FooterLinksList({ data }) {
  const { isMobile } = useCheckScreenWidth();

  if (isMobile) {
    return (
      <div style={{ marginBottom: "36px" }}>
        {data.map((item, idx) => (
          <Accordeon key={idx} title={item.title}>
            <SingleList item={item} />
          </Accordeon>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDireaction: "row",
        width: "100%",
        maxWidth: "740px",
        marginBottom: "64px",
      }}
    >
      {data.map((item, idx) => (
        <div key={idx}>
          <h3 className={styles.title}>{item.title}</h3>
          <SingleList item={item} />
        </div>
      ))}
    </div>
  );
}

function SingleList({ item }) {
  return (
    <ul className={styles.list}>
      {item.links.map((link, idx) => (
        <li key={idx}>
          <Link to={link.href} className={styles.listItem}>
            {link.link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
