import React from "react";

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({ className }) => {
  return <article className={className}>Card</article>;
};
