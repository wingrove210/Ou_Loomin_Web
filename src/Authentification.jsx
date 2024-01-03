import './App.css';
import './index.css';
import './media.css';
import './css/Register.css';
// import {gsap} from 'gsap'
// import {ScrollTrigger} from "gsap/ScrollTrigger";

// import menu from './media/menu.png'
// import scalePhone from './media/scale_phone.png'
import lines from './media/Lines.png'
import gulls from './media/Галочки (1).png'
import qrcode from './media/grcode.svg'
import triangle_play from './media/Polygon.svg'
// import stars from './media/Union.svg';
import Header from './Header';
// import {useEffect, useRef} from "react";
import axios from 'axios';
import $ from 'jquery'



function Authentification() {
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
            <div className='register-fields'>
                  <input type="text" className="register-login" placeholder='ЛОГИН'/>
                  <input type="text" className="register-password" placeholder='ПАРОЛЬ'/>
            </div>
            <div className="button-telegram">
                 <a href="" className="telegram-link">ВОЙТИ ЧЕРЕЗ TELEGRAM</a>
            </div>
            <div className="buttons-low-reg">
                <a href='/auth' className="try-btn-reg" onClick={sendBtn}>ВХОД</a>
                <a href='/register' className="watch-video-reg" onClick={getBtn}><span>РЕГИСТРАЦИЯ</span></a>
            </div>
        </div>
      </div>
      <div className="gulls-3">
          <img src={gulls} alt="" className="gulls-img-3"/>
      </div>
      <div className="img-lines-block-2">
          <img alt="" src={lines} className="lines-img-2"/>
          <p className="wave-text">СПУСКАЙСЯ НИЖЕ</p>
          <div className="qr-code-2">
            <div className='qr-code-block-2'>
                <div className="qr-code-text-2"> 
                    <h1 className="qrcode-header-2">Попробуй приложения прямо сейчас</h1>
                    <p className="qr-code-content-2">СКАЧАТЬ ПРИЛОЖЕНИЕ</p>
                </div>
                <img src={qrcode} alt="" className="qr-code-img-2"/>
            </div>
          </div>
      </div>
  </section>
  )
}

export default Authentification;