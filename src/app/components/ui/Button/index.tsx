import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

interface Props {
  className?: string;
  onClick: () => void;
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
