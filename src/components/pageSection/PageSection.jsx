import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import styles from "./PageSection.module.scss";

export default function PageSection({
  children,
  title,
  buttons = null,
  style,
  noPadding,
}) {
  return (
    <section className={styles.section}>
      <Container noPadding={noPadding}>
        <div className={styles.sectionTopContent} style={style}>
          <SectionTitle title={title} />
          {buttons}
        </div>
        {children}
      </Container>
    </section>
  );
}
