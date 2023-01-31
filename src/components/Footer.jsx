import React from 'react';
import styles from '../styles/Footer.module.css';

import BranchIcon from '../icons/BranchIcon';
import WarningIcon from '../icons/WarningIcon';
import ErrorIcon from '../icons/ErrorIcon';
import PrettierIcon from '../icons/PrettierIcon';
import NoticeIcon from '../icons/NoticeIcon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.item}>
          <BranchIcon />
          main
        </span>
        <span className={styles.item}>
          <WarningIcon />0
        </span>
        <span className={styles.item}>
          <ErrorIcon />0
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.item}>© 2022 - JungwonCode (IMJOne)</span>
        <span className={styles.item}>
          <PrettierIcon />
          Prettier
        </span>
        <span className={styles.item}>
          <NoticeIcon />
        </span>
      </div>
    </footer>
  );
}
