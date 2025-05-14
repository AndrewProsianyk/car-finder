import { useState } from "react";
import MailIcon from "../../assets/icons/MailIcon";
import Button from "../button/Button";
import TextInput from "../textInput/TextInput";
import styles from "./SubscriptionBlock.module.scss";

export default function SubscriptionBlock() {
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log({
      email,
      isAgreed,
    });
  };

  return (
    <div className={styles.subscriptionBlock}>
      <h4 className={styles.title}>
        Email me price drops and new listings for these search results:
      </h4>
      <form className={styles.form}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <TextInput
            placeholder="Your email"
            value={email}
            onChange={setEmail}
            icon={<MailIcon color="#111827" />}
            type={"email"}
          />
          <Button variant="secondary" onClick={handleSubmitForm}>
            Subscribe
          </Button>
        </div>
        <label htmlFor="agreeCheckbox" className={styles.agreementLabel}>
          <input
            type="checkbox"
            name="agreeCheckbox"
            id="agreeCheckbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
          I agree to receive price drop alerts on this vehicle and helpful
          shopping information.
        </label>
      </form>
    </div>
  );
}
