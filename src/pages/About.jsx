import React from 'react';
import styles from '../styles/About.module.css';

import { FaServer, FaReact, FaVuejs } from 'react-icons/fa';
import { ImDisplay } from 'react-icons/im';
import { SiRedux, SiMobx, SiPostcss, SiTailwindcss } from 'react-icons/si';

export default function About() {
  return (
    <>
      <h2>About me ✨</h2>
      <h3 className={styles.welcome}>💗 Welcome to JOne's world</h3>
      <div className={styles.introduce}>
        <div className={styles.profile}>
          <img className={styles.avatar} src="/images/avatar.png" alt="avatar" />
          <h4 className={styles.name}>JungWon Choi</h4>
          <p className={styles.job}>Front-end Developer</p>
        </div>
        <div className={styles.text}>
          <strong className={styles.slogan}>불굴의 의지, 뜨거운 열정! 24시간이 모자란 개발자 😎</strong>
          <p>
            👋 안녕하세요! 꿈을 코딩하는 프론트엔드 개발자 최정원입니다.
            <br />
            사용자 친화적인 UI/UX를 직접 구현해보고자 개발자의 길을 걷게 되었습니다.
            <br />
            새로운 변화를 두려워하지 않고 다양한 경험을 토대로 현명하게 이겨내려 노력하며,
            <br />
            언제나 최선의 선택을 위해 스스로에게 질문을 던지며 능동적으로 답을 찾아나갑니다.
          </p>
          <strong className={styles.slogan}>시작부터 내가 정말 원하는 것은 무엇일까 고민했습니다.</strong>
          <ul>
            <CompareList
              left={{ icon: <ImDisplay color="#AFAFAF" />, text: 'Front-end' }}
              right={{ icon: <FaServer color="#808080" />, text: 'Back-end' }}
            />
            <CompareList left={{ icon: <FaReact color="#61DAFB" />, text: 'React' }} right={{ icon: <FaVuejs color="#4FC08D" />, text: 'Vue' }} />
            <CompareList
              left={{ icon: <SiRedux color="#764ABC" />, text: 'Redux' }} //
              right={{ icon: <SiMobx color="#FF9955" />, text: 'MobX' }}
            />
            <CompareList
              left={{ icon: <SiPostcss color="#DD3A0A" />, text: 'PostCSS' }} //
              right={{ icon: <SiTailwindcss color="#06B6D4" />, text: 'Tailwind' }}
            />
          </ul>
          <p>
            🤔 이러한 고민들은 근본적인 문제를 바라볼 수 있는 시야를 넓혀주었으며,
            <br />
            논리적 사고 능력 증진 및 이유 있는 기술 선택의 큰 원동력이 되고 있습니다.
          </p>
          <strong className={styles.slogan}>매사에 긍정적이고 미래지향적인 자세로 임하겠습니다.</strong>
          <p>
            "Still waters run deep"
            <br />
            항상 가슴 속에 되새기고 또 되새기는 영어 격언입니다.
            <br />
            거칠고 빠르게 지나가는 물보다 오랜 시간 잔잔하고 깊이 있게 흐르는 물처럼,
            <br />
            어제보다 더 나은 오늘의 내가 되기 위해 매일 쉬지 않고 꾸준히 노력할 것입니다.
            <br />
            🚀 끝없는 도전과 자기 계발로 어떤 환경에서도 흔들리지 않는 개발자가 되겠습니다.
          </p>
        </div>
      </div>
    </>
  );
}

function CompareList({ left, right }) {
  return (
    <li className={styles.compare}>
      • {left.icon} {left.text} VS {right.icon} {right.text}
    </li>
  );
}
