import './css/Section6.css';
import activity6sec from './media/activity2.png';
import calendar6sec from './media/calendar2.png';
import phonemage6sec from './media/iPhone14Pro(2).png';


function Section6(){
    return(
        <section className="open-world">
        <div className='world-header-section'>
            <h1 className="open-world-header">Переоткрой свой внутренний мир с нами</h1>
        </div>
        <div className="open-images">
        <div className='flex-cards-top'>
            <img src={activity6sec} alt="" className="activity-lower"/>
            <div className="meditation-lower-block">
                <img src="" alt=""/>
                <h1>МЕДИТАЦИЯ</h1>
                <p>Путь к умиротворению
                    и гармонии</p>
                <img src="media/aliana.png" alt=""/>
                <p className="for-img">Алиана
                    Устененко</p>
            </div>
        </div>
        <div className='flex-middle-section'>
            <div className="astrologist">
                <h2>АСТРОЛОГ</h2>
                <p>Маргиратиа Симоньян</p>
                <img src="media/Rectangle28(2).png" alt=""/>
                <img src="media/arrow_forward.png" alt="" className="arrow-img"/>
            </div>
            <img src={calendar6sec} alt="" className="calendar-lower"/>
        </div>
        <div className='flex-bottom-section'>
            <div className="individual-training">
                <img src="media/Rectangle26.png" alt=""/>
                <h2>ИНДИВИДУАЛЬНЫЙ КУРС ПО ЙОГЕ</h2>
                <button>ЗАПИСАТЬСЯ</button>
            </div>
            <div className="layout-today">
                <h2 className="layout-header">РАСКЛАД НА СЕГОДНЯ</h2>
                <p className="layout-content">ЧТО СЕГОДНЯ РАССКАЖУТ КАРТЫ?</p>
                <img src="media/chevron.left.png" alt=""/>
            </div>
        </div>
        {/* <div className="phone-image-bottom">
             <img src={phonemage6sec} alt="" />
        </div> */}
        </div>
    </section>
    );
}

export default Section6;