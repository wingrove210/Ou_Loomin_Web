import React, {useState} from "react";
import '../css/Section8.css'
import plusImage from '../media/Union.png'

export const Accordion = ({faqList}) => {
    const [openId, setId] = useState(null);
    const clickHandler = (id) => {
         if(id === openId) setId(null)
         else setId(id)
    }
    return (
        <>
        <div className='accordion-header-section'>
            <h1 className="accordion-header">FAQ’s</h1>
        </div>
        <div className="accordion-block">
            {faqList.map((faqItem, id)=>{
                return (
                        <div className="accordion-item-section">
                            <div className="accordion-item" onClick={() => clickHandler(id)}>
                                <div className='accordion-text-block'>
                                    <div className='number-section'>
                                        <p className="number">0{id +1}</p>
                                    </div>
                                    <p className="accordion-text">{faqItem.q}</p>
                                    {/* <p className="item-answer">{faqItem.a}</p> */}
                                </div>
                                <div className='plus-sign-section'>
                                    <img src={plusImage} alt="" className="plus-sign"/>
                                </div>
                            </div>
                            <div className={`answer-item-block ${id === openId ? "open" : ""}`}>
                                <p>{faqItem.a}</p>
                            </div>
                        </div>
                );
            })}
        </div>
    </>
    )
}