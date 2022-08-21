import styles from './compose.module.css';

/* eslint-disable-next-line */
export interface ComposeProps {}

export function Compose(props: ComposeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Compose!</h1>
    </div>
  );
}

export default Compose;
