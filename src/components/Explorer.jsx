import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Explorer.module.css';

import ArrowIcon from '../icons/ArrowIcon';
import ReactIcon from '../icons/ReactIcon';
import HtmlIcon from '../icons/HtmlIcon';
import CssIcon from '../icons/CssIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import JsonIcon from '../icons/JsonIcon';
import ReadmeIcon from '../icons/ReadmeIcon';

const files = [
  {
    Icon: ReactIcon,
    path: '/',
    text: 'home.jsx',
  },
  {
    Icon: HtmlIcon,
    path: '/about',
    text: 'about.html',
  },
  {
    Icon: CssIcon,
    path: '/skills',
    text: 'skills.css',
  },
  {
    Icon: JavaScriptIcon,
    path: '/study',
    text: 'study.js',
  },
  {
    Icon: JsonIcon,
    path: '/projects',
    text: 'projects.json',
  },
  {
    Icon: ReadmeIcon,
    path: '/readme',
    text: 'README.md',
  },
];

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
