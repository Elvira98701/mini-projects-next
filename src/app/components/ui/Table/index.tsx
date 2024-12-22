import React from "react";

interface Props {
  className?: string;
}

export const Table: React.FC<Props> = ({ className }) => {
  return <div className={className}>Table</div>;
};
