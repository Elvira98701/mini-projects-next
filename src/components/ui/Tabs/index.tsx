import React from "react";

interface Props {
  className?: string;
}

export const Tabs: React.FC<Props> = ({ className }) => {
  return <div className={className}>Tabs</div>;
};
