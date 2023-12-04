import './css/Section5.css';
import phone5sec from './media/iPhone14Pro.png';
import triangle_play from './media/Polygon.svg';


function Section5(){
    return(
        <section className="world-inside">
        <div className="world-inside-block">
            <div className='world-phone-section'>
                <img src={phone5sec} alt="" className="world-inside-phone-img"/>
            </div>
            <div className='world-inside-section'>
                <div className="world-inside-text">
                    <h1 className="world-inside-header">Мир внутри тебя <br/>всего в одном клике</h1>
                    <p className="world-inside-content">Наше приложение – это идеальный спутник для тех, кто стремится к внутреннему спокойствию и балансу. С помощью простых, но эффективных медитаций, вы научитесь находить умиротворение в любой ситуации </p>
                </div>
                <div className="buttons-low-2">
                      <button className="try-btn">Попробовать бесплатно</button>
                      <button className="watch-video"><img alt="" src={triangle_play} className="polygon"/><span>Смотреть видео</span></button>
                </div>
            </div>
            <p className="world-inside-content-2">Наше приложение – это идеальный спутник для тех, кто стремится к внутреннему спокойствию и балансу. С помощью простых, но эффективных медитаций, вы научитесь находить умиротворение в любой ситуации </p>
        </div>
    </section>
    );
}

export default Section5;