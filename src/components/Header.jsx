import React from 'react';
import styles from '../styles/Header.module.css';

import vscode from '../icons/vscode.svg';
import min from '../icons/min.svg';
import expand from '../icons/expand.svg';
import close from '../icons/close.svg';

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
        <img src={vscode} alt="visual stuido code" />
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
          <img src={min} alt="최소화" />
        </button>
        <button className={styles.icon}>
          <img src={expand} alt="최대화" />
        </button>
        <button className={styles.icon}>
          <img src={close} alt="닫기" />
        </button>
      </div>
    </header>
  );
}
