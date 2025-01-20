import clsx from "clsx";
import Link from "next/link";
import { data } from "./data";

import styles from "./navigation.module.scss";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={clsx(styles.nav, className)}>
      <ul className={styles.navList}>
        {data.map(({ id, title, link }) => (
          <li key={id}>
            <Link className={styles.navLink} href={link}>
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
