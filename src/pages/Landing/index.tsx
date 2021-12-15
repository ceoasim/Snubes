import React from 'react';
import CustomNavbar from '../../components/cutomNavbar';
import styles from './styles.module.css';
import SVG from 'react-inlinesvg';
import Background from '../../assets/images/background.webp'

const Landing = () => {
  return (
    <div>
      <CustomNavbar />
      <div className={styles.background_container}>
        <img src={Background} />
      </div>
    </div>
  );
}

export default Landing;
