import './css/ThirdSection.css';
import Aliana from "./media/Frame260.png";
import Iphone3Section from './media/Vmake-1700159435.jpg';

function ThirdSection(){
    return(
        <section className="third-section" id="about">
        <div className='card-header-section'>
            <h1 className="card-header">Дыши. Медитируй. ...Повторяй</h1>
        </div>
        <div className="card-block">
            <div className="card-3">
                <div className='card-3-text'>
                    <h2 className="ion-girl-header">СООБЩЕСТВО ЕДИНОМЫШЛЕННИКОВ</h2>
                    <p className="ion-girl-content">Общайтесь с другими пользователями, делитесь своим опытом, задавайте вопросы экспертам и получайте поддержку в вашем стремлении к внутреннему спокойствию и осознанности.</p>
                </div>
            </div>
            <div className="card-1">
                <div className='photo-rounded-block'>
                        <img src={Aliana} alt="" className="photo-rounded"/>
                </div>
                <p className="person-name">АЛИАНА УСТЕНЕНКО</p>
                <p className="basic">BASIC</p>
                <p className="card-content">Наше приложение предлагает индивидуальные рекомендации и подбирает медитации, основываясь на вашем текущем настроении, опыте и предпочтениях.</p>
            </div>
            <div className="card-2">
                <p className="phone-card-content">Качественные аудиозаписи, визуальные медитации и даже виртуальная реальность</p>
                <div className='photo-rounded-block'>
                    <img src={Iphone3Section} alt="" className="small-phone-image"/>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ThirdSection;