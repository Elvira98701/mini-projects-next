import React from "react";

interface Props {
  className?: string;
}

export const Checkbox: React.FC<Props> = ({ className }) => {
  return <div className={className}>Checkbox</div>;
};
