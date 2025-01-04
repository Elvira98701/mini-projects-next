import React from "react";
import Link from "next/link";
import { Container } from "@/components/shared";
import { DarkModeButton } from "@/components/ui";

import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Link className={styles.headerLogo} href="/">
            <svg
              className={styles.headerIcon}
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="40"
              height="40"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="currentColor"
                d="M38.2 34.6L64 32l-25.8-2.6l16.4-20l-20 16.4L32 0l-2.6 25.8l-20-16.4l16.4 20L0 32l25.8 2.6l-16.4 20l20-16.4L32 64l2.6-25.8l20 16.4z"
              ></path>
            </svg>
            Главная
          </Link>
          <DarkModeButton />
        </div>
      </Container>
    </header>
  );
};
