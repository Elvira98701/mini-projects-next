"use client";

import {
  selectFilters,
  setSortedBy,
  setSortedOrder,
} from "@/lib/features/reviews/filterSlice";
import { useGetReviewsQuery } from "@/lib/features/reviews/reviewsApi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ITitle } from "@/types";

import styles from "./reviewsTable.module.scss";

interface ReviewsTableProps {
  titles: ITitle[];
}

export const ReviewsTable: React.FC<ReviewsTableProps> = ({ titles }) => {
  const dispatch = useAppDispatch();
  const { data: reviews, isLoading, isError } = useGetReviewsQuery();
  const { sortBy, sortOrder, filterPlatform, filterRating } =
    useAppSelector(selectFilters);

  if (isLoading) return <p className={styles.loading}>Loading...</p>;
  if (isError) return <p>Error loading reviews</p>;

  const filteredPlatfroms =
    filterPlatform !== "all"
      ? reviews?.filter((review) => review.platform === filterPlatform)
      : reviews;
  const filteredRating =
    filterRating !== 0
      ? filteredPlatfroms?.filter((review) => review.rating === filterRating)
      : filteredPlatfroms;

  const sortedReviews = [...filteredRating].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    }
    return a[sortBy] < b[sortBy] ? 1 : -1;
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {titles.map(({ id, title, name }) => (
            <th
              key={id}
              style={{ backgroundColor: name === sortBy ? "#C4E456" : "" }}
            >
              {id === "2" || id === "3" ? (
                <button
                  className={styles.tableButton}
                  onClick={() => {
                    dispatch(setSortedBy(name));
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    style={{
                      transform:
                        sortOrder === "asc" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      dispatch(
                        setSortedOrder(sortOrder === "asc" ? "desc" : "asc")
                      );
                    }}
                  >
                    <path d="M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm125.66-21.66a8,8,0,0,0-11.32,0L192,188.69V112a8,8,0,0,0-16,0v76.69l-26.34-26.35a8,8,0,0,0-11.32,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,229.66,162.34Z"></path>
                  </svg>
                  <span>{title}</span>
                </button>
              ) : (
                title
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedReviews?.map(({ id, date, platform, rating, text }) => (
          <tr key={id}>
            <td>{platform}</td>
            <td>{rating}</td>
            <td>{new Date(date).toLocaleString()}</td>
            <td>{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
