import React from "react";
import clsx from "clsx";
import { InputProps } from "./types";

import styles from "./input.module.scss";

export const Input: React.FC<InputProps> = ({
  className,
  onInputChange,
  ...props
}) => {
  return (
    <input
      className={clsx(styles.input, className)}
      onChange={(e) => onInputChange(e.target.value)}
      {...props}
    />
  );
};
