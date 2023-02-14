import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import styles from '../styles/Theme.module.css';

const themeItmes = [
  { name: 'basic', image: 'images/basic.svg' },
  { name: 'dracula', image: 'images/dracula.svg' },
];

export default function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <h2>Set Theme ⚙️</h2>
      <div className={styles.items}>
        {themeItmes.map(({ name, image }, index) => (
          <div key={index}>
            <img className={styles.image} src={image} alt={name} />
            <h3 className={styles.name}>{name}</h3>
            <button className={`${styles.button} ${theme === name && styles.selected}`} onClick={() => setTheme(name)}>
              Set Theme
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
