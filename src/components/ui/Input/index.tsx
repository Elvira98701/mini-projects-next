import { InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onInputChange: (value: string) => void;
}

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
