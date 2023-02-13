import React from 'react';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { category, image, title, description, skills, links } = project;

  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <div className={styles.category}>{category}</div>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.info}>IMJOne | 301,235 | ⭐⭐⭐⭐⭐</div>
        <p className={styles.description}>{description}</p>
        <div className={styles.skill_wrap}>
          {skills.map(({ Icon, name }, index) => (
            <div className={`${styles.skill} ${name.toLowerCase()}`} key={index}>
              <Icon width={16} height={16} />
              <span className={styles.skill_name}>{name}</span>
            </div>
          ))}
        </div>
        <div className={styles.link_wrap}>
          {links.map(({ Icon, name, url }, index) => (
            <a className={styles.link} key={index} href={url} target="_blank" rel="noopener noreferrer">
              <Icon className={styles.link_icon} fontSize={36} />
              <span className={styles.link_name}>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
