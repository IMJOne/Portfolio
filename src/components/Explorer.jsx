import React from 'react';
import styles from '../styles/Explorer.module.css';

import { Link, useLocation } from 'react-router-dom';
import { menu } from '../util/menu';
import ArrowIcon from '../icons/ArrowIcon';

export default function Explorer() {
  const location = new useLocation();
  const pathName = location.pathname;

  return (
    <div className={styles.explorer}>
      <div className={styles.title}>탐색기</div>
      <div className={styles.workspace}>
        <ArrowIcon />
        Portfolio
      </div>
      <div>
        {menu.map(({ Icon, path, text }, index) => (
          <Link className={`${styles.file} ${pathName === path && styles.active}`} key={index} to={path}>
            <Icon />
            <span className={styles.name}>{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
