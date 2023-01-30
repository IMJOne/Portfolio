import React from 'react';
import styles from '../styles/Header.module.css';

import VscodeIcon from '../icons/VscodeIcon';
import MinIcon from '../icons/MinIcon';
import ExpandIcon from '../icons/ExpandIcon';
import CloseIcon from '../icons/CloseIcon';

export default function Header() {
  const menuList = [
    // prettier-ignore
    '파일(F)',
    '편집(E)',
    '선택 영역(S)',
    '보기(V)',
    '이동(G)',
    '실행(R)',
    '터미널(T)',
    '도움말(H)',
  ];

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <VscodeIcon />
        <ul className={styles.menu}>
          {menuList.map((item, index) => (
            <li className={styles.item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.title}>Visual Jungwon Code</div>
      <div className={styles.right}>
        <button className={styles.icon}>
          <MinIcon />
        </button>
        <button className={styles.icon}>
          <ExpandIcon />
        </button>
        <button className={styles.icon}>
          <CloseIcon />
        </button>
      </div>
    </header>
  );
}
