import clsx from "clsx";

import styles from "./title.module.scss";

interface TitleProps {
  className?: string;
}

export const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({
  className,
  children,
}) => {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>;
};
