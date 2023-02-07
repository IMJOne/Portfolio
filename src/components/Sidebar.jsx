import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { Link, useLocation } from 'react-router-dom';

import FileIcon from '../icons/FileIcon';
import CodeIcon from '../icons/CodeIcon';
import MailIcon from '../icons/MailIcon';
import PencilIcon from '../icons/PencilIcon';
import ExtensionIcon from '../icons/ExtensionIcon';
import UserIcon from '../icons/UserIcon';
import SettingIcon from '../icons/SettingIcon';

const topMenu = [
  { Icon: FileIcon, path: '/', text: 'home' },
  { Icon: CodeIcon, path: '/about', text: 'about' },
  { Icon: MailIcon, path: '/skills', text: 'skills' },
  { Icon: PencilIcon, path: '/study', text: 'study' },
  { Icon: ExtensionIcon, path: '/projects', text: 'projects' },
];
const bottomMenu = [
  { Icon: UserIcon, path: '/readme', text: 'readme' },
  { Icon: SettingIcon, path: '/theme', text: 'theme' },
];

export default function Sidebar() {
  const location = new useLocation();
  const pathName = location.pathname;

  const createMenu = menu => {
    return menu.map(({ Icon, path, text }, index) => (
      <Link key={index} className={`${styles.item} ${pathName === path && styles.active}`} to={path}>
        <Icon className={styles.icon} fill={pathName === path ? '#ffffff' : '#858585'} />
        <div className={styles.tooltip}>{text}</div>
      </Link>
    ));
  };

  return (
    <aside className={styles.sidebar}>
      <div>{createMenu(topMenu)}</div>
      <div>{createMenu(bottomMenu)}</div>
    </aside>
  );
}
