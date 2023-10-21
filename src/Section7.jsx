import './css/Section7.css';
import buttonNext from './media/Button-Next.png';
import buttonPrev from './media/Button-Prev.png';
import triangle_play from './media/Polygon.svg';

function Section7(){
    return(
        <section className="slider-section">
        <div className="slider-header-section">
            <h1 className="slider-header">РАСШИРЬ ВОЗМОЖНОСТИ</h1>
        </div>
        <div className="under-slider-header-section">
            <p className="under-slider-header">тарифные планы в <span className='ou-loomin'>ou loomin</span></p>
        </div>
        <ul className="slwiper">
        <img src={buttonPrev} alt="" className="btn-prev"/>
            <div className="swiper-slide">
            <h1 className="slide-header">BASIC</h1>
                <h1 className="slide-price">490 ₽</h1>
                <ul className="slide-list">
                <li>Доступ ко всем медитациям</li>
                    <li>Личный гороскоп ежедневно</li>
                    <li>Тематический чат-бот </li>
                    <li>Нотальная карта</li>
                    <li>Поддержка 24/7</li>
                    <li>Духовные практики</li>
                    <li>Наставничесво</li>
                </ul>
                <button className="choose">Выбрать</button>
            </div>
            <div className="swiper-slide">
                <h1 className="slide-header">BASIC</h1>
                <h1 className="slide-price">490 ₽</h1>
                <ul className="slide-list">
                    <li>Доступ ко всем медитациям</li>
                    <li>Личный гороскоп ежедневно</li>
                    <li>Тематический чат-бот </li>
                    <li>Нотальная карта</li>
                    <li>Поддержка 24/7</li>
                    <li>Духовные практики</li>
                    <li>Наставничесво</li>
                </ul>
                <button className="choose">Выбрать</button>
            </div>
            <div className="swiper-slide">
            <h1 className="slide-header">BASIC</h1>
                <h1 className="slide-price">490 ₽</h1>
                <ul className="slide-list">
                <li>Доступ ко всем медитациям</li>
                    <li>Личный гороскоп ежедневно</li>
                    <li>Тематический чат-бот </li>
                    <li>Нотальная карта</li>
                    <li>Поддержка 24/7</li>
                    <li>Духовные практики</li>
                    <li>Наставничесво</li>
                </ul>
                <button className="choose">Выбрать</button>
            </div>
            <img src={buttonNext} alt="" className="btn-next"/>
        </ul>
        <div className='under-slider-btn-section'>
            <div className="under-slider-btn">
                <button className="try-btn">Попробовать бесплатно</button>
                <button className="watch-video"><img src={triangle_play} className="polygon"/><span>Смотреть видео</span></button>
            </div>
        </div>
    </section>
    );
}

export default Section7;