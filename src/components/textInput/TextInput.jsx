import styles from "./TextInput.module.scss";

export default function TextInput({
  value,
  onChange,
  placeholder,
  shortLeftStyle = false,
  shortRightStyle = false,
  icon = null,
  type,
}) {
  const handleChange = (event) => {
    let inputValue = event.target.value;

    if (/^0\d+/.test(inputValue)) {
      inputValue = inputValue.replace(/^0+/, "");
    }

    const numericValue = inputValue === "" ? "" : Number(inputValue);

    onChange(numericValue);
  };
  const cleanedValue = (value || "").toString().replace(/^0+(\d+)/, "$1");

  return (
    <div className={styles.wrapper}>
      {icon && <span className={styles.inputIcon}>{icon}</span>}
      <input
        className={`${styles.textInput} ${
          shortLeftStyle ? styles.shortLeft : ""
        } ${shortRightStyle ? styles.shortRight : ""}`}
        type={type}
        value={cleanedValue}
        onChange={handleChange}
        placeholder={placeholder}
        name="textInput"
      />
    </div>
  );
}
