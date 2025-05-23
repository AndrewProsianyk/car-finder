import styles from "./Breadcrumbs.module.scss";
import breadcrumbsMap from "../../lib/breadcrumbsMap";

import { Link, useLocation } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight";
import clsx from "clsx";

export default function Breadcrumbs() {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter(Boolean);
    const breadcrumbs = [];

    pathnames.forEach((_, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = breadcrumbsMap[`/${pathnames[0]}`] || pathnames[index];

      breadcrumbs.push({
        label,
        href: path,
        isLast: index === pathnames.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav style={{ marginTop: "24px", marginBottom: "24px" }}>
      <ul className={styles.navList}>
        <li className={styles.crumb}>
          <Link to="/">Home</Link>
          <span className={styles.iconWrap}>
            <ArrowRight color="#333D4C" />
          </span>
        </li>
        {breadcrumbs.map((crumb) =>
          crumb.isLast ? (
            <li className={clsx(styles.crumb, styles.active)} key={crumb.href}>
              {crumb.label}
            </li>
          ) : (
            <li className={styles.crumb} key={crumb.href}>
              <Link to={crumb.href}>{crumb.label}</Link>
              <span className={styles.iconWrap}>
                <ArrowRight color="#333D4C" />
              </span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
