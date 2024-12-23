import React from "react";
import clsx from "clsx";
import { Props } from "./types";

import styles from "./Container.module.scss";

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
