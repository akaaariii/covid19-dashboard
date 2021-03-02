import React from 'react';
import styles from './Footer.module.css';

const Footer : React.FC = () => {
  return (
    <footer className={styles.footer}>
      This website uses API from <a href="https://covid19.mathdro.id/api">covid19.mathdro.id</a>
    </footer>
  )
}

export default Footer
