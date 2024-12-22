import React from "react";

interface Props {
  className?: string;
}

export const Accordion: React.FC<Props> = ({ className }) => {
  return <div className={className}>Accordion</div>;
};
