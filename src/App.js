import './App.css';
import './index.css';
import './media.css'
import menu from './media/menu.png'
import scalePhone from './media/scale_phone.png'
import lines from './media/Lines.png'
import gulls from './media/Gulls.svg'
import iphone from './media/iphone.png'
import phone_girl from './media/Rectangle 142.png'
import Aliana from './media/aliana.png'
import iphone14pro from './media/iPhone14Pro(1).png'
import ion_girl from './media/Rectangle143.png'
import calendar from './media/calendar.png'
import calendar2 from './media/calendar2.png'
import activity from './media/activity.png'
import astrologist from './media/Rectangle28(2).png'
import gimnastic_girl from './media/Rectangle26.png'
import meditation from './media/Rectangle28(3).png'
import button_next from './media/Button-Next.png'
import button_prev from './media/Button-Prev.png'
import arrow_forward from './media/arrow_forward.png'
import section5_phone from './media/iPhone14Pro.png'
import android from './media/Android.png'
import apple from './media/Apple.svg'
import qrcode from './media/grcode.svg'
import icon_message from './media/Icon.png'
import plus_sign from './media/Union.png'
import triangle_play from './media/Polygon.svg'
import Aliana_section3 from './media/Frame260.png'
import stars from './media/union.svg'
import SecondSection from './SecondSection';


function App() {
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
              <img src={scalePhone} alt="" className="scale-phone"/>
          </div>
      </div>
  </section>
  )
}

export default App;
