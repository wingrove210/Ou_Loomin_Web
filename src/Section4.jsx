import './css/Section4.css';
import personalization from './media/personal.png'
import tracker from './media/tracker.png'

function Section4(){
    return(
<section className="meditation-way">
        <div className="meditation-grid">
            <div className="way-item">
                <h1 className="way-header">Медитация — <br/> 
                    путь к ясности</h1>
            </div>
            <div className="way-content-block">
                <p className="way-content">Вы можете  проводить медитационные сессии в любом удобном месте и в любое удобное время, будь то дома, в офисе или даже в путешествии.</p>
            </div>
            <div className="way-phone-card">
                <img src={personalization} alt="" className="personal" />
            </div>
            <div className="way-calendar">
                <img src={tracker} alt="" className="tracker" />
            </div>
        </div>
    </section>
    );
}

export default Section4;