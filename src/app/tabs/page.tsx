import React from "react";
import { Container } from "@/components/shared";
import { Tabs, Title } from "@/components/ui";
import { frameworks } from "./data";

import styles from "./tabs.module.scss";

const Page: React.FC = () => {
  return (
    <main>
      <section className={styles.tabs}>
        <Container>
          <Title className={styles.tabsTitle}>Табы</Title>
          <Tabs className={styles.tabsContent} list={frameworks} />
        </Container>
      </section>
    </main>
  );
};

export default Page;
