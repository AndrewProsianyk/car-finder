import clsx from "clsx";
import styles from "./Pills.module.scss";

const pillsData = [
  { label: "All", value: "all" },
  { label: "New cars", value: "new" },
  { label: "Used cars", value: "used" },
];

export default function Pills({ onChange, selected, variant = "form" }) {
  return (
    <div className={clsx(styles.pillsWrap, styles[variant])}>
      {pillsData.map((item) => (
        <Pill
          value={item.value}
          label={item.label}
          key={item.value}
          onChange={onChange}
          selected={selected}
          variant={variant}
        />
      ))}
    </div>
  );
}

function Pill({ label, value, onChange, selected, variant }) {
  return (
    <label
      className={clsx(
        styles.pill,
        selected === value && styles.active,
        styles[variant]
      )}
    >
      <input
        type="radio"
        name="carType"
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        hidden
      />
      {label}
    </label>
  );
}
