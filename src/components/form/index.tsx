import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import countryCodes from './CountryCodes.json'

const FormComponent = (props: any) => {
  const [countryCode, setCountryCode] = useState('')
  useEffect(() => {
    async function getCountryCode() {
      const data = await fetch('http://ip-api.com/json')
      const currrentInfo = await data.json()
      const code = countryCodes.filter((value) => {
        return value.code == currrentInfo.countryCode
      })
      if (code?.length) {
        setCountryCode(code[0]?.dial_code)
      }
    }
    getCountryCode()
  }, [])
  const numberFormat = /^[+-]?\d*(?:[.,]\d*)?$/;
  const alphabetFormat = /^[a-zA-Z]+$/;
  const emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <div>
      <div className={styles.form_container}>
        <div className={styles.card}>
          <div>
            <h2 style={{ fontSize: 25, color: '#445566' }}>Find inbound call centers for your company</h2>
            <p style={{ fontSize: 15, color: '#445566', marginTop: -10 }}>Use our AI and Big Data driven call center sourcing solution</p>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Company</label>
              </div>
              <input maxLength={80} onChange={(e) => {
                if (alphabetFormat.test(e.target.value)) {
                  props.setCompanyName(e.target.value)
                }
                else {
                  if (!e.target.value.length) {
                    props.setCompanyName('')
                  }
                }
              }} value={props.companyName} className={styles.input_box} type="text" name="companyName"></input>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Name</label>
              </div>
              <input maxLength={40} onChange={(e) => {
                props.setName(e.target.value)
              }} value={props.name} className={styles.input_box} type="text" name="name"></input>
            </div>
            <div>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Phone</label>
              </div>
              <input type='text' maxLength={15} pattern="[+-]?\d+(?:[.,]\d+)?" onChange={(e: any) => {

                if (numberFormat.test(e.target.value)) {

                  const firstThree = e.target.value.substring(0, 3);
                  if (firstThree != countryCode) {
                    e.target.value = countryCode;
                  }
                  props.setPhone(e.target.value)
                }
              }} value={props.phone} className={styles.input_box} name="phone" placeholder={countryCode}></input>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Email</label>
              </div>
              <input onChange={(e) => {
                // if(emailFormat.test(e.target.value)){
                props.setEmail(e.target.value)
                // }
              }} value={props.email} className={styles.input_box} type="text" name="firstname"></input>
            </div>
          </div>
          <div className={styles.submit}>
            <p style={{ color: '#fff', textAlign: 'center' }}>Get Informed</p>
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

export default FormComponent;
