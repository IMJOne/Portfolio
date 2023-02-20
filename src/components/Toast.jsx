import styles from '../styles/Toast.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export default function Toast({ toasts, closeToast }) {
  return (
    <div className={`${styles.container} `}>
      {toasts.map(({ id, text }) => (
        <div className={styles.popup} key={id} onClick={() => closeToast(id)}>
          <p className={styles.message}>📌 {text.includes('@') ? '이메일이' : '전화번호가'} 복사되었습니다.</p>
          <p className={styles.description}>{text}</p>
          <AiOutlineClose className={styles.close} />
        </div>
      ))}
    </div>
  );
}
