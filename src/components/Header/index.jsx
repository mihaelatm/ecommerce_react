import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <div>
        <span className={styles.logo}> House Staff</span>
        <ul className={styles.nav}>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className={styles.presentation}></div>
    </header>
  );
}

export default Header;
