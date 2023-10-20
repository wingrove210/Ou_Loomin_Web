import './css/Section9.css';
import android from './media/Android.png';
import apple from './media/Apple.svg';

function Section9(){
    return(
    <section className="lower-section">
        <div className='lower-block-section'>
            <div className="lower-block">
                <div className='lower-section-header'>
                    <h1>Мир внутри тебя — всего в одном клике</h1>
                </div>
                <div className='abzats-lower-section'>
                    <p>Наше приложения предлагает возможность соединяться с сообществом единомышленников, обмениваться опытом, участвовать в групповых медитациях или получать поддержку от экспертов в этой области.
                    </p>
                </div>
                <div className="lower-btn">
                    <button className="try-btn second-one">Попробовать бесплатно</button>
                    <button className="watch-video second-one">Наши социальные Сети</button>
                </div>
            </div>
            <footer>
                <div className="flex-footer-section">
                    <div className='flex-text-logo'>
                        <p class="logo-footer">OU LOOMIN</p>
                        <div className='under-logo-section'>
                            <p class="under-logo">Переоткрой свой внутренний мир с нами</p>
                        </div>
                    </div>
                </div>
                <div className='footer-lists'>
                    <div className="prices">
                        <p>Цены и предложения</p>
                        <ul>
                            <li>Тарифный План</li>
                            <li>Акции и предложения</li>
                            <li>Условия для партнеров </li>
                        </ul>
                    </div>
                    <div className="about-company">
                        <p>О Компании </p>
                        <ul>
                            <li>Наш блок</li>
                            <li>Вакансии</li>
                            <li>Новости</li>
                        </ul>
                    </div>
                    <div className="documents">
                        <p>Документы</p>
                        <ul>
                            <li>Лицензия</li>
                            <li>ООО</li>
                            <li>Контактные данные</li>
                        </ul>
                    </div>
                    <div className="buttons-lowest">
                        <p>Скачать приложение</p>
                        <ul>
                            <button className="android"><img src={android} alt=""/>ANDROID</button>
                            <button className="apple-os"><img src={apple} alt=""/>OSX</button>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
        <div className="under-footer">
                <p className="under-left">© 2024 OU GODS. Все права за нами и нам похуй.</p>
                <ul className="under-right">
                    <li>Условия использования</li>
                    <li>Политика Конфиденциальности</li>
                    <li>Cookies</li>
                </ul>
        </div>
    </section>
    );
}

export default Section9;