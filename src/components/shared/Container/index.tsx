import React from "react";
import clsx from "clsx";
import { ContainerProps } from "./types";

import styles from "./container.module.scss";

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
