import { InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <label className={clsx(styles.container, className)}>
      <input className={styles.checkbox} type="checkbox" {...props} />
      <div className={styles.checkmark}></div>
    </label>
  );
};
