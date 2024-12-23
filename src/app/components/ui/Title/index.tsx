import React from "react";
import clsx from "clsx";
import { Props } from "./types";

import styles from "./Title.module.scss";

export const Title: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>;
};
