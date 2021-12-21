import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import countryCodes from './CountryCodes.json'
import { useDispatch } from 'react-redux';
import * as Actions from '../../redux/user/actions'

const FormComponent = (props: any) => {
  const [countryCode, setCountryCode] = useState('')
  const [redBox, setRedBox] = useState(false)
  const dispatch = useDispatch()
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
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <div className={styles.form_container}>
        <div className={styles.card}>
          <div style={{width:'80%', textAlign:'center'}}>
            <h2 style={{ fontSize: 18, color: '#445566' }}>Find inbound call centers for your company</h2>
            <p style={{ fontSize: 12, color: '#445566', textAlign:'center' }}>Use our AI and Big Data driven call center sourcing solution</p>
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
              }} value={props.companyName} className={!props.companyName && redBox ? styles.input_box_red : styles.input_box} type="text" name="companyName"></input>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Name</label>
              </div>
              <input maxLength={40} onChange={(e) => {
                props.setName(e.target.value)
              }} value={props.name} className={!props.name && redBox ? styles.input_box_red : styles.input_box} type="text" name="name"></input>
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
              }} value={props.phone} className={!props.phone && redBox ? styles.input_box_red : styles.input_box} name="phone" placeholder={countryCode}></input>
            </div>
            <div className={styles.input_box_container}>
              <div className={styles.label_container}>
                <label className={styles.label}>Email</label>
              </div>
              <input onChange={(e) => {
                props.setEmail(e.target.value)
              }} value={props.email} className={!props.email && redBox ? styles.input_box_red : styles.input_box} type="text" name="firstname"></input>
            </div>
          </div>
          <div onClick={()=>{
            if(props.companyName && props.name && props.email && props.phone && !emailFormat.test(props.email)){
              alert('Email input is not valid')
            }
            if(props.companyName && props.name && props.email && props.phone && emailFormat.test(props.email)){
              dispatch(Actions.addInfo(props.companyName, props.name, props.phone, props.email))
              props.setIsAddInfoFrom(false)
            }
            else{
              setRedBox(true)
            }
          }} className={styles.submit}>
            <p style={{ color: '#fff', fontSize:12, textAlign: 'center' }}>Get Informed</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FormComponent;
