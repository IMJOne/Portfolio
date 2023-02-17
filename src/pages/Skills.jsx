import styles from '../styles/Skills.module.css';
import { SiReact, SiRedux, SiTypescript, SiNextdotjs, SiNodedotjs, SiExpress } from 'react-icons/si';

const topBadgeList = [
  { text: 'HTML', badgeColor: 'E34F26', logo: 'HTML5' },
  { text: 'CSS', badgeColor: '1572B6', logo: 'CSS3' },
  { text: 'JavaScript', badgeColor: 'F7DF1E' },
  { text: 'TypeScript', badgeColor: '3178C6' },
  { text: 'jQuery', badgeColor: '0769AD' },
  { text: 'React', badgeColor: '61DAFB', logoColor: 'black' },
  { text: 'Node.js', badgeColor: '339933' },
];
const middleBadgeList = [
  { text: 'Bootstrap', badgeColor: '7952B3' },
  { text: 'SCSS', badgeColor: 'CC6699', logo: 'Sass' },
  { text: 'PostCSS', badgeColor: 'DD3A0A' },
  { text: 'Tailwind', badgeColor: '06B6D4', logo: 'TailwindCSS' },
  { text: 'Redux Toolkit', badgeColor: '764ABC', logo: 'Redux' },
  { text: 'Firebase', badgeColor: 'FFCA28' },
];
const bottomBadgeList = [
  { text: 'Visual Studio Code', badgeColor: '007ACC', logo: 'VisualStudioCode' },
  { text: 'Git', badgeColor: 'F05032' },
  { text: 'Github', badgeColor: '181717' },
  { text: 'Netlify', badgeColor: '00C7B7' },
  { text: 'Postman', badgeColor: 'FF6C37' },
  { text: 'Figma', badgeColor: 'F24E1E' },
];

export default function Skills() {
  return (
    <>
      <h2>Skills 🚀</h2>
      <div className={styles.container}>
        <div>
          <h3>🎁 Tech Stack 🎁</h3>
          <SkillBadge badgeList={topBadgeList} />
          <SkillBadge badgeList={middleBadgeList} />
        </div>
        <div>
          <h3>⚒️ Tools ⚒️</h3>
          <SkillBadge badgeList={bottomBadgeList} />
        </div>
        <div>
          <div className={styles.study}>
            <h4 className={styles.study_title}>Now Studying</h4>
            <div className={styles.study_icons}>
              <SiReact color="#61DAFB" />
              <SiRedux color="#764ABC" />
              <SiTypescript color="#3178C6" />
            </div>
          </div>
          <div className={styles.study}>
            <h4 className={styles.study_title}>Forward Studying</h4>
            <div className={styles.study_icons}>
              <SiNextdotjs color="#F2F2F2" />
              <SiNodedotjs color="#339933" />
              <SiExpress color="#828282" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SkillBadge({ badgeList }) {
  return (
    <div className={styles.badge}>
      {badgeList.map(({ text, badgeColor, logo, logoColor = 'white' }, index) => (
        <img
          key={index}
          src={`https://img.shields.io/badge/${text}-${badgeColor}?style=flat-square&logo=${logo ? logo : text}&logoColor=${logoColor}`}
          alt={text}
        />
      ))}
    </div>
  );
}
