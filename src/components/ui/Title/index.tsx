import React from "react";
import clsx from "clsx";
import { TitleProps } from "./types";

import styles from "./title.module.scss";

export const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({
  className,
  children,
}) => {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>;
};
