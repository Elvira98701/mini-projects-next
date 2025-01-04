import React from "react";

interface Props {
  className?: string;
}

export const Pagination: React.FC<Props> = ({ className }) => {
  return <div className={className}>Pagination</div>;
};
