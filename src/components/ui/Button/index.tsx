import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

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
