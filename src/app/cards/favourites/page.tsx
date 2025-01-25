import Link from "next/link";
import { Metadata } from "next";
import { FavouritesLink, FavouritesList } from "@/components/cards";
import { Container } from "@/components/shared";
import { Title } from "@/components/ui";
import { pageConfig } from "@/helpers/pages.config";

import styles from "./favourites.module.scss";

export const metadata: Metadata = {
  title: "Favourites",
};

const Page: React.FC = () => {
  return (
    <main>
      <section className={styles.favourites}>
        <Container>
          <header className={styles.favouritesHeader}>
            <Link className={styles.favouritesLink} href={pageConfig.cards}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
              </svg>
              <span>Назад</span>
            </Link>
            <Title>Избранное</Title>
            <FavouritesLink />
          </header>
          <FavouritesList />
        </Container>
      </section>
    </main>
  );
};

export default Page;
