import React from 'react';
import styles from '../styles/Study.module.css';

import Note from '../components/Note';
import { notion } from '../util/notion';

export default function Study() {
  return (
    <div>
      <h2>Study Record 📚</h2>
      <p className={styles.description}>
        그동안 정리해온 공부 기록들입니다.
        <br />
        버튼을 클릭하면 노션 페이지로 이동합니다.
      </p>
      <div className={styles.container}>
        {notion.map(({ image, title, url }, index) => (
          <Note key={index} image={image} title={title} url={url} />
        ))}
      </div>
    </div>
  );
}
