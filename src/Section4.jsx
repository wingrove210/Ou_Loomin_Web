import './css/Section4.css';
import Phone4Section from './media/iphone.png';
import activity4sec from './media/image 3 (1).png';
import calendar4sec from './media/calendar2.png';

function Section4(){
    return(
<section className="meditation-way">
        <div className="meditation-grid">
            <div className="way-item">
                <h1 className="way-header">Медитация: 
                    путь к ясности.</h1>
            </div>
            <div className="way-content-block">
                <p className="way-content">Вы можете  проводить медитационные сессии в любом удобном месте и в любое удобное время, будь то дома, в офисе или даже в путешествии.</p>
            </div>
            <div className="way-phone-card">
                <div className="phone-card-block">
                    <img src={Phone4Section} alt="" className="iphone-image"/>
                    <div className="way-phone-card-text">
                        <div className='phone-card-header-sec'>
                            <h2 className="phone-card-header">Персонализация 
                                и доступность в 
                                любое время</h2>
                        </div>
                        <p className="phone-card-way-content">Приложение по медитациям часто предоставляет индивидуальные рекомендации и настройки, основанные на предпочтениях пользователя, его уровне опыта и текущем настроении, что позволяет каждому находить наиболее подходящие медитационные практики.</p>
                    </div>
                </div>
            </div>
            <div className="way-calendar">
                <div className="calender-card-text">
                    <h1 className="calender-card-header">Трекер
                        прогресса</h1>
                    <p className="calender-card-abzats">Наше приложений по медитации предоставляет возможность отслеживать личный прогресс, количество проведенных медитаций, их продолжительность и даже изменения в настроении или уровне стресса.</p>
                </div>
                <div className="calendar-acrivity">
                <img src={calendar4sec} alt="" className="calendar-img"/>
                    <img src={activity4sec} alt="" className="acrivity-img"/>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Section4;