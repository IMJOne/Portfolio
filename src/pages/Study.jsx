import React from 'react';
import styles from '../styles/Study.module.css';

import Note from '../components/Note';
import { notionList } from '../util/notionList';

export default function Study() {
  return (
    <div>
      <h2>Study Record 📚</h2>
      <div className={styles.container}>
        {notionList.map(({ image, title, url }, index) => (
          <Note key={index} image={image} title={title} url={url} />
        ))}
      </div>
    </div>
  );
}
