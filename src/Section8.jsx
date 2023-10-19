import './css/Section8.css';
import plusImage from './media/Union.png';


function Section8(){
    return(
        <section className="accordion">
            <div className='accordion-header-section'>
                <h1 className="accordion-header">FAQ’s</h1>
            </div>
                <div className="accordion-block">
                    <div className="accordion-item">
                        <div className='accordion-text-block'>
                            <div className='number-section'>
                                <p className="number">01</p>
                            </div>
                            <p className="accordion-text">Что такое медитация?</p>
                        </div>
                        <div className='plus-sign-section'>
                            <img src={plusImage} alt="" className="plus-sign"/>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className='accordion-text-block'>
                            <div className='number-section'>
                                <p className="number">02</p>
                            </div>
                                <p className="accordion-text">Какие преимущества медитации?</p>
                        </div>
                        <div className='plus-sign-section'>
                            <img src={plusImage} alt="" className="plus-sign"/>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className='accordion-text-block'>
                            <div className='number-section'>
                                <p className="number">03</p>
                            </div>
                            <p className="accordion-text">Сколько времени рекомендуется уделять медитации для новичков?</p>
                        </div>
                        <div className='plus-sign-section'>
                            <img src={plusImage} alt="" className="plus-sign"/>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className='accordion-text-block'>
                            <div className='number-section'>
                                <p className="number">04</p>
                            </div>
                            <p className="accordion-text">Нужно ли иметь специальное оборудование или одежду для медитации?</p>
                        </div>
                        <div className='plus-sign-section'>
                            <img src={plusImage} alt="" className="plus-sign"/>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className='accordion-text-block'>
                            <div className='number-section'>
                                <p className="number">05</p>
                            </div>
                            <p className="accordion-text">Какие существуют техники медитации?</p>
                        </div>
                        <div className='plus-sign-section'>
                            <img src={plusImage} alt="" className="plus-sign"/>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Section8;