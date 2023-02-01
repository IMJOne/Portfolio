import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import HomeVisualIcon from '../icons/HomeVisualIcon';
import { Link } from 'react-router-dom';

export default function Home() {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0); // 문자열의 index를 나타낼 상태값
  const completed = 'Hello Jung-Won World!';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle(title + completed[count]);
      setCount(count + 1);
    }, 60);
    if (count === completed.length) clearInterval(typingInterval);
    return () => clearInterval(typingInterval);
  });

  return (
    <div className={styles.home}>
      <HomeVisualIcon fill={'#171717'} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.sub_title}>IMJOne, Front-end developer with enjoys coding.</p>
      <div className={styles.link_wrap}>
        <Link className={styles.link} to={'/projects'}>
          View Projects
        </Link>
        <Link className={styles.link} to={'/setting'}>
          Set Theme
        </Link>
      </div>
    </div>
  );
}
