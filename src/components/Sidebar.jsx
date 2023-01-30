import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

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
  { Icon: SettingIcon, path: '/setting', text: 'setting' },
];

export default function Sidebar() {
  const createMenu = menu => {
    return menu.map(({ Icon, path, text }, index) => (
      <Link key={index} className={styles.menu} to={path}>
        <Icon className={styles.icon} />
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
