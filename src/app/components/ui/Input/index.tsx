import React from "react";
import clsx from "clsx";

import styles from "./Input.module.scss";

interface Props {
  className?: string;
  type?: string;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  className,
  type = "text",
  onChange,
  onKeyDown,
  value,
  placeholder,
}) => {
  return (
    <input
      className={clsx(styles.input, className)}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
    />
  );
};
