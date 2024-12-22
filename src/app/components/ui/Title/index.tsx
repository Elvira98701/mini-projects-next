import React from "react";
import clsx from "clsx";

import styles from "./Title.module.scss";

interface Props {
  className?: string;
}

export const Title: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>;
};
