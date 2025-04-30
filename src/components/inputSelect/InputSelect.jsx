import { useState, useRef, useEffect } from "react";
import styles from "./InputSelect.module.scss";
import SelectArrowDownIcon from "../../assets/icons/SelectArrowDownIcon";

export default function InputSelect({
  placeholder = "Select an option",
  options,
  value,
  onChange,
  icon = null,
  disabled = false,
  shortLeftStyle = false,
  shortRightStyle = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef();

  const handleSelect = (option) => {
    onChange?.(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // console.log(value);

  return (
    <div className={styles.wrapper} ref={selectRef}>
      <button
        className={`${styles.inputSelect} ${isOpen ? styles.active : ""} ${
          shortLeftStyle ? styles.shortLeft : ""
        } ${shortRightStyle ? styles.shortRight : ""}`}
        onClick={() => {
          if (!disabled) setIsOpen((prev) => !prev);
        }}
        type="button"
        disabled={disabled}
        aria-label="Open options list"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {icon && (
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {icon}
            </span>
          )}
          <span className={!value ? styles.placeholder : ""}>
            {value ? value.label : placeholder}
          </span>
        </div>
        <SelectArrowDownIcon size={14} className={styles.icon} />
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt)}
              className={styles.option}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
