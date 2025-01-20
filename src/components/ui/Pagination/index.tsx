import React from "react";

interface PaginationProps {
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({ className }) => {
  return <div className={className}>Pagination</div>;
};
