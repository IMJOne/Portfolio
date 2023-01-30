import React from 'react';
import styles from '../styles/Sidebar.module.css';

import { ReactComponent as File } from '../icons/file.svg';
import { ReactComponent as Code } from '../icons/code.svg';
import { ReactComponent as Mail } from '../icons/mail.svg';
import { ReactComponent as Pencil } from '../icons/pencil.svg';
import { ReactComponent as Extension } from '../icons/extension.svg';
import { ReactComponent as User } from '../icons/user.svg';
import { ReactComponent as Setting } from '../icons/setting.svg';

import { Link } from 'react-router-dom';

const topMenu = [
  { path: '/', icon: <File />, text: 'home' },
  { path: '/about', icon: <Code />, text: 'about' },
  { path: '/skills', icon: <Mail />, text: 'skills' },
  { path: '/study', icon: <Pencil />, text: 'study' },
  { path: '/projects', icon: <Extension />, text: 'projects' },
];
const bottomMenu = [
  { path: '/readme', icon: <User />, text: 'readme' },
  { path: '/setting', icon: <Setting />, text: 'setting' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        {topMenu.map((item, index) => (
          <Link key={index} className={styles.menu} to={item.path}>
            <button className={styles.icon}>{item.icon}</button>
            <Tooltip text={item.text} />
          </Link>
        ))}
      </div>
      <div>
        {bottomMenu.map((item, index) => (
          <Link key={index} className={styles.menu} to={item.path}>
            <button className={styles.icon}>{item.icon}</button>
            <Tooltip text={item.text} />
          </Link>
        ))}
      </div>
    </aside>
  );
}

function Tooltip({ text }) {
  return <div className={styles.tooltip}>{text}</div>;
}
