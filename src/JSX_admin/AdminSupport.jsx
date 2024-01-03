import '../css_admin/AdminSupport.css';
import AdminLeft from './AdminLeft';
import Header from '../Header';
import AdminTop from './AdminTop';
import AdminRight from './AdminRight';
import Insta_photo from '../media_admin/instagram 1.png';
import VK_photo from '../media_admin/vk 1.png';
import Google_photo from '../media_admin/3d icon google 1.png';
import Telega_photo from '../media_admin/3d icon telegram 3.png';
import arrow_right from '../media_admin/arrow-right.png'
import React, {useState} from "react";
import { Accordion2 } from '../Accordion2/Accordion2';
import Section9 from '../Section9';


const faqList = [
  {
      q: "Что такое медитация?",
      a: "Медитация — это практика ума, направленная на осознанность, покой и улучшение психического благополучия. Включает различные методы фокусировки внимания или релаксации для достижения внутреннего спокойствия."
  },
  {
      q: "Какие преимущества медитации?",
      a: "Медитация может приносить различные психологические и физиологические преимущества. К ним относятся снижение стресса, улучшение концентрации, повышение чувства благополучия, снижение анксиозности и улучшение качества сна. Также она может способствовать повышению осознанности и эмоциональной стабильности."
  },
  {
      q: "Сколько времени рекомендуется уделять медитации для новичков?",
      a: "Для новичков рекомендуется начинать с коротких сессий, например, от 5 до 10 минут в день. Постепенно увеличивайте время, по мере того как ваш опыт и комфорт в медитации будут расти. Важнее регулярность, поэтому лучше проводить короткие сессии регулярно, чем длинные изредка."
  },
  {
      q: "Нужно ли иметь специальное оборудование или одежду для медитации?",
      a: "Для медитации вам не требуется специальное оборудование. Однако комфортная и свободная одежда может помочь в создании удобной обстановки. Вы можете сидеть на стуле, на подушке или даже на полу, в зависимости от вашего предпочтения. Главное — найти тихое место, где вас не будут беспокоить."
  },
  {
      q: "Какие существуют техники медитации?",
      a: "Существует разнообразие техник медитации, включая анапанасати (фокус на дыхании), випассана (осознанность), метта (милосердие), трансцендентальная медитация (использование мантры), зен-медитация (фокус на дыхании или загадочных вопросах), йога-нидра (глубокая релаксация с осознанностью). Выбор зависит от предпочтений и целей практикующего."
  },
]
function  AdminSupport() {
  return (
  <section className="admin-edit">
      <Header />
      <div className='elements'>
              <AdminLeft />
              <AdminTop />
              <div className='support-section-right-block'>
                  <AdminRight />
              </div>
      </div>
      <div className="support-section">
          <div className="main-edit-support">
               <div className="support-block">
                  <h2>ТЕХ ПОДДЕРЖКА</h2>
                  <p>СООБЩИТЕ О ПРОБЛЕМЕ В НАШУ СЛУЖБУ ПОДДЕРЖКИ :</p>
                  <ul className="support-grid">
                   <li>
                      <div className='imges-support'>
                            <img src={arrow_right} alt="" />
                            <img src={Google_photo} alt="" className='google-photo' />
                      </div>
                   <a href="">ОТПРАВИТЬ ПО ПОЧТЕ</a>
                   </li>
                   <li>
                        <div className='imges-support'>
                              <img src={arrow_right} alt="" />
                              <img src={Insta_photo} alt="" className='google-photo'/>
                        </div>
                        <a href="">НАПИСАТЬ В inst</a>
                    </li>
                   <li>
                   <div className='imges-support'>
                            <img src={arrow_right} alt="" />
                            <img src={Telega_photo} alt="" className='google-photo'/>
                      </div>
                    <a href="">НАПИСАТЬ В TELEGRAM</a>
                    </li>
                   <li>
                   <div className='imges-support'>
                            <img src={arrow_right} alt="" />
                            <img src={VK_photo} alt="" className='google-photo'/>
                      </div>
                    <a href="">НАПИСАТЬ В VK</a>
                    </li>
                </ul>
               </div>
               <Accordion2 faqList = {faqList} />
          </div>
      </div>
        <div className='footer-section-support'>
                <Section9 />
        </div>
  </section>
  )
}

export default AdminSupport;