import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="NextLevel Food" />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
