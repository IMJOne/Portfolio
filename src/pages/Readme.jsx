import React, { useRef, useState } from 'react';
import styles from '../styles/Readme.module.css';
import uuid from 'react-uuid';

import MailIcon from '../icons/MailIcon';
import PhoneIcon from '../icons/PhoneIcon';
import LocationIcon from '../icons/LocationIcon';
import VelogIcon from '../icons/VelogIcon';

import { SiGithub, SiNotion } from 'react-icons/si';
import { RxCopy, RxExternalLink } from 'react-icons/rx';
import Toast from '../components/Toast';

export default function Readme() {
  const [, setIsCopied] = useState(false);
  const toasts = useRef([]);

  const closeToast = id => {
    const filteredToast = toasts.current.filter(toast => toast.id !== id);
    toasts.current = filteredToast;
    setIsCopied(prev => !prev);
  };
  const openToast = text => {
    const id = uuid();
    toasts.current = [...toasts.current, { id, text }];
    setIsCopied(prev => !prev);
    setTimeout(() => closeToast(id), 3000);
  };
  const copyToClipboard = text => navigator.clipboard.writeText(text).then(() => openToast(text));
  const openLink = url => window.open(url, '_blank', 'noopener, noreferrer');

  return (
    <>
      <Toast toasts={toasts.current} closeToast={closeToast} />
      <h2>Profile 💖</h2>
      <div className={styles.container}>
        <div className={styles.photo}></div>
        <div className={styles.contact}>
          <h3 className={styles.name}>최정원 / Choi Jung Won</h3>
          <h4 className={styles.pharase}>✨ 좋은 동료들과 소통하며 힘이 되고 싶습니다.</h4>
          <div>
            <SocialList LeftIcon={MailIcon} RightIcon={<RxCopy />} text="mompapa7@gmail.com" onClick={copyToClipboard} />
            <SocialList LeftIcon={PhoneIcon} RightIcon={<RxCopy />} text="010-8060-6075" onClick={copyToClipboard} />
            <SocialList LeftIcon={SiGithub} RightIcon={<RxExternalLink />} text="https://github.com/IMJOne" onClick={openLink} fill="#ced4da" />
            <SocialList LeftIcon={SiNotion} RightIcon={<RxExternalLink />} text="https://bit.ly/notion-jone" onClick={openLink} fill="#ffffff" />
            <SocialList LeftIcon={VelogIcon} RightIcon={<RxExternalLink />} text="https://velog.io/@jone" onClick={openLink} fill="#1EBF8F" />
            <SocialList LeftIcon={LocationIcon} text="Gangseo-gu, Seoul" />
          </div>
        </div>
      </div>
    </>
  );
}

function SocialList({ LeftIcon, RightIcon, text, onClick, ...props }) {
  return (
    <div className={styles.social}>
      <LeftIcon width={32} height={32} fontSize={32} {...props} />
      <span className={styles.text} onClick={() => onClick(text)}>
        {text}
      </span>
      <span className={styles.icon}>{RightIcon}</span>
    </div>
  );
}
