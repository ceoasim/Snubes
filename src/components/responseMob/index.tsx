import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const ResponseComponent = () => {

  const { info } = useSelector((state: any) => state.user)

  return (
    <div>
      <div className={styles.form_container}>
        <div className={styles.card}>
          <div style={{ alignItems:'center', justifyContent:'center', marginBottom:20}}>
            <h2 style={{ fontSize: 25, color: '#445566' }}>Thank you for your request!</h2>
            <p style={{ fontSize: 15, color: '#445566', textAlign:'center' }}>You’ve taken the first step. Our experts will get in touch with you soon.</p>
           <div style={{height:1, background:'black', marginTop:50, marginBottom:50}}/>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Company</label>
              </div>
                <span className={styles.response}>{info.companyName}</span>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Name</label>
              </div>
                <span className={styles.response}>{info.name}</span>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Phone</label>
              </div>
                <span className={styles.response}>{info.phone}</span>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Email</label>
              </div>
                <span className={styles.response}>{info.email}</span>
            </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default ResponseComponent;
