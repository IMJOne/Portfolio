import React from 'react';
import styles from '../styles/Explorer.module.css';

import ArrowIcon from '../icons/ArrowIcon';
import { files } from '../util/files';
import { Link } from 'react-router-dom';

export default function Explorer() {
  return (
    <div className={styles.explorer}>
      <div className={styles.title}>탐색기</div>
      <div className={styles.workspace}>
        <ArrowIcon />
        Portfolio
      </div>
      <div>
        {files.map(({ Icon, path, text }, index) => (
          <Link className={styles.file} key={index} to={path}>
            <Icon />
            <span className={styles.name}>{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
