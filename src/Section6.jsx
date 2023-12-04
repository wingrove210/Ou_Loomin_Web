import './css/Section6.css';
import activity6sec from './media/activity2.png';
import calendar6sec from './media/calendar2.png';
import phonemage6sec from './media/iPhone14Pro(2).png';
import meditation from './media/meditation.png'
import astrologist from './media/astrologist-image.png'
import yoga from './media/Yoga.png'
import layout from './media/layout.png'
import activity2 from './media/activitysec6.png'

function Section6(){
    return(
        <section className="open-world">
        <div className='world-header-section'>
            <h1 className="open-world-header">Приоткрой свой внутренний мир с нами</h1>
        </div>
        <div className="open-images">
        <div className='flex-cards-top'>
            <img src={activity6sec} alt="" className="activity-lower"/>
            <div className="meditation-lower-block">
                <img src={meditation} alt="" className="meditation-image" />
            </div>
        </div>
        <div className='flex-middle-section'>
            <div className="astrologist">
                <img src={astrologist} alt="" className="astrologist-image" />
            </div>
            <img src={calendar6sec} alt="" className="calendar-lower"/>
        </div>
        <div className='flex-bottom-section'>
            <div className="individual-training">
                <img src={yoga} alt="" className="yoga-image" />
            </div>
            <div className="phone-image-bottom">
                <img src={phonemage6sec} alt="" />
            </div>
            <div className="layout-today">
                <img src={layout} alt="" className="layout-image" />
                <img src={activity2} alt="" className="activity-lower-2"/>
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