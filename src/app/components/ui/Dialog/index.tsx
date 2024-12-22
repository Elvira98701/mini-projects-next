import React from "react";

interface Props {
  className?: string;
}

export const Dialog: React.FC<Props> = ({ className }) => {
  return <div className={className}>Dialog</div>;
};
