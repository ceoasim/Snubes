import React, { useState } from 'react';
import CustomNavbar from '../../components/cutomNavbar';
import styles from './styles.module.css';
import SVG from 'react-inlinesvg';
//Webp
import Background from '../../assets/images/background.webp'
import Background2 from '../../assets/images/background_2.webp'
import Logo1 from '../../assets/images/logo_1.webp'
import Logo2 from '../../assets/images/logo_2.webp'
import Logo3 from '../../assets/images/logo_3.webp'
import Logo4 from '../../assets/images/logo_4.webp'
import Logo5 from '../../assets/images/logo_5.webp'
import Logo6 from '../../assets/images/logo_6.webp'
//PNG
import Logo7 from '../../assets/images/logo_7.png'
import Twitter from '../../assets/images/twitter.png'
import InfoLogo from '../../assets/images/info_logo.png'

//SVG
import Misc1 from '../../assets/images/misc_2.svg'
import Misc2 from '../../assets/images/misc_1.svg'
import Misc3 from '../../assets/images/misc_3.svg'
import ArrowRight from '../../assets/images/arrow_right.svg'
import ArrowLeft from '../../assets/images/arrow_left.svg'
import WhiteDot from '../../assets/images/white_dot.svg'
import GreyDot from '../../assets/images/grey_dot.svg'
import SideBar from '../../assets/images/side_bar.svg'
import SnubesLogo from '../../assets/images/snubes-logo.svg'
import ResponseComponent from '../../components/responseMob';
import FormComponent from '../../components/formMob';

const dummyData = [
  {
    id: 0,
    desc: '“Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.”',
    org: 'Jan Brenneke, VP Operations'
  },
  {
    id: 1,
    desc: '"Highly engaged employees make the customer experience. Disengaged employees break it."  ',
    org: 'Jhon Doe, CEO org'
  },
  {
    id: 2,
    desc: '“Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.”',
    org: 'Lorem Epsum, MG branch'
  }
]

const Landing = (props: any) => {

  const logoArray = [Logo6, Logo5, Logo4, Logo3, Logo2]

  const [currentSliderValue, setCurrentSliderValue] = useState(dummyData[0])
  const [companyName, setCompanyName] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isAddInfoFrom, setIsAddInfoFrom] = useState(true)

  return (
    <div style={{ flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        <img style={{ width: 103, height: 32 }} src={SnubesLogo} />
        <img style={{ width: 28, height: 25 }} src={SideBar} />
      </div>
      <div style={{ background: '#f9f9f9', height: 3 }} />

      {
        isAddInfoFrom ?
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <FormComponent {...props} companyName={companyName} setCompanyName={setCompanyName} name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} setIsAddInfoFrom={setIsAddInfoFrom} />
          </div>
          :
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <ResponseComponent />

          </div>
      }

      <div style={{ background: '#f9f9f9', height: 10 }} />
      <div>
        <div className={styles.stats_container}>
          <p style={{ color: '#fff', fontSize: 15, fontWeight: 'bolder', textAlign: 'center', marginTop: 30 }}>Welcome to Europe’s largest call center database </p>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
            <div style={{ textAlign: 'center' }}>
              <p className={styles.stats_text_1}>500+</p>
              <p className={styles.stats_text_2}>Tenders</p>
            </div>
            <div style={{ textAlign: 'center' }}>

              <p className={styles.stats_text_1}>200+</p>
              <p className={styles.stats_text_2}>Call centers</p>
            </div>
            <div style={{ textAlign: 'center' }}>

              <p className={styles.stats_text_1}>375.000</p>
              <p className={styles.stats_text_2}>Agents available</p>
            </div>
            <div style={{ textAlign: 'center' }}>

              <p className={styles.stats_text_1}>85%  </p>
              <p className={styles.stats_text_2}>Faster secure</p>
            </div>
          </div>
        </div>
        <img className={styles.background_container} src={Background} />
      </div>

      <div style={{ background: '#f9f9f9', height: 10 }} />



      <div className={styles.info_1}>
        <div className={styles.info_1_container}>
          <SVG src={Misc1} width={80} height={80} title="Logo" />
          <p className={styles.text_1}>Sign up for free</p>
          <p className={styles.text}>Signing up and setting up your project takes less than 5 minutes</p>
        </div>
        <div className={styles.info_1_container}>
          <SVG src={Misc2} width={80} height={80} title="Logo" />
          <p className={styles.text_1}>Source smarter</p>
          <p className={styles.text}>Our data-based AI and our experts will help you find exactly what you are looking for</p>
        </div>
        <div className={styles.info_1_container}>
          <SVG src={Misc3} width={80} height={80} title="Logo" />
          <p className={styles.text_1}>Receive offers</p>
          <p className={styles.text}>With our insights you always receive high-quality proposals at the best price</p>
        </div>
      </div>
      <div style={{ background: '#f9f9f9', height: 10 }} />
      <img className={styles.background_container} src={InfoLogo} />
      <div style={{ background: '#f9f9f9', height: 10 }} />

      {/* Custom Carousal */}
      <div className={styles.info_1}>
        <div style={{ cursor: 'pointer' }} onClick={() => {
          if (currentSliderValue.id == 0) {
            setCurrentSliderValue(currentSliderValue)
          }
          else {
            setCurrentSliderValue(dummyData[currentSliderValue.id - 1])
          }
        }}>
          <SVG style={{ marginRight: 10 }} src={ArrowLeft} width={25} height={25} title="Logo" />
        </div>
        <div className={styles.info_1_container}>
          <img style={{ width: 100, height: 25 }} src={Logo1} />
          <p className={styles.text}>{currentSliderValue.desc}</p>
          <p className={styles.text}>{currentSliderValue.org}</p>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            {
              dummyData.map((item, index) => {
                return (
                  <SVG style={{ marginLeft: 10 }} key={index} src={index == currentSliderValue.id ? GreyDot : WhiteDot} width={8} height={8} title="Logo" />
                )
              })
            }
          </div>
        </div>
        <div style={{ cursor: 'pointer' }} onClick={() => {
          if (currentSliderValue.id == dummyData.length - 1) {
            setCurrentSliderValue(currentSliderValue)
          }
          else {
            setCurrentSliderValue(dummyData[currentSliderValue.id + 1])
          }
        }}>
          <SVG src={ArrowRight} style={{ marginLeft: 10 }} width={25} height={25} title="Logo" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%', marginLeft: '5%', paddingBottom: 20 }}>
        {
          logoArray.map((item, index) => {
            return (
              <img key={index} style={{ width: 50, height: 25 }} src={item} />

            )
          })
        }
      </div>
      <div style={{ background: '#f9f9f9', height: 10 }} />

      {/* Footer */}
      <div style={{ background: '#4a4a4a', height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '3%', marginLeft: '3%' }}>
          <img style={{ width: 35, height: 35 }} src={Logo7} />
          <div style={{}}>
            <p className={styles.stats_text_1}>About Us</p>
            <p className={styles.stats_text_1}>Become a Partner</p>
            <p className={styles.stats_text_1}>Faq</p>
          </div>
          <div>
            <p className={styles.stats_text_1}>Imprint</p>
            <p className={styles.stats_text_1}>Terms & Conditions</p>
            <p className={styles.stats_text_1}>Privacy Policy</p>
          </div>
          <div>
            <p className={styles.stats_text_1}>support@snubes.com</p>
            <p className={styles.stats_text_1}>+49 (0) 305 5645327</p>
            <div style={{ width: 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 30 }}>
              <p className={styles.stats_text_1}>f</p>
              <img style={{ width: 10, height: 10 }} src={Twitter} />
              <p className={styles.stats_text_1}>in</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 20, marginTop: 20 }}>
        <span style={{ fontSize: 8, color: '#4a4a4a' }}>© 2019 Snubes GmbH All Rights Reserved.</span>
      </div>


    </div>
  );
}
export default Landing;