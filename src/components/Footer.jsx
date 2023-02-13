import React from 'react';
import styles from '../styles/Footer.module.css';

import { VscSourceControl, VscError, VscWarning, VscCheckAll, VscBellDot } from 'react-icons/vsc';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.item}>
          <VscSourceControl fontSize={14} />
          main
        </span>
        <span className={styles.item}>
          <VscError fontSize={16} />0
        </span>
        <span className={styles.item}>
          <VscWarning fontSize={16} />0
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.item}>© 2022 - JungwonCode (IMJOne)</span>
        <span className={styles.item}>
          <VscCheckAll fontSize={16} />
          Prettier
        </span>
        <span className={styles.item}>
          <VscBellDot fontSize={16} />
        </span>
      </div>
    </footer>
  );
}
