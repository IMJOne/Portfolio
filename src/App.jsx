import styles from './styles/App.module.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Explorer from './components/Explorer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <Explorer />
        <section className={styles.section}>
          <Navbar />
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
