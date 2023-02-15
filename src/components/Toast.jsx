import styles from '../styles/Toast.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export default function Toast({ toasts, setToast }) {
  const closeToast = id => setToast(toasts.filter(toast => toast.id !== id));

  return (
    <div className={styles.container}>
      {toasts.map(({ id, text }) => (
        <div className={styles.popup} key={id} onClick={() => closeToast(id)}>
          <p className={styles.message}>📌 클립보드에 복사되었습니다.</p>
          <p className={styles.description}>{text}</p>
          <AiOutlineClose className={styles.close} />
        </div>
      ))}
    </div>
  );
}
