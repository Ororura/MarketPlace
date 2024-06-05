"use client";
import { FC, PropsWithChildren, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NotificationsWidget } from "@/widgets/notifications-widget/ui/NotificationsWidget";

import styles from "./Header.module.css";

const Header: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlerClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="logo" width="90" height="110" priority />
          </div>
          <nav className={styles.navContainer}>
            <ul className={styles.navList}>
              <li>
                <Link className={styles.navLink} href="/">
                  Главная страница
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href="/admin">
                  Админ панель
                </Link>
              </li>
              <li className={styles.navItemWithNotifications}>
                <span className={styles.navLink} onClick={handlerClick}>
                  Уведомления
                </span>
                {isOpen && <NotificationsWidget></NotificationsWidget>}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
    </>
  );
};

export { Header };
