import styles from "./BodyTypesSection.module.scss";

import PageSection from "../pageSection/PageSection";
import BodyTypeList from "../bodyTypeList/BodyTypeList";
import ViewAllLink from "../viewAllLink/ViewAllLink";
import bodyTypesListData from "../../lib/bodyTypesListData";

export default function BodyTypesSection() {
  return (
    <div className={styles.bodyTypesSection}>
      <PageSection title="Popular car body types" buttons={<ViewAllLink />}>
        <BodyTypeList data={bodyTypesListData} />
      </PageSection>
    </div>
  );
}
