import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./checkbox.module.scss";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={clsx(styles.checkbox, className)}
      {...props}
    />
  );
};

// export const Checkbox = ({
//   className,
//   ...props
// }: React.ComponentProps<"input">) => {
//   return (
//     <input
//       type="checkbox"
//       className={clsx(styles.checkbox, className)}
//       {...props}
//     />
//   );
// };
