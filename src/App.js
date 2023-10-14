import './App.css';
import './index.css';
import './media.css'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

import menu from './media/menu.png'
import scalePhone from './media/scale_phone.png'
import lines from './media/Lines.png'
import gulls from './media/Gulls.svg'
import qrcode from './media/grcode.svg'
import triangle_play from './media/Polygon.svg'
import {useEffect, useRef} from "react";



function App() {
    const  scalePhoneRef = useRef()

    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(".scale-phone", {scale:1,y:0}, {
            scrollTrigger: {
                trigger: ".scale-phone",
                scrub: 1,
            },
            y: -600,
            scale: 2
        })
    })

  return (
    <section className="upper-section">
    <div className="header-section">
          <header>
              <h3 className="logo">OU LOOMIN</h3>
              <div className="costs">
                  <ul>
                      <p className="costs-item">Тарифы</p>
                      <p className="costs-item">Тарифы</p>
                      <p className="costs-item">О нас</p>
                      <div className="header-buttons">
                          <button className="registration">Регистрация</button>
                          <div className="btn-login">
                              <button className="login">Вход</button>
                          </div>
                      </div>
                  </ul>
                  <img src={menu} alt="" className="menu" />
              </div>
          </header>
      </div>  
      <div className="main-text">
          <div className="main-text__block">
              <p className="over-header"><img alt="" src="./media/union.svg" className="start"/>Добро пожаловать в <span>ou loomin</span></p>
              <h1 className="header-text">В гармонии с собой – в гармонии с миром.</h1>
              <p className="under-header">Наше приложение – это идеальный спутник для тех, 
                  кто стремится к внутреннему спокойствию и балансу. 
                  С помощью простых, но эффективных медитаций, вы научитесь находить умиротворение в любой ситуации</p>
                  <div className="buttons-low">
                      <button className="try-btn">Попробовать бесплатно</button>
                      <button className="watch-video"><img alt="" src={triangle_play} className="polygon"/><span>Смотреть видео</span></button>
                  </div>
          </div>
      </div>
      <div className="gulls">
          <img src={gulls} alt="" className="gulls-img"/>
      </div>
      <div className="img-lines-block">
          <img alt="" src={lines} className="lines-img"/>
          <p className="wave-text">СПУСКАЙСЯ НИЖЕ</p>
          <div className="qr-code">
              <div className="qr-code-text"> 
                  <h1 className="qrcode-header">Попробуй приложения прямо сейчас</h1>
                  <p className="qr-code-content">СКАЧАТЬ ПРИЛОЖЕНИЕ</p>
              </div>
              <img src={qrcode} alt="" className="qr-code-img"/>
          </div>
          <div className="scale-phone-block">
              <img src={scalePhone} alt="" className="scale-phone" ref={scalePhoneRef}/>
          </div>
      </div>
  </section>
  )
}

export default App;
