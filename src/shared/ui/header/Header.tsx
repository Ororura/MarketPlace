import { FC, ReactNode } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

const Header: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <Image src="/logo.png" alt="logo" width="90" height="110" />
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/">
              Главная страница
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/admin">
              Админ панель
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
};

export { Header };
