"use client";

import { useGetReviewsQuery } from "@/lib/features/reviews/reviewsApi";
import { Container } from "@/components/shared";
import { Title } from "@/components/ui";
import { titlesList } from "./data";

import styles from "./reviews.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectFilters,
  setPlatfirmFiltered,
  setRatingFiltered,
} from "@/lib/features/reviews/filterSlice";
import { FilterReviews, ReviewsTable } from "@/components/reviews";

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filterPlatform, filterRating } = useAppSelector(selectFilters);
  const { data: reviews } = useGetReviewsQuery();
  const platfromsList = [
    "all",
    ...new Set(reviews?.map((review) => review.platform)),
  ];
  const ratingList = [
    0,
    ...new Set(reviews?.map((review) => review.rating)),
  ].sort((a, b) => a - b);

  const handleClickPlatform = (value: string) => {
    dispatch(setPlatfirmFiltered(value));
  };

  const handleClickRating = (value: number) => {
    dispatch(setRatingFiltered(value));
  };

  return (
    <main>
      <section className={styles.reviews}>
        <Container>
          <div className={styles.reviewsHeader}>
            <Title className={styles.reviewsTitle}>Отзывы</Title>
            <div className={styles.reviewsFilters}>
              <FilterReviews
                filter="по платформе"
                filterList={platfromsList}
                handleClick={handleClickPlatform}
                activeItem={filterPlatform}
              />
              <FilterReviews
                filter="по оценкам"
                filterList={ratingList}
                handleClick={handleClickRating}
                activeItem={filterRating}
              />
            </div>
          </div>
          <ReviewsTable titles={titlesList} />
        </Container>
      </section>
    </main>
  );
};

export default Page;
