import React from "react";
import { Container } from "@/components/shared";
import { Accordion, Title } from "@/components/ui";
import { data } from "./data";

import styles from "./accordion.module.scss";

const Page: React.FC = () => {
  return (
    <main className={styles.accordion}>
      <section>
        <Container>
          <Title className={styles.accordionTitle}>Аккордеон</Title>
          <Accordion items={data} />
        </Container>
      </section>
    </main>
  );
};

export default Page;
