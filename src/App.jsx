import styles from './styles/App.module.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import Explorer from './components/Explorer';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <Explorer />
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
