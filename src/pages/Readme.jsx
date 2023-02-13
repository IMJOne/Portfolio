import React from 'react';
import styles from '../styles/Readme.module.css';

import MailIcon from '../icons/MailIcon';
import PhoneIcon from '../icons/PhoneIcon';
import LocationIcon from '../icons/LocationIcon';

import { SiGithub, SiNotion } from 'react-icons/si';

export default function Readme() {
  return (
    <>
      <h2>Profile 💖</h2>
      <img className={styles.avatar} src="/images/avatar.png" alt="avatar" />
      <div>
        <h3>최정원 / Choi Jung Won</h3>
        <h4>좋은 동료들과 소통하며 힘이 되고 싶습니다.</h4>
        <ul>
          <li>
            <MailIcon width={36} height={36} />
            <PhoneIcon width={36} height={36} />
            <LocationIcon width={36} height={36} />
            <SiGithub fill="#CED4DA" fontSize={36} />
            <SiNotion fontSize={36} />
          </li>
        </ul>
      </div>
    </>
  );
}
