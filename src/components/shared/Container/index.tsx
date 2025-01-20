import clsx from "clsx";

import styles from "./container.module.scss";

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
