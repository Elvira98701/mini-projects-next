import React from "react";
import clsx from "clsx";
import { Props } from "./types";

import styles from "./Input.module.scss";

export const Input: React.FC<Props> = ({
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
