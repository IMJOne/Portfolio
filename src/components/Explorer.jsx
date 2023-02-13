import React from 'react';
import styles from '../styles/Explorer.module.css';

import { Link, useLocation } from 'react-router-dom';
import { VscChevronDown } from 'react-icons/vsc';
import { menu } from '../util/menu';

export default function Explorer() {
  const location = new useLocation();
  const pathName = location.pathname;

  return (
    <div className={styles.explorer}>
      <div className={styles.title}>탐색기</div>
      <div className={styles.workspace}>
        <VscChevronDown fontSize={18} />
        Portfolio
      </div>
      <div>
        {menu.map(({ Icon, path, text }, index) => (
          <Link className={`${styles.file} ${pathName === path && styles.active}`} key={index} to={path}>
            <Icon width={18} height={18} />
            <span className={styles.name}>{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
