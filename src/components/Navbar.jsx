import React from 'react';
import styles from '../styles/Navbar.module.css';

import { Link } from 'react-router-dom';
import { files } from '../util/files';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {files.map(({ Icon, path, text }, index) => (
        <Link className={styles.tab} key={index} to={path}>
          <Icon />
          <span className={styles.name}>{text}</span>
        </Link>
      ))}
    </nav>
  );
}
