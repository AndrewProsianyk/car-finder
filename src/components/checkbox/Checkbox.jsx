import styles from "./Checkbox.module.scss";

export default function CheckBox({ label, checked, onChange }) {
  return (
    <label className={styles.label}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.icon}></span>
      <span className={styles.text}>{label}</span>
    </label>
  );
}
