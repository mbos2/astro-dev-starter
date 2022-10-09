import styles from './Footer.module.scss';

type FooterProps = {
  author: string
}

export const Footer = ({ author = '' }: FooterProps) => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.copyright}>© {new Date().getFullYear()} {author}</div>
        </div>
    </footer>
  );
};
