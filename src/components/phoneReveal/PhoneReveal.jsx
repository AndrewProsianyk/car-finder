import { useState } from "react";
import styles from "./PhoneReveal.module.scss";

export default function PhoneReveal({ phoneNumber }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const maskedNumber = phoneNumber.replace(/(\d{3})\d+(?=\d{2}$)/, "$1*****");
  return (
    <button
      onClick={() => setIsRevealed(true)}
      aria-label="Reveal phone number"
      className={styles.revealNumberBtn}
    >
      <span className={styles.btnLabel}>
        {isRevealed ? phoneNumber : maskedNumber + " - reveal"}
      </span>
    </button>
  );
}
