import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./likeButton.module.scss";

interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive: boolean;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  className,
  isActive,
  ...props
}) => {
  return (
    <button className={clsx(className, styles.button)} {...props}>
      <svg
        style={{ color: isActive ? "red" : "" }}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
      </svg>
    </button>
  );
};
