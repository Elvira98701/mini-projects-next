import { Metadata } from "next";
import { Container } from "@/components/shared";
import { Calendar, Clock, Title } from "@/components/ui";

import styles from "./calendar.module.scss";

export const metadata: Metadata = {
  title: "Calendar",
};

const Page: React.FC = () => {
  return (
    <main>
      <section className={styles.calendar}>
        <Container>
          <Title className={styles.calendarTitle}>Календарь + Часы</Title>
          <div className={styles.calendarContent}>
            <div className={styles.calendarBody}>
              <Calendar />
            </div>
            <Clock />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Page;
