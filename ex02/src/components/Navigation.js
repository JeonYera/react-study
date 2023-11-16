import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navTitle} to="/">
            MOVIE PLUS
          </Link>
        </li>
      </ul>
      <ul className={styles.navAuth}>
        <li className={styles.navAuthItem}>
          <Link to="/Login">Login</Link>
        </li>
      <li className={styles.navAuthItem}>
        <Link to="/SignUp">Sign Up</Link>
      </li>
      </ul>
    </nav>
  );
};

export default Navigation;
