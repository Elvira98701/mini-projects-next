import React from "react";

interface ClockProps {
  className?: string;
}

export const Clock: React.FC<ClockProps> = ({ className }) => {
  return <div className={className}>Clock2</div>;
};
