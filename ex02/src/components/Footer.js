import React from 'react';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.f_wrp}>
        <p>&copy; 2023 MOVIE PLUS</p>
        <p>Designed by Jeon Yera</p>
      </div>
    </footer>
  );
};

export default Footer;