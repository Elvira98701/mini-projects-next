import React from "react";
import { Container } from "@/app/components/shared";
import { Accordion, Title } from "@/app/components/ui";

import styles from "./Accordion.module.scss";
import { data } from "./data";

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
