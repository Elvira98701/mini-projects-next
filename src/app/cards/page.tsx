import { Metadata } from "next";
import { Container } from "@/components/shared";
import { Title } from "@/components/ui";
import { CardsWrapper, FavouritesLink } from "@/components/cards";
import { nftCards } from "./data";

import styles from "./cards.module.scss";

export const metadata: Metadata = {
  title: "Cards",
};

const Page: React.FC = () => {
  return (
    <main className={styles.cards}>
      <section>
        <Container>
          <header className={styles.cardsHeader}>
            <Title className={styles.cardsTitle}>Карточки</Title>
            <FavouritesLink />
          </header>
          <CardsWrapper cardsList={nftCards} />
        </Container>
      </section>
    </main>
  );
};

export default Page;
