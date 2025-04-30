import clsx from "clsx";
import styles from "./FeaturesList.module.scss";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";

export default function FeaturesList({ data, variant = null }) {
  const isMobile = useCheckScreenWidth();
  return (
    <ul
      className={clsx(styles.list, {
        [styles.listGrid]: isMobile,
      })}
    >
      {data?.map((item, idx) => {
        return (
          <FeaturesListItem
            icon={item.icon}
            text={item.text}
            key={idx}
            variant={variant}
          />
        );
      })}
    </ul>
  );
}

function FeaturesListItem({ icon, text, variant }) {
  return (
    <li className={clsx(styles.item, styles[variant])}>
      {icon}
      <p className={clsx(styles.itemText, styles[variant])}>{text}</p>
    </li>
  );
}
