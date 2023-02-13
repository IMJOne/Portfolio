import React from 'react';
import styles from '../styles/Navbar.module.css';

import { Link, useLocation } from 'react-router-dom';
import { menu } from '../util/menu';

export default function Navbar() {
  const location = new useLocation();
  const pathName = location.pathname;

  return (
    <nav className={styles.navbar}>
      {menu.map(({ Icon, path, text }, index) => (
        <Link className={`${styles.item} ${pathName === path && styles.active}`} key={index} to={path}>
          <Icon width={18} height={18} />
          <span className={styles.name}>{text}</span>
        </Link>
      ))}
    </nav>
  );
}
