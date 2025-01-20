import React from "react";

interface CardsWrapperProps {
  className?: string;
}

export const CardsWrapper: React.FC<CardsWrapperProps> = ({ className }) => {
  return <div className={className}>CardsWrapper</div>;
};
