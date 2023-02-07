import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';
import HomeVisualIcon from '../icons/HomeVisualIcon';

export default function Home() {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0); // 문자열의 index를 나타낼 상태값
  const sentence = 'Hello Jung-Won World!';

  useEffect(() => {
    const typingAnimation = setInterval(() => {
      setTitle(title + sentence[count]);
      setCount(count + 1);
    }, 60);
    if (count === sentence.length) clearInterval(typingAnimation);
    return () => clearInterval(typingAnimation);
  });

  return (
    <div className={styles.home}>
      <HomeVisualIcon className={styles.visual} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.sub_title}>IMJOne, Front-end developer with enjoys coding.</p>
      <div className={styles.link_wrap}>
        <Link className={styles.link} to={'/projects'}>
          View Projects
        </Link>
        <Link className={styles.link} to={'/theme'}>
          Set Theme
        </Link>
      </div>
    </div>
  );
}
