import './App.css';
import './index.css';
import './media.css';
import './css/Register.css';
// import {gsap} from 'gsap'
// import {ScrollTrigger} from "gsap/ScrollTrigger";

// import menu from './media/menu.png'
// import scalePhone from './media/scale_phone.png'
import lines from './media/Lines.png'
import gulls from './media/Галочки.png'
import qrcode from './media/grcode.svg'
import triangle_play from './media/Polygon.svg'
// import stars from './media/Union.svg';
import Header from './Header';
// import {useEffect, useRef} from "react";
import axios from 'axios';
import $ from 'jquery'



function Register() {
  const sendBtn = () => {
    axios.post("https://backend.freestylebot.ru/pwords/post", {
      "text": $('.register-login').val(),
      "nickname": $('.register-password').val()
    })
  }
  const getBtn = () => {
    axios.get('https://backend.freestylebot.ru/pwords/get')
      .then((e) => {
        console.log(e.data)
      })
  }
  return (
    <section className="upper-section-2">
      <Header />
      <div className="register-section">
        <div className='register-block'>
            <h1 className="register-header">РЕГИСТРАЦИЯ</h1>
            <input type="text" className="register-login" placeholder='ЛОГИН'/>
            <input type="text" className="register-password" placeholder='ПАРОЛЬ'/>
            <div className="buttons-low-reg">
                <button className="try-btn-reg" onClick={sendBtn}>Попробовать бесплатно</button>
                <button className="watch-video-reg" onClick={getBtn}><img alt="" src={triangle_play} className="polygon"/><span>Смотреть видео</span></button>
            </div>
        </div>
      </div>
      <div className="gulls-2">
          <img src={gulls} alt="" className="gulls-img-2"/>
      </div>
      <div className="img-lines-block-2">
          <img alt="" src={lines} className="lines-img-2"/>
          <p className="wave-text">СПУСКАЙСЯ НИЖЕ</p>
          <div className="qr-code">
            <div className='qr-code-block'>
                <div className="qr-code-text"> 
                    <h1 className="qrcode-header">Попробуй приложения прямо сейчас</h1>
                    <p className="qr-code-content">СКАЧАТЬ ПРИЛОЖЕНИЕ</p>
                </div>
                <img src={qrcode} alt="" className="qr-code-img"/>
            </div>
          </div>
      </div>
  </section>
  )
}

export default Register;