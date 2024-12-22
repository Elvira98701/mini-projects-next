import React from "react";
import { Container } from "@/app/components/shared";
import { Navigation, Title } from "@/app/components/ui";

import styles from "./Home.module.scss";

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
