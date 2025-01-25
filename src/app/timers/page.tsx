import { Metadata } from "next";
import { Container } from "@/components/shared";
import { Title } from "@/components/ui";
import { TimersWrapper } from "@/components/timer";

import styles from "./timers.module.scss";

export const metadata: Metadata = {
  title: "Timers",
};

const Page: React.FC = () => {
  return (
    <main>
      <section className={styles.timers}>
        <Container>
          <Title className={styles.timersTitle}>Таймеры</Title>
          <TimersWrapper />
        </Container>
      </section>
    </main>
  );
};

export default Page;
