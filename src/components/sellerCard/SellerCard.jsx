import MailIcon from "../../assets/icons/MailIcon";
import StarIcon from "../../assets/icons/StarIcon";
import Button from "../button/Button";
import PhoneReveal from "../phoneReveal/PhoneReveal";
import styles from "./SellerCard.module.scss";

export default function SellerCard() {
  return (
    <div className={styles.sellerCard}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <div className={styles.sellerPhoto}>
          <img
            src="/images/avatar.png"
            alt="Seller"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div>
          <span className={styles.sellersName}>Darrell Steward</span>
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <StarIcon /> <span>4.9</span>{" "}
            <span className={styles.reviews}>(5 reviews)</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PhoneReveal phoneNumber={"+380732215084"} />
        <Button iconLeft={<MailIcon />}>Send email</Button>
      </div>
    </div>
  );
}
