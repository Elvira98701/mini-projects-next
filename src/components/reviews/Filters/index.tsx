"use client";

import {
  selectFilters,
  setPlatfirmFiltered,
  setRatingFiltered,
} from "@/lib/features/reviews/filterSlice";
import { useGetReviewsQuery } from "@/lib/features/reviews/reviewsApi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { FilterReviews } from "../FilterReviews";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
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

  const handleClickPlatform = (value: string | number) => {
    if (typeof value === "string") {
      dispatch(setPlatfirmFiltered(value));
    }
  };

  const handleClickRating = (value: string | number) => {
    if (typeof value === "number") {
      dispatch(setRatingFiltered(value));
    }
  };

  return (
    <div className={className}>
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
  );
};
