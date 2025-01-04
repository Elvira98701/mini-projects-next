import React from "react";

interface Props {
  className?: string;
}

export const Calendar: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
