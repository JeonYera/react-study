import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">MOVIE COLLECTION</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
