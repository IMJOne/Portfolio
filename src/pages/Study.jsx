import React from 'react';
import styles from '../styles/Study.module.css';

import Note from '../components/Note';
import { notion } from '../util/notion';

export default function Study() {
  return (
    <div>
      <h2>Study Record 📚</h2>
      <div className={styles.container}>
        {notion.map(({ image, title, url }, index) => (
          <Note key={index} image={image} title={title} url={url} />
        ))}
      </div>
    </div>
  );
}
