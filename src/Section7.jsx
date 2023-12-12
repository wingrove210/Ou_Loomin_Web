import './css/Section7.css';
import 'swiper/css/effect-coverflow'
import buttonNext from './media/Button-Next.png';
import buttonPrev from './media/Button-Prev.png';
import triangle_play from './media/Polygon.svg';
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperCore from 'swiper'
import 'swiper/css/effect-coverflow'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function Section7() {
    const [isActive, setIsActive] = useState(false);
    const swiperSlide = useSwiperSlide()
    const activeSilde = isActive ? 'active' : '';
    return (
        <section className="slider-section" id="costs">
            <div className="header-strings">
                <div className="slider-header-section">
                    <h1 className="slider-header">РАСШИРЬ ВОЗМОЖНОСТИ</h1>
                </div>
                <div className="under-slider-header-section">
                    <p className="under-slider-header">тарифные планы в <span className='ou-loomin'>ou loomin</span></p>
                </div>
            </div>
        <div className="slider-block">
        <div className='slider-buttons'>
              <div className="review-swiper-button-prev">
                <img src={buttonPrev} alt="" />
              </div>
              <div className="review-swiper-button-next">
                <img src={buttonNext} alt="" />
              </div>
        </div>
            <Swiper
            slideActiveClass='active'
            spaceBetween={3}
            centeredSlides={true}
            navigation={{
              nextEl: '.review-swiper-button-next',
              prevEl: '.review-swiper-button-prev',
            }}
        effect="coverflow"
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={3}
        style={{ height: "500px"}}
        // onActiveIndexChange={}
      >
        <SwiperSlide
          >
            <h1 className="slide-header">BASIC</h1>
            <h1 className="slide-price">555 ₽  </h1>
            <ul className="slide-list">
                <li>2 медитации каждой категории </li>
                <li>тех.поддержка 24/7</li>
                <li>Личный чат с создателями</li>
                <li>Истории</li>
            </ul>
            <div className='choose-btn'>
                    <button className="choose">Выбрать</button>
            </div>
        </SwiperSlide>
        <SwiperSlide
        >
      <div>
          <div className='slider-content'>
                <h1 className="slide-header">ALL</h1>
                <h1 className="slide-price">1999 ₽</h1>
                <ul className="slide-list">
                    <li>Все медитации каждой категории <br/> навсегда</li>
                    <li>тех.поддержка 24/7</li>
                    <li> Личный чат с создателями навсегда</li>
                    <li>Доступ к новым функция навсегда</li>
                </ul>
                <div className='choose-btn'>
                        <button className="choose">Выбрать</button>
                </div>
          </div>
      </div>
        </SwiperSlide>
        <SwiperSlide
        >
          <h1 className="slide-header">FOREVER</h1>
          <h1 className="slide-price">33.333 ₽</h1>
          <ul className="slide-list">
              <li>Доступ ко всем медитациям</li>
              <li>Личный гороскоп ежедневно</li>
              <li>Тематический чат-бот </li>
              <li>Нотальная карта</li>
          </ul>
          <div className='choose-btn'>
                  <button className="choose">Выбрать</button>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
            <div className='under-slider-btn-section'>
                <div className="under-slider-btn">
                    <button className="try-btn">Попробовать бесплатно</button>
                    <button className="watch-video"><img src={triangle_play} alt="triangle" className="polygon" /><span>Смотреть видео</span></button>
                </div>
            </div>
        </section>
    );
}

export default Section7;