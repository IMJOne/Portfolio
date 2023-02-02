import React from 'react';
import styles from '../styles/Projects.module.css';

import { project } from '../util/project';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div>
      <h2>Projects 💻</h2>
      <div className={styles.container}>
        {project.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
}
