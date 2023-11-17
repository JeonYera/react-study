import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

const Navigation = ({ onLoginClick }) => {
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
          {/* 클릭 시 onLoginClick 함수 호출 */}
          <button onClick={(e) => onLoginClick(e)}>Login</button>
        </li>
        <li className={styles.navAuthItem}>
          <Link to="/SignUp">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;