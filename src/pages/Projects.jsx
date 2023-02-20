import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';

import { projectList } from '../util/projectList';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'web', 'mobile', 'toy'];

  const getProjectCount = category => {
    if (category === 'all') return projectList.length;
    return projectList.filter(project => project.category === category).length;
  };
  const getFilteredList = () => {
    if (filter === 'all') return projectList;
    return projectList.filter(project => project.category === filter);
  };

  return (
    <div>
      <h2>Projects 💻</h2>
      <div className={styles.filter_wrap}>
        {categories.map((category, index) => (
          <button key={index} className={`${styles.filter} ${filter === category && styles.selected}`} onClick={() => setFilter(category)}>
            {category}
            <span className={styles.count}>{getProjectCount(category)}</span>
          </button>
        ))}
      </div>
      <div className={styles.container}>
        {getFilteredList().map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
