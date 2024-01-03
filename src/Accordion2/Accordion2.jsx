import React, {useState} from "react";
import './Accordion2.css'
import plusImage from '../media/Union.png'

export const Accordion2 = ({faqList}) => {
    const [openId, setId] = useState(null);
    const clickHandler = (id) => {
         if(id === openId) setId(null)
         else setId(id)
    }
    return (
        <>
        <div className='accordion-header-section-2'>
            <h1 className="accordion-header-2">FAQ’s</h1>
        </div>
        <div className="accordion-block-2">
            {faqList?.map((faqItem, id)=>{
                return (
                        <div className="accordion-item-section-2" id="faq">
                            <div className="accordion-item" onClick={() => clickHandler(id)}>
                                <div className='accordion-text-block-2'>
                                    <div className='number-section-2'>
                                        <p className="number-2">0{id +1}</p>
                                    </div>
                                    <p className="accordion-text-2">{faqItem.q}</p>
                                    {/* <p className="item-answer">{faqItem.a}</p> */}
                                </div>
                                <div className='plus-sign-section-2'>
                                    <img src={plusImage} alt="" className="plus-sign-2"/>
                                </div>
                            </div>
                            <div className={`answer-item-block-2 ${id === openId ? "open" : ""}`}>
                                <p>{faqItem.a}</p>
                            </div>
                        </div>
                );
            })}
        </div>
    </>
    )
}