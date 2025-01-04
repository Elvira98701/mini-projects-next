import React from "react";
import { Container } from "@/components/shared";
import { Navigation, Title } from "@/components/ui";

import styles from "./home.module.scss";

const Page: React.FC = () => {
  return (
    <main>
      <section className={styles.main}>
        <Container className={styles.mainInner}>
          <Navigation className={styles.mainNavigation} />
          <div className={styles.mainTitles}>
            <Title>Мини проекты</Title>
            <h2 className={styles.mainSubtitle}>TypeScript, React</h2>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Page;
