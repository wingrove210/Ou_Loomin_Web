import './App.css';
import './index.css';
import './media.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from 'scrollmagic';

// import menu from './media/menu.png'
import scalePhone from './media/scale_phone.png'
import lines from './media/Lines.png'
import gulls from './media/Галочки.png'
import qrcode from './media/grcode.svg'
import triangle_play from './media/Polygon.svg'
import stars from './media/Union.svg';
import Header from './Header';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
// import Register from './Register';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
// import {Link} from 'react-router-dom';
import { useEffect, useRef} from "react";
import $ from 'jquery'
gsap.registerPlugin(ScrollTrigger);
function App() {
//     useEffect(()=>{
//         gsap.to(".scale-phone", {

//             scale: 3,
//             y: 400,
//             rotation: 0,
//             scrollTrigger: {
//             trigger: ".scale-phone",
//             start: "top center",
//             end: "top bottom",
//             scrub: true,
//             markers: true,
//             id: "scrub",
//             pin: true
            
// }})})
    return (
        <>
            <section className="upper-section" id='main'>
                <Header />
                <div className="main-text">
                    <div className="main-text__block">
                        <p className="over-header"><img alt="" src={stars} className="start" />Добро пожаловать в <span>ou loomin</span></p>
                        <h1 className="header-text">В гармонии с собой – в <br /> гармонии с миром.</h1>
                        <p className="under-header">Наше приложение – это идеальный спутник для тех,
                            кто стремится к<br /> внутреннему спокойствию и балансу.
                            С помощью простых, но<br /> эффективных медитаций, вы научитесь находить умиротворение в<br /> любой ситуации</p>
                        <div className="buttons-low-1">
                            <a href='/register' className="try-btn">Попробовать бесплатно</a>
                            <button className="watch-video"><img alt="" src={triangle_play} className="polygon" /><span>Смотреть видео</span></button>
                        </div>
                    </div>
                </div>
                <div className="gulls">
                    <img src={gulls} alt="" className="gulls-img" />
                </div>
                <div className="img-lines-block">
                    <div className='img-lines-section'>
                        <img alt="" src={lines} className="lines-img" />
                    </div>
                    <p className="wave-text">СПУСКАЙСЯ НИЖЕ</p>
                    <div className="qr-code">
                        <div className='qr-code-block'>
                            <div className="qr-code-text">
                                <h1 className="qrcode-header">Попробуй приложения прямо сейчас</h1>
                                <p className="qr-code-content">СКАЧАТЬ ПРИЛОЖЕНИЕ</p>
                            </div>
                            <img src={qrcode} alt="" className="qr-code-img" />
                        </div>
                    </div>
                </div>
                <div className="scale-phone-block">
                        <img src={scalePhone} alt="" className="scale-phone" />
                </div>

            </section>
            <SecondSection />
            <ThirdSection />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </>
    )
}

export default App;
