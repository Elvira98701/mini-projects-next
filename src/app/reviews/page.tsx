import { Metadata } from "next";
import { Container } from "@/components/shared";
import { Title } from "@/components/ui";
import { Filters, ReviewsTable } from "@/components/reviews";
import { titlesList } from "./data";

import styles from "./reviews.module.scss";

export const metadata: Metadata = {
  title: "Reviews",
};

const Page: React.FC = () => {
  return (
    <main>
      <section className={styles.reviews}>
        <Container>
          <header className={styles.reviewsHeader}>
            <Title className={styles.reviewsTitle}>Отзывы</Title>
            <Filters className={styles.reviewsFilters} />
          </header>
          <ReviewsTable titles={titlesList} />
        </Container>
      </section>
    </main>
  );
};

export default Page;
