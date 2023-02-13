import React from 'react';
import styles from '../styles/Header.module.css';

import VscodeIcon from '../icons/VscodeIcon';
import { VscChromeMinimize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc';

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
        <VscodeIcon width={20} height={20} />
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
        <VscChromeMinimize fill="#adb5bd" fontSize={18} />
        <VscChromeRestore fill="#adb5bd" fontSize={16} />
        <VscChromeClose fill="#adb5bd" fontSize={16} />
      </div>
    </header>
  );
}
