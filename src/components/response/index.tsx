import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const ResponseComponent = () => {

  const { info } = useSelector((state: any) => state.user)

  return (
    <div>
      <div className={styles.form_container}>
        <div className={styles.card}>
          <div style={{ height:400, alignItems:'center', justifyContent:'center'}}>
            <h2 style={{ fontSize: 25, color: '#445566' }}>Thank you for your request!</h2>
            <p style={{ fontSize: 15, color: '#445566', width:'90%', textAlign:'center' }}>You’ve taken the first step. Our experts will get in touch with you soon.</p>
           <div style={{height:1, background:'black', marginTop:50, marginBottom:50}}/>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Company</label>
              </div>
                <h4 style={{marginLeft:50, width:250, textAlign:'start'}}>{info.companyName}</h4>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Name</label>
              </div>
                <h4 style={{marginLeft:50, width:250, textAlign:'start'}}>{info.name}</h4>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Phone</label>
              </div>
                <h4 style={{marginLeft:50, width:250, textAlign:'start'}}>{info.phone}</h4>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Email</label>
              </div>
                <h4 style={{marginLeft:50, width:250, textAlign:'start'}}>{info.email}</h4>
            </div>
            </div>
            </div>
        <div className={styles.stats_container}>
          <p style={{ color: '#fff', fontSize: 18, fontWeight: 'bolder', textAlign: 'center' }}>Welcome to Europe’s largest call center database </p>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <p className={styles.stats_text_1}>500+</p>
              <p className={styles.stats_text_2}>Tenders</p>
            </div>
            <div>
              <p className={styles.stats_text_1}>200+</p>
              <p className={styles.stats_text_2}>Call centers</p>
            </div>
            <div>
              <p className={styles.stats_text_1}>375.000</p>
              <p className={styles.stats_text_2}>Agents available</p>
            </div>
            <div>
              <p className={styles.stats_text_1}>85%  </p>
              <p className={styles.stats_text_2}>Faster secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponseComponent;
