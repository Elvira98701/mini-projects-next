import React from "react";
import clsx from "clsx";
import { ButtonProps } from "./types";

import styles from "./Button.module.scss";

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      <span>{children}</span>
    </button>
  );
};
