import React from "react";

interface Props {
  className?: string;
}

export const Dropdown: React.FC<Props> = ({ className }) => {
  return <div className={className}>Dropdown</div>;
};
