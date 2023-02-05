import React from 'react';
import styles from '../styles/Note.module.css';

export default function Note({ image, title, url }) {
  return (
    <div className={styles.note}>
      <div className={styles.circle_wrap}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.image} style={{ background: `url(${image}) no-repeat center / cover` }}></div>
        <h3 className={styles.title}>{title}</h3>
        <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
          go page
        </a>
      </div>
    </div>
  );
}
