import React from 'react';
import styles from '../styles/Sidebar.module.css';

import { Link, useLocation } from 'react-router-dom';
import { VscFiles, VscSearch, VscDebugAlt, VscEdit, VscExtensions, VscAccount, VscSettingsGear } from 'react-icons/vsc';

const topMenu = [
  { Icon: VscFiles, path: '/', text: 'home' },
  { Icon: VscSearch, path: '/about', text: 'about' },
  { Icon: VscDebugAlt, path: '/skills', text: 'skills' },
  { Icon: VscEdit, path: '/study', text: 'study' },
  { Icon: VscExtensions, path: '/projects', text: 'projects' },
];
const bottomMenu = [
  { Icon: VscAccount, path: '/readme', text: 'readme' },
  { Icon: VscSettingsGear, path: '/theme', text: 'theme' },
];

export default function Sidebar() {
  const location = new useLocation();
  const pathName = location.pathname;

  const createMenu = menu => {
    return menu.map(({ Icon, path, text }, index) => (
      <Link key={index} className={`${styles.item} ${pathName === path && styles.active}`} to={path}>
        <Icon className={styles.icon} fontSize={24} fill={pathName === path ? '#ffffff' : '#858585'} />
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
